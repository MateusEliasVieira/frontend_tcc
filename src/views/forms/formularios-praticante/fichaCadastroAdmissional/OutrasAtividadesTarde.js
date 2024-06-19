import React, {useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react';
import axios from 'axios';

const OutrasAtividadesTarde = () => {
  const [formData, setFormData] = useState({
    segundaFeira: '',
    tercaFeira: '',
    quartaFeira: '',
    quintaFeira: '',
    sextaFeira: '',
    sabado: '',
    domingo: '',
    paciente: {
      idPaciente: '',
    },
  });

  const salvar = async () => {
    var idPacienteSalvo = localStorage.getItem('idPacienteSalvo');

    if (idPacienteSalvo != null) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        paciente: {
          ...prevFormData.paciente,
          idPaciente: idPacienteSalvo,
        },
      }));

      const dados = {
        ...formData,
        dataNascimento: new Date(formData.dataNascimento).toISOString() // Convertendo data para o formato ISOString
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
    } else {
      alert('Cadastre os dados pessoais do praticante primeiro!');
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Outras atividades vespertinas</strong>
          </CCardHeader>
          <CCardBody>
            {/* Campos existentes */}
            {/* ... */}
            <div className="mb-3">
              <CFormLabel htmlFor="segundaFeira">Segunda-feira</CFormLabel>
              <CFormInput
                type="text"
                id="segundaFeira"
                value={formData.segundaFeira}
                onChange={(e) =>
                  setFormData({...formData, segundaFeira: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="tercaFeira">Terça-feira</CFormLabel>
              <CFormInput
                type="text"
                id="tercaFeira"
                value={formData.tercaFeira}
                onChange={(e) =>
                  setFormData({...formData, tercaFeira: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="quartaFeira">Quarta-feira</CFormLabel>
              <CFormInput
                type="text"
                id="quartaFeira"
                value={formData.quartaFeira}
                onChange={(e) =>
                  setFormData({...formData, quartaFeira: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="quintaFeira">Quinta-feira</CFormLabel>
              <CFormInput
                type="text"
                id="quintaFeira"
                value={formData.quintaFeira}
                onChange={(e) =>
                  setFormData({...formData, quintaFeira: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="sextaFeira">Sexta-feira</CFormLabel>
              <CFormInput
                type="text"
                id="sextaFeira"
                value={formData.sextaFeira}
                onChange={(e) =>
                  setFormData({...formData, sextaFeira: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="sabado">Sábado</CFormLabel>
              <CFormInput
                type="text"
                id="sabado"
                value={formData.sabado}
                onChange={(e) =>
                  setFormData({...formData, sabado: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="domingo">Domingo</CFormLabel>
              <CFormInput
                type="text"
                id="domingo"
                value={formData.domingo}
                onChange={(e) =>
                  setFormData({...formData, domingo: e.target.value})
                }
              />
            </div>
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

export default OutrasAtividadesTarde;
