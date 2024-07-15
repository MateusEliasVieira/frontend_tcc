import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { buscarDadosPraticante } from "../../../requisicoes/Praticante";
import { BUSCAR_SAUDE_DO_PRATICANTE_POR_ID_GET } from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const SaudeRelatorio = ({ idUsuario }) => {
  const [dados, setDados] = useState({
    alergias: '',
    convulsoes: '',
    doencas: '',
    digestao: '',
    transtornoAlimentar: '',
    respiracao: '',
    sono: '',
    deficitCognitivo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_SAUDE_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Saúde do Praticante</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="auto">
            <p><strong>Alergias:</strong> {dados.alergias}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Convulsões:</strong> {dados.convulsoes}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Doenças significativas/traumas:</strong> {dados.doencas}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Digestão:</strong> {dados.digestao}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Transtorno alimentar:</strong> {dados.transtornoAlimentar}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Respiração:</strong> {dados.respiracao}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Sono:</strong> {dados.sono}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Déficit cognitivo:</strong> {dados.deficitCognitivo}</p>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default SaudeRelatorio;
