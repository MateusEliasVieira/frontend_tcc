import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import Campo from '../../../../components/campos/Campo'; // Ajuste o caminho conforme a estrutura do seu projeto
import { preencherLegenda } from '../../../../constantes/Constantes'; // Ajuste o caminho conforme a estrutura do seu projeto

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
        'SEU_ENDPOINT_DE_SALVAR_AQUI',
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
            <Campo
              tipo="select"
              id="compreendeOrdens"
              valor={formData.compreendeOrdens}
              setar={(e) => setFormData({ ...formData, compreendeOrdens: e.target.value })}
              legenda="Compreende Ordens"
              opcoes={preencherLegenda}
            />
            <Campo
              tipo="select"
              id="executaOrdensVerbaisSimples"
              valor={formData.executaOrdensVerbaisSimples}
              setar={(e) => setFormData({ ...formData, executaOrdensVerbaisSimples: e.target.value })}
              legenda="Executa Ordens Verbais Simples"
              opcoes={preencherLegenda}
            />
            <Campo
              tipo="select"
              id="executaOrdensComplexas"
              valor={formData.executaOrdensComplexas}
              setar={(e) => setFormData({ ...formData, executaOrdensComplexas: e.target.value })}
              legenda="Executa Ordens Complexas"
              opcoes={preencherLegenda}
            />

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
