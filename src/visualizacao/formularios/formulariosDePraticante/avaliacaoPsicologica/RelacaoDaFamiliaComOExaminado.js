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
        'SEU_ENDPOINT_DE_SALVAR_AQUI',
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
              <Campo
                tipo="select"
                id="adequado"
                valor={formData.adequado}
                setar={(e) => setFormData({ ...formData, adequado: e.target.value })}
                legenda="Adequado?"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="superprotecao"
                valor={formData.superprotecao}
                setar={(e) => setFormData({ ...formData, superprotecao: e.target.value })}
                legenda="Superproteção?"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="dificuldadePerceberDeficiencias"
                valor={formData.dificuldadePerceberDeficiencias}
                setar={(e) => setFormData({ ...formData, dificuldadePerceberDeficiencias: e.target.value })}
                legenda="Dificuldade em perceber deficiências?"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="rejeicao"
                valor={formData.rejeicao}
                setar={(e) => setFormData({ ...formData, rejeicao: e.target.value })}
                legenda="Rejeição?"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="indiferenca"
                valor={formData.indiferenca}
                setar={(e) => setFormData({ ...formData, indiferenca: e.target.value })}
                legenda="Indiferença?"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="ansiedadePercebidaEntrevistador"
                valor={formData.ansiedadePercebidaEntrevistador}
                setar={(e) => setFormData({ ...formData, ansiedadePercebidaEntrevistador: e.target.value })}
                legenda="Ansiedade?"
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

export default RelacaoDaFamiliaComOExaminado;
