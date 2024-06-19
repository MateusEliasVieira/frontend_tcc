import React, {useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import {SALVAR_RESPONSAVEL__POST} from "../../../../endpoints/paciente/fichaCadastroAdmissional/Endpoints";

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

    var idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo")

    if (idPacienteSalvo != null) {
      setFormData(prevFormData => ({
        ...prevFormData,
        paciente: {
          ...prevFormData.paciente,
          idPaciente: idPraticanteSalvo
        }
      }));
      try {
        const response = await axios.post(
          SALVAR_RESPONSAVEL__POST,
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
            <div className="mb-3">
              <CFormLabel htmlFor="nomeResponsavel">Nome do Responsável</CFormLabel>
              <CFormInput
                type="text"
                id="nomeResponsavel"
                value={formData.nomeResponsavel}
                onChange={(e) =>
                  setFormData({...formData, nomeResponsavel: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="grauParentesco">Grau de Parentesco</CFormLabel>
              <CFormInput
                type="text"
                id="grauParentesco"
                value={formData.grauParentesco}
                onChange={(e) =>
                  setFormData({...formData, grauParentesco: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="profissao">Profissão</CFormLabel>
              <CFormInput
                type="text"
                id="profissao"
                value={formData.profissao}
                onChange={(e) =>
                  setFormData({...formData, profissao: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="telefone">Telefone</CFormLabel>
              <CFormInput
                type="text"
                id="telefone"
                value={formData.telefone}
                onChange={(e) =>
                  setFormData({...formData, telefone: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="dataNascimento">Data de Nascimento</CFormLabel>
              <CFormInput
                type="date"
                id="dataNascimento"
                value={formData.dataNascimento}
                onChange={(e) =>
                  setFormData({...formData, dataNascimento: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="email">Email</CFormLabel>
              <CFormInput
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({...formData, email: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="telefoneTrabalho">Telefone do Trabalho</CFormLabel>
              <CFormInput
                type="text"
                id="telefoneTrabalho"
                value={formData.telefoneTrabalho}
                onChange={(e) =>
                  setFormData({...formData, telefoneTrabalho: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="rendaFamiliar">Renda Familiar</CFormLabel>
              <CFormInput
                type="number"
                id="rendaFamiliar"
                value={formData.rendaFamiliar}
                onChange={(e) =>
                  setFormData({...formData, rendaFamiliar: e.target.value})
                }
              />
            </div>
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
