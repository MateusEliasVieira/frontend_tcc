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
import {cilLockLocked, cilUser} from '@coreui/icons'
import axios from "axios";
import {LOGIN_POST} from "../../../endpoints/usuario/Endpoints";
import Modal from "../../../components/modal/Modal";
import "./Login.css"
import {apresentarModal, esconderModal} from "../../../utilidades/ManipuladorDeModal";

const Login = () => {

  const [displayModal, setDisplayModal] = useState("none")
  const [tituloModal, setTituloModal] = useState("")
  const [conteudoModal, setConteudoModal] = useState("")

  const [form, setForm] = useState({
    nomeUsuario: '',
    senha: ''
  })

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify({idUsuario: "", nomeUsuario: "", token: "", role: ""}));
  }, []);

  const logar = () => {
    try {
      axios.post(LOGIN_POST,
        JSON.stringify({...form}),
        {
          headers: {
            'Content-Type': 'application/json'
          },
        }
      )
        .then((response) => {
          if (response.status === 202) {
            localStorage.setItem('login', JSON.stringify(response.data));
            window.location.href = "/"
          } else {
            console.log(response)
          }
        })
        .catch((error) => {
          console.log("Erro "+error)
          if (error.response.data !== undefined) {
            if (error.response.data.lista !== undefined) {
              // Tem lista de erro
              let erros = ''
              error.response.data.lista.forEach((item) => {
                erros += `${item.mensagem} \n`
              })
              apresentarModal("Aviso", erros, setDisplayModal, setTituloModal, setConteudoModal)
            } else {
              apresentarModal("Aviso", error.response.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal)
            }
          }else{
            apresentarModal("Aviso", "Erro interno do sistema", setDisplayModal, setTituloModal, setConteudoModal)
          }
        })
    } catch (e) {
      apresentarModal("Aviso", "Erro interno do sistema", setDisplayModal, setTituloModal, setConteudoModal)
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <Modal
        dsp={displayModal}
        titulo={tituloModal}
        conteudo={<div dangerouslySetInnerHTML={{ __html: conteudoModal }} />}
        esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
      />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup className={"card-group"}>
              <CCard className="p-4">
                <CCardBody>
                  <div>
                    <h2>Bem Vindo!</h2>
                    <p className="text-medium-emphasis">Entre com sua conta!</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser}/>
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Usuário"
                        autoComplete="username"
                        onChange={(event) => {
                          setForm({...form, nomeUsuario: event.target.value})
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked}/>
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        onChange={(event) => {
                          setForm({...form, senha: event.target.value})
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="danger"
                          className="px-4"
                          onClick={() => {
                            logar()
                          }}
                        >
                          Entrar
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Esqueceu a senha?
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

export default Login
