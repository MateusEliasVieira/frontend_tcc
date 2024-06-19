import React, {useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm, CFormCheck,
  CFormInput,
  CFormLabel, CFormSelect,
  CRow,
} from '@coreui/react';
import axios from 'axios';

const SobreACrianca = () => {
  const [formData, setFormData] = useState({
    fezTerapiaEquina: false,
    criancaPlanejada: false,
    cuidadosPreNatais: false,
    chorouNoNascimento: false,
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
        SEU_ENDPOINT_DE_SALVAR_AQUI,
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
              <div className="mb-3">
                <CFormCheck
                  type="checkbox"
                  id="fezTerapiaEquina"
                  label="Já fez equoterapia antes?"
                  checked={formData.fezTerapiaEquina}
                  onChange={(e) =>
                    setFormData({...formData, fezTerapiaEquina: e.target.checked})
                  }
                />
              </div>
              <div className="mb-3">
                <CFormCheck
                  type="checkbox"
                  id="criancaPlanejada"
                  label="Criança planejada?"
                  checked={formData.criancaPlanejada}
                  onChange={(e) =>
                    setFormData({...formData, criancaPlanejada: e.target.checked})
                  }
                />
              </div>
              <div className="mb-3">
                <CFormCheck
                  type="checkbox"
                  id="cuidadosPreNatais"
                  label="Acompanhamento pré-natal?"
                  checked={formData.cuidadosPreNatais}
                  onChange={(e) =>
                    setFormData({...formData, cuidadosPreNatais: e.target.checked})
                  }
                />
              </div>
              <div className="mb-3">
                <CFormCheck
                  type="checkbox"
                  id="chorouNoNascimento"
                  label="Choro ao nascer?"
                  checked={formData.chorouNoNascimento}
                  onChange={(e) =>
                    setFormData({...formData, chorouNoNascimento: e.target.checked})
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="alimentacao">Alimentação</CFormLabel>
                <CFormSelect
                  id="alimentacao"
                  value={formData.alimentacao}
                  onChange={(e) =>
                    setFormData({...formData, alimentacao: e.target.value})
                  }
                >
                  <option value="">Selecionar</option>
                  <option value="SEIO">Seio</option>
                  <option value="MAMADEIRA">Mamadeira</option>
                </CFormSelect>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="observacao">Observação</CFormLabel>
                <CFormInput
                  type="text"
                  id="observacao"
                  value={formData.observacao}
                  onChange={(e) =>
                    setFormData({...formData, observacao: e.target.value})
                  }
                />
              </div>
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
