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
import {ESQUECI_MINHA_SENHA} from "../../../URL/URL";

const Login = () => {

  const [displayModal, setDisplayModal] = useState("none")
  const [tituloModal, setTituloModal] = useState("")
  const [conteudoModal, setConteudoModal] = useState("")

  const[habilitar,setHabilitar]=useState(false)
  const[tipoInput,setTipoInput]=useState('password')

  const [form, setForm] = useState({
    nomeUsuario: '',
    senha: ''
  })

  const obterParametroDaURL = () => {
    // Pega a parte da query da URL (excluindo a parte antes do '?')
    const url = window.location.href
    const expirado = url.split("=")[1]
    return expirado
  }

  useEffect(() => {
    const expirado = obterParametroDaURL()
    if (expirado === 'true') {
      apresentarModal("Aviso", "Sessão expirada! Para continuar faça o login novamente!", setDisplayModal, setTituloModal, setConteudoModal)
    }
    localStorage.setItem('login', JSON.stringify({
      idUsuario: "",
      nomeUsuario: "",
      token: "",
      validadeToken: "",
      role: ""
    }));
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
            window.location.href = "/dashboard"
            console.log("Dados login = " + response.data)
          }
        })
        .catch((error) => {
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
          } else {
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
                    <h2>Bem Vindo!</h2>
                    <p className="text-medium-emphasis">Entre com sua conta! <a href={`${ESQUECI_MINHA_SENHA}`}
                                                                                style={{textDecoration: "none"}}>Esqueceu
                      a senha?</a></p>
                    <CInputGroup className="mb-3">
                      <input className="form-control"
                             style={{fontSize: '20px'}}
                             placeholder="Usuário"
                             autoComplete="username"
                             onChange={(event) => {
                               setForm({...form, nomeUsuario: event.target.value})
                             }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <div style={{width:'100%', display:'flex', flexDirection:'row', textAlign:'center', alignItems:'center', border:'1px solid #ebeced', borderRadius:'5px'}}>
                        <input className="form-control"
                               style={{fontSize: '20px', border:'none', background:'none', outline:'none'}}
                               type={tipoInput}
                               placeholder="Senha"
                               autoComplete="current-password"
                               onChange={(event) => {
                                 setForm({...form, senha: event.target.value})
                               }}
                        />

                        {habilitar ?

                        <div style={{padding:"5px", cursor:'pointer'}} onClick={()=>{setHabilitar(false); setTipoInput('password')}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                          </svg>
                        </div>
                          :
                          <div style={{padding:"5px", cursor:'pointer'}} onClick={()=>{setHabilitar(true); setTipoInput('text')}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                              <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                            </svg>
                          </div>
                        }

                      </div>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="danger"
                          style={{color: "white", fontSize:'20px'}}
                          className="px-4"
                          onClick={() => {
                            logar()
                          }}
                        >
                          Entrar
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
