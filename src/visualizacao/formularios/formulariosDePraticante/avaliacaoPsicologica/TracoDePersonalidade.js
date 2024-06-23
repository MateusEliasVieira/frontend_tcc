import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CRow,
  CFormSelect,
} from '@coreui/react';
import axios from 'axios';
import Campo from '../../../../components/campos/Campo';
import {preencherLegenda} from "../../../../constantes/Constantes"; // Importe o componente Campo

const TracoDePersonalidade = () => {
  const [formData, setFormData] = useState({
    extroversao: '',
    fobia: '',
    obsessao: '',
    introversao: '',
    ansiedade: '',
    histeria: '',
    dependenciaEmocional: '',
    timidez: '',
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
      console.log('Aspectos emocionais salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os aspectos emocionais:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Traços de Personalidade</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <Campo
                id="extroversao"
                tipo="select"
                valor={formData.extroversao}
                setar={valor => setFormData({ ...formData, extroversao: valor })}
                legenda="Extroversão"
                opcoes={preencherLegenda}
              />

              <Campo
                id="fobia"
                tipo="select"
                valor={formData.fobia}
                setar={valor => setFormData({ ...formData, fobia: valor })}
                legenda="Fobia"
                opcoes={preencherLegenda}
              />

              <Campo
                id="obsessao"
                tipo="select"
                valor={formData.obsessao}
                setar={valor => setFormData({ ...formData, obsessao: valor })}
                legenda="Obsessão"
                opcoes={preencherLegenda}
              />

              <Campo
                id="introversao"
                tipo="select"
                valor={formData.introversao}
                setar={valor => setFormData({ ...formData, introversao: valor })}
                legenda="Introversão"
                opcoes={preencherLegenda}
              />

              <Campo
                id="ansiedade"
                tipo="select"
                valor={formData.ansiedade}
                setar={valor => setFormData({ ...formData, ansiedade: valor })}
                legenda="Ansiedade"
                opcoes={preencherLegenda}
              />

              <Campo
                id="histeria"
                tipo="select"
                valor={formData.histeria}
                setar={valor => setFormData({ ...formData, histeria: valor })}
                legenda="Histeria"
                opcoes={preencherLegenda}
              />

              <Campo
                id="dependenciaEmocional"
                tipo="select"
                valor={formData.dependenciaEmocional}
                setar={valor => setFormData({ ...formData, dependenciaEmocional: valor })}
                legenda="Dependência Emocional"
                opcoes={preencherLegenda}
              />

              <Campo
                id="timidez"
                tipo="select"
                valor={formData.timidez}
                setar={valor => setFormData({ ...formData, timidez: valor })}
                legenda="Timidez"
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

export default TracoDePersonalidade;
