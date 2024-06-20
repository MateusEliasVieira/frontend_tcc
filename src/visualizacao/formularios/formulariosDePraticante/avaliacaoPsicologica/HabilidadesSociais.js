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
  CFormSelect,
} from '@coreui/react';
import axios from 'axios';

const HabilidadesSociais = () => {
  const [formData, setFormData] = useState({
    passividade: '',
    autoagressao: '',
    heteroagressividade: '',
    assertividade: '',
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
      console.log('Dados de comportamento salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados de comportamento:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Habilidades Sociais</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="passividade">Passividade</CFormLabel>
                <CFormSelect
                  id="passividade"
                  value={formData.passividade}
                  onChange={(e) =>
                    setFormData({...formData, passividade: e.target.value})
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="autoagressao">Autoagressividade</CFormLabel>
                <CFormSelect
                  id="autoagressao"
                  value={formData.autoagressao}
                  onChange={(e) =>
                    setFormData({...formData, autoagressao: e.target.value})
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="heteroagressividade">Heteroagressividade</CFormLabel>
                <CFormSelect
                  id="heteroagressividade"
                  value={formData.heteroagressividade}
                  onChange={(e) =>
                    setFormData({...formData, heteroagressividade: e.target.value})
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="assertividade">Assertividade</CFormLabel>
                <CFormSelect
                  id="assertividade"
                  value={formData.assertividade}
                  onChange={(e) =>
                    setFormData({...formData, assertividade: e.target.value})
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
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

export default HabilidadesSociais;
