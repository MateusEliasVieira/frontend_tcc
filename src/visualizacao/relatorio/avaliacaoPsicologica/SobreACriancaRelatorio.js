import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell, CTableRow
} from '@coreui/react';
import { buscarDadosPraticante } from "../../../requisicoes/Praticante";
import { BUSCAR_SOBRE_A_CRIANCA_DO_PRATICANTE_POR_ID_GET } from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import {colocarApenasPrimeiraLetraMaiuscula} from "../../../utilidades/ManipuladorTexto";

const SobreACriancaRelatorio = ({ idUsuario }) => {
  const [dados, setDados] = useState({
    fezTerapiaEquina: '',
    criancaPlanejada: '',
    cuidadosPreNatais: '',
    chorouNoNascimento: '',
    alimentacao: '',
    observacao: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_SOBRE_A_CRIANCA_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Sobre o Praticante</strong>
      </CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableHeaderCell></CTableHeaderCell>
            <CTableHeaderCell className="celula-header-tabela">Sim</CTableHeaderCell>
            <CTableHeaderCell className="celula-header-tabela">Não</CTableHeaderCell>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell><strong>Já fez equoterapia antes?</strong></CTableDataCell>
              <CTableDataCell>{dados.fezTerapiaEquina ? <h3 className="h3-tabela">X</h3> : ''}</CTableDataCell>
              <CTableDataCell>{dados.fezTerapiaEquina ? '' : <h3 className="h3-tabela">X</h3>}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>A criança foi planejada?</strong></CTableDataCell>
              <CTableDataCell>{dados.criancaPlanejada ? <h3 className="h3-tabela">X</h3> : ''}</CTableDataCell>
              <CTableDataCell>{dados.criancaPlanejada ? '' : <h3 className="h3-tabela">X</h3>}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Teve acompanhamento pré-natal?</strong></CTableDataCell>
              <CTableDataCell>{dados.cuidadosPreNatais ? <h3 className="h3-tabela">X</h3> : ''}</CTableDataCell>
              <CTableDataCell>{dados.cuidadosPreNatais ? '' : <h3 className="h3-tabela">X</h3>}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Chorou ao nascer?</strong></CTableDataCell>
              <CTableDataCell>{dados.chorouNoNascimento ? <h3 className="h3-tabela">X</h3> : ''}</CTableDataCell>
              <CTableDataCell>{dados.chorouNoNascimento ? '' : <h3 className="h3-tabela">X</h3>}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Teve acompanhamento pré-natal?</strong></CTableDataCell>
              <CTableDataCell>{dados.cuidadosPreNatais ? <h3 className="h3-tabela">X</h3> : ''}</CTableDataCell>
              <CTableDataCell>{dados.cuidadosPreNatais ? '' : <h3 className="h3-tabela">X</h3>}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
        <CRow>
          <CCol>
            <p><strong>Qual foi a alimentação?</strong> {colocarApenasPrimeiraLetraMaiuscula(dados.alimentacao)}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <p><strong>Observação:</strong> <p>{dados.observacao}</p></p>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default SobreACriancaRelatorio;
