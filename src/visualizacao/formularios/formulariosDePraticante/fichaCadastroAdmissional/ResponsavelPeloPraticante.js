import React, {useEffect, useState} from 'react';
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
import Campo from '../../../../components/campos/Campo';
import {salvar} from "../../../../requisicoes/Praticante"; // Importando o componente Campo

const ResponsavelPeloPraticante = () => {
  const [formularioDeDados, setFormularioDeDados] = useState({
    nomeResponsavel: '',
    grauParentesco: '',
    profissao: '',
    telefone: '',
    dataNascimento: '',
    email: '',
    telefoneTrabalho: '',
    rendaFamiliar: '',
    praticante: {
      idPraticante: '',
    },
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
            <strong>Responsável pelo Praticante</strong>
          </CCardHeader>
          <CCardBody>
            <Campo
              tipo="text"
              id="nomeResponsavel"
              valor={formularioDeDados.nomeResponsavel}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, nomeResponsavel: e.target.value })}
              legenda="Nome do Responsável"
            />
            <Campo
              tipo="text"
              id="grauParentesco"
              valor={formularioDeDados.grauParentesco}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, grauParentesco: e.target.value })}
              legenda="Grau de Parentesco"
            />
            <Campo
              tipo="text"
              id="profissao"
              valor={formularioDeDados.profissao}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, profissao: e.target.value })}
              legenda="Profissão"
            />
            <Campo
              tipo="text"
              id="telefone"
              valor={formularioDeDados.telefone}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, telefone: e.target.value })}
              legenda="Telefone"
            />
            <Campo
              tipo="date"
              id="dataNascimento"
              valor={formularioDeDados.dataNascimento}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, dataNascimento: e.target.value })}
              legenda="Data de Nascimento"
            />
            <Campo
              tipo="email"
              id="email"
              valor={formularioDeDados.email}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, email: e.target.value })}
              legenda="Email"
            />
            <Campo
              tipo="text"
              id="telefoneTrabalho"
              valor={formularioDeDados.telefoneTrabalho}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, telefoneTrabalho: e.target.value })}
              legenda="Telefone do Trabalho"
            />
            <Campo
              tipo="number"
              id="rendaFamiliar"
              valor={formularioDeDados.rendaFamiliar}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, rendaFamiliar: e.target.value })}
              legenda="Renda Familiar"
            />
            <CButton color="primary" onClick={()=>{
              salvar(formularioDeDados,SALVAR_RESPONSAVEL_DO_PRATICANTE_POST)
            }}>
              Salvar
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ResponsavelPeloPraticante;
