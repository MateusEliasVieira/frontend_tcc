import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { buscarDadosPraticante } from "../../../requisicoes/Praticante";
import { BUSCAR_ROTINA_DO_PRATICANTE_POR_ID_GET } from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const RotinaRelatorio = ({ idUsuario }) => {
  const [dados, setDados] = useState({
    brincadeiras: '',
    preferenciasPorBrincadeiras: '',
    aceitaMudancasNaRotina: '',
    consideracoesSobreRotina: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_ROTINA_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Rotina do Praticante</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="auto">
            <p><strong>Brincadeiras (onde, como, com quem?):</strong> <p>{dados.brincadeiras}</p></p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Preferências e aversões:</strong> <p>{dados.preferenciasPorBrincadeiras}</p></p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Aceita mudanças na sua rotina?</strong> {dados.aceitaMudancasNaRotina === "SIM" ? 'Sim' : dados.aceitaMudancasNaRotina === "NAO" ? "Não" : ""}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Considerações sobre rotina:</strong> <p>{dados.consideracoesSobreRotina}</p></p>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default RotinaRelatorio;
