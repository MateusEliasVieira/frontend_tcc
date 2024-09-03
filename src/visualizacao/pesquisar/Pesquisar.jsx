import {CCard, CCardBody, CCardHeader} from "@coreui/react";
import React, {useEffect, useState} from "react";
import TabelaPraticante from "../../components/tabelas/TabelaPraticante";
import Campo from "../../components/campos/Campo";
import {
  buscarDadosPessoaisDosPraticantes,
  buscarPraticantePorNome,
  buscarQuantidadeTotalDePraticantes
} from "../../requisicoes/Praticante";

const Pesquisar = () => {

  const [total, setTotal] = useState(null)
  const [dados, setDados] = useState([])
  const [nome, setNome] = useState('')
  const [ativar, setAtivar] = useState(true)

  useEffect(() => {
    buscarDadosPessoaisDosPraticantes(setDados, setAtivar)
  }, []);

  useEffect(() => {
    buscarPraticantePorNome(nome, setDados, setAtivar)
  }, [nome])

  useEffect(() => {
    buscarQuantidadeTotalDePraticantes(setTotal)
  }, [])

  return (
    <CCard style={{overflowX: 'auto'}}>
      <CCardHeader>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <strong>Pesquisar</strong>
          <div>
            <p style={{marginTop:'20px'}}>Praticantes: <strong>{total}</strong></p>
          </div>
        </div>
      </CCardHeader>

      <CCardBody>

        <Campo
          id="campoPesquisaNome"
          tipo="text"
          legenda="Pesquisa por nome"
          valor={nome}
          setar={(e) => {
            setNome(e.target.value);
          }}
        />
        {
          ativar ?

            <div className="spinner-border" role="status" style={{margin: '50px auto', display: 'block'}}>
              <strong className="sr-only">Loading...</strong>
            </div>

            :

             <TabelaPraticante lista={dados}/>

        }
      </CCardBody>

    </CCard>
  )
}

export default Pesquisar
