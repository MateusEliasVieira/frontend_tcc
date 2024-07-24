import React, {useState, useEffect} from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react';
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_MOBILIDADE_ARTICULAR_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";

const MobilidadeArticularRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    flexaoAtivaOmbro: '',
    flexaoPassivaOmbro: '',
    abducaoAtivaOmbro: '',
    abducaoPassivaOmbro: '',
    aducaoAtivaOmbro: '',
    aducaoPassivaOmbro: '',
    flexaoAtivaCotovelo: '',
    flexaoPassivaCotovelo: '',
    extensaoAtivaCotovelo: '',
    extensaoPassivaCotovelo: '',
    flexaoAtivaQuadril: '',
    flexaoPassivaQuadril: '',
    extensaoAtivaQuadril: '',
    extensaoPassivaQuadril: '',
    aducaoAtivaQuadril: '',
    aducaoPassivaQuadril: '',
    abducaoAtivaQuadril: '',
    abducaoPassivaQuadril: '',
    rotacaoInternaAtivaQuadril: '',
    rotacaoInternaPassivaQuadril: '',
    rotacaoExternaAtivaQuadril: '',
    rotacaoExternaPassivaQuadril: '',
    extensaoAtivaJoelho: '',
    extensaoPassivaJoelho: '',
    flexaoAtivaJoelho: '',
    flexaoPassivaJoelho: '',
    dorsiflexaoAtivaTornozelo: '',
    dorsiflexaoPassivaTornozelo: '',
    flexaoPlantarAtivaTornozelo: '',
    flexaoPlantarPassivaTornozelo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_MOBILIDADE_ARTICULAR_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Mobilidade Articular</strong>
      </CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell className="celula-header-tabela">Articulações</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Movimentos</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Ativa</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Passiva</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle" rowSpan="3"><strong>Ombro</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela"><strong>Flexão</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.flexaoAtivaOmbro}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.flexaoPassivaOmbro}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela"><strong>Abdução</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.abducaoAtivaOmbro}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.abducaoPassivaOmbro}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela"><strong>Adução</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.aducaoAtivaOmbro}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.aducaoPassivaOmbro}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle" rowSpan="2"><strong>Cotovelo</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela"><strong>Flexão</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.flexaoAtivaCotovelo}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.flexaoPassivaCotovelo}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela"><strong>Extensão</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.extensaoAtivaCotovelo}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.extensaoPassivaCotovelo}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle" rowSpan="6"><strong>Quadril</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela"><strong>Flexão</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.flexaoAtivaQuadril}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.flexaoPassivaQuadril}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela"><strong>Extensão</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.extensaoAtivaQuadril}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.extensaoPassivaQuadril}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela"><strong>Adução</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.aducaoAtivaQuadril}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.aducaoPassivaQuadril}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela"><strong>Abdução</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.abducaoAtivaQuadril}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.abducaoPassivaQuadril}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela"><strong>Rotação Interna</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.rotacaoInternaAtivaQuadril}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.rotacaoInternaPassivaQuadril}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela"><strong>Rotação Externa</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.rotacaoExternaAtivaQuadril}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.rotacaoExternaPassivaQuadril}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle" rowSpan="2"><strong>Joelho</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela"><strong>Flexão</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.flexaoAtivaJoelho}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.flexaoPassivaJoelho}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela"><strong>Extensão</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.extensaoAtivaJoelho}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.extensaoPassivaJoelho}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle" rowSpan="2"><strong>Tornozelo</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela"><strong>Dorsiflexão</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.dorsiflexaoAtivaTornozelo}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.dorsiflexaoPassivaTornozelo}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela"><strong>Plantiflexão</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.flexaoPlantarAtivaTornozelo}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.flexaoPlantarPassivaTornozelo}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default MobilidadeArticularRelatorio;
