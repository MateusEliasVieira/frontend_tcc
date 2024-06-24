import React, {useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CRow,
} from '@coreui/react';
import {estadoCivil, role, simOuNao, vinculo} from "../../../constantes/Constantes";
import {SALVAR_NOVO_USUARIO_POST} from "../../../endpoints/usuario/Endpoints";
import Modal from "../../../components/modal/Modal";
import {converterImagemEmBase64} from "../../../utilidades/ConversorDeImagem";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {salvar} from "../../../requisicoes/Usuario";
import Campo from "../../../components/campos/Campo";

const CadastroDeUsuario = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [classModal, setClassModal] = useState("modal fade");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [possuiFormacao, setPossuiFormacao] = useState('');

  const [formData, setFormData] = useState({
    nome: '', foto: '', dataNascimento: '', cpf: '', estadoCivil: '', telefone: '',
    email: '', nomeUsuario: '', senha: '', detalhesFormacao: '',
    cidade: '', bairro: '', logradouro: '', role: '', vinculo: '', possuiFormacao: '',
  });

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Registro de Usuário</strong>
          </CCardHeader>
          <CCardBody>
            <Modal
              classModal={classModal}
              dsp={displayModal}
              titulo={tituloModal}
              conteudo={<div dangerouslySetInnerHTML={{ __html: conteudoModal }} />}
              esconderModal={() => esconderModal(setDisplayModal, setClassModal, setTituloModal, setConteudoModal)}
            />
            <CForm>
              <Campo
                legenda="Nome"
                id="nome"
                tipo="text"
                valor={formData.nome}
                setar={(e) => setFormData({...formData, nome: e.target.value})}
              />
              <Campo
                legenda="Foto (Tamanho máximo: 8MB)"
                id="foto"
                tipo="file"
                setar={(e) => {
                  converterImagemEmBase64(e.target.files[0])
                    .then((resolve) => setFormData({...formData, foto: resolve}))
                    .catch((reject) => console.log(reject));
                }}
              />
              <Campo
                legenda="Data de nascimento"
                id="dataNascimento"
                tipo="date"
                valor={formData.dataNascimento}
                setar={(e) => setFormData({...formData, dataNascimento: e.target.value})}
              />
              <Campo
                legenda="CPF"
                id="cpf"
                tipo="text"
                valor={formData.cpf}
                setar={(e) => setFormData({...formData, cpf: e.target.value})}
              />
              <Campo
                legenda="Estado civil"
                id="estadoCivil"
                tipo="select"
                valor={formData.estadoCivil}
                setar={(e) => setFormData({...formData, estadoCivil: e.target.value})}
                opcoes={estadoCivil}
              />
              <Campo
                legenda="Telefone"
                id="telefone"
                tipo="tel"
                valor={formData.telefone}
                setar={(e) => setFormData({...formData, telefone: e.target.value})}
              />
              <Campo
                legenda="Email"
                id="email"
                tipo="email"
                valor={formData.email}
                setar={(e) => setFormData({...formData, email: e.target.value})}
              />
              <Campo
                legenda="Nome de usuário"
                id="nomeUsuario"
                tipo="text"
                valor={formData.nomeUsuario}
                setar={(e) => setFormData({...formData, nomeUsuario: e.target.value})}
              />
              <Campo
                legenda="Senha"
                id="senha"
                tipo="password"
                valor={formData.senha}
                setar={(e) => setFormData({...formData, senha: e.target.value})}
              />
              <Campo
                legenda="Cidade"
                id="cidade"
                tipo="text"
                valor={formData.cidade}
                setar={(e) => setFormData({...formData, cidade: e.target.value})}
              />
              <Campo
                legenda="Bairro"
                id="bairro"
                tipo="text"
                valor={formData.bairro}
                setar={(e) => setFormData({...formData, bairro: e.target.value})}
              />
              <Campo
                legenda="Logradouro"
                id="logradouro"
                tipo="text"
                valor={formData.logradouro}
                setar={(e) => setFormData({...formData, logradouro: e.target.value})}
              />
              <Campo
                legenda="Nível"
                id="role"
                tipo="select"
                valor={formData.role}
                setar={(e) => setFormData({...formData, role: e.target.value})}
                opcoes={role}
              />
              <Campo
                legenda="Vínculo"
                id="vinculo"
                tipo="select"
                valor={formData.vinculo}
                setar={(e) => setFormData({...formData, vinculo: e.target.value})}
                opcoes={vinculo}
              />
              <Campo
                legenda="Possui formação?"
                id="possuiFormacao"
                tipo="select"
                valor={formData.possuiFormacao}
                setar={(e) => {
                  setFormData({...formData, possuiFormacao: e.target.value});
                  setPossuiFormacao(e.target.value);
                }}
                opcoes={simOuNao}
              />
              {
                possuiFormacao === 'true' ?
                  (<Campo
                    legenda="Detalhes da formação"
                    id="detalhesFormacao"
                    tipo="textarea"
                    valor={formData.detalhesFormacao}
                    setar={(e) => setFormData({...formData, detalhesFormacao: e.target.value})}
                  />)
                  :
                  (<></>)
              }

              <CButton color="primary" onClick={() => {
                salvar(formData, SALVAR_NOVO_USUARIO_POST, setDisplayModal, setClassModal, setTituloModal, setConteudoModal)}} >
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
