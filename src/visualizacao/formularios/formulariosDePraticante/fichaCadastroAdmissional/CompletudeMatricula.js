import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CForm,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import { converterImagemEmBase64 } from "../../../../utilidades/ConversorDeImagem";
import Campo from '../../../../components/campos/Campo'; // Importando o componente Campo

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
            <CForm>
              <Campo
                tipo="date"
                id="dataCompletudeMatricula"
                valor={formData.dataCompletudeMatricula}
                setar={(e) => setFormData({ ...formData, dataCompletudeMatricula: e.target.value })}
                legenda="Data da matrícula"
              />
              <Campo
                tipo="file"
                id="imagemAssinaturaResponsavel"
                setar={(e) => {
                  converterImagemEmBase64(e.target.files[0])
                    .then((resolve) => {
                      setFormData({ ...formData, imagemAssinaturaResponsavel: resolve });
                    })
                    .catch((reject) => {
                      console.log(reject);
                    });
                }}
                legenda="Imagem da assinatura do responsável"
              />
              {/* Botão para salvar */}
              <CButton color="primary" onClick={salvar}>
                Salvar
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CompletudeMatricula;
