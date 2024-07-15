import {CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CHeader, CRow} from "@coreui/react";
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

const RelatorioPraticante = () => {

  const [cpf, setCpf] = useState('')

  const conteudoDocumento = useRef()
  const manipuladorDeImpressao = useReactToPrint({
    content: () => conteudoDocumento.current
  })

  return (
    <CContainer>
      <CCard>
        <CHeader>
          <strong>Filtro de Pesquisa</strong>
        </CHeader>
        <CCardBody>
          <CRow>
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
        <CHeader>
          <CButton color="danger" onClick={manipuladorDeImpressao}>Gerar PDF </CButton>
        </CHeader>

        {/*Fica tudo aqui dentro aquilo que será impresso*/}
        <CContainer ref={conteudoDocumento}>
          <strong className="titulos-relatorio-praticante">Ficha Cadastral - Admissional CE</strong>
          <DadosPessoaisRelatorio idUsuario={1}/><br/>
          <EducacaoRelatorio idUsuario={1}/><br/>
          <ResponsavelPeloPraticanteRelatorio idUsuario={1}/><br/><br/><br/><br/>
          <OutrasAtividadesRelatorio idUsuario={1}/><br/>
          <EmergenciaRelatorio idUsuario={1}/><br/>
          <strong className="titulos-relatorio-praticante">Avaliação dos Aspectos Psicológicos</strong>
          <SobreACriancaRelatorio idUsuario={1}/><br/><br/><br/>
          <SaudeRelatorio idUsuario={1}/><br/>
          <RotinaRelatorio idUsuario={1}/><br/>
          <CuidadosPessoaisRelatorio idUsuario={1}/><br/>
        </CContainer>
      </CContainer>

    </CContainer>
  )
}

export default RelatorioPraticante
