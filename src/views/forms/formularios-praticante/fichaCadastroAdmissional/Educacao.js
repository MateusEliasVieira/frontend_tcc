import React, {useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm, CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {SALVAR_EDUCACAO__POST} from "../../../../endpoints/paciente/fichaCadastroAdmissional/Endpoints";

const Educacao = (props) => {
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

  // Verifica se todos os dados foram preenchidos
  const isFormDataEmpty = () => {
    for (const key in formData) {
      if (formData[key] === "") {
        return true; // Retorna true se encontrar um valor vazio
      }
    }
    return false; // Retorna false se nenhum valor vazio for encontrado
  };

  const salvar = async () => {

    var idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo")
    alert("idPraticanteSalvo = "+idPraticanteSalvo)
    setFormData(prevFormData => ({
      ...prevFormData,
      paciente: {
        ...prevFormData.paciente,
        idPaciente: idPraticanteSalvo
      }
    }));
    alert("Form Data - id = "+formData.paciente.idPaciente)
    if (idPraticanteSalvo != null) {
      if(isFormDataEmpty() === false){
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
          alert('Escolaridade do Praticante salvo com sucesso!')
          console.log('Dados educacionais salvos com sucesso:', response.data);
        } catch (error) {
          console.log('Erro ao salvar os dados educacionais:', error);
          alert(error.response.data?.title);
        }
      }else{
        alert("Preencha todos os campos vazios!")
      }
    }else{
      alert("Cadastre os Dados Pessoais do Praticante primeiro!")
      alert("id salvo = "+idPraticanteSalvo)
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
            <div className="mb-3">
              <CFormLabel htmlFor="serieEscolar">Ano/Série Escolar</CFormLabel>
              <CFormInput
                type="text"
                id="serieEscolar"
                value={formData.serieEscolar}
                onChange={(e) => setFormData({...formData, serieEscolar: e.target.value})}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="tipoDeInstituicaoEducacional">
                Turma
              </CFormLabel>
              <CFormSelect
                id="classeDeEscola"
                value={formData.classeDeEscola}
                onChange={(e) =>
                  setFormData({...formData, classeDeEscola: e.target.value})
                }
              >
                <option value="">Selecionar</option>
                <option value="ESPECIAL">Especial</option>
                <option value="INCLUSAO">Inclusão</option>
                <option value="REGULAR">Regular</option>
              </CFormSelect>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="instituicaoEducacional">Instituição de Ensino</CFormLabel>
              <CFormInput
                type="text"
                id="instituicaoEducacional"
                value={formData.instituicaoEducacional}
                onChange={(e) =>
                  setFormData({...formData, instituicaoEducacional: e.target.value})
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="tipoDeInstituicaoEducacional">
                Tipo de Instituição de Ensino
              </CFormLabel>
              <CFormSelect
                id="tipoDeInstituicaoEducacional"
                value={formData.tipoDeInstituicaoEducacional}
                onChange={(e) =>
                  setFormData({...formData, tipoDeInstituicaoEducacional: e.target.value})
                }
              >
                <option value="">Selecionar</option>
                <option value="PUBLICA">Pública</option>
                <option value="PRIVADA">Privada</option>
                {/* Adicione outras opções conforme necessário */}
              </CFormSelect>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="periodo">
                Período
              </CFormLabel>
              <CFormSelect
                id="periodo"
                value={formData.periodo}
                onChange={(e) =>
                  setFormData({...formData, periodo: e.target.value})
                }
              >
                <option value="">Selecionar</option>
                <option value="MATUTINO">Matutino</option>
                <option value="VESPERTINO">Vespertino</option>
                {/* Adicione outras opções conforme necessário */}
              </CFormSelect>
            </div>
            <CButton color="primary" onClick={salvar}>
              Salvar
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Educacao
