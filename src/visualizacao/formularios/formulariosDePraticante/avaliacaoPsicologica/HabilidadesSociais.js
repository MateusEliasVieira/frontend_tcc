import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
} from '@coreui/react';
import axios from 'axios';
import Campo from '../../../../components/campos/Campo'; // Ajuste o caminho conforme a estrutura do seu projeto
import { preencherLegenda } from '../../../../constantes/Constantes'; // Ajuste o caminho conforme a estrutura do seu projeto

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
        'SEU_ENDPOINT_DE_SALVAR_AQUI',
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
              <Campo
                tipo="select"
                id="passividade"
                valor={formData.passividade}
                setar={(e) => setFormData({ ...formData, passividade: e.target.value })}
                legenda="Passividade"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="autoagressao"
                valor={formData.autoagressao}
                setar={(e) => setFormData({ ...formData, autoagressao: e.target.value })}
                legenda="Autoagressividade"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="heteroagressividade"
                valor={formData.heteroagressividade}
                setar={(e) => setFormData({ ...formData, heteroagressividade: e.target.value })}
                legenda="Heteroagressividade"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="assertividade"
                valor={formData.assertividade}
                setar={(e) => setFormData({ ...formData, assertividade: e.target.value })}
                legenda="Assertividade"
                opcoes={preencherLegenda}
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

export default HabilidadesSociais;
