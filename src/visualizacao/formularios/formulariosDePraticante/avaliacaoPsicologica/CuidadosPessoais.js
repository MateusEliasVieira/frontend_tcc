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

const CuidadosPessoais = () => {
  const [formData, setFormData] = useState({
    higienePessoalSozinho: '',
    vesteRoupasCalcadosSozinho: '',
    seAlimentaSozinho: '',
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
      console.log('Dados de cuidados pessoais salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados de cuidados pessoais:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Cuidados Pessoais</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <Campo
                tipo="select"
                id="higienePessoalSozinho"
                valor={formData.higienePessoalSozinho}
                setar={(e) => setFormData({ ...formData, higienePessoalSozinho: e.target.value })}
                legenda="Executa higiene pessoal sozinho(a)?"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="vesteRoupasCalcadosSozinho"
                valor={formData.vesteRoupasCalcadosSozinho}
                setar={(e) => setFormData({ ...formData, vesteRoupasCalcadosSozinho: e.target.value })}
                legenda="Veste as roupas/sapatos sozinho(a)?"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="seAlimentaSozinho"
                valor={formData.seAlimentaSozinho}
                setar={(e) => setFormData({ ...formData, seAlimentaSozinho: e.target.value })}
                legenda="Se alimenta sozinho(a)?"
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

export default CuidadosPessoais;
