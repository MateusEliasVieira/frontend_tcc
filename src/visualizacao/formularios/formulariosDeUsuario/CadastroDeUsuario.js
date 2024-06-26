import React, {useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm, CImage,
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
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [possuiFormacao, setPossuiFormacao] = useState('');
  const [fotoAtual, setFotoAtual] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    nome: '', foto: '', dataNascimento: '', cpf: '', estadoCivil: '', telefone: '',
    email: '', nomeUsuario: '', senha: '', detalhesFormacao: 'Sem Formação',
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
              dsp={displayModal}
              titulo={tituloModal}
              conteudo={<div dangerouslySetInnerHTML={{ __html: conteudoModal }} />}
              esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
            />
            <CForm>
              <Campo
                legenda="Nome"
                id="nome"
                tipo="text"
                valor={formularioDeDados.nome}
                setar={(e) => setFormularioDeDados({...formularioDeDados, nome: e.target.value})}
              />
              <div className="container text-center" style={{padding: 0}}>
                <div className="row">
                  <div className="col">
                    <Campo
                      id="foto"
                      legenda="Foto (Tamanho máximo: 8MB)"
                      tipo="file"
                      setar={(e) => {
                        converterImagemEmBase64(e.target.files[0])
                          .then((resolve) => {
                            setFormularioDeDados({...formularioDeDados, foto: resolve});
                            setFotoAtual(resolve);
                          })
                          .catch((reject) => {
                            console.log(reject);
                          });
                      }}
                    />
                  </div>
                  <div className="col col-lg-2">
                    {formularioDeDados.foto !== "" ? (
                      <div>
                        <CImage src={fotoAtual} width={100} height={100} style={{borderRadius: 10}}/>
                        <p>Foto</p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <Campo
                legenda="Data de nascimento"
                id="dataNascimento"
                tipo="date"
                valor={formularioDeDados.dataNascimento}
                setar={(e) => setFormularioDeDados({...formularioDeDados, dataNascimento: e.target.value})}
              />
              <Campo
                legenda="CPF"
                id="cpf"
                tipo="text"
                valor={formularioDeDados.cpf}
                setar={(e) => setFormularioDeDados({...formularioDeDados, cpf: e.target.value})}
              />
              <Campo
                legenda="Estado civil"
                id="estadoCivil"
                tipo="select"
                valor={formularioDeDados.estadoCivil}
                setar={(e) => setFormularioDeDados({...formularioDeDados, estadoCivil: e.target.value})}
                opcoes={estadoCivil}
              />
              <Campo
                legenda="Telefone"
                id="telefone"
                tipo="tel"
                valor={formularioDeDados.telefone}
                setar={(e) => setFormularioDeDados({...formularioDeDados, telefone: e.target.value})}
              />
              <Campo
                legenda="Email"
                id="email"
                tipo="email"
                valor={formularioDeDados.email}
                setar={(e) => setFormularioDeDados({...formularioDeDados, email: e.target.value})}
              />
              <Campo
                legenda="Nome de usuário"
                id="nomeUsuario"
                tipo="text"
                valor={formularioDeDados.nomeUsuario}
                setar={(e) => setFormularioDeDados({...formularioDeDados, nomeUsuario: e.target.value})}
              />
              <Campo
                legenda="Senha"
                id="senha"
                tipo="password"
                valor={formularioDeDados.senha}
                setar={(e) => setFormularioDeDados({...formularioDeDados, senha: e.target.value})}
              />
              <Campo
                legenda="Cidade"
                id="cidade"
                tipo="text"
                valor={formularioDeDados.cidade}
                setar={(e) => setFormularioDeDados({...formularioDeDados, cidade: e.target.value})}
              />
              <Campo
                legenda="Bairro"
                id="bairro"
                tipo="text"
                valor={formularioDeDados.bairro}
                setar={(e) => setFormularioDeDados({...formularioDeDados, bairro: e.target.value})}
              />
              <Campo
                legenda="Logradouro"
                id="logradouro"
                tipo="text"
                valor={formularioDeDados.logradouro}
                setar={(e) => setFormularioDeDados({...formularioDeDados, logradouro: e.target.value})}
              />
              <Campo
                legenda="Nível"
                id="role"
                tipo="select"
                valor={formularioDeDados.role}
                setar={(e) => setFormularioDeDados({...formularioDeDados, role: e.target.value})}
                opcoes={role}
              />
              <Campo
                legenda="Vínculo"
                id="vinculo"
                tipo="select"
                valor={formularioDeDados.vinculo}
                setar={(e) => setFormularioDeDados({...formularioDeDados, vinculo: e.target.value})}
                opcoes={vinculo}
              />
              <Campo
                legenda="Possui formação?"
                id="possuiFormacao"
                tipo="select"
                valor={formularioDeDados.possuiFormacao}
                setar={(e) => {
                  setFormularioDeDados({...formularioDeDados, possuiFormacao: e.target.value});
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
                    valor={formularioDeDados.detalhesFormacao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, detalhesFormacao: e.target.value})}
                  />)
                  :
                  (<></>)
              }

              <CButton color="primary" onClick={() => {
                salvar(formularioDeDados, SALVAR_NOVO_USUARIO_POST, setDisplayModal, setTituloModal, setConteudoModal)}} >
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
