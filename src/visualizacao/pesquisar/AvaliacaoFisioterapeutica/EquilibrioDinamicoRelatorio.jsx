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
  BUSCAR_EQUILIBRIO_DINAMICO_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import {equilibrioDinamico} from "../../../constantes/Constantes";

const SaudeGeralDoPraticanteRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    engatinhar: '',
    comentariosEngatinhar: '',
    marchaVoluntaria: '',
    comentariosMarchaVoluntaria: '',
    saltarPesJuntos: '',
    comentariosSaltarPesJuntos: '',
    correrDesviandoObstaculos: '',
    comentariosCorrerDesviandoObstaculos: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_EQUILIBRIO_DINAMICO_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Equilíbrio Dinâmico</strong>
      </CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell></CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Nenhuma Dificuldade</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Alguma Dificuldade</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Bastante Dificuldade</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Não Realiza</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Comentário</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>Engatinha</CTableDataCell>
              <CTableDataCell>{dados.engatinhar === equilibrioDinamico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.engatinhar === equilibrioDinamico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.engatinhar === equilibrioDinamico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.engatinhar === equilibrioDinamico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosEngatinhar}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Marcha Voluntária</CTableDataCell>
              <CTableDataCell>{dados.marchaVoluntaria === equilibrioDinamico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.marchaVoluntaria === equilibrioDinamico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.marchaVoluntaria === equilibrioDinamico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.marchaVoluntaria === equilibrioDinamico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosMarchaVoluntaria}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Saltar com os dois pés juntos</CTableDataCell>
              <CTableDataCell>{dados.saltarPesJuntos === equilibrioDinamico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.saltarPesJuntos === equilibrioDinamico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.saltarPesJuntos === equilibrioDinamico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.saltarPesJuntos === equilibrioDinamico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosSaltarPesJuntos}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Correr desviando obstáculos</CTableDataCell>
              <CTableDataCell>{dados.correrDesviandoObstaculos === equilibrioDinamico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.correrDesviandoObstaculos === equilibrioDinamico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.correrDesviandoObstaculos === equilibrioDinamico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.correrDesviandoObstaculos === equilibrioDinamico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosCorrerDesviandoObstaculos}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default SaudeGeralDoPraticanteRelatorio;
