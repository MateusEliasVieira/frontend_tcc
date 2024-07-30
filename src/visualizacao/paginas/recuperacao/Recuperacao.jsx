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
import {cibMinutemailer} from '@coreui/icons'
import Modal from "../../../components/modal/Modal";
import "./Recuperacao.css"
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const Recuperacao = () => {

  const [displayModal, setDisplayModal] = useState("none")
  const [tituloModal, setTituloModal] = useState("")
  const [conteudoModal, setConteudoModal] = useState("")
  const [tituloForm, setTituloForm] = useState("")
  const [enviado, setEnviado] = useState(false)


  const [emailEnviar, setEmailEnviar] = useState("")


  useEffect(() => {
    setTituloForm("Recupere sua conta!")
    setEnviado(false)
  }, [])


  const recuperar = () => {
    setTituloForm("Enviando email...")
    setEnviado(true)
    axios.get(`http://localhost:8080/recuperacao-de-conta/enviar-email/${emailEnviar}`)
      .then((resposta)=>{
        if(resposta.status === HttpStatusCode.Ok){
          setTituloForm(<strong id="rec-sucesso">{resposta.data.mensagem}</strong>)
          setEnviado(false)
          setTimeout(()=>{
            window.location.href="/#/login"
          },5000)
        }else{
          setTituloForm(<strong id="rec-falha">{resposta.data.titulo}</strong>)
          setEnviado(false)
        }
      })
      .catch((erro)=>{
        setTituloForm(<strong id="rec-falha">{erro.resposta.data.titulo}</strong>)
        setEnviado(false)
      })
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
                    <strong id="rec-conta">{tituloForm}
                      {enviado ?
                        <div className="spinner-grow text-danger" style={{marginLeft: "20px"}} role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        <></>
                      }
                    </strong>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cibMinutemailer}/>
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="email"
                        onChange={(event) => {
                          setEmailEnviar(event.target.value)
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
                            recuperar()
                          }}
                        >
                          Recuperar
                          <CIcon width={20} icon={cibMinutemailer}/>
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

export default Recuperacao
