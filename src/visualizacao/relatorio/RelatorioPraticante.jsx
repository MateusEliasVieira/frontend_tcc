import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
  CImage,
  CRow
} from "@coreui/react";
import './RelatorioPraticante.css'
import DadosPessoaisRelatorio from "./fichaCadastroAdmissional/DadosPessoaisRelatorio";
import React, {useEffect, useRef, useState} from "react";
import {useReactToPrint} from "react-to-print";
import EducacaoRelatorio from "./fichaCadastroAdmissional/EducacaoRelatorio";
import ResponsavelPeloPraticanteRelatorio from "./fichaCadastroAdmissional/ResponsavelPeloPraticanteRelatorio";
import {OutrasAtividadesRelatorio} from "./fichaCadastroAdmissional/OutrasAtividadesRelatorio";
import EmergenciaRelatorio from "./fichaCadastroAdmissional/EmergenciaRelatorio";
import SobreACriancaRelatorio from "./avaliacaoPsicologica/SobreACriancaRelatorio";
import SaudeRelatorio from "./avaliacaoPsicologica/SaudeRelatorio";
import RotinaRelatorio from "./avaliacaoPsicologica/RotinaRelatorio";
import {CuidadosPessoaisRelatorio} from "./avaliacaoPsicologica/CuidadosPessoaisRelatorio";
import ImagemPDF from "../../assets/icones/pdf.png"
import {TracoDePersonalidadeRelatorio} from "./avaliacaoPsicologica/TracoDePersonalidadeRelatorio";
import {LinguagemRelatorio} from "./avaliacaoPsicologica/LinguagemRelatorio";
import Campo from "../../components/campos/Campo";
import {CompreensaoRelatorio} from "./avaliacaoPsicologica/CompreensaoRelatorio";
import {SaudeMentalRelatorio} from "./avaliacaoPsicologica/SaudeMentalRelatorio";
import {SocializacaoRelatorio} from "./avaliacaoPsicologica/SocializacaoRelatorio";
import {ComportamentoRelatorio} from "./avaliacaoPsicologica/ComportamentoRelatorio";
import {HabilidadesSociaisRelatorio} from "./avaliacaoPsicologica/HabilidadesSociaisRelatorio";
import {AfetividadeRelatorio} from "./avaliacaoPsicologica/AfetividadeRelatorio";
import {RelacaoDaFamiliaComOExaminadoRelatorio} from "./avaliacaoPsicologica/RelacaoDaFamiliaComOExaminadoRelatorio";
import AvaliacaoPsicologicaRelatorio from "./avaliacaoPsicologica/AvaliacaoPsicologicaRelatorio";
import AvaliacaoFisioterapeuticaRelatorio from "./AvaliacaoFisioterapeutica/AvaliacaoFisioterapeuticaRelatorio";
import SaudeGeralDoPraticanteRelatorio from "./AvaliacaoFisioterapeutica/SaudeGeralDoPraticanteRelatorio";
import FormaDeComunicacaoRelatorio from "./AvaliacaoFisioterapeutica/FormaDeComunicacaoRelatorio";
import QuadroAtualRelatorio from "./AvaliacaoFisioterapeutica/QuadroAtualRelatorio";
import {apresentarModalDeCarregamento, esconderModal} from "../../utilidades/ManipuladorDeModal";
import ModalDeCarregamento from "../../components/modal/ModalDeCarregamento";
import MobilidadeArticularRelatorio from "./AvaliacaoFisioterapeutica/MobilidadeArticularRelatorio";
import GruposMuscularesRelatorio from "./AvaliacaoFisioterapeutica/GruposMuscularesRelatorio";
import EquilibrioEstaticoRelatorio from "./AvaliacaoFisioterapeutica/EquilibrioEstaticoRelatorio";
import EquilibrioDinamicoRelatorio from "./AvaliacaoFisioterapeutica/EquilibrioDinamicoRelatorio";
import HabilidadesMotorasAVDRelatorio from "./AvaliacaoFisioterapeutica/HabilidadesMotorasAVDRelatorio";
import CoordenacaoMotoraRelatorio from "./AvaliacaoFisioterapeutica/CoordenacaoMotoraRelatorio";
import EmPERelatorio from "./AvaliacaoFisioterapeutica/EmPeRelatorio";
import PlanoTerapeuticoSingularRelatorio from "./planoTerapeuticoSingular/PlanoTerapeuticoSingularRelatorio";
import axios from "axios";
import {
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_CPF_GET
} from "../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";

const RelatorioPraticante = () => {
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState(false);

  const [cpf, setCpf] = useState('')
  const [idPraticante, setIdPraticante] = useState('')
  const [espacar, setEspacar] = useState(false)

  const conteudoDocumento = useRef()
  const manipuladorDeImpressao = useReactToPrint({
    content: () => conteudoDocumento.current
  })

  const pesquisar = () => {
    const login = JSON.parse(localStorage.getItem('login'));
    if (login) {
      axios.get(BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_CPF_GET, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
        params: {
          cpf: cpf
        }
      })
        .then((resposta) => {
          setIdPraticante(resposta.data.praticante.idPraticante)
        })
        .catch((erro) => {
          alert(erro.response.data.titulo)
        })
    }
  }

  useEffect(() => {
    setEspacar(false)
  }, []);

  return (
    <CContainer>
      <ModalDeCarregamento
        dsp={displayModal}
        titulo={tituloModal}
        conteudo={conteudoModal}
        setConteudoModal={setConteudoModal}
        setEspacar={setEspacar}
        manipuladorDeImpressao={manipuladorDeImpressao}
        esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
      />
      <CCard>
        <CCardHeader>
          <strong>Pesquisa</strong>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <Campo
              tipo="text"
              setar={(e) => {
                setCpf(e.target.value)
              }}
              descricao="Pesquise por cpf"
            />
          </CRow>
          <CRow>
            <CButton color="dark" style={{width: "100px", marginLeft: "10px"}} onClick={(e) => {
              setIdPraticante("")
              pesquisar()
            }}>Pesquisar</CButton>
          </CRow>
        </CCardBody>
      </CCard>

      {idPraticante !== "" ?

      <CContainer style={{
        width: 'idPraticante00%',
        height: 'idPraticante00%',
        padding: '20px',
        boxShadow: '4px 4px idPraticante0px 0px rgba(0, 0, 0, 0.3)',
        backgroundColor: 'white',
        margin: '20px auto'
      }}>

        <CCardHeader>
          <CImage id="button-pdf" color="" onClick={
            () => {
              setEspacar(true);
              setConteudoModal(true);
              apresentarModalDeCarregamento("Carregando...", true, setDisplayModal, setTituloModal, setConteudoModal);
            }} src={ImagemPDF}
                  style={{width: "50px", height: "55px"}} title="Gerar documento PDF"/>
        </CCardHeader>

        <CContainer ref={conteudoDocumento}>

          <strong className="titulos-relatorio-praticante">Ficha Cadastral - Admissional CE</strong>
          <DadosPessoaisRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <EducacaoRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <ResponsavelPeloPraticanteRelatorio idUsuario={idPraticante}/>{espacar ? <><br/><br/><br/><br/><br/><br/></> :
          <br/>}
          <OutrasAtividadesRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <EmergenciaRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <strong className="titulos-relatorio-praticante">Avaliação dos Aspectos Psicológicos</strong>
          <SobreACriancaRelatorio idUsuario={idPraticante}/>{espacar ? <><br/><br/><br/><br/></> : <br/>}
          <SaudeRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <RotinaRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <CuidadosPessoaisRelatorio idUsuario={idPraticante}/>{espacar ? <>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/></> :
          <br/>}
          <TracoDePersonalidadeRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <LinguagemRelatorio idUsuario={idPraticante}/>{espacar ? <><br/><br/><br/></> : <br/>}
          <CompreensaoRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <SaudeMentalRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <SocializacaoRelatorio idUsuario={idPraticante}/>{espacar ? <><br/><br/><br/><br/><br/></> : <br/>}
          <ComportamentoRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <HabilidadesSociaisRelatorio idUsuario={idPraticante}/>{espacar ? <>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></> : <br/>}
          <AfetividadeRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <RelacaoDaFamiliaComOExaminadoRelatorio idUsuario={idPraticante}/>{espacar ? <>
          <br/><br/><br/><br/><br/><br/><br/><br/></> : <br/>}
          <AvaliacaoPsicologicaRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <strong className="titulos-relatorio-praticante">Avaliação Fisioterapêutica</strong>
          <AvaliacaoFisioterapeuticaRelatorio idUsuario={idPraticante}/>{espacar ? <>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/></> : <br/>}
          <SaudeGeralDoPraticanteRelatorio idUsuario={idPraticante}/>{espacar ? <><br/></> : <br/>}
          <FormaDeComunicacaoRelatorio idUsuario={idPraticante}/>{espacar ? <><br/><br/><br/><br/><br/><br/></> :
          <br/>}
          <QuadroAtualRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <MobilidadeArticularRelatorio idUsuario={idPraticante}/>{espacar ? <><br/><br/><br/><br/><br/></> : <br/>}
          <GruposMuscularesRelatorio idUsuario={idPraticante}/>{espacar ? <>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></> :
          <br/>}
          <EquilibrioEstaticoRelatorio idUsuario={idPraticante}/>{espacar ? <>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></> : <br/>}
          <EquilibrioDinamicoRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <HabilidadesMotorasAVDRelatorio idUsuario={idPraticante}/>{espacar ? <><br/><br/><br/></> : <br/>}
          <CoordenacaoMotoraRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
          <EmPERelatorio idUsuario={idPraticante}/>{espacar ? <><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></> :
          <br/>}
          <strong className="titulos-relatorio-praticante">Plano Terapêutico Singular - PTS</strong>{espacar ? <br/> : <br/>}
          <PlanoTerapeuticoSingularRelatorio idUsuario={idPraticante}/>{espacar ? <br/> : <br/>}
        </CContainer>
      </CContainer>
        : <></>}
    </CContainer>
  )
}

export default RelatorioPraticante;
