import React, {useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CRow,
  CFormSelect, CContainer,
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
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    id="extroversao"
                    tipo="select"
                    valor={formData.extroversao}
                    setar={valor => setFormData({...formData, extroversao: valor})}
                    legenda="É extrovertido(a)?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="fobia"
                    tipo="select"
                    valor={formData.fobia}
                    setar={valor => setFormData({...formData, fobia: valor})}
                    legenda="Tem fobia?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="obsessao"
                    tipo="select"
                    valor={formData.obsessao}
                    setar={valor => setFormData({...formData, obsessao: valor})}
                    legenda="Possui alguma obsessão?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="introversao"
                    tipo="select"
                    valor={formData.introversao}
                    setar={valor => setFormData({...formData, introversao: valor})}
                    legenda="É introvertido?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol>
                  <Campo
                    id="ansiedade"
                    tipo="select"
                    valor={formData.ansiedade}
                    setar={valor => setFormData({...formData, ansiedade: valor})}
                    legenda="Tem ansiedade?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    id="histeria"
                    tipo="select"
                    valor={formData.histeria}
                    setar={valor => setFormData({...formData, histeria: valor})}
                    legenda="Tem histeria?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="dependenciaEmocional"
                    tipo="select"
                    valor={formData.dependenciaEmocional}
                    setar={valor => setFormData({...formData, dependenciaEmocional: valor})}
                    legenda="Tem alguma dependência emocional?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol>
                  <Campo
                    id="timidez"
                    tipo="select"
                    valor={formData.timidez}
                    setar={valor => setFormData({...formData, timidez: valor})}
                    legenda="É timido(a)?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" onClick={salvar}>
                Salvar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default TracoDePersonalidade;
