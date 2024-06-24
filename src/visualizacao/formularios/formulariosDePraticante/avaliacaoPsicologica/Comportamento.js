import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
} from '@coreui/react';
import axios from 'axios';
import Campo from '../../../../components/campos/Campo';
import {preencherLegenda} from "../../../../constantes/Constantes"; // Importando o componente Campo

const Comportamento = () => {
  const [formData, setFormData] = useState({
    agitacao: '',
    toleranciaFrustracao: '',
    respeitaLimitesRegras: '',
    oposicao: '',
    atencaoConcentracao: '',
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
      console.log('Aspectos de comportamento salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os aspectos de comportamento:', error);
    }
  };

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Comportamento</strong>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <Campo
            tipo="select"
            id="agitacao"
            valor={formData.agitacao}
            setar={(e) => setFormData({ ...formData, agitacao: e.target.value })}
            legenda="Tem comportamento agitado?"
            opcoes={preencherLegenda}
          />
          <Campo
            tipo="select"
            id="toleranciaFrustracao"
            valor={formData.toleranciaFrustracao}
            setar={(e) => setFormData({ ...formData, toleranciaFrustracao: e.target.value })}
            legenda="Tem tolerância à frustração?"
            opcoes={preencherLegenda}
          />
          <Campo
            tipo="select"
            id="respeitaLimitesRegras"
            valor={formData.respeitaLimitesRegras}
            setar={(e) => setFormData({ ...formData, respeitaLimitesRegras: e.target.value })}
            legenda="Respeita limites e regras?"
            opcoes={preencherLegenda}
          />
          <Campo
            tipo="select"
            id="oposicao"
            valor={formData.oposicao}
            setar={(e) => setFormData({ ...formData, oposicao: e.target.value })}
            legenda="Oposição?"
            opcoes={preencherLegenda}
          />
          <Campo
            tipo="select"
            id="atencaoConcentracao"
            valor={formData.atencaoConcentracao}
            setar={(e) => setFormData({ ...formData, atencaoConcentracao: e.target.value })}
            legenda="Possui atenção e concentração?"
            opcoes={preencherLegenda}
          />
          <CButton color="primary" onClick={salvar}>
            Salvar
          </CButton>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default Comportamento;
