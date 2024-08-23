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
  const [meses, setMeses] = useState([]) // Iniciar com array vazio

  const [displayModal, setDisplayModal] = useState("none")
  const [tituloModal, setTituloModal] = useState("")
  const [conteudoModal, setConteudoModal] = useState("")

  const conteudoDocumento = useRef();
  const manipuladorDeImpressao = useReactToPrint({
    content: () => conteudoDocumento.current,
  });

  const ordenarDados = (frequencia, faltas, meses) => {
    const months = {
      "Jan": 0, "Fev": 1, "Mar": 2, "Abr": 3,
      "Maio": 4, "Jun": 5, "Jul": 6, "Ago": 7,
      "Set": 8, "Out": 9, "Nov": 10, "Dez": 11
    };

    const combined = meses.map((mes, index) => ({
      mes,
      frequencia: frequencia[index],
      faltas: faltas[index]
    }));

    const sortedCombined = combined.sort((a, b) => {
      const [monthA, yearA] = a.mes.split('/');
      const [monthB, yearB] = b.mes.split('/');

      return yearA - yearB || months[monthA] - months[monthB];
    });

    const sortedMeses = sortedCombined.map(item => item.mes);
    const sortedFrequencia = sortedCombined.map(item => item.frequencia);
    const sortedFaltas = sortedCombined.map(item => item.faltas);

    setMeses(sortedMeses);
    setDadosFrequencia(sortedFrequencia);
    setDadosFaltas(sortedFaltas);
  }

  const buscar = async () => {
    if (formularioDados.dataInicial !== '' && formularioDados.dataFinal !== '') {
      await axios.post(BUSCAR_EVOLUCAO_DO_PRATICANTE_POR_INTERVALO_DE_DATAS_POST,
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
              apresentarModal("Aviso", `No momento não há nenhuma informação sobre a evolução do praticante ${props.nomeCompleto} no intervalo do período ${formatarDataParaDiaMesAno(formularioDados.dataInicial)} à ${formatarDataParaDiaMesAno(formularioDados.dataFinal)}!`, setDisplayModal, setTituloModal, setConteudoModal);
            } else {
              const {frequencia, faltas, meses} = response.data;
              ordenarDados(frequencia, faltas, meses);
            }
          }
        })
        .catch((erro) => {
          if (erro.response.data.titulo) {
            apresentarModal("Aviso", erro.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
          } else {
            apresentarModal("Aviso", "Houve uma falha ao realizar a pesquisa no intervalo de datas especificados!", setDisplayModal, setTituloModal, setConteudoModal);
          }
        })
    } else {
      apresentarModal("Aviso", "Informe a data inicial e final para realizar a pesquisa de frequência do praticante!", setDisplayModal, setTituloModal, setConteudoModal);
    }
  }

  return (
    <div>
      <Modal
        dsp={displayModal}
        titulo={tituloModal}
        conteudo={<div dangerouslySetInnerHTML={{__html: conteudoModal}}/>}
        esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
      />
      <CCard ref={conteudoDocumento}>
        <CCardHeader>{

          formularioDados.dataInicial === '' || formularioDados.dataFinal === '' ? "Selecione o intervalo de tempo"

            :

          `Período: De ${formatarDataParaDiaMesAno(formularioDados.dataInicial)} à ${formatarDataParaDiaMesAno(formularioDados.dataFinal)}`

        }</CCardHeader>
        <CCardBody style={{overflowX: "hidden"}}>
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
