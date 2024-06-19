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

const RelacaoDaFamiliaComOExaminado = () => {
  const [formData, setFormData] = useState({
    adequado: '',
    superprotecao: '',
    dificuldadePerceberDeficiencias: '',
    rejeicao: '',
    indiferenca: '',
    ansiedadePercebidaEntrevistador: '',
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
      console.log('Dados de comportamento social salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados de comportamento social:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Relação da Família com o Examinado (Percepção do Entrevistador)</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="adequado">Adequado</CFormLabel>
                <CFormSelect
                  id="adequado"
                  value={formData.adequado}
                  onChange={(e) =>
                    setFormData({...formData, adequado: e.target.value})
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
                <CFormLabel htmlFor="superprotecao">Superproteção</CFormLabel>
                <CFormSelect
                  id="superprotecao"
                  value={formData.superprotecao}
                  onChange={(e) =>
                    setFormData({...formData, superprotecao: e.target.value})
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
                <CFormLabel htmlFor="dificuldadePerceberDeficiencias">Dificuldade em Perceber Deficiências</CFormLabel>
                <CFormSelect
                  id="dificuldadePerceberDeficiencias"
                  value={formData.dificuldadePerceberDeficiencias}
                  onChange={(e) =>
                    setFormData({...formData, dificuldadePerceberDeficiencias: e.target.value})
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
                <CFormLabel htmlFor="rejeicao">Rejeição</CFormLabel>
                <CFormSelect
                  id="rejeicao"
                  value={formData.rejeicao}
                  onChange={(e) =>
                    setFormData({...formData, rejeicao: e.target.value})
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
                <CFormLabel htmlFor="indiferenca">Indiferença</CFormLabel>
                <CFormSelect
                  id="indiferenca"
                  value={formData.indiferenca}
                  onChange={(e) =>
                    setFormData({...formData, indiferenca: e.target.value})
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
                <CFormLabel htmlFor="ansiedadePercebidaEntrevistador">Ansiedade</CFormLabel>
                <CFormSelect
                  id="ansiedadePercebidaEntrevistador"
                  value={formData.ansiedadePercebidaEntrevistador}
                  onChange={(e) =>
                    setFormData({...formData, ansiedadePercebidaEntrevistador: e.target.value})
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

export default RelacaoDaFamiliaComOExaminado;
