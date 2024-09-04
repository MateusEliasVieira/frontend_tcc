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
import {ATUALIZAR_USUARIO} from "../../URL/URL";

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
          <CTableHeaderCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}>Nome</CTableHeaderCell>
          <CTableHeaderCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}>Email</CTableHeaderCell>
          <CTableHeaderCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}>Telefone</CTableHeaderCell>
          <CTableHeaderCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}>Formação</CTableHeaderCell>
          <CTableHeaderCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}>Nível</CTableHeaderCell>
          <CTableHeaderCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}>Vínculo</CTableHeaderCell>
          <CTableHeaderCell colSpan="2" style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}>Ações</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {
          list.map((item) => (
            <CTableRow key={item.idUsuario} style={{cursor:"pointer"}}>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}>{item.nome}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}><a href={`mailto:${item.email}`}>{item.email}</a></CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}>{item.telefone}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "50px", textAlign: "center" }}>{item.possuiFormacao ? 'Sim' : 'Não'}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center", fontWeight:"bold", color: item.role === 'ROLE_USER' ? '#e55353':'#e55353' }}>
                {item.role === 'ROLE_USER' ? 'Usuário' : 'Administrador'}
              </CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}>{formatarVinculo(item.vinculo)}</CTableDataCell>
              <CTableDataCell style={{ verticalAlign: "middle", minWidth: "150px", textAlign: "center" }}>
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <CButton color="" title={`Será redirecionado para atualizar os dados de ${item.nome}`} onClick={() => {
                        window.location.href = `${ATUALIZAR_USUARIO}?id=${item.idUsuario}`
                      }}><CIcon icon={cilSettings} width={20}/></CButton>
                    </div>
                    <div className="col">
                      <CButton color="" title={`Esta ação deletará ${item.nome}`} onClick={() => {
                        apresentarModalDeOpcoes("Atenção",
                        "Deseja realmente deletar este usuário?",
                        setDisplayModalOpcoes,
                        setTituloModalOpcoes,
                        setConteudoModalOpcoes)
                        setIdParaDeletar(item.idUsuario)
                      }
                      }><CIcon icon={cilTrash} width={20}/></CButton>
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
