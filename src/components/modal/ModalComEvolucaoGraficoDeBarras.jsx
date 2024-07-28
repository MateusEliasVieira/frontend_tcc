import React, {useRef, useState} from "react";
import {CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CRow} from "@coreui/react";
import {CChartBar} from "@coreui/react-chartjs";
import {useReactToPrint} from "react-to-print";
import axios, {HttpStatusCode} from "axios";
import {BUSCAR_EVOLUCAO_DO_PRATICANTE_POR_INTERVALO_DE_DATAS_POST} from "../../endpoints/praticante/evolucao/Endpoint";
import Campo from "../campos/Campo";

const ModalComEvolucaoGraficoDeBarras = (props) => {

  const login = JSON.parse(localStorage.getItem('login'));

  const [formularioDados, setFormularioDados] = useState({
    dataInicial: '',
    dataFinal: '',
    praticante: {
      idPraticante: props.idPraticante
    }
  })

  const [dadosFrequencia, setDadosFrequencia] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [dadosFaltas, setDadosFaltas] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [meses, setMeses] = useState(null)

  const conteudoDocumento = useRef();
  const manipuladorDeImpressao = useReactToPrint({
    content: () => conteudoDocumento.current,
  });

  const buscar = () => {
    axios.post(BUSCAR_EVOLUCAO_DO_PRATICANTE_POR_INTERVALO_DE_DATAS_POST,
      JSON.stringify({...formularioDados}),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        }
      })
      .then((response) => {
        if (response.status === HttpStatusCode.Ok) {
          console.log(response.data)
          setDadosFrequencia(response.data.frequencia)
          setDadosFaltas(response.data.faltas)
          setMeses(response.data.meses)
        }
      })
      .catch((erro) => {
        alert(erro.response.data.titulo)
      })
  }

  return (
    <div>
      <div>
        <button
          title={`Gerar gráfico de barras para ${props.nomeCompleto}`}
          type="button"
          style={{border: "none", background: "none"}}
          data-toggle="modal"
          data-target={`#modalBar-${props.nomeCompleto}`} // ID único para cada praticante
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-bar-chart-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
          </svg>
        </button>
      </div>

      <div
        className="modal fade"
        id={`modalBar-${props.nomeCompleto}`} // ID único para a modal
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <CCard ref={conteudoDocumento}>
              <CCardHeader>Evolução / {props.nomeCompleto}</CCardHeader>
              <CCardBody>
                <CChartBar
                  data={{
                    labels: meses,
                    datasets: [
                      {
                        label: "Frequência",
                        backgroundColor: "#0ecf8f",
                        data: dadosFrequencia,
                      },
                      {
                        label: "Falta",
                        backgroundColor: "#f87979",
                        data: dadosFaltas,
                      },
                    ],
                  }}
                />
              </CCardBody>
            </CCard>
            <CContainer style={{padding: "10px"}}>
              <CRow className="justify-content-center align-items-center" style={{minHeight: "100vh"}}>
                <CCol
                  xs="auto"
                  className="d-flex justify-content-center align-items-center"
                  style={{gap: "10px"}} // Espaço entre os elementos
                >
                  <Campo
                    id="dataInicial"
                    legenda="Data inicial"
                    tipo="date"
                    setar={(e) => {
                      setFormularioDados({
                        ...formularioDados,
                        dataInicial: e.target.value,
                      });
                    }}
                  />
                  <Campo
                    id="dataFinal"
                    legenda="Data final"
                    tipo="date"
                    setar={(e) => {
                      setFormularioDados({
                        ...formularioDados,
                        dataFinal: e.target.value,
                      });
                    }}
                  />
                  <CButton
                    color="danger"
                    title="Realizar consulta"
                    style={{color: "white", marginTop:"15px", width: "100px"}}
                    onClick={() => {
                      buscar();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                  </CButton>
                  <CButton
                    color="danger"
                    title="Download do gráfico"
                    style={{color: "white", marginTop:"15px", width: "100px"}}
                    onClick={() => {
                      manipuladorDeImpressao();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-download"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                      <path
                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                    </svg>
                  </CButton>
                </CCol>
              </CRow>
            </CContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComEvolucaoGraficoDeBarras;
