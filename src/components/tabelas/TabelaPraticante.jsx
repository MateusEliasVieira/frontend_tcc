import {CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import React from "react";
import ModalComEvolucaoGraficoDeLinhas from "../modal/ModalComEvolucaoGraficoDeLinhas";
import ModalComEvolucaoGraficoDeBarras from "../modal/ModalComEvolucaoGraficoDeBarras";
import ModalParaEvoluir from "../modal/ModalParaEvoluir";

const TabelaPraticante = (props) => {

  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>Código</CTableHeaderCell>
          <CTableHeaderCell>Nome completo</CTableHeaderCell>
          <CTableHeaderCell>Diagnóstico clínico</CTableHeaderCell>
          <CTableHeaderCell colSpan="2" style={{width: "75px"}}>Frequência</CTableHeaderCell>
          <CTableHeaderCell>Relatório</CTableHeaderCell>
          <CTableHeaderCell>Evoluir</CTableHeaderCell>
        </CTableRow>
      </CTableHead>

      <CTableBody>
        {
          props.lista.map((item) => (
              <CTableRow>
                <CTableDataCell>{item.praticante.idPraticante}</CTableDataCell>

                <CTableDataCell>
                  {item.nomeCompleto}
                </CTableDataCell>

                <CTableDataCell>{item.diagnosticoClinico}</CTableDataCell>

                <CTableDataCell style={{verticalAlign: "middle"}}>
                  <ModalComEvolucaoGraficoDeLinhas nomeCompleto={item.nomeCompleto} idPraticante={item.praticante.idPraticante}/>
                </CTableDataCell>

                <CTableDataCell style={{verticalAlign: "middle"}}>
                  <ModalComEvolucaoGraficoDeBarras nomeCompleto={item.nomeCompleto} idPraticante={item.praticante.idPraticante}/>
                </CTableDataCell>

                <CTableDataCell>
                  <CButton color="" title={"Gerar relatório para " + item.nomeCompleto} style={{background: "none"}} onClick={
                    () => {
                      window.location.href = `/#/relatorio/gerar-relatorio-de-praticante?id=${item.praticante.idPraticante}`
                    }
                  }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                            d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
                    </svg>
                  </CButton>
                </CTableDataCell>

                <CTableDataCell>
                  <ModalParaEvoluir nomeCompleto={item.nomeCompleto} idPraticante={item.praticante.idPraticante}/>
                </CTableDataCell>

              </CTableRow>
            )
          )}
      </CTableBody>
    </CTable>
  )
}

export default TabelaPraticante
