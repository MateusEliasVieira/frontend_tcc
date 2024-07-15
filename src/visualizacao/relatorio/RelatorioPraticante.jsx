import {CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CHeader, CRow} from "@coreui/react";
import './RelatorioPraticante.css'
import DadosPessoaisRelatorio from "./fichaCadastroAdmissional/DadosPessoaisRelatorio";
import Campo from "../../components/campos/Campo";
import {useRef, useState} from "react";
import {useReactToPrint} from "react-to-print";
import EducacaoRelatorio from "./fichaCadastroAdmissional/EducacaoRelatorio";
import ResponsavelPeloPraticanteRelatorio from "./fichaCadastroAdmissional/ResponsavelPeloPraticanteRelatorio";
import {OutrasAtividadesRelatorio} from "./fichaCadastroAdmissional/OutrasAtividadesRelatorio";
import EmergenciaRelatorio from "./fichaCadastroAdmissional/EmergenciaRelatorio";

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
          <strong>Filtro de Busca</strong>
        </CHeader>
        <CCardBody>
          <CRow>
            <CCol>
              <Campo
                tipo="text"
                valor={cpf}
                setar={(e) => setCpf(e.target.value)}
                legenda="CPF"
              />
              <CButton>Pesquisar</CButton>
            </CCol>
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
        </CContainer>
      </CContainer>

    </CContainer>
  )
}

export default RelatorioPraticante
