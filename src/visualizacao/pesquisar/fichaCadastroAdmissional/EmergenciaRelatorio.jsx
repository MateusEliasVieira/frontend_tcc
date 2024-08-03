import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { buscarDadosPraticante } from "../../../requisicoes/Praticante";
import { BUSCAR_EMERGENCIA_DO_PRATICANTE_POR_ID_GET } from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";

const EmergenciaRelatorio = ({ idUsuario }) => {

  const [dados, setDados] = useState({
    ligarPara: '',
    telefone: '',
    possuiPlanoDeSaude: '',
    plano: 'Sem Plano',
    praticante: {
      idPraticante: ''
    }
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_EMERGENCIA_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Dados de Emergência</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="auto">
            <p><strong>Ligar para:</strong> {dados.ligarPara}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Telefone:</strong> {dados.telefone}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Possui plano de saúde?</strong> {dados.possuiPlanoDeSaude === "SIM" ? 'Sim' : dados.possuiPlanoDeSaude === "NAO" ? "Não" : ""}</p>
          </CCol>
        </CRow>
        {dados.possuiPlanoDeSaude === 'SIM' &&
          <CRow>
            <CCol md="auto">
              <p><strong>Qual é o plano?</strong> {dados.plano}</p>
            </CCol>
          </CRow>
        }
      </CCardBody>
    </CCard>
  );
};

export default EmergenciaRelatorio;
