import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CCardHeader, CRow, CButton} from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import Campo from "../../components/campos/Campo";
import {simOuNao} from "../../constantes/Constantes";
import {SALVAR_EVOLUCAO_DO_PRATICANTE_POST} from "../../endpoints/praticante/evolucao/Endpoint";
import axios, {HttpStatusCode} from "axios";

const Evolucao = () => {

  const login = JSON.parse(localStorage.getItem('login'));
  const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");

  const [dados, setDados] = useState({
    data: '',
    observacao: '',
    estavaPresente: '',
    praticante: {
      idPraticante: ''
    }
  })

  useEffect(() => {
    setDados(prevDados => ({
      ...prevDados,
      praticante: {
        ...prevDados.praticante,
        idPraticante: idPraticanteSalvo // substitua 'novoValor' pelo valor desejado
      }
    }));

  }, []);

  return (
    <CCard>
      <CCardHeader>
        <strong>Evoluir Praticante</strong>
      </CCardHeader>
      <CCardBody>
        <Campo
          legenda="Presente?"
          id="presente"
          tipo="select"
          opcoes={simOuNao}
          valor={dados.estavaPresente}
          setar={(e) => setDados({...dados, estavaPresente: e.target.value})}
        />
        <Campo
          id="dataEvolucao"
          legenda="Data"
          tipo="date"
          valor={dados.data}
          setar={(e) => {
            setDados({...dados, data: e.target.value})
          }}
        />
        <Campo
          legenda="Observações"
          id="observacoes"
          tipo="textarea"
          valor={dados.observacao}
          setar={(e) => setDados({...dados, observacao: e.target.value})}
        />
        <CButton onClick={() => {
          if (dados.praticante.idPraticante) {
            axios.post(SALVAR_EVOLUCAO_DO_PRATICANTE_POST,
              JSON.stringify({...dados}),
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${login.token}`
                },
              })
              .then((response) => {
                if (response.status === HttpStatusCode.Created) {
                  alert("Praticante evoluido com sucesso!")
                } else {
                  alert("Erro ao evoluir praticante!")
                }
              })
              .catch(() => {
                alert("Erro ao evoluir praticante!")
              })
          } else {
            alert("Erro ao evoluir praticante!")
          }
        }}>Evoluir</CButton>
      </CCardBody>
    </CCard>
  )
}

export default Evolucao;
