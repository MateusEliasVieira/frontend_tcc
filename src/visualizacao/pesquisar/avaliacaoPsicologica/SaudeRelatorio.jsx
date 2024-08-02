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
            <p><strong>Alergias:</strong> <p>{dados.alergias}</p></p>
          </CCol>
          <CCol md="auto">
            <p><strong>Convulsões:</strong> <p>{dados.convulsoes}</p></p>
          </CCol>
          <CCol md="auto">
            <p><strong>Doenças significativas/traumas:</strong> <p>{dados.doencas}</p></p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Digestão:</strong> <p>{dados.digestao}</p></p>
          </CCol>
          <CCol md="auto">
            <p><strong>Transtorno alimentar:</strong> <p>{dados.transtornoAlimentar}</p></p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Respiração:</strong> <p>{dados.respiracao}</p></p>
          </CCol>
          <CCol md="auto">
            <p><strong>Sono:</strong> <p>{dados.sono}</p></p>
          </CCol>
          <CCol md="auto">
            <p><strong>Déficit cognitivo:</strong> <p>{dados.deficitCognitivo}</p></p>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default SaudeRelatorio;
