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

const formatarVinculo = (vinculo) => {
  if(vinculo === "PREFEITURA_PIRES_DO_RIO"){
    return "Prefeitura de Pires do Rio"
  }else if(vinculo === "PREFEITURA_URUTAI"){
    return "Prefeitura de Urutaí"
  }else{
    return "IF Goiano"
  }
}

const TabelaDeUsuarios = ({ list , setDisplayModalOpcoes, setTituloModalOpcoes, setConteudoModalOpcoes, setIdParaDeletar}) => {
  return (
    <CTable hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>Nome</CTableHeaderCell>
          {/*<CTableHeaderCell>Data Nascimento</CTableHeaderCell>*/}
          <CTableHeaderCell>Email</CTableHeaderCell>
          <CTableHeaderCell>Telefone</CTableHeaderCell>
          <CTableHeaderCell>Formação</CTableHeaderCell>
          <CTableHeaderCell>Nível</CTableHeaderCell>
          <CTableHeaderCell>Vínculo</CTableHeaderCell>
          <CTableHeaderCell></CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {
          list.map((item) => (

            <CTableRow key={item.idUsuario} style={{cursor:"pointer"}}>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px" }}>{item.nome}</CTableDataCell>
              {/*<CTableDataCell style={{ , verticalAlign: "middle", minWidth: "150px" }}>{formatDate(item.dataNascimento)}</CTableDataCell>*/}
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px" }}>{item.email}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px" }}>{item.telefone}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px" }}>{item.possuiFormacao ? 'Sim' : 'Não'}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px", fontWeight:"bold", color: item.role === 'ROLE_USER' ? 'dodgerblue':'#0ecf8f' }}>{item.role === 'ROLE_USER' ? 'Usuário' : 'Administrador'}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px" }}>{formatarVinculo(item.vinculo)}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "230px" }}>
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
