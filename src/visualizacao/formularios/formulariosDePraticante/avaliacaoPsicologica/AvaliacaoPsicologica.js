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

const AvaliacaoPsicologica = () => {
  const [formData, setFormData] = useState({
    expectativasFamiliaresTerapiaEquina: '',
    resumoCasoObservacoesComplementares: '',
    imagemAssinaturaOuCRPECarimbo: '',
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
      console.log('Dados de avaliação psicológica salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados de avaliação psicológica:', error);
    }
  };

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Avaliação Psicológica</strong>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <Campo
            tipo="textarea"
            id="expectativasFamiliaresTerapiaEquina"
            valor={formData.expectativasFamiliaresTerapiaEquina}
            setar={(e) =>
              setFormData({ ...formData, expectativasFamiliaresTerapiaEquina: e.target.value })
            }
            legenda="Qual a expectativa da família quanto à equoterapia?"
          />
          <Campo
            tipo="textarea"
            id="resumoCasoObservacoesComplementares"
            valor={formData.resumoCasoObservacoesComplementares}
            setar={(e) =>
              setFormData({ ...formData, resumoCasoObservacoesComplementares: e.target.value })
            }
            legenda="Síntese do caso e observações complementares"
          />
          <Campo
            tipo="file"
            id="imagemAssinaturaOuCRPECarimbo"
            setar={(e) =>
              setFormData({ ...formData, imagemAssinaturaOuCRPECarimbo: e.target.files[0] })
            }
            legenda="Imagem da assinatura ou CRP e carimbo"
          />
          <CButton color="primary" onClick={salvar}>
            Salvar
          </CButton>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AvaliacaoPsicologica;
