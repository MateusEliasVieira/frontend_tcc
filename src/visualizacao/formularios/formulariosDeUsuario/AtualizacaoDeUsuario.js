import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea, CImage,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import {estadoCivil, role, vinculo} from "../../../constantes/Constantes";
import {
  ATUALIZAR_USUARIO_PUT,
  PESQUISAR_USUARIO_POR_ID_GET,
  SALVAR_NOVO_USUARIO_POST
} from "../../../endpoints/usuario/Endpoints";
import Modal from "../../../components/modal/Modal";
import {converterImagemEmBase64} from "../../../utilidades/ConversorDeImagem";
import {apresentarModal, esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {formatarDataPadraoAnoMesDia} from "../../../utilidades/ManipuladorDeDatas";
import {camposPreenchidos} from "../../../utilidades/VerificadorDeCampos";

const AtualizacaoDeUsuario = () => {

  // Modal mensagem
  const [displayModal, setDisplayModal] = useState("none")
  const [classModal, setClassModal] = useState("modal fade")
  const [tituloModal, setTituloModal] = useState("")
  const [conteudoModal, setConteudoModal] = useState("")

  const [possuiFormacao, setPossuiFormacao] = useState(true)
  const [usuarioExiste, setUsuarioExiste] = useState(true)
  const [fotoAtual, setFotoAtual] = useState("")

  const [formularioDeDados, setFormularioDeDados] = useState({
    idUsuario: '',
    nome: '',
    foto: '',
    dataNascimento: '',
    cpf: '',
    estadoCivil: '',
    telefone: '',
    email: '',
    detalhesFormacao: 'Sem Formação',
    cidade: '',
    bairro: '',
    logradouro: '',
    role: '',
    vinculo: '',
    possuiFormacao: false,
  });

  const getIdUrl = () => {
    const url = window.location.href;
    const url_split = url.split("?id=")
    return url_split[1]
  }

  useEffect(() => {
    const idUrl = getIdUrl()
    if (idUrl !== null && idUrl !== "") {
      try {
        const buscarUsuarioPorID = async () => {
          const response = await axios.get(PESQUISAR_USUARIO_POR_ID__GET,
            {
              params: {
                id: idUrl
              }
            })
          if (response.status === 200) {
            setUsuarioExiste(true)
            setFormularioDeDados(response.data)
            setFotoAtual(response.data.foto)
          } else {
            setUsuarioExiste(false)
          }
        }
        buscarUsuarioPorID()
          .catch((error) => {
            setUsuarioExiste(false)
          })
      } catch (error) {
        setUsuarioExiste(false)
      }
    } else {
      setUsuarioExiste(false)
    }
  }, []);
  const recarregarPagina = () => {
    location.reload()
  }
  const atualizarDadosDoUsuario = async () => {
    if (camposPreenchidos(formularioDeDados)) {
      // Campos obrigatórios estão preenchidos
      const dados = {
        ...formularioDeDados,
      };
      try {
        const response = await axios.put(
          ATUALIZAR_USUARIO_PUT,
          JSON.stringify(dados),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        apresentarModal("Resposta", response.data.mensagem)
      } catch (error) {
        // Caso seja apenas um erro
        if (error.response.data.titulo !== undefined) {
          apresentarModal("Atenção", error.response.data.titulo)
        }
        // Caso seja uma lista de erros
        if (error.response.data.lista !== undefined) {
          // Há lista de erros
          let lista = ""
          error.response.data.lista.forEach((item) => {
            lista += `Campo ${item.nomeCampo}, ${item.mensagem}` + "\n"
          })
          apresentarModal("Atenção", lista)
        }
      }
    } else {
      // Tem algum campo obrigatório não preenchido
      apresentarModal("Atenção", "Por favor, preencha todos os campos obrigatórios!")
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            {usuarioExiste ?
              <strong>Atualização de Usuário</strong>
              : <strong>Ops</strong>}
          </CCardHeader>
          {usuarioExiste ?
            <CCardBody>
              <Modal classModal={classModal} dsp={displayModal} titulo={tituloModal} conteudo={conteudoModal}
                     esconderModal={esconderModal}/>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="nome">Nome</CFormLabel>
                  <CFormInput
                    id="nome"
                    value={formularioDeDados.nome}
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, nome: e.target.value})}
                  />
                </div>

                <div className="container text-center" style={{padding: 0}}>
                  <div className="row">

                    <div className="col">
                      <div className="mb-3">
                        <CFormLabel htmlFor="foto" style={{display: 'block', textAlign: 'left'}}>Foto (Tamanho máximo:
                          8MB)</CFormLabel>
                        <CFormInput
                          id="foto"
                          type="file"
                          onChange={(e) => {
                            converterImagemEmBase64(e.target.files[0])
                              .then((resolve) => {
                                setFormularioDeDados({...formularioDeDados, foto: resolve})
                                setFotoAtual(resolve)
                              })
                              .catch((reject) => {
                                console.log(reject)
                              })
                          }}
                        />
                      </div>
                    </div>

                    <div className="col col-lg-2">
                      {formularioDeDados.foto !== "" ?
                        <div><CImage src={fotoAtual} width={100} height={100} style={{borderRadius: 10}}/> <p>Foto
                          Atual</p></div> : <></>}
                    </div>

                  </div>
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="dataNascimento">Data de Nascimento</CFormLabel>
                  <CFormInput
                    id="dataNascimento"
                    type="date"
                    value={formatarDataPadraoAnoMesDia(formularioDeDados.dataNascimento)}
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, dataNascimento: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="cpf">CPF</CFormLabel>
                  <CFormInput
                    id="cpf"
                    value={formularioDeDados.cpf}
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, cpf: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Estado Civil</CFormLabel>
                  <CFormSelect
                    id="estadoCivil"
                    options={estadoCivil}
                    value={formularioDeDados.estadoCivil}
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, estadoCivil: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="telefone">Telefone</CFormLabel>
                  <CFormInput
                    id="telefone"
                    value={formularioDeDados.telefone}
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, telefone: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormInput
                    id="email"
                    type="email"
                    value={formularioDeDados.email}
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, email: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="cidade">Cidade</CFormLabel>
                  <CFormInput
                    id="cidade"
                    value={formularioDeDados.cidade}
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, cidade: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="bairro">Bairro</CFormLabel>
                  <CFormInput
                    id="bairro"
                    value={formularioDeDados.bairro}
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, bairro: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="logradouro">Logradouro</CFormLabel>
                  <CFormInput
                    id="logradouro"
                    value={formularioDeDados.logradouro}
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, logradouro: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="role">Nível</CFormLabel>
                  <CFormSelect
                    id="role"
                    options={role}
                    value={formularioDeDados.role}
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, role: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="vinculo">Vínculo</CFormLabel>
                  <CFormSelect
                    id="vinculo"
                    options={vinculo}
                    value={formularioDeDados.vinculo}
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, vinculo: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="possuiFormacao">Possui Formação?</CFormLabel>
                  <CFormSelect
                    id="possuiFormacao"
                    value={possuiFormacao}
                    onChange={
                      (e) => {
                        setFormularioDeDados({...formularioDeDados, possuiFormacao: !possuiFormacao});
                        setPossuiFormacao(!possuiFormacao)
                      }
                    }
                  >
                    <option value={true}>Sim</option>
                    <option value={false}>Não</option>
                  </CFormSelect>
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="detalhesFormacao">Detalhes da Formação</CFormLabel>
                  <CFormTextarea
                    id="detalhesFormacao"
                    type="text"
                    disabled={possuiFormacao ? false : true}
                    value={
                      possuiFormacao ? formularioDeDados.detalhesFormacao : 'Sem Formação'
                    }
                    onChange={(e) => setFormularioDeDados({...formularioDeDados, detalhesFormacao: e.target.value})}
                  />
                </div>

                <CButton color="primary" onClick={atualizarDadosDoUsuario}>
                  atualizarDadosDoUsuario
                </CButton>
              </CForm>
            </CCardBody>
            : <strong style={{padding: 15}}>Não foi possível encontrar este usuário.</strong>}
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AtualizacaoDeUsuario;
