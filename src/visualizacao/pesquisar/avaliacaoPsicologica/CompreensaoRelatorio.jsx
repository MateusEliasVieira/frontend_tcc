import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";
import React, {useEffect, useState} from "react";
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_COMPREENSAO_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const CompreensaoRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    compreendeOrdens: '',
    executaOrdensVerbaisSimples: '',
    executaOrdensComplexas: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_COMPREENSAO_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Compreensão</strong>
      </CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell></CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Sim</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Não</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Não Observado</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Parcialmente</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell><strong>Compreende ordens?</strong></CTableDataCell>
              <CTableDataCell>{dados.compreendeOrdens === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.compreendeOrdens === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.compreendeOrdens === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.compreendeOrdens === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Executa ordens verbais simples?</strong></CTableDataCell>
              <CTableDataCell>{dados.executaOrdensVerbaisSimples === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.executaOrdensVerbaisSimples === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.executaOrdensVerbaisSimples === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.executaOrdensVerbaisSimples === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Executa ordens complexas?</strong></CTableDataCell>
              <CTableDataCell>{dados.executaOrdensComplexas === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.executaOrdensComplexas === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.executaOrdensComplexas === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.executaOrdensComplexas === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export {CompreensaoRelatorio}
