import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import Campo from '../../../../components/campos/Campo'; // Ajuste o caminho conforme a estrutura do seu projeto

const Saude = () => {
  const [formData, setFormData] = useState({
    alergias: '',
    convulsoes: '',
    doencas: '',
    digestao: '',
    transtornoAlimentar: '',
    respiracao: '',
    sono: '',
    deficitCognitivo: '',
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
      console.log('Dados de saúde salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados de saúde:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Saúde do Praticante</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <Campo
                tipo="text"
                id="alergias"
                valor={formData.alergias}
                setar={(e) => setFormData({ ...formData, alergias: e.target.value })}
                legenda="Alergias"
              />
              <Campo
                tipo="text"
                id="convulsoes"
                valor={formData.convulsoes}
                setar={(e) => setFormData({ ...formData, convulsoes: e.target.value })}
                legenda="Convulsões? Controladas? Tipo?"
              />
              <Campo
                tipo="text"
                id="doencas"
                valor={formData.doencas}
                setar={(e) => setFormData({ ...formData, doencas: e.target.value })}
                legenda="Doenças significativas/traumas"
              />
              <Campo
                tipo="text"
                id="digestao"
                valor={formData.digestao}
                setar={(e) => setFormData({ ...formData, digestao: e.target.value })}
                legenda="Digestão"
              />
              <Campo
                tipo="text"
                id="transtornoAlimentar"
                valor={formData.transtornoAlimentar}
                setar={(e) => setFormData({ ...formData, transtornoAlimentar: e.target.value })}
                legenda="Transtorno alimentar"
              />
              <Campo
                tipo="text"
                id="respiracao"
                valor={formData.respiracao}
                setar={(e) => setFormData({ ...formData, respiracao: e.target.value })}
                legenda="Respiração"
              />
              <Campo
                tipo="text"
                id="sono"
                valor={formData.sono}
                setar={(e) => setFormData({ ...formData, sono: e.target.value })}
                legenda="Sono"
              />
              <Campo
                tipo="text"
                id="deficitCognitivo"
                valor={formData.deficitCognitivo}
                setar={(e) => setFormData({ ...formData, deficitCognitivo: e.target.value })}
                legenda="Déficit cognitivo"
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

export default Saude;
