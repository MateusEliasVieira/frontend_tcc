// Socializacao.js

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
import {preencherLegenda} from "../../../../constantes/Constantes"; // Importe o componente Campo

const Socializacao = () => {
  const [formData, setFormData] = useState({
    interageBemComOutrasCriancas: '',
    interageBemComAdultos: '',
    buscaContatoSocial: '',
    temOportunidadeContato: '',
    fazContatoVisual: '',
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
      console.log('Aspectos de interação social salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os aspectos de interação social:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Socialização</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={6}>
                <Campo
                  id="interageBemComOutrasCriancas"
                  tipo="select"
                  valor={formData.interageBemComOutrasCriancas}
                  setar={valor => setFormData({ ...formData, interageBemComOutrasCriancas: valor })}
                  legenda="Interage bem com outras crianças?"
                  opcoes={preencherLegenda}
                />

                <Campo
                  id="interageBemComAdultos"
                  tipo="select"
                  valor={formData.interageBemComAdultos}
                  setar={valor => setFormData({ ...formData, interageBemComAdultos: valor })}
                  legenda="Interage bem com adultos?"
                  opcoes={preencherLegenda}
                />

                <Campo
                  id="buscaContatoSocial"
                  tipo="select"
                  valor={formData.buscaContatoSocial}
                  setar={valor => setFormData({ ...formData, buscaContatoSocial: valor })}
                  legenda="Busca contato social?"
                  opcoes={preencherLegenda}
                />
              </CCol>

              <CCol md={6}>
                <Campo
                  id="temOportunidadeContato"
                  tipo="select"
                  valor={formData.temOportunidadeContato}
                  setar={valor => setFormData({ ...formData, temOportunidadeContato: valor })}
                  legenda="Tem oportunidade de contato social?"
                  opcoes={preencherLegenda}
                />

                <Campo
                  id="fazContatoVisual"
                  tipo="select"
                  valor={formData.fazContatoVisual}
                  setar={valor => setFormData({ ...formData, fazContatoVisual: valor })}
                  legenda="Faz contato visual?"
                  opcoes={preencherLegenda}
                />
              </CCol>
            </CRow>

            {/* Botão para salvar */}
            <CButton color="primary" onClick={salvar}>
              Salvar
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Socializacao;
