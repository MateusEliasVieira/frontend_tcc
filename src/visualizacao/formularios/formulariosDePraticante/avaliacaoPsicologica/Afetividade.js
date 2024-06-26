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
import Campo from '../../../../components/campos/Campo';
import {preencherLegenda} from "../../../../constantes/Constantes";

const Afetividade = () => {
  const [formData, setFormData] = useState({
    demonstraAfeicaoEspecialPorAlguem: '',
    compartilhaSuasCoisas: '',
    ajudaQuandoSolicitado: '',
    expressaoDeSentimentos: '',
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
      console.log('Dados de relacionamento social salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados de relacionamento social:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Afetividade</strong>
          </CCardHeader>
          <CCardBody>
            <Campo
              tipo="select"
              id="demonstraAfeicaoEspecialPorAlguem"
              valor={formData.demonstraAfeicaoEspecialPorAlguem}
              setar={(e) =>
                setFormData({ ...formData, demonstraAfeicaoEspecialPorAlguem: e.target.value })
              }
              legenda="Demonstra carinho especial por alguém?"
              opcoes={preencherLegenda}
            />
            <Campo
              tipo="select"
              id="compartilhaSuasCoisas"
              valor={formData.compartilhaSuasCoisas}
              setar={(e) =>
                setFormData({ ...formData, compartilhaSuasCoisas: e.target.value })
              }
              legenda="Divide suas coisas?"
              opcoes={preencherLegenda}
            />
            <Campo
              tipo="select"
              id="ajudaQuandoSolicitado"
              valor={formData.ajudaQuandoSolicitado}
              setar={(e) =>
                setFormData({ ...formData, ajudaQuandoSolicitado: e.target.value })
              }
              legenda="Ajuda quando solicitado?"
              opcoes={preencherLegenda}
            />
            <Campo
              tipo="select"
              id="expressaoDeSentimentos"
              valor={formData.expressaoDeSentimentos}
              setar={(e) =>
                setFormData({ ...formData, expressaoDeSentimentos: e.target.value })
              }
              legenda="Expressão de sentimentos (Carinho, Raiva, ...)?"
              opcoes={preencherLegenda}
            />
            <CButton color="primary" onClick={salvar}>
              Salvar
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Afetividade;
