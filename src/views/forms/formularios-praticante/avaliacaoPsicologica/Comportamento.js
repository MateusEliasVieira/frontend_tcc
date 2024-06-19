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

const Comportamento = () => {
  const [formData, setFormData] = useState({
    agitacao: '',
    toleranciaFrustracao: '',
    respeitaLimitesRegras: '',
    oposicao: '',
    atencaoConcentracao: '',
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
      console.log('Aspectos de comportamento salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os aspectos de comportamento:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Comportamento</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="agitacao">Agitação</CFormLabel>
                <CFormSelect
                  id="agitacao"
                  value={formData.agitacao}
                  onChange={(e) =>
                    setFormData({ ...formData, agitacao: e.target.value })
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
                <CFormLabel htmlFor="toleranciaFrustracao">Tolerância à Frustração</CFormLabel>
                <CFormSelect
                  id="toleranciaFrustracao"
                  value={formData.toleranciaFrustracao}
                  onChange={(e) =>
                    setFormData({ ...formData, toleranciaFrustracao: e.target.value })
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
                <CFormLabel htmlFor="respeitaLimitesRegras">Respeita Limites e Regras</CFormLabel>
                <CFormSelect
                  id="respeitaLimitesRegras"
                  value={formData.respeitaLimitesRegras}
                  onChange={(e) =>
                    setFormData({ ...formData, respeitaLimitesRegras: e.target.value })
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
                <CFormLabel htmlFor="oposicao">Oposição</CFormLabel>
                <CFormSelect
                  id="oposicao"
                  value={formData.oposicao}
                  onChange={(e) =>
                    setFormData({ ...formData, oposicao: e.target.value })
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
                <CFormLabel htmlFor="atencaoConcentracao">Atenção e Concentração</CFormLabel>
                <CFormSelect
                  id="atencaoConcentracao"
                  value={formData.atencaoConcentracao}
                  onChange={(e) =>
                    setFormData({ ...formData, atencaoConcentracao: e.target.value })
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

export default Comportamento;
