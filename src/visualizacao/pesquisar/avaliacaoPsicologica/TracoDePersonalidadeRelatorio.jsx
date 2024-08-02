import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";
import React, {useEffect, useState} from "react";
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
 BUSCAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const TracoDePersonalidadeRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    extroversao: '',
    fobia: '',
    obsessao: '',
    introversao: '',
    ansiedade: '',
    histeria: '',
    dependenciaEmocional: '',
    timidez: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return(
    <CCard>
      <CCardHeader>
        <strong>Traços de Personalidade</strong>
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
              <CTableDataCell><strong>Extroversão?</strong></CTableDataCell>
              <CTableDataCell>{dados.extroversao === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.extroversao === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.extroversao === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.extroversao === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Fobia?</strong></CTableDataCell>
              <CTableDataCell>{dados.fobia === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.fobia === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.fobia === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.fobia === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Obsessão?</strong></CTableDataCell>
              <CTableDataCell>{dados.obsessao === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.obsessao === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.obsessao === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.obsessao === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Introversão?</strong></CTableDataCell>
              <CTableDataCell>{dados.introversao === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.introversao === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.introversao === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.introversao === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Ansiedade?</strong></CTableDataCell>
              <CTableDataCell>{dados.ansiedade === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.ansiedade === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.ansiedade === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.ansiedade === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Histeria?</strong></CTableDataCell>
              <CTableDataCell>{dados.histeria === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.histeria === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.histeria === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.histeria === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Dependência emocional?</strong></CTableDataCell>
              <CTableDataCell>{dados.dependenciaEmocional === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.dependenciaEmocional === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.dependenciaEmocional === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.dependenciaEmocional === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Timidez?</strong></CTableDataCell>
              <CTableDataCell>{dados.timidez === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.timidez === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.timidez === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.timidez === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export {TracoDePersonalidadeRelatorio}
