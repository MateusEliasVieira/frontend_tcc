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
import {cibFSecure} from '@coreui/icons'
import Modal from "../../../components/modal/Modal";
import "./NovaSenha.css"
import {apresentarModal, esconderModal} from "../../../utilidades/ManipuladorDeModal";
import axios from "axios";

const NovaSenha = () => {

  const [displayModal, setDisplayModal] = useState("none")
  const [tituloModal, setTituloModal] = useState("")
  const [conteudoModal, setConteudoModal] = useState("")

  const [novaSenha, setNovaSenha] = useState("")
  const [confirmaNovaSenha, setConfirmaNovaSenha] = useState("")

  const [url, setUrl] = useState("")

  useEffect(() => {
    let url = window.location.href.split("?token=")[1];
    setUrl(url)
  }, []);

  const salvarNovaSenha = () => {
    if (novaSenha !== "" && confirmaNovaSenha !== "") {
      if (novaSenha === confirmaNovaSenha) {
        // salvar
        axios.post("http://localhost:8080/recuperacao-de-conta/nova-senha", {
          token: url,
          novaSenha: novaSenha
        })
          .then((resposta) => {
            apresentarModal("Aviso", resposta.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal)
            setTimeout(()=>{
              window.location.href="/#/login"
            },5000)
          })
          .catch((erro) => {
            console.log("Erro = " + erro)
            if (erro.response) {
              // A resposta foi recebida e o servidor respondeu com um status fora do alcance de 2xx
              apresentarModal("Aviso", erro.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
            } else if (erro.request) {
              // A requisição foi feita, mas nenhuma resposta foi recebida
              apresentarModal("Erro de Rede", "O servidor não respondeu. Verifique sua conexão de rede.", setDisplayModal, setTituloModal, setConteudoModal);
            } else {
              // Algo aconteceu na configuração da requisição que provocou um erro
              apresentarModal("Erro", "Ocorreu um erro ao configurar a requisição.", setDisplayModal, setTituloModal, setConteudoModal);
            }
          })

      } else {
        // senhas diferentes
        apresentarModal("Aviso", "As senhas são diferentes!", setDisplayModal, setTituloModal, setConteudoModal)
      }
    } else {
      // preencher as senhas
      apresentarModal("Aviso", "Informe a senha!", setDisplayModal, setTituloModal, setConteudoModal)
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
                        type="password"
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
                        type="password"
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
