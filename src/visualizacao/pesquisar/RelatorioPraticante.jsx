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
import DadosPessoaisRelatorio from "../relatorio/fichaCadastroAdmissional/DadosPessoaisRelatorio";
import React, {useEffect, useRef, useState} from "react";
import {useReactToPrint} from "react-to-print";
import EducacaoRelatorio from "../relatorio/fichaCadastroAdmissional/EducacaoRelatorio";
import ResponsavelPeloPraticanteRelatorio from "../relatorio/fichaCadastroAdmissional/ResponsavelPeloPraticanteRelatorio";
import {OutrasAtividadesRelatorio} from "../relatorio/fichaCadastroAdmissional/OutrasAtividadesRelatorio";
import EmergenciaRelatorio from "../relatorio/fichaCadastroAdmissional/EmergenciaRelatorio";
import SobreACriancaRelatorio from "../relatorio/avaliacaoPsicologica/SobreACriancaRelatorio";
import SaudeRelatorio from "../relatorio/avaliacaoPsicologica/SaudeRelatorio";
import RotinaRelatorio from "../relatorio/avaliacaoPsicologica/RotinaRelatorio";
import {CuidadosPessoaisRelatorio} from "../relatorio/avaliacaoPsicologica/CuidadosPessoaisRelatorio";
import ImagemPDF from "../../assets/icones/pdf.png"
import {TracoDePersonalidadeRelatorio} from "../relatorio/avaliacaoPsicologica/TracoDePersonalidadeRelatorio";
import {LinguagemRelatorio} from "../relatorio/avaliacaoPsicologica/LinguagemRelatorio";
import Campo from "../../components/campos/Campo";
import {CompreensaoRelatorio} from "../relatorio/avaliacaoPsicologica/CompreensaoRelatorio";
import {SaudeMentalRelatorio} from "../relatorio/avaliacaoPsicologica/SaudeMentalRelatorio";
import {SocializacaoRelatorio} from "../relatorio/avaliacaoPsicologica/SocializacaoRelatorio";
import {ComportamentoRelatorio} from "../relatorio/avaliacaoPsicologica/ComportamentoRelatorio";
import {HabilidadesSociaisRelatorio} from "../relatorio/avaliacaoPsicologica/HabilidadesSociaisRelatorio";
import {AfetividadeRelatorio} from "../relatorio/avaliacaoPsicologica/AfetividadeRelatorio";
import {RelacaoDaFamiliaComOExaminadoRelatorio} from "../relatorio/avaliacaoPsicologica/RelacaoDaFamiliaComOExaminadoRelatorio";
import AvaliacaoPsicologicaRelatorio from "../relatorio/avaliacaoPsicologica/AvaliacaoPsicologicaRelatorio";
import AvaliacaoFisioterapeuticaRelatorio from "../relatorio/AvaliacaoFisioterapeutica/AvaliacaoFisioterapeuticaRelatorio";
import SaudeGeralDoPraticanteRelatorio from "../relatorio/AvaliacaoFisioterapeutica/SaudeGeralDoPraticanteRelatorio";
import FormaDeComunicacaoRelatorio from "../relatorio/AvaliacaoFisioterapeutica/FormaDeComunicacaoRelatorio";
import QuadroAtualRelatorio from "../relatorio/AvaliacaoFisioterapeutica/QuadroAtualRelatorio";
import {apresentarModalDeCarregamento, esconderModal} from "../../utilidades/ManipuladorDeModal";
import ModalDeCarregamento from "../../components/modal/ModalDeCarregamento";
import MobilidadeArticularRelatorio from "../relatorio/AvaliacaoFisioterapeutica/MobilidadeArticularRelatorio";
import GruposMuscularesRelatorio from "../relatorio/AvaliacaoFisioterapeutica/GruposMuscularesRelatorio";
import EquilibrioEstaticoRelatorio from "../relatorio/AvaliacaoFisioterapeutica/EquilibrioEstaticoRelatorio";
import EquilibrioDinamicoRelatorio from "../relatorio/AvaliacaoFisioterapeutica/EquilibrioDinamicoRelatorio";
import HabilidadesMotorasAVDRelatorio from "../relatorio/AvaliacaoFisioterapeutica/HabilidadesMotorasAVDRelatorio";
import CoordenacaoMotoraRelatorio from "../relatorio/AvaliacaoFisioterapeutica/CoordenacaoMotoraRelatorio";
import EmPERelatorio from "../relatorio/AvaliacaoFisioterapeutica/EmPeRelatorio";
import PlanoTerapeuticoSingularRelatorio from "../relatorio/planoTerapeuticoSingular/PlanoTerapeuticoSingularRelatorio";
import axios from "axios";
import {
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_CPF_GET, BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET
} from "../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import {number} from "prop-types";

const RelatorioPraticante = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState(false);

  const [idPraticante, setIdPraticante] = useState('')
  const [espacar, setEspacar] = useState(false)

  const conteudoDocumento = useRef()
  const manipuladorDeImpressao = useReactToPrint({
    content: () => conteudoDocumento.current
  })

  useEffect(() => {
    setEspacar(false)
    var id = window.location.href.split("?id=")[1]
    if (id) {
      setIdPraticante(id)
    }else{
      window.location.href="/#/formulario/pesquisar-praticante"
    }
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
        esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}/>
      {idPraticante !== "" ?
        <CContainer style={{
          width: '100%',
          height: '100%',
          padding: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          backgroundColor: 'white',
          margin: '20px auto'
        }}>
          <CCardHeader>
            <CImage id="button-pdf" color="" onClick={
              () => {
                setEspacar(false);
                setConteudoModal(true);
                apresentarModalDeCarregamento("Carregando...", true, setDisplayModal, setTituloModal, setConteudoModal);
              }} src={ImagemPDF}
                    style={{width: "50px", height: "55px"}} title="Gerar documento PDF"/>
          </CCardHeader>
          <CContainer ref={conteudoDocumento}>
            <strong className="titulos-relatorio-praticante">Ficha Cadastral - Admissional CE</strong>
            <DadosPessoaisRelatorio idUsuario={idPraticante}/><br/>
            <EducacaoRelatorio idUsuario={idPraticante}/><br/>
            <ResponsavelPeloPraticanteRelatorio idUsuario={idPraticante}/><br/>
            <OutrasAtividadesRelatorio idUsuario={idPraticante}/><br/>
            <EmergenciaRelatorio idUsuario={idPraticante}/><br/>
            <strong className="titulos-relatorio-praticante">Avaliação dos Aspectos Psicológicos</strong>
            <SobreACriancaRelatorio idUsuario={idPraticante}/><br/>
            <SaudeRelatorio idUsuario={idPraticante}/><br/>
            <RotinaRelatorio idUsuario={idPraticante}/><br/>
            <CuidadosPessoaisRelatorio idUsuario={idPraticante}/><br/>
            <TracoDePersonalidadeRelatorio idUsuario={idPraticante}/><br/>
            <LinguagemRelatorio idUsuario={idPraticante}/><br/>
            <CompreensaoRelatorio idUsuario={idPraticante}/><br/>
            <SaudeMentalRelatorio idUsuario={idPraticante}/><br/>
            <SocializacaoRelatorio idUsuario={idPraticante}/><br/>
            <ComportamentoRelatorio idUsuario={idPraticante}/><br/>
            <HabilidadesSociaisRelatorio idUsuario={idPraticante}/><br/>
            <AfetividadeRelatorio idUsuario={idPraticante}/><br/>
            <RelacaoDaFamiliaComOExaminadoRelatorio idUsuario={idPraticante}/><br/>
            <AvaliacaoPsicologicaRelatorio idUsuario={idPraticante}/><br/>
            <strong className="titulos-relatorio-praticante">Avaliação Fisioterapêutica</strong>
            <AvaliacaoFisioterapeuticaRelatorio idUsuario={idPraticante}/><br/>
            <SaudeGeralDoPraticanteRelatorio idUsuario={idPraticante}/><br/>
            <FormaDeComunicacaoRelatorio idUsuario={idPraticante}/><br/>
            <QuadroAtualRelatorio idUsuario={idPraticante}/><br/>
            <MobilidadeArticularRelatorio idUsuario={idPraticante}/><br/>
            <GruposMuscularesRelatorio idUsuario={idPraticante}/><br/>
            <EquilibrioEstaticoRelatorio idUsuario={idPraticante}/><br/>
            <EquilibrioDinamicoRelatorio idUsuario={idPraticante}/><br/>
            <HabilidadesMotorasAVDRelatorio idUsuario={idPraticante}/><br/>
            <CoordenacaoMotoraRelatorio idUsuario={idPraticante}/><br/>
            <EmPERelatorio idUsuario={idPraticante}/><br/>
            <strong className="titulos-relatorio-praticante">Plano Terapêutico Singular - PTS</strong>
            <PlanoTerapeuticoSingularRelatorio idUsuario={idPraticante}/><br/>
          </CContainer>
        </CContainer>
        : <></>}
    </CContainer>
  )
}

export default RelatorioPraticante;
