import React, { useState, useEffect } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo'; // Importando o componente Campo
import { classeDeEscola, tipoInstituicaoEducacional, periodo, role, vinculo } from '../../../../constantes/Constantes';
import {salvar} from "../../../../requisicoes/Praticante";
import {SALVAR_EDUCACAO_DO_PRATICANTE_POST} from "../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints"; // Importando as constantes corretamente

const Educacao = () => {
  const [formularioDeDados, setFormularioDeDados] = useState({
    serieEscolar: '',
    classeDeEscola: '',
    instituicaoEducacional: '',
    tipoDeInstituicaoEducacional: '',
    periodo: '',
    praticante: {
      idPraticante: ''
    }
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
    }
  }, []);

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
              valor={formularioDeDados.serieEscolar}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, serieEscolar: e.target.value })}
              legenda="Ano/Série Escolar"
            />
            <Campo
              tipo="select"
              id="classeDeEscola"
              valor={formularioDeDados.classeDeEscola}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, classeDeEscola: e.target.value })}
              legenda="Classe de escola"
              opcoes={classeDeEscola}
            />
            <Campo
              tipo="text"
              id="instituicaoEducacional"
              valor={formularioDeDados.instituicaoEducacional}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, instituicaoEducacional: e.target.value })}
              legenda="Instituição de Ensino"
            />
            <Campo
              tipo="select"
              id="tipoDeInstituicaoEducacional"
              valor={formularioDeDados.tipoDeInstituicaoEducacional}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, tipoDeInstituicaoEducacional: e.target.value })}
              legenda="Tipo de Instituição de Ensino"
              opcoes={tipoInstituicaoEducacional}
            />
            <Campo
              tipo="select"
              id="periodo"
              valor={formularioDeDados.periodo}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, periodo: e.target.value })}
              legenda="Período"
              opcoes={periodo}
            />
            <CButton color="primary" onClick={()=>{
              salvar(formularioDeDados,SALVAR_EDUCACAO_DO_PRATICANTE_POST)
            }}>
              Salvar
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Educacao;
