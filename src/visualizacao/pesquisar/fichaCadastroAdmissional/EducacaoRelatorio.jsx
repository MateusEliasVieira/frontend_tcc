import React, {useState, useEffect} from 'react';
import {CCard, CCardBody, CCardHeader, CCol, CRow} from '@coreui/react';
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {BUSCAR_EDUCACAO_DO_PRATICANTE_POR_ID_GET} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import {colocarApenasPrimeiraLetraMaiuscula} from "../../../utilidades/ManipuladorTexto";

const EducacaoRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    serieEscolar: '',
    classeDeEscola: '',
    instituicaoEducacional: '',
    tipoDeInstituicaoEducacional: '',
    periodo: '',
    praticante: {
      idPraticante: ''
    }
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_EDUCACAO_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Dados Educacionais</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="auto">
            <p><strong>Ano/Série escolar:</strong> {dados.serieEscolar}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Classe de escola:</strong> {colocarApenasPrimeiraLetraMaiuscula(dados.classeDeEscola)}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Instituição de ensino:</strong> {dados.instituicaoEducacional}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Tipo de instituição de ensino:</strong> {colocarApenasPrimeiraLetraMaiuscula(dados.tipoDeInstituicaoEducacional)}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Período:</strong> {colocarApenasPrimeiraLetraMaiuscula(dados.periodo)}</p>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default EducacaoRelatorio;
