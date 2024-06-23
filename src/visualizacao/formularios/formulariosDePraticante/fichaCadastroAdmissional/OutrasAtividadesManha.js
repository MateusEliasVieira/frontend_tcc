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
import Campo from '../../../../components/campos/Campo'; // Importando o componente Campo

const OutrasAtividadesManha = () => {
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
        console.log('Dados salvos com sucesso:', response.data);
      } catch (error) {
        console.log('Erro ao salvar os dados:', error);
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
            <strong>Outras atividades matutinas</strong>
          </CCardHeader>
          <CCardBody>
            <Campo
              tipo="text"
              id="segundaFeira"
              valor={formData.segundaFeira}
              setar={(e) => setFormData({ ...formData, segundaFeira: e.target.value })}
              legenda="Segunda-feira"
            />
            <Campo
              tipo="text"
              id="tercaFeira"
              valor={formData.tercaFeira}
              setar={(e) => setFormData({ ...formData, tercaFeira: e.target.value })}
              legenda="Terça-feira"
            />
            <Campo
              tipo="text"
              id="quartaFeira"
              valor={formData.quartaFeira}
              setar={(e) => setFormData({ ...formData, quartaFeira: e.target.value })}
              legenda="Quarta-feira"
            />
            <Campo
              tipo="text"
              id="quintaFeira"
              valor={formData.quintaFeira}
              setar={(e) => setFormData({ ...formData, quintaFeira: e.target.value })}
              legenda="Quinta-feira"
            />
            <Campo
              tipo="text"
              id="sextaFeira"
              valor={formData.sextaFeira}
              setar={(e) => setFormData({ ...formData, sextaFeira: e.target.value })}
              legenda="Sexta-feira"
            />
            <Campo
              tipo="text"
              id="sabado"
              valor={formData.sabado}
              setar={(e) => setFormData({ ...formData, sabado: e.target.value })}
              legenda="Sábado"
            />
            <Campo
              tipo="text"
              id="domingo"
              valor={formData.domingo}
              setar={(e) => setFormData({ ...formData, domingo: e.target.value })}
              legenda="Domingo"
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

export default OutrasAtividadesManha;
