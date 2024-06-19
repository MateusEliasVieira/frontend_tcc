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

const Afetividade = () => {
  const [formData, setFormData] = useState({
    demonstraAfeicaoEspecialPorAlguem: '',
    compartilhaSuasCoisas: '',
    ajudaQuandoSolicitado: '',
    expressaoDeSentimentos: '',
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
      console.log('Dados de relacionamento social salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados de relacionamento social:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Afetividade</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="demonstraAfeicaoEspecialPorAlguem">Demonstra Carinho Especial Por Alguém</CFormLabel>
                <CFormSelect
                  id="demonstraAfeicaoEspecialPorAlguem"
                  value={formData.demonstraAfeicaoEspecialPorAlguem}
                  onChange={(e) =>
                    setFormData({...formData, demonstraAfeicaoEspecialPorAlguem: e.target.value})
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
                <CFormLabel htmlFor="compartilhaSuasCoisas">Divide Suas Coisas</CFormLabel>
                <CFormSelect
                  id="compartilhaSuasCoisas"
                  value={formData.compartilhaSuasCoisas}
                  onChange={(e) =>
                    setFormData({...formData, compartilhaSuasCoisas: e.target.value})
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
                <CFormLabel htmlFor="ajudaQuandoSolicitado">Ajuda Quando Solicitado</CFormLabel>
                <CFormSelect
                  id="ajudaQuandoSolicitado"
                  value={formData.ajudaQuandoSolicitado}
                  onChange={(e) =>
                    setFormData({...formData, ajudaQuandoSolicitado: e.target.value})
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
                <CFormLabel htmlFor="expressaoDeSentimentos">Expressão de Sentimentos (Carinho, Raiva, ...)</CFormLabel>
                <CFormSelect
                  id="expressaoDeSentimentos"
                  value={formData.expressaoDeSentimentos}
                  onChange={(e) =>
                    setFormData({...formData, expressaoDeSentimentos: e.target.value})
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

export default Afetividade;
