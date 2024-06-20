import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react';
import axios from 'axios';

const Compreensao = () => {
  const [formData, setFormData] = useState({
    compreendeOrdens: '',
    executaOrdensVerbaisSimples: '',
    executaOrdensComplexas: '',
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
      console.log('Dados salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Compreensão</strong>
          </CCardHeader>
          <CCardBody>
            <div className="mb-3">
              <CFormLabel htmlFor="compreendeOrdens">Compreende Ordens</CFormLabel>
              <CFormSelect
                id="compreendeOrdens"
                value={formData.compreendeOrdens}
                onChange={(e) =>
                  setFormData({...formData, compreendeOrdens: e.target.value})
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
              <CFormLabel htmlFor="executaOrdensVerbaisSimples">Executa Ordens Verbais Simples</CFormLabel>
              <CFormSelect
                id="executaOrdensVerbaisSimples"
                value={formData.executaOrdensVerbaisSimples}
                onChange={(e) =>
                  setFormData({...formData, executaOrdensVerbaisSimples: e.target.value})
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
              <CFormLabel htmlFor="executaOrdensComplexas">Executa Ordens Complexas</CFormLabel>
              <CFormSelect
                id="executaOrdensComplexas"
                value={formData.executaOrdensComplexas}
                onChange={(e) =>
                  setFormData({...formData, executaOrdensComplexas: e.target.value})
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
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Compreensao;
