// SobreACrianca.js

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
import Campo from '../../../../components/campos/Campo'; // Importe o componente Campo
import {simOuNao,alimentacao} from "../../../../constantes/Constantes"; // Importe a constante alimentacao

const SobreACrianca = () => {
  const [formData, setFormData] = useState({
    fezTerapiaEquina: '',
    criancaPlanejada: '',
    cuidadosPreNatais: '',
    chorouNoNascimento: '',
    alimentacao: '',
    observacao: '',
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
      console.log('Dados educacionais salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados educacionais:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sobre o Praticante</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <Campo
                tipo="select"
                id="fezTerapiaEquina"
                valor={formData.fezTerapiaEquina}
                setar={valor => setFormData({ ...formData, fezTerapiaEquina: valor })}
                legenda="Já fez equoterapia antes?"
                opcoes={simOuNao}
              />

              <Campo
                tipo="select"
                id="criancaPlanejada"
                valor={formData.criancaPlanejada}
                setar={valor => setFormData({ ...formData, criancaPlanejada: valor })}
                legenda="A criança foi planejada?"
                opcoes={simOuNao}
              />

              <Campo
                tipo="select"
                id="cuidadosPreNatais"
                valor={formData.cuidadosPreNatais}
                setar={valor => setFormData({ ...formData, cuidadosPreNatais: valor })}
                legenda="Teve acompanhamento pré-natal?"
                opcoes={simOuNao}
              />

              <Campo
                tipo="select"
                id="chorouNoNascimento"
                valor={formData.chorouNoNascimento}
                setar={valor => setFormData({ ...formData, chorouNoNascimento: valor })}
                legenda="Chorou ao nascer?"
                opcoes={simOuNao}
              />

              <Campo
                tipo="select"
                id="alimentacao"
                valor={formData.alimentacao}
                setar={valor => setFormData({ ...formData, alimentacao: valor })}
                legenda="Qual foi a alimentação?"
                opcoes={alimentacao}
              />

              <Campo
                tipo="textarea"
                id="observacao"
                valor={formData.observacao}
                setar={valor => setFormData({ ...formData, observacao: valor })}
                legenda="Observação"
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

export default SobreACrianca;
