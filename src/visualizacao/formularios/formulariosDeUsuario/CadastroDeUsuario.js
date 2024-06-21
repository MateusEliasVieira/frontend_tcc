import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CRow,
} from '@coreui/react';
import { estadoCivil, role, vinculo } from "../../../constantes/Constantes";
import { SALVAR_NOVO_USUARIO_POST } from "../../../endpoints/usuario/Endpoints";
import Modal from "../../../components/modal/Modal";
import { converterImagemEmBase64 } from "../../../utilidades/ConversorDeImagem";
import { esconderModal } from "../../../utilidades/ManipuladorDeModal";
import { salvar } from "../../../requisicoes/Usuario";
import Campo from "../../../components/campos/Campo";

const CadastroDeUsuario = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [classModal, setClassModal] = useState("modal fade");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [possuiFormacao, setPossuiFormacao] = useState(true);

  const [formData, setFormData] = useState({
    nome: '', foto: '', dataNascimento: '', cpf: '', estadoCivil: '', telefone: '',
    email: '', nomeUsuario: '', senha: '', detalhesFormacao: 'Sem Formação',
    cidade: '', bairro: '', logradouro: '', role: '', vinculo: '', possuiFormacao: false,
  });

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Registro de Usuário</strong>
          </CCardHeader>
          <CCardBody>
            <Modal classModal={classModal} dsp={displayModal} titulo={tituloModal} conteudo={conteudoModal} esconderModal={esconderModal} />
            <CForm>
              <Campo
                legenda="Nome"
                id="nome"
                valor={formData.nome}
                setar={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
              <Campo
                legenda="Foto (Tamanho máximo: 8MB)"
                id="foto"
                tipo="file"
                setar={(e) => {
                  converterImagemEmBase64(e.target.files[0])
                    .then((resolve) => setFormData({ ...formData, foto: resolve }))
                    .catch((reject) => console.log(reject));
                }}
              />
              <Campo
                legenda="Data de Nascimento"
                id="dataNascimento"
                tipo="date"
                valor={formData.dataNascimento}
                setar={(e) => setFormData({ ...formData, dataNascimento: e.target.value })}
              />
              <Campo
                legenda="CPF"
                id="cpf"
                valor={formData.cpf}
                setar={(e) => setFormData({ ...formData, cpf: e.target.value })}
              />
              <Campo
                legenda="Estado Civil"
                id="estadoCivil"
                tipo="select"
                valor={formData.estadoCivil}
                setar={(e) => setFormData({ ...formData, estadoCivil: e.target.value })}
                options={estadoCivil}
              />
              <Campo
                legenda="Telefone"
                id="telefone"
                valor={formData.telefone}
                setar={(e) => setFormData({ ...formData, telefone: e.target.value })}
              />
              <Campo
                legenda="Email"
                id="email"
                tipo="email"
                valor={formData.email}
                setar={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Campo
                legenda="Nome de Usuário"
                id="nomeUsuario"
                valor={formData.nomeUsuario}
                setar={(e) => setFormData({ ...formData, nomeUsuario: e.target.value })}
              />
              <Campo
                legenda="Senha"
                id="senha"
                tipo="password"
                valor={formData.senha}
                setar={(e) => setFormData({ ...formData, senha: e.target.value })}
              />
              <Campo
                legenda="Cidade"
                id="cidade"
                valor={formData.cidade}
                setar={(e) => setFormData({ ...formData, cidade: e.target.value })}
              />
              <Campo
                legenda="Bairro"
                id="bairro"
                valor={formData.bairro}
                setar={(e) => setFormData({ ...formData, bairro: e.target.value })}
              />
              <Campo
                legenda="Logradouro"
                id="logradouro"
                valor={formData.logradouro}
                setar={(e) => setFormData({ ...formData, logradouro: e.target.value })}
              />
              <Campo
                legenda="Nível"
                id="role"
                tipo="select"
                valor={formData.role}
                setar={(e) => setFormData({ ...formData, role: e.target.value })}
                options={role}
              />
              <Campo
                legenda="Vínculo"
                id="vinculo"
                tipo="select"
                valor={formData.vinculo}
                setar={(e) => setFormData({ ...formData, vinculo: e.target.value })}
                options={vinculo}
              />
              <Campo
                legenda="Possui Formação?"
                id="possuiFormacao"
                tipo="select"
                valor={formData.possuiFormacao}
                setar={(e) => {
                  const possuiFormacao = e.target.value === 'true';
                  setFormData({ ...formData, possuiFormacao });
                  setPossuiFormacao(possuiFormacao);
                }}
                options={[
                  { value: true, label: 'Sim' },
                  { value: false, label: 'Não' },
                ]}
              />
              <Campo
                legenda="Detalhes da Formação"
                id="detalhesFormacao"
                tipo="textarea"
                valor={formData.detalhesFormacao}
                setar={(e) => setFormData({ ...formData, detalhesFormacao: e.target.value })}
                disabled={!formData.possuiFormacao}
              />
              <CButton color="primary" onClick={() => { salvar(formData, SALVAR_NOVO_USUARIO_POST) }}>
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
