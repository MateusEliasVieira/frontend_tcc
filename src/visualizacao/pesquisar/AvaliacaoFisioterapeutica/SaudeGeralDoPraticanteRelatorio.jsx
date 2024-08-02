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
  BUSCAR_SAUDE_GERAL_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";

const SaudeGeralDoPraticanteRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    convulsoesAnteriores: '',
    consideracoesConvulsoesAnteriores: '',
    convulsoesAtuais: '',
    consideracoesConvulsoesAtuais: '',
    frequenciaConvulsoesAtuais: '',
    medicamentos: '',
    consideracoesMedicamentos: '',
    constipacao: '',
    consideracoesConstipacao: '',
    sono: '',
    consideracoesSono: '',
    audicao: '',
    consideracoesAudicao: '',
    visao: '',
    consideracoesVisao: '',
    refluxoGastroesofagico: '',
    consideracoesRefluxoGastroesofagico: '',
    intervencoesCirurgicas: '',
    consideracoesIntervencoesCirurgicas: '',
    alergias: '',
    consideracoesAlergias: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_SAUDE_GERAL_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Saúde Geral do Praticante</strong>
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
              <CTableDataCell><strong>Convulsões anteriores?</strong></CTableDataCell>
              <CTableDataCell>{dados.convulsoesAnteriores ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.convulsoesAnteriores ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesConvulsoesAnteriores}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Convulsões atuais?</strong></CTableDataCell>
              <CTableDataCell>{dados.convulsoesAtuais ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.convulsoesAtuais ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesConvulsoesAtuais}<br/><strong>Frequência:</strong> {dados.frequenciaConvulsoesAtuais}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Medicamentos?</strong></CTableDataCell>
              <CTableDataCell>{dados.medicamentos ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.medicamentos ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesMedicamentos}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Constipação?</strong></CTableDataCell>
              <CTableDataCell>{dados.constipacao ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.constipacao ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesConstipacao}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Sono?</strong></CTableDataCell>
              <CTableDataCell>{dados.sono ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.sono ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesSono}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Audição?</strong></CTableDataCell>
              <CTableDataCell>{dados.audicao ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.audicao ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesAudicao}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Visão?</strong></CTableDataCell>
              <CTableDataCell>{dados.visao ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.visao ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesVisao}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Refluxo Gastroesofágico?</strong></CTableDataCell>
              <CTableDataCell>{dados.refluxoGastroesofagico ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.refluxoGastroesofagico ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesRefluxoGastroesofagico}</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableDataCell><strong>Intervenções cirúrgicas?</strong></CTableDataCell>
            <CTableDataCell>{dados.intervencoesCirurgicas ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            <CTableDataCell>{!dados.intervencoesCirurgicas ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            <CTableDataCell className="celula-header-tabela">{dados.consideracoesIntervencoesCirurgicas}</CTableDataCell>
          </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Alergias?</strong></CTableDataCell>
              <CTableDataCell>{dados.alergias ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.alergias ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesAlergias}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default SaudeGeralDoPraticanteRelatorio;
