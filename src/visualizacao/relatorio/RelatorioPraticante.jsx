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
import {useRef, useState} from "react";
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

const RelatorioPraticante = () => {

  const [cpf, setCpf] = useState('')

  const conteudoDocumento = useRef()
  const manipuladorDeImpressao = useReactToPrint({
    content: () => conteudoDocumento.current
  })

  return (
    <CContainer>
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
          <CImage id="button-pdf" color="" onClick={manipuladorDeImpressao} src={ImagemPDF}
                  style={{width: "50px", height: "55px"}} title="Gerar documento PDF"/>
        </CCardHeader>

        {/*Fica tudo aqui dentro aquilo que será impresso*/}
        <CContainer ref={conteudoDocumento}>
          <strong className="titulos-relatorio-praticante">Ficha Cadastral - Admissional CE</strong>
          <DadosPessoaisRelatorio idUsuario={1}/><br/>
          <EducacaoRelatorio idUsuario={1}/><br/>
          <ResponsavelPeloPraticanteRelatorio idUsuario={1}/><br/>
          <OutrasAtividadesRelatorio idUsuario={1}/><br/>
          <EmergenciaRelatorio idUsuario={1}/><br/>
          <strong className="titulos-relatorio-praticante">Avaliação dos Aspectos Psicológicos</strong>
          <SobreACriancaRelatorio idUsuario={1}/><br/>
          <SaudeRelatorio idUsuario={1}/><br/>
          <RotinaRelatorio idUsuario={1}/><br/>
          <CuidadosPessoaisRelatorio idUsuario={1}/><br/>
          <TracoDePersonalidadeRelatorio idUsuario={1}/><br/>
          <LinguagemRelatorio idUsuario={1}/><br/>
          <CompreensaoRelatorio idUsuario={1}/><br/>
          <SaudeMentalRelatorio idUsuario={1}/><br/>
          <SocializacaoRelatorio idUsuario={1}/><br/>
          <ComportamentoRelatorio idUsuario={1}/><br/>
          <HabilidadesSociaisRelatorio idUsuario={1}/><br/>
          <AfetividadeRelatorio idUsuario={1}/><br/>
          <RelacaoDaFamiliaComOExaminadoRelatorio idUsuario={1}/><br/>
          <AvaliacaoPsicologicaRelatorio idUsuario={1}/>
          <strong className="titulos-relatorio-praticante">Avaliação Fisioterapêutica</strong>

        </CContainer>
      </CContainer>

    </CContainer>
  )
}

export default RelatorioPraticante
