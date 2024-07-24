import React, { useState, useEffect } from 'react';
import {CCard, CCardBody, CCardHeader, CCol, CImage, CRow} from '@coreui/react';
import { buscarDadosPraticante } from "../../../requisicoes/Praticante";
import {
  BUSCAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const AvaliacaoPsicologicaRelatorio = ({ idUsuario }) => {

  const [dados, setDados] = useState({
    expectativasFamiliaresTerapiaEquina: '',
    resumoCasoObservacoesComplementares: '',
    imagemAssinaturaOuCRPECarimbo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Avaliação Psicológica</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="auto">
            <p><strong>Qual a expectativa da família quanto a equoterapia?</strong> <p>{dados.expectativasFamiliaresTerapiaEquina}</p></p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Síntese do caso e observações complementares:</strong> <p>{dados.resumoCasoObservacoesComplementares}</p></p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Imagem da assinatura ou CRP e carimbo:</strong></p> <CImage width="350" height="200px" src={dados.imagemAssinaturaOuCRPECarimbo}/>
          </CCol>
        </CRow>
        {dados.possuiPlanoDeSaude === 'true' &&
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

export default AvaliacaoPsicologicaRelatorio;
