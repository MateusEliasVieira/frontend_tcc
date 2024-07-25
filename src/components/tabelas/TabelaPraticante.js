import {CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import React from "react";
import CIcon from "@coreui/icons-react";
import TimelineIcon from '@mui/icons-material/Timeline';
import ModalComEvolucao from "../modal/ModalComEvolucao";

const TabelaPraticante = (props) => {

  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>Código</CTableHeaderCell>
          <CTableHeaderCell>Nome completo</CTableHeaderCell>
          <CTableHeaderCell>Diagnóstico clínico</CTableHeaderCell>
          <CTableHeaderCell>Evolução</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {
          props.lista.map((item) => (
              <CTableRow>
                <CTableDataCell>{item.praticante.idPraticante}</CTableDataCell>
                <CTableDataCell style={{cursor: "pointer"}} title={"Gerar relatório para " + item.nomeCompleto} onClick={
                  () => {
                    window.location.href = `/#/relatorio/gerar-relatorio-de-praticante?id=${item.praticante.idPraticante}`
                  }
                }>
                  <strong>{item.nomeCompleto}</strong>
                </CTableDataCell>
                <CTableDataCell>{item.diagnosticoClinico}</CTableDataCell>
                <CTableDataCell><ModalComEvolucao nomeCompleto={item.nomeCompleto}/></CTableDataCell>
              </CTableRow>
            )
          )}
      </CTableBody>
    </CTable>
  )
}

export default TabelaPraticante
