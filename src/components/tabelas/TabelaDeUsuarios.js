import React from 'react';
import {
  CButton,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableBody,
  CTableDataCell
} from '@coreui/react';
import {apresentarModalDeOpcoes} from "../../utilidades/ManipuladorDeModal";

const formatDate = (date) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString(undefined, options);
}

const TabelaDeUsuarios = ({ list , setDisplayModalOpcoes, setTituloModalOpcoes, setConteudoModalOpcoes, setIdParaDeletar}) => {
  return (
    <CTable className="table table-bordered">
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>ID</CTableHeaderCell>
          <CTableHeaderCell>Nome</CTableHeaderCell>
          <CTableHeaderCell>CPF</CTableHeaderCell>
          <CTableHeaderCell>Data Nascimento</CTableHeaderCell>
          <CTableHeaderCell>E. Civil</CTableHeaderCell>
          <CTableHeaderCell>Email</CTableHeaderCell>
          <CTableHeaderCell>Telefone</CTableHeaderCell>
          <CTableHeaderCell>Formação</CTableHeaderCell>
          <CTableHeaderCell>D. Formação</CTableHeaderCell>
          <CTableHeaderCell>Nível</CTableHeaderCell>
          <CTableHeaderCell>Vínculo</CTableHeaderCell>
          <CTableHeaderCell>Cidade</CTableHeaderCell>
          <CTableHeaderCell>Bairro</CTableHeaderCell>
          <CTableHeaderCell>Logradouro</CTableHeaderCell>
          <CTableHeaderCell>Foto</CTableHeaderCell>
          <CTableHeaderCell>Ações</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {
          list.map((item) => (

            <CTableRow key={item.idUsuario}>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "50px" }}>{item.idUsuario}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.nome}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.cpf}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{formatDate(item.dataNascimento)}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.estadoCivil}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.email}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.telefone}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.possuiFormacao ? 'Sim' : 'Não'}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.detalhesFormacao}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.role === 'ROLE_USER' ? 'Usuário' : 'Administrador'}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.vinculo}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.cidade}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.bairro}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>{item.logradouro}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "150px" }}>
                <img src={item.foto} width={100} height={100} alt="Foto" />
              </CTableDataCell>
              <CTableDataCell style={{ textAlign: "center", verticalAlign: "middle", minWidth: "230px" }}>
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <CButton color="primary" onClick={() => {
                        window.location.href = `/#/formulario/atualizar-usuario/atualizar?id=${item.idUsuario}`
                      }}>Atualizar</CButton>
                    </div>
                    <div className="col">
                      <CButton color="danger" onClick={() => {
                        apresentarModalDeOpcoes("Atenção",
                        "Deseja realmente deletar este usuário?",
                        setDisplayModalOpcoes,
                        setTituloModalOpcoes,
                        setConteudoModalOpcoes)
                        setIdParaDeletar(item.idUsuario)
                      }
                      }>Deletar</CButton>
                    </div>
                  </div>
                </div>
              </CTableDataCell>
            </CTableRow>
          ))
        }
      </CTableBody>
    </CTable>
  );
}

export default TabelaDeUsuarios;
