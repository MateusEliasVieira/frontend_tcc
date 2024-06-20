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

const Socializacao = () => {
  const [formData, setFormData] = useState({
    interageBemComOutrasCriancas: '',
    interageBemComAdultos: '',
    buscaContatoSocial: '',
    temOportunidadeContato: '',
    fazContatoVisual: '',
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
      console.log('Aspectos de interação social salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os aspectos de interação social:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Socialização</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="interageBemComOutrasCriancas">Interage Bem com Outras Crianças</CFormLabel>
                <CFormSelect
                  id="interageBemComOutrasCriancas"
                  value={formData.interageBemComOutrasCriancas}
                  onChange={(e) =>
                    setFormData({ ...formData, interageBemComOutrasCriancas: e.target.value })
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
                <CFormLabel htmlFor="interageBemComAdultos">Interage Bem com Adultos</CFormLabel>
                <CFormSelect
                  id="interageBemComAdultos"
                  value={formData.interageBemComAdultos}
                  onChange={(e) =>
                    setFormData({ ...formData, interageBemComAdultos: e.target.value })
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
                <CFormLabel htmlFor="buscaContatoSocial">Busca Contato Social</CFormLabel>
                <CFormSelect
                  id="buscaContatoSocial"
                  value={formData.buscaContatoSocial}
                  onChange={(e) =>
                    setFormData({ ...formData, buscaContatoSocial: e.target.value })
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
                <CFormLabel htmlFor="temOportunidadeContato">Tem Oportunidade de Contato Social</CFormLabel>
                <CFormSelect
                  id="temOportunidadeContato"
                  value={formData.temOportunidadeContato}
                  onChange={(e) =>
                    setFormData({ ...formData, temOportunidadeContato: e.target.value })
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
                <CFormLabel htmlFor="fazContatoVisual">Faz Contato Visual</CFormLabel>
                <CFormSelect
                  id="fazContatoVisual"
                  value={formData.fazContatoVisual}
                  onChange={(e) =>
                    setFormData({ ...formData, fazContatoVisual: e.target.value })
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

export default Socializacao;
