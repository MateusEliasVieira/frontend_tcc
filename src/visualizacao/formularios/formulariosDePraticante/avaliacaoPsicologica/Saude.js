import React, {useState} from 'react';
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

const Saude = () => {
  const [formData, setFormData] = useState({
    alergias: '',
    convulsoes: '',
    doencas: '',
    digestao: '',
    transtornoAlimentar: '',
    respiracao: '',
    sono: '',
    deficitCognitivo: '',
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
      console.log('Dados de saúde salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados de saúde:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Saúde do Praticante</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="alergias">Alergias</CFormLabel>
                <CFormInput
                  type="text"
                  id="alergias"
                  value={formData.alergias}
                  onChange={(e) =>
                    setFormData({...formData, alergias: e.target.value})
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="convulsoes">Convulsões? Controladas? tipo?</CFormLabel>
                <CFormInput
                  type="text"
                  id="convulsoes"
                  value={formData.convulsoes}
                  onChange={(e) =>
                    setFormData({...formData, convulsoes: e.target.value})
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="doencas">Doenças significativas/traumas</CFormLabel>
                <CFormInput
                  type="text"
                  id="doencas"
                  value={formData.doencas}
                  onChange={(e) =>
                    setFormData({...formData, doencas: e.target.value})
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="digestao">Digestão</CFormLabel>
                <CFormInput
                  type="text"
                  id="digestao"
                  value={formData.digestao}
                  onChange={(e) =>
                    setFormData({...formData, digestao: e.target.value})
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="transtornoAlimentar">Transtorno Alimentar</CFormLabel>
                <CFormInput
                  type="text"
                  id="transtornoAlimentar"
                  value={formData.transtornoAlimentar}
                  onChange={(e) =>
                    setFormData({...formData, transtornoAlimentar: e.target.value})
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="respiracao">Respiração</CFormLabel>
                <CFormInput
                  type="text"
                  id="respiracao"
                  value={formData.respiracao}
                  onChange={(e) =>
                    setFormData({...formData, respiracao: e.target.value})
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="sono">Sono</CFormLabel>
                <CFormInput
                  type="text"
                  id="sono"
                  value={formData.sono}
                  onChange={(e) =>
                    setFormData({...formData, sono: e.target.value})
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="deficitCognitivo">Déficit Cognitivo</CFormLabel>
                <CFormInput
                  type="text"
                  id="deficitCognitivo"
                  value={formData.deficitCognitivo}
                  onChange={(e) =>
                    setFormData({...formData, deficitCognitivo: e.target.value})
                  }
                />
              </div>
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

export default Saude;
