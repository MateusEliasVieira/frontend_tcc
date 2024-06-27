import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm, CImage,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import {estadoCivil, role, simOuNao, vinculo} from '../../../constantes/Constantes';
import {
  ATUALIZAR_USUARIO_PUT,
  PESQUISAR_USUARIO_POR_ID_GET,
} from '../../../endpoints/usuario/Endpoints';
import Modal from '../../../components/modal/Modal';
import {converterImagemEmBase64} from '../../../utilidades/ConversorDeImagem';
import {apresentarModal, esconderModal} from '../../../utilidades/ManipuladorDeModal';
import {formatarDataPadraoAnoMesDia} from '../../../utilidades/ManipuladorDeDatas';
import {camposPreenchidos} from '../../../utilidades/VerificadorDeCampos';
import Campo from "../../../components/campos/Campo";
import {atualizarDadosDoUsuario, buscarUsuarioPorId} from "../../../requisicoes/Usuario"; // Certifique-se de que o caminho está correto para o seu projeto

const AtualizacaoDeUsuario = () => {
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [possuiFormacao, setPossuiFormacao] = useState("");
  const [usuarioExiste, setUsuarioExiste] = useState(true);
  const [fotoAtual, setFotoAtual] = useState("");
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
    possuiFormacao: '',
  });

  const getIdUrl = () => {
    const url = window.location.href;
    console.log("URL = "+url)
    const url_split = url.split("?id=");
    return url_split[1];
  };

  useEffect(() => {
    buscarUsuarioPorId(getIdUrl, setUsuarioExiste, setFormularioDeDados, setFotoAtual)
  }, []);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            {usuarioExiste ? <strong>Atualização de Usuário</strong> : <strong>Ops</strong>}
          </CCardHeader>
          {usuarioExiste ? (
            <CCardBody>
              <Modal
                dsp={displayModal}
                titulo={tituloModal}
                conteudo={conteudoModal}
                esconderModal={esconderModal}
              />
              <CForm>
                <Campo
                  id="nome"
                  legenda="Nome"
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
                          <p>Foto Atual</p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>

                <Campo
                  id="dataNascimento"
                  legenda="Data de Nascimento"
                  tipo="date"
                  valor={formatarDataPadraoAnoMesDia(formularioDeDados.dataNascimento)}
                  setar={(e) => setFormularioDeDados({...formularioDeDados, dataNascimento: e.target.value})}
                />
                <Campo
                  id="cpf"
                  legenda="CPF"
                  tipo="text"
                  valor={formularioDeDados.cpf}
                  setar={(e) => setFormularioDeDados({...formularioDeDados, cpf: e.target.value})}
                />
                <Campo
                  id="estadoCivil"
                  legenda="Estado Civil"
                  tipo="select"
                  valor={formularioDeDados.estadoCivil}
                  setar={(e) => setFormularioDeDados({...formularioDeDados, estadoCivil: e.target.value})}
                  opcoes={estadoCivil}
                />
                <Campo
                  id="telefone"
                  legenda="Telefone"
                  tipo="text"
                  valor={formularioDeDados.telefone}
                  setar={(e) => setFormularioDeDados({...formularioDeDados, telefone: e.target.value})}
                />
                <Campo
                  id="email"
                  legenda="Email"
                  tipo="email"
                  valor={formularioDeDados.email}
                  setar={(e) => setFormularioDeDados({...formularioDeDados, email: e.target.value})}
                />
                <Campo
                  id="cidade"
                  legenda="Cidade"
                  tipo="text"
                  valor={formularioDeDados.cidade}
                  setar={(e) => setFormularioDeDados({...formularioDeDados, cidade: e.target.value})}
                />
                <Campo
                  id="bairro"
                  legenda="Bairro"
                  tipo="text"
                  valor={formularioDeDados.bairro}
                  setar={(e) => setFormularioDeDados({...formularioDeDados, bairro: e.target.value})}
                />
                <Campo
                  id="logradouro"
                  legenda="Logradouro"
                  tipo="text"
                  valor={formularioDeDados.logradouro}
                  setar={(e) => setFormularioDeDados({...formularioDeDados, logradouro: e.target.value})}
                />
                <Campo
                  id="role"
                  legenda="Nível"
                  tipo="select"
                  valor={formularioDeDados.role}
                  setar={(e) => setFormularioDeDados({...formularioDeDados, role: e.target.value})}
                  opcoes={role}
                />
                <Campo
                  id="vinculo"
                  legenda="Vínculo"
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
                <CButton color="primary" onClick={()=>{
                    atualizarDadosDoUsuario(formularioDeDados, setDisplayModal, setTituloModal, setConteudoModal)
                  }
                }>
                  Atualizar Usuário
                </CButton>
              </CForm>
            </CCardBody>
          ) : (
            <strong style={{padding: 15}}>Não foi possível encontrar este usuário.</strong>
          )}
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AtualizacaoDeUsuario;

