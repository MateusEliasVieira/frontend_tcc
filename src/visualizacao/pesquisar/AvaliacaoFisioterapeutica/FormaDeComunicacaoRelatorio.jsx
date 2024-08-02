import React, {useState, useEffect} from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable, CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react';
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_FORMA_COMUNICACAO_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";

const FormaDeComunicacaoRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    fala: '',
    consideracoesFala: '',
    gestos: '',
    consideracoesGestos: '',
    usoDosOlhos: '',
    consideracoesUsoDosOlhos: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_FORMA_COMUNICACAO_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Forma de Comunicação</strong>
      </CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell></CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Sim</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Não</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Considerações</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell><strong>Fala?</strong></CTableDataCell>
              <CTableDataCell>{dados.fala ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.fala ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesFala}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Gestos?</strong></CTableDataCell>
              <CTableDataCell>{dados.gestos ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.gestos ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesGestos}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Uso dos olhos?</strong></CTableDataCell>
              <CTableDataCell>{dados.usoDosOlhos ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.usoDosOlhos ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesUsoDosOlhos}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default FormaDeComunicacaoRelatorio;
