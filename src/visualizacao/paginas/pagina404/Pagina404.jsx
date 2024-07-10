import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CFormInput,
  CFormTextarea,
  CRow,
} from '@coreui/react'


const Pagina404 = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CContainer className="clearfix">
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">Oops, nada encontrado! :)</h4>
              <p className="text-medium-emphasis float-start">
                <strong>
                  O recurso que você tentou acessar não existe, ou então, foi alterado pelo desenvolvedor da página
                </strong>
              </p>
            </CContainer>
            <CContainer>
              <CCard>
                <CCardHeader>
                  <strong>Entre em contato</strong>
                </CCardHeader>
                <CCardBody>
                  <CFormInput type="text" placeholder="Nome"/>
                  <CFormInput type="email" placeholder="Seu email" style={{margin: "10px auto"}}/>
                  <CFormTextarea placeholder="Informe seu problema!"/>
                  <CButton color="dark" style={{display: "block", margin: "20px 0px"}}>Enviar</CButton>
                </CCardBody>
              </CCard>
            </CContainer>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Pagina404
