import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CRow,
  CFormInput, CTable, CTableHead, CTableHeaderCell, CTableRow, CTableBody, CTableDataCell,
} from '@coreui/react';
import axios from 'axios';
import {DELETAR_USUARIO_DELETE, PESQUISAR_USUARIO_GET} from "../../../endpoints/usuario/Endpoints";
import Modal from "../../../components/modal/Modal";
import ModalOpcoes from "../../../components/modal/ModalOpcoes";
import {apresentarModal, confirmar, esconderModal, esconderModalDeOpcoes} from "../../../utilidades/ManipuladorDeModal";

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
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    const findAll = async () => {
      try {
        const response = await axios.get(PESQUISAR_USUARIO_GET, {
          params: {nome: ""}
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
        params: {nome: formData.nome}
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
          params: {id: id}
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

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pesquisar Funcionário</strong>
          </CCardHeader>
          <CCardBody>
            <Modal
              classModal={displayModal ? "modal fade show" : "modal fade"}
              dsp={displayModal ? "block" : "none"}
              titulo={tituloModal}
              conteudo={conteudoModal}
              esconderModal={esconderModal}
            />
            <ModalOpcoes
              classModal={displayModalOpcoes ? "modal fade show" : "modal fade"}
              dsp={displayModalOpcoes ? "block" : "none"}
              title={tituloModalOpcoes}
              conteudo={conteudoModalOpcoes}
              esconderModalDeOpcoes={esconderModalDeOpcoes}
              confirmar={confirmar}
            />
            <CForm>
              <div className="container text-center">
                <div className="row">
                  <div className="col-8">
                    <div className="mb-3">
                      <CFormInput
                        id="nome"
                        placeholder={"Pesquisar nome"}
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="col-1">
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
                  <div style={{maxHeight: '800px', overflow: 'auto'}}>
                    <CTable class="table table-bordered">
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell>ID</CTableHeaderCell>
                          <CTableHeaderCell>Nome</CTableHeaderCell>
                          <CTableHeaderCell>CPF</CTableHeaderCell>
                          <CTableHeaderCell>Data.N</CTableHeaderCell>
                          <CTableHeaderCell>E.Civil</CTableHeaderCell>
                          <CTableHeaderCell>Email</CTableHeaderCell>
                          <CTableHeaderCell>Telefone</CTableHeaderCell>
                          <CTableHeaderCell>Formação</CTableHeaderCell>
                          <CTableHeaderCell>D.Formação</CTableHeaderCell>
                          <CTableHeaderCell>Nível</CTableHeaderCell>
                          <CTableHeaderCell>Vinculo</CTableHeaderCell>
                          <CTableHeaderCell>Cidade</CTableHeaderCell>
                          <CTableHeaderCell>Bairro</CTableHeaderCell>
                          <CTableHeaderCell>Logradouro</CTableHeaderCell>
                          <CTableHeaderCell>Foto</CTableHeaderCell>
                          <CTableHeaderCell>Ações</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {
                          list.map(
                            (item) => (
                              <CTableRow key={item.idUsuario}>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "50px"
                                }}>{item.idUsuario}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.nome}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.cpf}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{formatDate(item.dataNascimento)}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.estadoCivil}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.email}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.telefone}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.possuiFormacao ? 'Sim' : 'Não'}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.detalhesFormacao}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.role === 'ROLE_USER' ? 'Usuário' : 'Administrador'}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.vinculo}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.cidade}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.bairro}</CTableDataCell>
                                <CTableDataCell style={{
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                  minWidth: "150px"
                                }}>{item.logradouro}</CTableDataCell>
                                <CTableDataCell
                                  style={{textAlign: "center", verticalAlign: "middle", minWidth: "150px"}}>
                                  <img src={item.foto} width={100} height={100} alt="Foto"/>
                                </CTableDataCell>
                                <CTableDataCell
                                  style={{textAlign: "center", verticalAlign: "middle", minWidth: "230px"}}>
                                  <div className="container text-center">
                                    <div className="row">
                                      <div className="col">
                                        <CButton color="primary" onClick={() => {
                                          window.location.href = `/#/formulario/pesquisar-funcionario/atualizar?id=${item.idUsuario}`
                                        }}>Atualizar</CButton>
                                      </div>
                                      <div className="col">
                                        <CButton color="danger"
                                                 onClick={() => handleShowModalAction("Confirmar Deleção", "Deseja realmente deletar este usuário?", item.idUsuario)}>Deletar</CButton>
                                      </div>
                                    </div>
                                  </div>
                                </CTableDataCell>
                              </CTableRow>
                            )
                          )
                        }
                      </CTableBody>
                    </CTable>
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
