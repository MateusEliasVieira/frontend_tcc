import {CCard, CCardBody, CCardHeader} from "@coreui/react";
import React, {useEffect, useState} from "react";
import TabelaPraticante from "../../components/tabelas/TabelaPraticante";
import axios from "axios";

const Pesquisar = () =>{

  const [dados,setDados]=useState([])

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('login'));
    axios.get("http://localhost:8080/praticante/dados-pessoais/buscar-dados-pessoais-dos-praticantes",{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login.token}`
      },
    })
      .then((response)=>{
        setDados(response.data)
        console.log(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  }, []);

  return(
    <CCard>
      <CCardHeader>
        <strong>Pesquisar</strong>
      </CCardHeader>
      <CCardBody>
        <TabelaPraticante lista={dados}/>
      </CCardBody>
    </CCard>
  )
}

export default Pesquisar
