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
        SEU_ENDPOINT_DE_SALVAR_AQUI,
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
              <div className="mb-3">
                <CFormLabel htmlFor="compreensaoVerbal">Verbal Compreensiva</CFormLabel>
                <CFormSelect
                  id="compreensaoVerbal"
                  value={formData.compreensaoVerbal}
                  onChange={(e) =>
                    setFormData({ ...formData, compreensaoVerbal: e.target.value })
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="gesto">Gestual</CFormLabel>
                <CFormSelect
                  id="gesto"
                  value={formData.gesto}
                  onChange={(e) =>
                    setFormData({ ...formData, gesto: e.target.value })
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="gritos">Gritos</CFormLabel>
                <CFormSelect
                  id="gritos"
                  value={formData.gritos}
                  onChange={(e) =>
                    setFormData({ ...formData, gritos: e.target.value })
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="mimicaFacial">Mímica Facial</CFormLabel>
                <CFormSelect
                  id="mimicaFacial"
                  value={formData.mimicaFacial}
                  onChange={(e) =>
                    setFormData({ ...formData, mimicaFacial: e.target.value })
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="monossilabos">Monossílabos</CFormLabel>
                <CFormSelect
                  id="monossilabos"
                  value={formData.monossilabos}
                  onChange={(e) =>
                    setFormData({ ...formData, monossilabos: e.target.value })
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="frasesCurtas">Frases Curtas</CFormLabel>
                <CFormSelect
                  id="frasesCurtas"
                  value={formData.frasesCurtas}
                  onChange={(e) =>
                    setFormData({ ...formData, frasesCurtas: e.target.value })
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value
                            ="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="frasesCompletas">Frases Completas</CFormLabel>
                <CFormSelect
                  id="frasesCompletas"
                  value={formData.frasesCompletas}
                  onChange={(e) =>
                    setFormData({ ...formData, frasesCompletas: e.target.value })
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="NAO_OBSERVADO">Não Observado</option>
                  <option value="PARCIALMENTE">Parcialmente</option>
                </CFormSelect>
              </div>

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
