import {
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
  CImage,
  CRow
} from "@coreui/react";
import './RelatorioPraticante.css'
import DadosPessoaisRelatorio from "./fichaCadastroAdmissional/DadosPessoaisRelatorio";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import EducacaoRelatorio from "./fichaCadastroAdmissional/EducacaoRelatorio";
import ResponsavelPeloPraticanteRelatorio from "./fichaCadastroAdmissional/ResponsavelPeloPraticanteRelatorio";
import { OutrasAtividadesRelatorio } from "./fichaCadastroAdmissional/OutrasAtividadesRelatorio";
import EmergenciaRelatorio from "./fichaCadastroAdmissional/EmergenciaRelatorio";
import SobreACriancaRelatorio from "./avaliacaoPsicologica/SobreACriancaRelatorio";
import SaudeRelatorio from "./avaliacaoPsicologica/SaudeRelatorio";
import RotinaRelatorio from "./avaliacaoPsicologica/RotinaRelatorio";
import { CuidadosPessoaisRelatorio } from "./avaliacaoPsicologica/CuidadosPessoaisRelatorio";
import ImagemPDF from "../../assets/icones/pdf.png"
import { TracoDePersonalidadeRelatorio } from "./avaliacaoPsicologica/TracoDePersonalidadeRelatorio";
import { LinguagemRelatorio } from "./avaliacaoPsicologica/LinguagemRelatorio";
import Campo from "../../components/campos/Campo";
import { CompreensaoRelatorio } from "./avaliacaoPsicologica/CompreensaoRelatorio";
import { SaudeMentalRelatorio } from "./avaliacaoPsicologica/SaudeMentalRelatorio";
import { SocializacaoRelatorio } from "./avaliacaoPsicologica/SocializacaoRelatorio";
import { ComportamentoRelatorio } from "./avaliacaoPsicologica/ComportamentoRelatorio";
import { HabilidadesSociaisRelatorio } from "./avaliacaoPsicologica/HabilidadesSociaisRelatorio";
import { AfetividadeRelatorio } from "./avaliacaoPsicologica/AfetividadeRelatorio";
import { RelacaoDaFamiliaComOExaminadoRelatorio } from "./avaliacaoPsicologica/RelacaoDaFamiliaComOExaminadoRelatorio";
import AvaliacaoPsicologicaRelatorio from "./avaliacaoPsicologica/AvaliacaoPsicologicaRelatorio";
import AvaliacaoFisioterapeuticaRelatorio from "./AvaliacaoFisioterapeutica/AvaliacaoFisioterapeuticaRelatorio";
import SaudeGeralDoPraticanteRelatorio from "./AvaliacaoFisioterapeutica/SaudeGeralDoPraticanteRelatorio";
import FormaDeComunicacaoRelatorio from "./AvaliacaoFisioterapeutica/FormaDeComunicacaoRelatorio";
import QuadroAtualRelatorio from "./AvaliacaoFisioterapeutica/QuadroAtualRelatorio";
import { apresentarModalDeCarregamento, esconderModal } from "../../utilidades/ManipuladorDeModal";
import ModalDeCarregamento from "../../components/modal/ModalDeCarregamento";
import MobilidadeArticularRelatorio from "./AvaliacaoFisioterapeutica/MobilidadeArticularRelatorio";

const RelatorioPraticante = () => {
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState(false);

  const [cpf, setCpf] = useState('')
  const [espacar, setEspacar] = useState(false)

  const conteudoDocumento = useRef()
  const manipuladorDeImpressao = useReactToPrint({
    content: () => conteudoDocumento.current
  })

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
              onChange={(e) => {
                alert(e.target.value)
              }}
              descricao="Pesquise por cpf"
            />
          </CRow>
        </CCardBody>
      </CCard>

      <CContainer style={{
        width: '100%',
        height: '100%',
        padding: '20px',
        boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.3)',
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

        {/* Fica tudo aqui dentro aquilo que será impresso */}
        <CContainer ref={conteudoDocumento}>
          <strong className="titulos-relatorio-praticante">Ficha Cadastral - Admissional CE</strong>
          <DadosPessoaisRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <EducacaoRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <ResponsavelPeloPraticanteRelatorio idUsuario={1}/>{espacar ? <><br/><br/><br/><br/></> : <br/>}
          <OutrasAtividadesRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <EmergenciaRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <strong className="titulos-relatorio-praticante">Avaliação dos Aspectos Psicológicos</strong>
          <SobreACriancaRelatorio idUsuario={1}/>{espacar ? <><br/><br/><br/><br/></> : <br/>}
          <SaudeRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <RotinaRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <CuidadosPessoaisRelatorio idUsuario={1}/>{espacar ? <><br/><br/><br/><br/><br/><br/><br/><br/><br/></> :
          <br/>}
          <TracoDePersonalidadeRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <LinguagemRelatorio idUsuario={1}/>{espacar ? <><br/><br/><br/></> : <br/>}
          <CompreensaoRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <SaudeMentalRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <SocializacaoRelatorio idUsuario={1}/>{espacar ? <><br/><br/><br/><br/><br/></> : <br/>}
          <ComportamentoRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <HabilidadesSociaisRelatorio idUsuario={1}/>{espacar ? <><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></> : <br/>}
          <AfetividadeRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <RelacaoDaFamiliaComOExaminadoRelatorio idUsuario={1}/>{espacar ? <><br/><br/><br/><br/><br/><br/><br/><br/></> : <br/>}
          <AvaliacaoPsicologicaRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <strong className="titulos-relatorio-praticante">Avaliação Fisioterapêutica</strong>
          <AvaliacaoFisioterapeuticaRelatorio idUsuario={1}/>{espacar ? <><br/><br/><br/><br/><br/><br/><br/></> : <br/>}
          <SaudeGeralDoPraticanteRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <FormaDeComunicacaoRelatorio idUsuario={1}/>{espacar ? <><br/><br/><br/><br/><br/><br/></> : <br/>}
          <QuadroAtualRelatorio idUsuario={1}/>{espacar ? <br/> : <br/>}
          <MobilidadeArticularRelatorio idUsuario={1}/>
        </CContainer>
      </CContainer>
    </CContainer>
  )
}

export default RelatorioPraticante;
