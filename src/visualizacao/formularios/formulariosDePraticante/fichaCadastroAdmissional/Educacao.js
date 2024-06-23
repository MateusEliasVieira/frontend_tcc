import React, { useState, useEffect } from 'react';
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
import { classeDeEscola, tipoInstituicaoEducacional, periodo, role, vinculo } from '../../../../constantes/Constantes';
import {camposPreenchidos} from "../../../../utilidades/VerificadorDeCampos"; // Importando as constantes corretamente

const Educacao = () => {
  const [formData, setFormData] = useState({
    serieEscolar: '',
    classeDeEscola: '',
    instituicaoEducacional: '',
    tipoDeInstituicaoEducacional: '',
    periodo: '',
    paciente: {
      idPaciente: ''
    }
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    if (idPraticanteSalvo) {
      setFormData(prevFormData => ({
        ...prevFormData,
        paciente: {
          ...prevFormData.paciente,
          idPaciente: idPraticanteSalvo
        }
      }));
    }
  }, []);

  const salvar = async () => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    if (idPraticanteSalvo) {
      if (camposPreenchidos(formData)) {
        try {
          const response = await axios.post(
            SALVAR_EDUCACAO__POST,
            JSON.stringify(formData),
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          alert('Escolaridade do Praticante salva com sucesso!');
          console.log('Dados educacionais salvos com sucesso:', response.data);
        } catch (error) {
          console.log('Erro ao salvar os dados educacionais:', error);
          alert(error.response.data?.title);
        }
      } else {
        alert("Preencha todos os campos vazios!");
      }
    } else {
      alert("Cadastre os Dados Pessoais do Praticante primeiro!");
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Escolaridade do Praticante</strong>
          </CCardHeader>
          <CCardBody>
            <Campo
              tipo="text"
              id="serieEscolar"
              valor={formData.serieEscolar}
              setar={(e) => setFormData({ ...formData, serieEscolar: e.target.value })}
              legenda="Ano/Série Escolar"
            />
            <Campo
              tipo="select"
              id="classeDeEscola"
              valor={formData.classeDeEscola}
              setar={(e) => setFormData({ ...formData, classeDeEscola: e.target.value })}
              legenda="classeDeEscola"
              opcoes={classeDeEscola}
            />
            <Campo
              tipo="text"
              id="instituicaoEducacional"
              valor={formData.instituicaoEducacional}
              setar={(e) => setFormData({ ...formData, instituicaoEducacional: e.target.value })}
              legenda="Instituição de Ensino"
            />
            <Campo
              tipo="select"
              id="tipoDeInstituicaoEducacional"
              valor={formData.tipoDeInstituicaoEducacional}
              setar={(e) => setFormData({ ...formData, tipoDeInstituicaoEducacional: e.target.value })}
              legenda="Tipo de Instituição de Ensino"
              opcoes={tipoInstituicaoEducacional}
            />
            <Campo
              tipo="select"
              id="periodo"
              valor={formData.periodo}
              setar={(e) => setFormData({ ...formData, periodo: e.target.value })}
              legenda="Período"
              opcoes={periodo}
            />
            <CButton color="primary" onClick={salvar}>
              Salvar
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Educacao;
