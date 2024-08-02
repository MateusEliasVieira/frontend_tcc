import {
  CCardHeader,
  CContainer,
  CImage,
} from "@coreui/react";
import './RelatorioPraticante.css'
import PlanoTerapeuticoSingularRelatorio from "./planoTerapeuticoSingular/PlanoTerapeuticoSingularRelatorio";
import CoordenacaoMotoraRelatorio from "./AvaliacaoFisioterapeutica/CoordenacaoMotoraRelatorio";
import HabilidadesMotorasAVDRelatorio from "./AvaliacaoFisioterapeutica/HabilidadesMotorasAVDRelatorio";
import DadosPessoaisRelatorio from "./fichaCadastroAdmissional/DadosPessoaisRelatorio";
import EducacaoRelatorio from "./fichaCadastroAdmissional/EducacaoRelatorio";
import ResponsavelPeloPraticanteRelatorio from "./fichaCadastroAdmissional/ResponsavelPeloPraticanteRelatorio";
import {OutrasAtividadesRelatorio} from "./fichaCadastroAdmissional/OutrasAtividadesRelatorio";
import EmergenciaRelatorio from "./fichaCadastroAdmissional/EmergenciaRelatorio";
import SobreACriancaRelatorio from "./avaliacaoPsicologica/SobreACriancaRelatorio";
import SaudeRelatorio from "./avaliacaoPsicologica/SaudeRelatorio";
import RotinaRelatorio from "./avaliacaoPsicologica/RotinaRelatorio";
import {CuidadosPessoaisRelatorio} from "./avaliacaoPsicologica/CuidadosPessoaisRelatorio";
import {TracoDePersonalidadeRelatorio} from "./avaliacaoPsicologica/TracoDePersonalidadeRelatorio";
import {LinguagemRelatorio} from "./avaliacaoPsicologica/LinguagemRelatorio";
import {CompreensaoRelatorio} from "./avaliacaoPsicologica/CompreensaoRelatorio";
import {SaudeMentalRelatorio} from "./avaliacaoPsicologica/SaudeMentalRelatorio";
import {SocializacaoRelatorio} from "./avaliacaoPsicologica/SocializacaoRelatorio";
import {ComportamentoRelatorio} from "./avaliacaoPsicologica/ComportamentoRelatorio";
import {HabilidadesSociaisRelatorio} from "./avaliacaoPsicologica/HabilidadesSociaisRelatorio";
import {AfetividadeRelatorio} from "./avaliacaoPsicologica/AfetividadeRelatorio";
import {RelacaoDaFamiliaComOExaminadoRelatorio} from "./avaliacaoPsicologica/RelacaoDaFamiliaComOExaminadoRelatorio";
import AvaliacaoPsicologicaRelatorio from "./avaliacaoPsicologica/AvaliacaoPsicologicaRelatorio";
import AvaliacaoFisioterapeuticaRelatorio from "./AvaliacaoFisioterapeutica/AvaliacaoFisioterapeuticaRelatorio";
import SaudeGeralDoPraticanteRelatorio from "./AvaliacaoFisioterapeutica/EquilibrioDinamicoRelatorio";
import FormaDeComunicacaoRelatorio from "./AvaliacaoFisioterapeutica/FormaDeComunicacaoRelatorio";
import QuadroAtualRelatorio from "./AvaliacaoFisioterapeutica/QuadroAtualRelatorio";
import MobilidadeArticularRelatorio from "./AvaliacaoFisioterapeutica/MobilidadeArticularRelatorio";
import GruposMuscularesRelatorio from "./AvaliacaoFisioterapeutica/GruposMuscularesRelatorio";
import EquilibrioEstaticoRelatorio from "./AvaliacaoFisioterapeutica/EquilibrioEstaticoRelatorio";
import EquilibrioDinamicoRelatorio from "./AvaliacaoFisioterapeutica/EquilibrioDinamicoRelatorio";
import ModalDeCarregamento from "../../components/modal/ModalDeCarregamento";
import {useEffect, useRef, useState} from "react";
import {useReactToPrint} from "react-to-print";
import CoordenacaoDinamicaRelatorio from "./AvaliacaoFisioterapeutica/CoordenacaoDinamicaRelatorio";
import EmPeRelatorio from "./AvaliacaoFisioterapeutica/EmPeRelatorio";
import ImagemPDF from '../../assets/icones/pdf.png'
import {apresentarModalDeCarregamento, esconderModal} from "../../utilidades/ManipuladorDeModal";

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
            <CoordenacaoDinamicaRelatorio idUsuario={idPraticante}/><br/>
            <EmPeRelatorio idUsuario={idPraticante}/><br/>
            <strong className="titulos-relatorio-praticante">Plano Terapêutico Singular - PTS</strong>
            <PlanoTerapeuticoSingularRelatorio idUsuario={idPraticante}/><br/>
          </CContainer>
        </CContainer>
        : <></>}
    </CContainer>
  )
}

export default RelatorioPraticante;
