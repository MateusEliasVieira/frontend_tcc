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
  ATUALIZAR_FUNCIONARIO__PUT,
  PESQUISAR_FUNCIONARIO_POR_ID__GET,
  SALVAR_NOVO_FUNCIONARIO__POST
} from "../../../endpoints/usuario/Endpoints";
import Modal from "../../../components/modal/Modal";

const AtualizacaoDeUsuario = () => {

  // Modal mensagem
  const [displayModalMensagem, setDisplayModalMensagem] = useState("none")
  const [classModalMensagem, setClassModalMensagem] = useState("modal fade")
  const [titleModalMensagem, setTitleModalMensagem] = useState("")
  const [messageModalMensagem, setMessageModalMensagem] = useState("")

  const [possuiFormacao, setPossuiFormacao] = useState(true)
  const [usuarioExiste, setUsuarioExiste] = useState(true)
  const [fotoAtual,setFotoAtual] = useState("")

  const [formData, setFormData] = useState({
    idUsuario:'',
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
        const findUserById = async () => {
          const response = await axios.get(PESQUISAR_FUNCIONARIO_POR_ID__GET,
            {
              params: {
                id: idUrl
              }
            })
          if (response.status === 200) {
            setUsuarioExiste(true)
            setFormData(response.data)
            setFotoAtual(response.data.foto)
          } else {
            // handleShowModal("Aviso",response.data.mensagem)
            console.log(response)
            setUsuarioExiste(false)
          }
        }
        findUserById()
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

  // Transforma imagem em string base64
  const imageToBase64 = async (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        if (base64.split("").length <= 65343434) {
          resolve(base64);
        } else {
          reject(new Error("O tamanho da imagem excede o limite permitido."));
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(image);
    });
  };

  const fieldsOK = () => {
    if (
      formData.idUsuario !== '' &&
      formData.nome !== '' &&
      formData.dataNascimento !== '' &&
      formData.cpf !== '' &&
      formData.estadoCivil !== '' &&
      formData.telefone !== '' &&
      formData.email !== '' &&
      formData.cidade !== '' &&
      formData.bairro !== '' &&
      formData.logradouro !== '' &&
      formData.role !== '' &&
      formData.vinculo !== ''
    ) {
      // Todos os campos necessários estão preenchidos
      return true
    } else {
      return false
    }

  }

  const handleShowModalMensagem = (title, message) => {
    setDisplayModalMensagem("block")
    setClassModalMensagem("modal fade show")
    setTitleModalMensagem(title)
    setMessageModalMensagem(message)
  }

  const handleHideModalMensagem = () => {
    setDisplayModalMensagem("none")
    setClassModalMensagem("modal fade")
    setTitleModalMensagem("")
    setMessageModalMensagem("")
  }

  const recarregarPagina = () => {
    location.reload()
  }

  const formatDateBrasil = (item) => {
    let data = item.split("T")[0]
    let data_array = data.split("-")
    let data_ok = `${data_array[2]}/${data_array[1]}/${data_array[0]}`;
    return data_ok
  }

  const formatDateEUA = (item) => {
    return item.split("T")[0]
  }

  const atualizar = async () => {
    if (fieldsOK()) {
      // Campos obrigatórios estão preenchidos
      const dados = {
        ...formData,
      };
      try {
        const response = await axios.put(
          ATUALIZAR_FUNCIONARIO__PUT,
          JSON.stringify(dados),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        handleShowModalMensagem("Resposta", response.data.mensagem)
      } catch (error) {
        console.log("Deu ruim: "+error)
        // Caso seja apenas um erro
        if (error.response.data.title !== undefined) {
          handleShowModalMensagem("Atenção", error.response.data.title)
        }
        // Caso seja uma lista de erros
        if (error.response.data.lista !== undefined) {
          // Há lista de erros
          let lista = ""
          error.response.data.lista.forEach((item) => {
            lista += `Campo ${item.nomeCampo}, ${item.mensagem}` + "\n"
          })
          handleShowModalMensagem("Atenção", lista)
        }
      }
    } else {
      // Tem algum campo obrigatório não preenchido
      handleShowModalMensagem("Atenção", "Por favor, preencha todos os campos obrigatórios!")
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
              <Modal classModal={classModalMensagem} dsp={displayModalMensagem} title={titleModalMensagem} message={messageModalMensagem}
                     handleHideModal={handleHideModalMensagem}/>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="nome">Nome</CFormLabel>
                  <CFormInput
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
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
                            console.log("Arquivo selecionado:", e.target.files[0]);
                            const arquivo = e.target.files[0]
                            imageToBase64(arquivo)
                              .then((resolve) => {
                                setFormData({...formData, foto: resolve})
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
                      {formData.foto !== "" ?
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
                    value={formatDateEUA(formData.dataNascimento)}
                    onChange={(e) => setFormData({...formData, dataNascimento: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="cpf">CPF</CFormLabel>
                  <CFormInput
                    id="cpf"
                    value={formData.cpf}
                    onChange={(e) => setFormData({...formData, cpf: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Estado Civil</CFormLabel>
                  <CFormSelect
                    id="estadoCivil"
                    options={estadoCivil}
                    value={formData.estadoCivil}
                    onChange={(e) => setFormData({...formData, estadoCivil: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="telefone">Telefone</CFormLabel>
                  <CFormInput
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormInput
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="cidade">Cidade</CFormLabel>
                  <CFormInput
                    id="cidade"
                    value={formData.cidade}
                    onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="bairro">Bairro</CFormLabel>
                  <CFormInput
                    id="bairro"
                    value={formData.bairro}
                    onChange={(e) => setFormData({...formData, bairro: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="logradouro">Logradouro</CFormLabel>
                  <CFormInput
                    id="logradouro"
                    value={formData.logradouro}
                    onChange={(e) => setFormData({...formData, logradouro: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="role">Nível</CFormLabel>
                  <CFormSelect
                    id="role"
                    options={role}
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="vinculo">Vínculo</CFormLabel>
                  <CFormSelect
                    id="vinculo"
                    options={vinculo}
                    value={formData.vinculo}
                    onChange={(e) => setFormData({...formData, vinculo: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="possuiFormacao">Possui Formação?</CFormLabel>
                  <CFormSelect
                    id="possuiFormacao"
                    value={possuiFormacao}
                    onChange={
                      (e) => {
                        setFormData({...formData, possuiFormacao: !possuiFormacao});
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
                      possuiFormacao ? formData.detalhesFormacao : 'Sem Formação'
                    }
                    onChange={(e) => setFormData({...formData, detalhesFormacao: e.target.value})}
                  />
                </div>

                <CButton color="primary" onClick={atualizar}>
                  Atualizar
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
