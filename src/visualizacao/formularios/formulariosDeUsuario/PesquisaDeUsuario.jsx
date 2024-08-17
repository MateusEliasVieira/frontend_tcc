import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CRow
} from '@coreui/react';

import Modal from "../../../components/modal/Modal";
import ModalComOpcoes from "../../../components/modal/ModalComOpcoes";
import {
  esconderModal,
  esconderModalDeOpcoes
} from "../../../utilidades/ManipuladorDeModal";
import Campo from "../../../components/campos/Campo";
import TabelaDeUsuarios from "../../../components/tabelas/TabelaDeUsuarios";
import {buscarTodosUsuarios, deletar, pesquisar} from "../../../requisicoes/Usuario"; // Importa os métodos ajustados

const PesquisaDeUsuario = () => {
  const [displayModalOpcoes, setDisplayModalOpcoes] = useState("none");
  const [tituloModalOpcoes, setTituloModalOpcoes] = useState("");
  const [conteudoModalOpcoes, setConteudoModalOpcoes] = useState("");
  const [ativar, setAtivar] = useState(true)

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [idParaDeletar, setIdParaDeletar] = useState(null);

  const [formData, setFormData] = useState({nome: ""});
  const [list, setList] = useState([]);

  useEffect(() => {
    pesquisar(formData, setList, setDisplayModal, setTituloModal, setConteudoModal, setAtivar);
  }, [formData]);

  useEffect(() => {
    buscarTodosUsuarios(setList, setDisplayModal, setTituloModal, setConteudoModal, setAtivar);
  }, []);

  const deletarUsuario = async () => {
    await deletar(idParaDeletar, setList, setDisplayModal, setTituloModal, setConteudoModal).then(() => {
      esconderModalDeOpcoes(setDisplayModalOpcoes, setTituloModalOpcoes, setConteudoModalOpcoes)
    })
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pesquisar Usuário</strong>
          </CCardHeader>
          <CCardBody>
            <Modal
              dsp={displayModal}
              titulo={tituloModal}
              conteudo={<div dangerouslySetInnerHTML={{__html: conteudoModal}}/>}
              setConteudoModal={setConteudoModal}
              esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
            />
            <ModalComOpcoes
              dsp={displayModalOpcoes}
              titulo={tituloModalOpcoes}
              setConteudoModalOpcoes={setConteudoModalOpcoes}
              conteudo={conteudoModalOpcoes}
              esconderModalDeOpcoes={() => esconderModalDeOpcoes(setDisplayModalOpcoes, setTituloModalOpcoes, setConteudoModalOpcoes)}
              confirmar={deletarUsuario}
            />
            <CForm>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <Campo
                      id="nome"
                      tipo="text"
                      valor={formData.nome}
                      setar={(e) => {
                        setFormData({...formData, nome: e.target.value})
                      }}
                      legenda="Pesquisa por Nome"
                    />
                  </div>
                </div>
              </div>
            </CForm>
            <CCardBody>

              {
                ativar ?

                  <div className="spinner-border" role="status" style={{margin: '50px auto', display: 'block'}}>
                    <strong className="sr-only">Loading...</strong>
                  </div>

                  :

                  <div style={{maxHeight: '800px', overflow: 'auto'}}>
                    <TabelaDeUsuarios list={list} setDisplayModalOpcoes={setDisplayModalOpcoes}
                                      setTituloModalOpcoes={setTituloModalOpcoes}
                                      setConteudoModalOpcoes={setConteudoModalOpcoes}
                                      setIdParaDeletar={setIdParaDeletar}/>

                  </div>
              }
            </CCardBody>
          </CCardBody>
        </CCard>
      </CCol>


    </CRow>
  );
};

export default PesquisaDeUsuario;
