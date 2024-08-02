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
  BUSCAR_LINGUAGEM_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const LinguagemRelatorio = ({idUsuario}) => {
  const [dados, setDados] = useState({
    compreensaoVerbal: '',
    gesto: '',
    gritos: '',
    mimicaFacial: '',
    monossilabos: '',
    frasesCurtas: '',
    frasesCompletas: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_LINGUAGEM_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Linguagem</strong>
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
              <CTableDataCell><strong>Verbal compreensiva?</strong></CTableDataCell>
              <CTableDataCell>{dados.compreensaoVerbal === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.compreensaoVerbal === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.compreensaoVerbal === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.compreensaoVerbal === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Gestual?</strong></CTableDataCell>
              <CTableDataCell>{dados.gesto === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.gesto === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.gesto === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.gesto === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Gritos?</strong></CTableDataCell>
              <CTableDataCell>{dados.gritos === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.gritos === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.gritos === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.gritos === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Mímica facial?</strong></CTableDataCell>
              <CTableDataCell>{dados.mimicaFacial === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.mimicaFacial === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.mimicaFacial === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.mimicaFacial === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Monossílabos</strong></CTableDataCell>
              <CTableDataCell>{dados.monossilabos === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.monossilabos === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.monossilabos === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.monossilabos === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Frases curtas?</strong></CTableDataCell>
              <CTableDataCell>{dados.frasesCurtas === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.frasesCurtas === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.frasesCurtas === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.frasesCurtas === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Frases completas?</strong></CTableDataCell>
              <CTableDataCell>{dados.frasesCompletas === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.frasesCompletas === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.frasesCompletas === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.frasesCompletas === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export {LinguagemRelatorio}
