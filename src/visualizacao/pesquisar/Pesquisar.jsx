import {CCard, CCardBody, CCardHeader} from "@coreui/react";
import React, {useEffect, useState} from "react";
import TabelaPraticante from "../../components/tabelas/TabelaPraticante";
import axios from "axios";
import Campo from "../../components/campos/Campo";
import {
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_NOME_GET
} from "../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";

const Pesquisar = () => {

  const [dados, setDados] = useState([])
  const [nome, setNome] = useState("")

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('login'));
    axios.get("http://localhost:8080/praticante/dados-pessoais/buscar-dados-pessoais-dos-praticantes", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login.token}`
      },
    })
      .then((response) => {
        setDados(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <CCard>
      <CCardHeader>
        <strong>Pesquisar</strong>
      </CCardHeader>
      <CCardBody>
        <Campo
          id="campoPesquisaNome"
          tipo="text"
          legenda="Pesquisa por nome"
          valor={nome}
          setar={(e)=>{
            setNome(e.target.value)
            const login = JSON.parse(localStorage.getItem('login'));
            axios.get(BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_NOME_GET,{
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${login.token}`
              },
              params:{
                nome:nome
              }
            })
              .then((response)=>{
                console.log(response.data)
                setDados(response.data)
              })
              .catch((erro)=>{
                console.log("Erro ao buscar praticante por nome!")
              })
          }}
        />
        <TabelaPraticante lista={dados}/>
      </CCardBody>
    </CCard>
  )
}

export default Pesquisar
