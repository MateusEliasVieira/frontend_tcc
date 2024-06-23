import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CForm,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import Campo from "../../../../components/campos/Campo";
import {preencherLegenda} from "../../../../constantes/Constantes"; // Importe o componente Campo

const SaudeMental = () => {
  const [formData, setFormData] = useState({
    apresentaConfusaoMental: '',
    apresentaDelirios: '',
    apresentaAlucinacoes: '',
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
      console.log('Aspectos mentais salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os aspectos mentais:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Saúde Mental</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <Campo
                tipo="select"
                id="apresentaConfusaoMental"
                valor={formData.apresentaConfusaoMental}
                setar={(e) => setFormData({ ...formData, apresentaConfusaoMental: e.target.value })}
                legenda="Apresenta Confusão Mental"
                opcoes={preencherLegenda}
              />

              <Campo
                tipo="select"
                id="apresentaDelirios"
                valor={formData.apresentaDelirios}
                setar={(e) => setFormData({ ...formData, apresentaDelirios: e.target.value })}
                legenda="Apresenta Delírios"
                opcoes={preencherLegenda}
              />

              <Campo
                tipo="select"
                id="apresentaAlucinacoes"
                valor={formData.apresentaAlucinacoes}
                setar={(e) => setFormData({ ...formData, apresentaAlucinacoes: e.target.value })}
                legenda="Apresenta Alucinações"
                opcoes={preencherLegenda}
              />

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

export default SaudeMental;
