import React, { useEffect, useState } from 'react';
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
import { DELETAR_USUARIO_DELETE, PESQUISAR_USUARIO_GET } from "../../../endpoints/usuario/Endpoints";
import Modal from "../../../components/modal/Modal";
import ModalComOpcoes from "../../../components/modal/ModalComOpcoes";
import {
  apresentarModal,
  apresentarModalDeOpcoes,
  confirmar,
  esconderModal,
  esconderModalDeOpcoes
} from "../../../utilidades/ManipuladorDeModal";
import Campo from "../../../components/campos/Campo"
import TabelaDeUsuarios from "../../../components/tabelas/TabelaDeUsuarios"

const PesquisaDeUsuario = () => {
  const [displayModalOpcoes, setDisplayModalOpcoes] = useState(false);
  const [tituloModalOpcoes, setTituloModalOpcoes] = useState("");
  const [conteudoModalOpcoes, setConteudoModalOpcoes] = useState("");

  const [displayModal, setDisplayModal] = useState(false);
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [idParaDeletar, setIdParaDeletar] = useState(null);

  const [formData, setFormData] = useState({ nome: "" });
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    const findAll = async () => {
      try {
        const response = await axios.get(PESQUISAR_USUARIO_GET, {
          params: { nome: "" }
        });
        setLoad(false);
        setList(response.data);
      } catch (error) {
        console.log(error);
        setLoad(false);
      }
    }
    findAll();
  }, []);

  const pesquisar = async () => {
    setLoad(true);
    try {
      const response = await axios.get(PESQUISAR_USUARIO_GET, {
        params: { nome: formData.nome }
      });
      setLoad(false);
      setList(response.data);
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  }

  const deletar = async (id) => {
    if (id !== null) {
      try {
        const response = await axios.delete(DELETAR_USUARIO_DELETE, {
          params: { id: id }
        });
        setList(list.filter(item => item.idUsuario !== id));
        apresentarModal("Sucesso", "Usuário deletado com sucesso!");
      } catch (error) {
        console.log(error);
        apresentarModal("Erro", "Erro ao deletar usuário!");
      }
    } else {
      apresentarModal("Erro", "O id do usuário está nulo!");
    }
  }

  const handleShowModalAction = (titulo, conteudo, id) => {
    setTituloModalOpcoes(titulo);
    setConteudoModalOpcoes(conteudo);
    setIdParaDeletar(id);
    setDisplayModalOpcoes(true);
  }

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
              conteudo={conteudoModal}
              esconderModal={esconderModal}
            />
            <ModalComOpcoes
              classModal={displayModalOpcoes ? "modal fade show" : "modal fade"}
              dsp={displayModalOpcoes ? "block" : "none"}
              title={tituloModalOpcoes}
              conteudo={conteudoModalOpcoes}
              esconderModalDeOpcoes={esconderModalDeOpcoes}
              confirmar={() => {
                deletar(idParaDeletar);
                setDisplayModalOpcoes(false);
              }}
            />
            <CForm>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <Campo
                      id="nome"
                      tipo="text"
                      valor={formData.nome}
                      setar={(e) => setFormData({ ...formData, nome: e.target.value })}
                      legenda=""
                    />
                    <CButton color="primary" onClick={pesquisar}>
                      Pesquisar
                    </CButton>
                  </div>
                </div>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol>
        <CCard>
          <CCardHeader>
            <strong>Resultado da Pesquisa</strong>
          </CCardHeader>
          <CCardBody>
            {
              load ? <h5>Carregando...</h5>
                :
                list.length > 0 ?
                  <div style={{ maxHeight: '800px', overflow: 'auto' }}>
                    <TabelaDeUsuarios list={list} apresentarModalDeOpcoes={apresentarModalDeOpcoes} />
                  </div>
                  :
                  <h5>Nenhum resultado encontrado para '{formData.nome}'</h5>
            }
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default PesquisaDeUsuario;
