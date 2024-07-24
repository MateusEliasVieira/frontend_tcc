import {CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import React from "react";

const TabelaPraticante = (props) => {
  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>Código</CTableHeaderCell>
          <CTableHeaderCell>Nome completo</CTableHeaderCell>
          <CTableHeaderCell>Diagnóstico clínico</CTableHeaderCell>
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
              </CTableRow>
            )
          )}
      </CTableBody>
    </CTable>
  )
}

export default TabelaPraticante
