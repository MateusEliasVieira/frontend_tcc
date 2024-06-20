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

const SaudeMental = () => {
  const [formData, setFormData] = useState({
    apresentaConfusaoMental: '',
    apresentaDelirios: '',
    apresentaAlucinacoes: '',
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
      console.log('Aspectos mentais salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os aspectos mentais:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Saúde Mental</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="apresentaConfusaoMental">Apresenta Confusão Mental</CFormLabel>
                <CFormSelect
                  id="apresentaConfusaoMental"
                  value={formData.apresentaConfusaoMental}
                  onChange={(e) =>
                    setFormData({ ...formData, apresentaConfusaoMental: e.target.value })
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
                <CFormLabel htmlFor="apresentaDelirios">Apresenta Delírios</CFormLabel>
                <CFormSelect
                  id="apresentaDelirios"
                  value={formData.apresentaDelirios}
                  onChange={(e) =>
                    setFormData({ ...formData, apresentaDelirios: e.target.value })
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
                <CFormLabel htmlFor="apresentaAlucinacoes">Apresenta Alucinações</CFormLabel>
                <CFormSelect
                  id="apresentaAlucinacoes"
                  value={formData.apresentaAlucinacoes}
                  onChange={(e) =>
                    setFormData({ ...formData, apresentaAlucinacoes: e.target.value })
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
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

export default SaudeMental;
