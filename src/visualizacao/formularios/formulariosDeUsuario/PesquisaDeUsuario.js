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
import axios from 'axios';
import {DELETAR_USUARIO_DELETE, PESQUISAR_USUARIO_GET} from "../../../endpoints/usuario/Endpoints";
import Modal from "../../../components/modal/Modal";
import ModalComOpcoes from "../../../components/modal/ModalComOpcoes";
import {
  apresentarModal,
  apresentarModalDeOpcoes,
  esconderModal,
  esconderModalDeOpcoes
} from "../../../utilidades/ManipuladorDeModal";
import Campo from "../../../components/campos/Campo";
import TabelaDeUsuarios from "../../../components/tabelas/TabelaDeUsuarios";
import {deletar, pesquisar} from "../../../requisicoes/Usuario"; // Importa os métodos ajustados

const PesquisaDeUsuario = () => {
  const [displayModalOpcoes, setDisplayModalOpcoes] = useState(false);
  const [tituloModalOpcoes, setTituloModalOpcoes] = useState("");
  const [conteudoModalOpcoes, setConteudoModalOpcoes] = useState("");

  const [displayModal, setDisplayModal] = useState(false);
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [idParaDeletar, setIdParaDeletar] = useState(null);

  const [formData, setFormData] = useState({nome: ""});
  const [list, setList] = useState([]);

  useEffect(() => {
    const buscarTodosUsuarios = async () => {
      try {
        const response = await axios.get(PESQUISAR_USUARIO_GET, {
          params: {nome: ""}
        });
        setList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    buscarTodosUsuarios();
  }, []);

  const deletarUsuario = async () => {
    await deletar(idParaDeletar, setList, setDisplayModal, setTituloModal, setConteudoModal);
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
              classModal={displayModal ? "modal fade show" : "modal fade"}
              dsp={displayModal ? "block" : "none"}
              titulo={tituloModal}
              conteudo={<div dangerouslySetInnerHTML={{ __html: conteudoModal }} />}
              setConteudoModal={setConteudoModal}
              esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
            />

            <ModalComOpcoes
              classModal={displayModalOpcoes ? "modal fade show" : "modal fade"}
              dsp={displayModalOpcoes ? "block" : "none"}
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
                      setar={(e) => setFormData({...formData, nome: e.target.value})}
                      legenda=""
                    />
                    <CButton color="primary" onClick={
                      ()=> pesquisar(formData, setList, setDisplayModal, setTituloModal, setConteudoModal)}>
                      Pesquisar
                    </CButton>
                  </div>
                </div>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>

      {
        list.length > 0 ? (
            <CCol>
              <CCard>
                <CCardHeader>
                  <strong>Resultado da Pesquisa</strong>
                </CCardHeader>
                <CCardBody>
                  <div style={{maxHeight: '800px', overflow: 'auto'}}>
                    <TabelaDeUsuarios list={list} setDisplayModalOpcoes={setDisplayModalOpcoes} setTituloModalOpcoes={setTituloModalOpcoes} setConteudoModalOpcoes={setConteudoModalOpcoes} setIdParaDeletar={setIdParaDeletar}/>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          ) :
          <></>
      }
    </CRow>
  );
};

export default PesquisaDeUsuario;
