import React, {useEffect, useState} from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer, CImage,
  CRow,
} from '@coreui/react';
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";

const CompletudeMatriculaRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    dataCompletudeMatricula: '',
    imagemAssinaturaResponsavel: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Data de efetivação da matrícula</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol>
                  <p><strong>Data: {dados.dataCompletudeMatricula}</strong></p>
                </CCol>
                <CCol>
                  <p><strong>Assinatura do responsável do praticante:</strong></p> <CImage width="350" height="200px" src={dados.imagemAssinaturaResponsavel}/>
                </CCol>
              </CRow>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CompletudeMatriculaRelatorio;
