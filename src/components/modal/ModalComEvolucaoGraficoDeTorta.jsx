import React, {useRef, useState, useEffect} from "react";
import {CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CRow} from "@coreui/react";
import {CChartPie} from "@coreui/react-chartjs";
import {useReactToPrint} from "react-to-print";
import axios, {HttpStatusCode} from "axios";
import {BUSCAR_EVOLUCAO_DO_PRATICANTE_POR_INTERVALO_DE_DATAS_POST} from "../../endpoints/praticante/evolucao/Endpoint";
import Campo from "../campos/Campo";
import {formatarDataParaDiaMesAno} from "../../utilidades/ManipuladorDeDatas";

const ModalComEvolucaoGraficoDeLinhas = (props) => {
  const login = JSON.parse(localStorage.getItem('login'));

  const [formularioDados, setFormularioDados] = useState({
    dataInicial: '',
    dataFinal: '',
    praticante: {
      idPraticante: props.idPraticante
    }
  });

  const [dadosFrequencia, setDadosFrequencia] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [dadosFaltas, setDadosFaltas] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [meses, setMeses] = useState([]);
  const [somaFrequencia, setSomaFrequencia] = useState(0);
  const [somaFaltas, setSomaFaltas] = useState(0);

  const conteudoDocumento = useRef();
  const manipuladorDeImpressao = useReactToPrint({
    content: () => conteudoDocumento.current,
  });

  useEffect(() => {
    setSomaFrequencia(dadosFrequencia.reduce((acc, val) => acc + val, 0));
    setSomaFaltas(dadosFaltas.reduce((acc, val) => acc + val, 0));
  }, [dadosFrequencia, dadosFaltas]);

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
          console.log(response.data);
          setDadosFrequencia(response.data.frequencia);
          setDadosFaltas(response.data.faltas);
          setMeses(response.data.meses);
        } else {
          console.log("Erro then = " + erro);
        }
      })
      .catch((erro) => {
        console.log("Erro = " + erro);
      });
  };

  return (
    <div>
      <div>
        <button
          title={`Gerar gráfico de torta para ${props.nomeCompleto}`}
          type="button"
          style={{border: "none", background: "none"}}
          data-toggle="modal"
          data-target={`#modalLine-${props.nomeCompleto}-torta`} // ID único para cada praticante
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pie-chart-fill" viewBox="0 0 16 16">
            <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015"/>
          </svg>
        </button>
      </div>

      <div
        className="modal fade"
        id={`modalLine-${props.nomeCompleto}-torta`} // ID único para a modal
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <CCard ref={conteudoDocumento}>
              <CCardHeader>Evolução: {props.nomeCompleto} - Período: De {formatarDataParaDiaMesAno(formularioDados.dataInicial)} à {formatarDataParaDiaMesAno(formularioDados.dataFinal)}</CCardHeader>
              <CCardBody>
                <CChartPie
                  data={{
                    labels: ['Frequência', 'Faltas'],
                    datasets: [
                      {
                        data: [somaFrequencia, somaFaltas],
                        backgroundColor: ['#0ecf8f', '#FF6384'],
                        hoverBackgroundColor: ['#0ecf8f', '#FF6384'],
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
                    style={{color: "white", marginTop: "15px", width: "100px"}}
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
                    style={{color: "white", marginTop: "15px", width: "100px"}}
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

export default ModalComEvolucaoGraficoDeLinhas;
