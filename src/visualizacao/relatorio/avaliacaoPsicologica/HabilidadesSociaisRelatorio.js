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
  BUSCAR_HABILIDADES_SOCIAIS_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const HabilidadesSociaisRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    passividade: '',
    autoagressao: '',
    heteroagressividade: '',
    assertividade: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_HABILIDADES_SOCIAIS_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Habilidades Sociais</strong>
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
              <CTableDataCell><strong>Passividade?</strong></CTableDataCell>
              <CTableDataCell>{dados.passividade === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.passividade === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.passividade === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.passividade === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Autoagressividade?</strong></CTableDataCell>
              <CTableDataCell>{dados.autoagressao === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.autoagressao === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.autoagressao === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.autoagressao === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Heteroagressividade?</strong></CTableDataCell>
              <CTableDataCell>{dados.heteroagressividade === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.heteroagressividade === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.heteroagressividade === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.heteroagressividade === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Assertividade?</strong></CTableDataCell>
              <CTableDataCell>{dados.assertividade === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.assertividade === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.assertividade === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.assertividade === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export {HabilidadesSociaisRelatorio}
