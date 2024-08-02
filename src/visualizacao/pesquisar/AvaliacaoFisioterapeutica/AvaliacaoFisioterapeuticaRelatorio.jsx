import React, {useState, useEffect} from 'react';
import {CCard, CCardBody, CCardHeader, CCol, CRow} from '@coreui/react';
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_AVALIACAO_FISIOTERAPEUTICA_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";

const AvaliacaoFisioterapeuticaRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    diagnosticoFisioterapeutico: '',
    historicoGravidez: '',
    tonusMuscular: '',
    conclusaoIndicacaoEquoterapia: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_AVALIACAO_FISIOTERAPEUTICA_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Avaliação Fisioterapêutica</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="auto">
            <p><strong>Diagnóstico fisioterápico:</strong> <p>{dados.diagnosticoFisioterapeutico}</p></p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>História gestacional - História pregressa:</strong> <p>{dados.historicoGravidez}</p></p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Tônus muscular:</strong> <p>{dados.tonusMuscular}</p></p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Conclusão/Indicação para equoterapia:</strong> <p>{dados.conclusaoIndicacaoEquoterapia}</p></p>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default AvaliacaoFisioterapeuticaRelatorio;
