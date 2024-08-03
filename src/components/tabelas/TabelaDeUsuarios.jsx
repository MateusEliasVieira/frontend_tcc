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
import CIcon from "@coreui/icons-react";
import {cilSettings, cilTrash} from "@coreui/icons";

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
          <CTableHeaderCell>Email</CTableHeaderCell>
          <CTableHeaderCell>Telefone</CTableHeaderCell>
          <CTableHeaderCell>Formação</CTableHeaderCell>
          <CTableHeaderCell>Nível</CTableHeaderCell>
          <CTableHeaderCell>Vínculo</CTableHeaderCell>
          <CTableHeaderCell>Ações</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {
          list.map((item) => (
            <CTableRow key={item.idUsuario} style={{cursor:"pointer"}}>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px" }}>{item.nome}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px" }}>{item.email}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px" }}>{item.telefone}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px" }}>{item.possuiFormacao ? 'Sim' : 'Não'}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px", fontWeight:"bold", color: item.role === 'ROLE_USER' ? '#e55353':'#e55353' }}>
                {item.role === 'ROLE_USER' ? 'Usuário' : 'Administrador'}
              </CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px" }}>{formatarVinculo(item.vinculo)}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px" }}>
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <CButton color="" title={`Será redirecionado para atualizar os dados de ${item.nome}`} onClick={() => {
                        window.location.href = `/#/atualizar-usuario/atualizar?id=${item.idUsuario}`
                      }}><CIcon icon={cilSettings}/></CButton>
                    </div>
                    <div className="col">
                      <CButton color="" title={`Esta ação deleta ${item.nome}`} onClick={() => {
                        apresentarModalDeOpcoes("Atenção",
                        "Deseja realmente deletar este usuário?",
                        setDisplayModalOpcoes,
                        setTituloModalOpcoes,
                        setConteudoModalOpcoes)
                        setIdParaDeletar(item.idUsuario)
                      }
                      }><CIcon icon={cilTrash}/></CButton>
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
