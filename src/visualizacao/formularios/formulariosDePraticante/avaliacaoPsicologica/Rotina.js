import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import Campo from '../../../../components/campos/Campo';
import {simOuNao} from "../../../../constantes/Constantes"; // Ajuste o caminho conforme a estrutura do seu projeto

const Rotina = () => {
  const [formData, setFormData] = useState({
    brincadeiras: '',
    preferenciasPorBrincadeiras: '',
    aceitaMudancasNaRotina: '',
    consideracoesSobreRotina: '',
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
        'SEU_ENDPOINT_DE_SALVAR_AQUI',
        JSON.stringify(dados),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Dados de preferências de brincadeiras salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados de preferências de brincadeiras:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Preferências de Brincadeiras</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <Campo
                tipo="textarea"
                id="brincadeiras"
                valor={formData.brincadeiras}
                setar={(e) => setFormData({ ...formData, brincadeiras: e.target.value })}
                legenda="Brincadeiras (onde, como, com quem?)"
              />
              <Campo
                tipo="textarea"
                id="preferenciasPorBrincadeiras"
                valor={formData.preferenciasPorBrincadeiras}
                setar={(e) => setFormData({ ...formData, preferenciasPorBrincadeiras: e.target.value })}
                legenda="Preferências e Aversões"
              />
              <Campo
                tipo="select"
                id="aceitaMudancasNaRotina"
                valor={formData.aceitaMudancasNaRotina}
                setar={(e) => setFormData({ ...formData, aceitaMudancasNaRotina: e.target.value })}
                legenda="Aceita Mudanças na sua Rotina?"
                opcoes={simOuNao}
              />
              <Campo
                tipo="textarea"
                id="consideracoesSobreRotina"
                valor={formData.consideracoesSobreRotina}
                setar={(e) => setFormData({ ...formData, consideracoesSobreRotina: e.target.value })}
                legenda="Considerações Sobre Rotina"
              />
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

export default Rotina;
