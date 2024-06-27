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
import { SALVAR_RESPONSAVEL_DO_PRATICANTE_POST } from "../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Campo from '../../../../components/campos/Campo'; // Importando o componente Campo

const ResponsavelPeloPraticante = () => {
  const [formData, setFormData] = useState({
    nomeResponsavel: '',
    grauParentesco: '',
    profissao: '',
    telefone: '',
    dataNascimento: '',
    email: '',
    telefoneTrabalho: '',
    rendaFamiliar: '',
    paciente: {
      idPaciente: '',
    },
  });

  const salvar = async () => {
    var idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");

    if (idPraticanteSalvo != null) {
      setFormData(prevFormData => ({
        ...prevFormData,
        paciente: {
          ...prevFormData.paciente,
          idPaciente: idPraticanteSalvo
        }
      }));
      try {
        const response = await axios.post(
          SALVAR_RESPONSAVEL_DO_PRATICANTE_POST,
          JSON.stringify(formData),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Responsável pelo praticante salvo com sucesso:', response.data);
      } catch (error) {
        console.log('Erro ao salvar Responsável pelo praticante:', error);
      }
    } else {
      alert("Cadastre os dados pessoais do praticante primeiro!")
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Responsável pelo Praticante</strong>
          </CCardHeader>
          <CCardBody>
            <Campo
              tipo="text"
              id="nomeResponsavel"
              valor={formData.nomeResponsavel}
              setar={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })}
              legenda="Nome do Responsável"
            />
            <Campo
              tipo="text"
              id="grauParentesco"
              valor={formData.grauParentesco}
              setar={(e) => setFormData({ ...formData, grauParentesco: e.target.value })}
              legenda="Grau de Parentesco"
            />
            <Campo
              tipo="text"
              id="profissao"
              valor={formData.profissao}
              setar={(e) => setFormData({ ...formData, profissao: e.target.value })}
              legenda="Profissão"
            />
            <Campo
              tipo="text"
              id="telefone"
              valor={formData.telefone}
              setar={(e) => setFormData({ ...formData, telefone: e.target.value })}
              legenda="Telefone"
            />
            <Campo
              tipo="date"
              id="dataNascimento"
              valor={formData.dataNascimento}
              setar={(e) => setFormData({ ...formData, dataNascimento: e.target.value })}
              legenda="Data de Nascimento"
            />
            <Campo
              tipo="email"
              id="email"
              valor={formData.email}
              setar={(e) => setFormData({ ...formData, email: e.target.value })}
              legenda="Email"
            />
            <Campo
              tipo="text"
              id="telefoneTrabalho"
              valor={formData.telefoneTrabalho}
              setar={(e) => setFormData({ ...formData, telefoneTrabalho: e.target.value })}
              legenda="Telefone do Trabalho"
            />
            <Campo
              tipo="number"
              id="rendaFamiliar"
              valor={formData.rendaFamiliar}
              setar={(e) => setFormData({ ...formData, rendaFamiliar: e.target.value })}
              legenda="Renda Familiar"
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

export default ResponsavelPeloPraticante;
