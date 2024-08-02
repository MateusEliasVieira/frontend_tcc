import React, {useState, useEffect} from 'react';
import {CCard, CCardBody, CCardHeader, CCol, CRow} from '@coreui/react';
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_QUADRO_ATUAL_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";

const QuadroAtualRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    locomocaoAtual: '',
    restricoes: '',
    deformidades: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_QUADRO_ATUAL_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Quadro Atual</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="auto">
            <p><strong>Locomoção atual:</strong> {dados.locomocaoAtual}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Restrições:</strong> {dados.restricoes}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Deformidades:</strong> {dados.deformidades}</p>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default QuadroAtualRelatorio;
