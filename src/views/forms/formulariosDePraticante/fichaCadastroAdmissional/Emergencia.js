import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react';
import axios from 'axios';

const Emergencia = () => {
  const [formData, setFormData] = useState({
    ligarPara: '',
    telefone: '',
    possuiPlanoDeSaude: false,
    plano: '',
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
            <strong>Em caso de emergência</strong>
          </CCardHeader>
          <CCardBody>
            <div className="mb-3">
              <CFormLabel htmlFor="ligarPara">Ligar para</CFormLabel>
              <CFormInput
                type="text"
                id="ligarPara"
                value={formData.ligarPara}
                onChange={(e) =>
                  setFormData({ ...formData, ligarPara: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="telefone">Telefone</CFormLabel>
              <CFormInput
                type="text"
                id="telefone"
                value={formData.telefone}
                onChange={(e) =>
                  setFormData({ ...formData, telefone: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="possuiPlanoDeSaude">Possui Plano de Saúde</CFormLabel>
              <CFormSelect
                id="possuiPlanoDeSaude"
                value={formData.possuiPlanoDeSaude}
                onChange={(e) =>
                  setFormData({ ...formData, possuiPlanoDeSaude: e.target.value })
                }
              >
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </CFormSelect>
            </div>
            {formData.possuiPlanoDeSaude && (
              <div className="mb-3">
                <CFormLabel htmlFor="plano">Qual é o plano?</CFormLabel>
                <CFormInput
                  type="text"
                  id="plano"
                  value={formData.plano}
                  onChange={(e) =>
                    setFormData({ ...formData, plano: e.target.value })
                  }
                />
              </div>
            )}
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

export default Emergencia;
