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
  BUSCAR_COORDENACAO_MOTORA_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";

const CoordenacaoMotoraRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    testeMaoObjeto: '',
    consideracoesTesteMaoObjeto: '',
    indiceNarizUnilateral: '',
    consideracoesIndiceNarizUnilateral: '',
    testeIndiceIndice: '',
    consideracoesTesteIndiceIndice: '',
    movimentosAlternados: '',
    consideracoesMovimentosAlternados: '',
    testeAlcancePegar: '',
    consideracoesTesteAlcancePegar: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_COORDENACAO_MOTORA_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Coordenação Motora</strong>
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
              <CTableDataCell><strong>Prova mão - objetos?</strong></CTableDataCell>
              <CTableDataCell>{dados.testeMaoObjeto ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.testeMaoObjeto ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesTesteMaoObjeto}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Index - nariz unilateral?</strong></CTableDataCell>
              <CTableDataCell>{dados.indiceNarizUnilateral ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.indiceNarizUnilateral ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesIndiceNarizUnilateral}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Index - index?</strong></CTableDataCell>
              <CTableDataCell>{dados.testeIndiceIndice ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.testeIndiceIndice ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesTesteIndiceIndice}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Movimentos alternados?</strong></CTableDataCell>
              <CTableDataCell>{dados.movimentosAlternados ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.movimentosAlternados ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesMovimentosAlternados}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Prova do rechaço?</strong></CTableDataCell>
              <CTableDataCell>{dados.pegarObjetos ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.pegarObjetos ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesPegarObjetos}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default CoordenacaoMotoraRelatorio;
