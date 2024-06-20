import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CRow,
} from '@coreui/react';
import axios from 'axios';

const AvaliacaoPsicologica = () => {
  const [formData, setFormData] = useState({
    expectativasFamiliaresTerapiaEquina: '',
    resumoCasoObservacoesComplementares: '',
    imagemAssinaturaOuCRPECarimbo: '',
    paciente: {
      idPaciente: '',
    },
  });

  const salvar = async () => {
    const dados = {
      ...formData,
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
      console.log('Dados de avaliação psicológica salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados de avaliação psicológica:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Avaliação Psicológica</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="expectativasFamiliaresTerapiaEquina">Expectativa da Família Quanto à Equoterapia?</CFormLabel>
                <textarea
                  id="expectativasFamiliaresTerapiaEquina"
                  className="form-control"
                  value={formData.expectativasFamiliaresTerapiaEquina}
                  onChange={(e) =>
                    setFormData({...formData, expectativasFamiliaresTerapiaEquina: e.target.value})
                  }
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="resumoCasoObservacoesComplementares">Síntese do Caso e Observações Complementares</CFormLabel>
                <textarea
                  id="resumoCasoObservacoesComplementares"
                  className="form-control"
                  value={formData.resumoCasoObservacoesComplementares}
                  onChange={(e) =>
                    setFormData({...formData, resumoCasoObservacoesComplementares: e.target.value})
                  }
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="imagemAssinaturaOuCRPECarimbo">Imagem da Assinatura ou CRP e Carimbo</CFormLabel>
                <input
                  type="file"
                  id="imagemAssinaturaOuCRPECarimbo"
                  className="form-control"
                  onChange={(e) =>
                    setFormData({...formData, imagemAssinaturaOuCRPECarimbo: e.target.files[0]})
                  }
                />
              </div>

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

export default AvaliacaoPsicologica;
