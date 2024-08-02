import React, {useState, useEffect} from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow, CTable,
  CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react';
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
 BUSCAR_EM_PE_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";

const EmPeRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    sequenciaDeMovimentos: '',
    consideracoesSequenciaDeMovimentos: '',
    entrarSairPosicaoSentadoChao: '',
    consideracoesEntrarSairPosicaoSentadoChao: '',
    sentadoCadeira: '',
    consideracoesSentadoCadeira: '',
    posturaEquilibrio: '',
    consideracoesPosturaEquilibrio: '',
    seqMovRolaSenta: '',
    consideracoesSeqMovRolaSenta: '',
    passaParaSentado: '',
    consideracoesPassaParaSentado: '',
    observacoes:'',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_EM_PE_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Em Pé</strong>
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
              <CTableDataCell><strong>Sequência de movimentos?</strong></CTableDataCell>
              <CTableDataCell>{dados.sequenciaDeMovimentos ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.sequenciaDeMovimentos ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesSequenciaDeMovimentos}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Entrar e sair da posição de sentado no chão?</strong></CTableDataCell>
              <CTableDataCell>{dados.entrarSairPosicaoSentadoChao ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.entrarSairPosicaoSentadoChao ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesEntrarSairPosicaoSentadoChao}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Sentado na cadeira?</strong></CTableDataCell>
              <CTableDataCell>{dados.sentadoCadeira ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.sentadoCadeira ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesSentadoCadeira}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Postura e equilíbrio?</strong></CTableDataCell>
              <CTableDataCell>{dados.posturaEquilibrio ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.posturaEquilibrio ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesPosturaEquilibrio}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Sequência de movimentação rola, senta?</strong></CTableDataCell>
              <CTableDataCell>{dados.seqMovRolaSenta ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.seqMovRolaSenta ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesSeqMovRolaSenta}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Passa para sentado?</strong></CTableDataCell>
              <CTableDataCell>{dados.passaParaSentado ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{!dados.passaParaSentado ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesPassaParaSentado}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
        <CRow>
          <CCol>
            <p><strong>Observações:</strong> {dados.observacoes}</p>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default EmPeRelatorio;
