import React, {useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CRow,
  CFormInput,
  CFormSelect, CFormTextarea,
} from '@coreui/react';
import axios from 'axios';
import {estadoCivil, role, vinculo} from "../../../constantes/Constantes";
import {SALVAR_NOVO_FUNCIONARIO__POST} from "../../../endpoints/usuario/Endpoints";
import Modal from "../../../components/modal/Modal";

const CadastroDeUsuario = () => {

  const [displayModal, setDisplayModal] = useState("none")
  const [classModal, setClassModal] = useState("modal fade")
  const [titleModal, setTitleModal] = useState("")
  const [messageModal, setMessageModal] = useState("")
  const [possuiFormacao, setPossuiFormacao] = useState(true)

  const [formData, setFormData] = useState({
    nome: '',
    foto: '',
    dataNascimento: '',
    cpf: '',
    estadoCivil: '',
    telefone: '',
    email: '',
    nomeUsuario: '',
    senha: '',
    detalhesFormacao: 'Sem Formação',
    cidade: '',
    bairro: '',
    logradouro: '',
    role: '',
    vinculo: '',
    possuiFormacao: false,
  });

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
      formData.nome !== '' &&
      formData.dataNascimento !== '' &&
      formData.cpf !== '' &&
      formData.estadoCivil !== '' &&
      formData.telefone !== '' &&
      formData.email !== '' &&
      formData.nomeUsuario !== '' &&
      formData.senha !== '' &&
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

  const handleShowModal = (title, message) => {
    setDisplayModal("block")
    setClassModal("modal fade show")
    setTitleModal(title)
    setMessageModal(message)
  }

  const handleHideModal = () => {
    setDisplayModal("none")
    setClassModal("modal fade")
    setTitleModal("")
    setMessageModal("")
  }

  const recarregarPagina = () => {
    location.reload()
  }

  const salvar = async () => {
    if (fieldsOK()) {
      // Campos obrigatórios estão preenchidos
      const dados = {
        ...formData,
      };
      try {
        const response = await axios.post(
          SALVAR_NOVO_FUNCIONARIO__POST,
          JSON.stringify(dados),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        handleShowModal("Resposta", response.data.mensagem)
        recarregarPagina()
      } catch (error) {
        // Caso seja apenas um erro
        if (error.response.data.title !== undefined) {
          handleShowModal("Atenção", error.response.data.title)
        }
        // Caso seja uma lista de erros
        if (error.response.data.lista !== undefined) {
          // Há lista de erros
          let lista = ""
          error.response.data.lista.forEach((item) => {
            lista += `Campo ${item.nomeCampo}, ${item.mensagem}` + "\n"
          })
          handleShowModal("Atenção", lista)
        }
      }
    } else {
      // Tem algum campo obrigatório não preenchido
      handleShowModal("Atenção", "Por favor, preencha todos os campos obrigatórios!")
    }

  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Registro de Usuário</strong>
          </CCardHeader>
          <CCardBody>
            <Modal classModal={classModal} dsp={displayModal} title={titleModal} message={messageModal}
                   handleHideModal={handleHideModal}/>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="nome">Nome</CFormLabel>
                <CFormInput
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="foto">Foto (Tamanho máximo: 8MB)</CFormLabel>
                <CFormInput
                  id="foto"
                  type="file"
                  onChange={(e) => {
                    console.log("Arquivo selecionado:", e.target.files[0]);
                    const arquivo = e.target.files[0]
                    imageToBase64(arquivo)
                      .then((resolve) => {
                        setFormData({...formData, foto: resolve})
                      })
                      .catch((reject) => {
                        console.log(reject)
                      })
                  }}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="dataNascimento">Data de Nascimento</CFormLabel>
                <CFormInput
                  id="dataNascimento"
                  type="date"
                  value={formData.dataNascimento}
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
                <CFormLabel htmlFor="nomeUsuario">Nome de Usuário</CFormLabel>
                <CFormInput
                  id="nomeUsuario"
                  value={formData.nomeUsuario}
                  onChange={(e) => setFormData({...formData, nomeUsuario: e.target.value})}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="senha">Senha</CFormLabel>
                <CFormInput
                  id="senha"
                  type="password"
                  value={formData.senha}
                  onChange={(e) => setFormData({...formData, senha: e.target.value})}
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
                  value={formData.possuiFormacao}
                  onChange={
                    (e) => {
                      setFormData({...formData, possuiFormacao: e.target.value});
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
                  disabled={possuiFormacao}
                  value={
                    !possuiFormacao ? formData.detalhesFormacao : 'Sem Formação'
                  }
                  onChange={(e) => setFormData({...formData, detalhesFormacao: e.target.value})}
                />
              </div>

              <CButton color="primary" onClick={salvar}>
                Salvar
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CadastroDeUsuario;
