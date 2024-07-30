import React, {useEffect, useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cibFSecure, cibMinutemailer} from '@coreui/icons'
import Modal from "../../../components/modal/Modal";
import "./NovaSenha.css"
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const NovaSenha = () => {

  const [displayModal, setDisplayModal] = useState("none")
  const [tituloModal, setTituloModal] = useState("")
  const [conteudoModal, setConteudoModal] = useState("")

  const [novaSenha, setNovaSenha] = useState("")
  const [confirmaNovaSenha, setConfirmaNovaSenha] = useState("")


  useEffect(() => {

  }, [])


  const salvarNovaSenha = () => {
      if(novaSenha !== "" && confirmaNovaSenha !== ""){
        if(novaSenha === confirmaNovaSenha){
          // salvar
        }else{
          // senhas diferentes
        }
      }else{
        // preencher as senhas
      }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <Modal
        dsp={displayModal}
        titulo={tituloModal}
        conteudo={<div dangerouslySetInnerHTML={{__html: conteudoModal}}/>}
        esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
      />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup className={"card-group"}>
              <CCard className="p-4">
                <CCardBody>
                  <div>
                    <strong id="rec-conta">Nova Senha</strong>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cibFSecure}/>
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Senha"
                        autoComplete="senha"
                        onChange={(event) => {
                          setNovaSenha(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cibFSecure}/>
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Confirme a senha"
                        autoComplete="senha"
                        onChange={(event) => {
                          setConfirmaNovaSenha(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="danger"
                          style={{color: "white"}}
                          className="px-4"
                          onClick={() => {
                            salvarNovaSenha()
                          }}
                        >
                          Salvar
                        </CButton>
                      </CCol>
                    </CRow>
                  </div>
                </CCardBody>
              </CCard>
              <CCard id={"card-imagem"} style={{width: '100%'}}>
                <CCardBody id={"card-body-imagem"}>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default NovaSenha
