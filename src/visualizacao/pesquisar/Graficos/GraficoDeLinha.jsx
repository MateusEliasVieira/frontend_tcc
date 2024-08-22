import {CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CRow} from "@coreui/react";
import {formatarDataParaDiaMesAno} from "../../../utilidades/ManipuladorDeDatas";
import {CChartLine} from "@coreui/react-chartjs";
import Campo from "../../../components/campos/Campo";
import React, {useRef, useState} from "react";
import {useReactToPrint} from "react-to-print";
import axios, {HttpStatusCode} from "axios";
import {
  BUSCAR_EVOLUCAO_DO_PRATICANTE_POR_INTERVALO_DE_DATAS_POST
} from "../../../endpoints/praticante/evolucao/Endpoint";
import {apresentarModal, esconderModal} from "../../../utilidades/ManipuladorDeModal";
import Modal from "../../../components/modal/Modal";

const GraficoDeLinha = (props) => {

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

  const [displayModal, setDisplayModal] = useState("none")
  const [tituloModal, setTituloModal] = useState("")
  const [conteudoModal, setConteudoModal] = useState("")

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
          // Verificação com mais segurança
          if (Array.isArray(response.data.frequencia) && Array.isArray(response.data.faltas) && response.data.frequencia.length === 0 && response.data.faltas.length === 0) {
            apresentarModal("Aviso", `No momento não há nenhuma informação sobre a evolução do praticante no intervalo do período ${formatarDataParaDiaMesAno(formularioDados.dataInicial)} à ${formatarDataParaDiaMesAno(formularioDados.dataFinal)}!`, setDisplayModal, setTituloModal, setConteudoModal);
          } else {
            setDadosFrequencia(response.data.frequencia);
            setDadosFaltas(response.data.faltas);
            setMeses(response.data.meses);
          }
        }
      })
      .catch((erro) => {
        if(erro.response.data.titulo){
          apresentarModal("Aviso", erro.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
        }else{
          apresentarModal("Aviso", "Houve uma falha ao realizar a pesquisa no intervalo de datas especificados!", setDisplayModal, setTituloModal, setConteudoModal);
        }
      })
  };

  return (
    <div>
      <Modal
        dsp={displayModal}
        titulo={tituloModal}
        conteudo={<div dangerouslySetInnerHTML={{__html: conteudoModal}}/>}
        esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
      />
      <CCard ref={conteudoDocumento}>
        <CCardHeader>Período:
          De {formatarDataParaDiaMesAno(formularioDados.dataInicial)} à {formatarDataParaDiaMesAno(formularioDados.dataFinal)}</CCardHeader>
        <CCardBody style={{overflowX:"hidden"}}>
          <CChartLine
            data={{
              labels: meses,
              datasets: [
                {
                  label: "Frequência",
                  backgroundColor: "#0ecf8f",
                  borderColor: "#0ecf8f",
                  pointBackgroundColor: "#0ecf8f",
                  pointBorderColor: "#fff",
                  data: dadosFrequencia,
                },
                {
                  label: "Falta",
                  backgroundColor: "rgba(239,10,18,0.2)",
                  borderColor: "rgba(239,10,18,0.2)",
                  pointBackgroundColor: "rgba(239,10,18,0.2)",
                  pointBorderColor: "rgba(239,10,18,0.2)",
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
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default GraficoDeLinha
