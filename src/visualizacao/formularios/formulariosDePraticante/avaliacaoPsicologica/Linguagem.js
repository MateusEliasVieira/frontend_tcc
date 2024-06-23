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

const Linguagem = () => {
  const [formData, setFormData] = useState({
    compreensaoVerbal: '',
    gesto: '',
    gritos: '',
    mimicaFacial: '',
    monossilabos: '',
    frasesCurtas: '',
    frasesCompletas: '',
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
      console.log('Dados de comunicação verbal salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados de comunicação verbal:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Linguagem</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <Campo
                tipo="select"
                id="compreensaoVerbal"
                valor={formData.compreensaoVerbal}
                setar={(e) => setFormData({ ...formData, compreensaoVerbal: e.target.value })}
                legenda="Verbal Compreensiva"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="gesto"
                valor={formData.gesto}
                setar={(e) => setFormData({ ...formData, gesto: e.target.value })}
                legenda="Gestual"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="gritos"
                valor={formData.gritos}
                setar={(e) => setFormData({ ...formData, gritos: e.target.value })}
                legenda="Gritos"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="mimicaFacial"
                valor={formData.mimicaFacial}
                setar={(e) => setFormData({ ...formData, mimicaFacial: e.target.value })}
                legenda="Mímica Facial"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="monossilabos"
                valor={formData.monossilabos}
                setar={(e) => setFormData({ ...formData, monossilabos: e.target.value })}
                legenda="Monossílabos"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="frasesCurtas"
                valor={formData.frasesCurtas}
                setar={(e) => setFormData({ ...formData, frasesCurtas: e.target.value })}
                legenda="Frases Curtas"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="frasesCompletas"
                valor={formData.frasesCompletas}
                setar={(e) => setFormData({ ...formData, frasesCompletas: e.target.value })}
                legenda="Frases Completas"
                opcoes={preencherLegenda}
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

export default Linguagem;
