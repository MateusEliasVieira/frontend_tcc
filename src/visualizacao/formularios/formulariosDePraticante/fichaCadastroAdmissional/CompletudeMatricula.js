import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react';
import axios from 'axios';

const CompletudeMatricula = () => {
  const [formData, setFormData] = useState({
    dataCompletudeMatricula: '',
    imagemAssinaturaResponsavel: '',
    paciente: {
      idPaciente: '',
    },
  });

  const salvar = async () => {
    const dados = {
      ...formData,
      dataCompletudeMatricula: formData.dataCompletudeMatricula.toISOString() // Convertendo data para o formato ISOString
    };

    try {
      const response = await axios.post(
        SEU_ENDPOINT_DE_SALVAR_AQUI,
        JSON.stringify(dados),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Dados educacionais salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados educacionais:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Data de efetivação da matrícula</strong>
          </CCardHeader>
          <CCardBody>
            <div className="mb-3">
              <CFormLabel htmlFor="dataCompletudeMatricula">Data da Matrícula</CFormLabel>
              <CFormInput
                type="date"
                id="dataCompletudeMatricula"
                value={formData.dataCompletudeMatricula}
                onChange={(e) =>
                  setFormData({ ...formData, dataCompletudeMatricula: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="imagemAssinaturaResponsavel">Imagem da Assinatura do Responsável</CFormLabel>
              <CFormInput
                type="file"
                id="imagemAssinaturaResponsavel"
                value={formData.imagemAssinaturaResponsavel}
                onChange={(e) =>
                  setFormData({ ...formData, imagemAssinaturaResponsavel: e.target.value })
                }
              />
            </div>
            {/* Botão para salvar */}
            <CButton color="primary" onClick={salvar}>
              Salvar
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CompletudeMatricula;
