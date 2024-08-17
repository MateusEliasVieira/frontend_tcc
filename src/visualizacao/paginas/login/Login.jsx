import React, {useEffect, useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CInputGroup,
  CRow,
} from '@coreui/react'

import axios from "axios";
import {LOGIN_POST} from "../../../endpoints/usuario/Endpoints";
import Modal from "../../../components/modal/Modal";
import "./Login.css"
import {apresentarModal, esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {ESQUECI_MINHA_SENHA} from "../../../URL/URL";
import VerSenha from "../../../components/campos/VerSenha";

const Login = () => {

  const [displayModal, setDisplayModal] = useState("none")
  const [tituloModal, setTituloModal] = useState("")
  const [conteudoModal, setConteudoModal] = useState("")
  const [senha, setSenha] = useState("")

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

    setForm({...form, senha: senha})

    if (form.nomeUsuario !== '' && senha !== '') {

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
    }else{
      apresentarModal("Aviso", "Informe o usuário e senha", setDisplayModal, setTituloModal, setConteudoModal)
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
                             style={{fontSize: '20px', background: 'none'}}
                             placeholder="Usuário"
                             autoComplete="username"
                             onChange={(event) => {
                               setForm({...form, nomeUsuario: event.target.value})
                             }}
                      />
                    </CInputGroup>
                    <VerSenha
                      setSenha={setSenha}
                    />
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="danger"
                          style={{color: "white", fontSize: '20px'}}
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
