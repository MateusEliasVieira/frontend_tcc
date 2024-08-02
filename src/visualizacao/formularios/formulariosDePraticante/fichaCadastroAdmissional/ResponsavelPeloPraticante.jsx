import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import {
  SALVAR_RESPONSAVEL_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Campo from '../../../../components/campos/Campo';
import {salvar} from "../../../../requisicoes/Praticante";
import {CADASTRADO} from "../../../../constantes/Constantes";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal"; // Importando o componente Campo

const ResponsavelPeloPraticante = () => {

  const [desabilitar, setDesabilitar] = useState("")
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
    const responsavelPeloPraticante = localStorage.getItem("responsavelPeloPraticante")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (responsavelPeloPraticante === CADASTRADO) {
        setDesabilitar("disabled")
      } else {
        setDesabilitar("")
      }
    }
  }, []);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <Modal
            dsp={displayModal}
            titulo={tituloModal}
            conteudo={<div dangerouslySetInnerHTML={{__html: conteudoModal}}/>}
            esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
          />
          {
            desabilitar === "disabled" ?
              <CCardHeader style={{backgroundColor: "#1c323f"}}>
                <strong style={{color: "#0ecf8f"}}>Cadastrado com sucesso!</strong>
              </CCardHeader>
              :
              <CCardHeader>
                <strong>Responsável pelo Praticante</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="nomeResponsavel"
                    valor={formularioDeDados.nomeResponsavel}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, nomeResponsavel: e.target.value})}
                    legenda="Nome do responsável"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="grauParentesco"
                    valor={formularioDeDados.grauParentesco}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, grauParentesco: e.target.value})}
                    legenda="Grau de parentesco"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="date"
                    id="dataNascimento"
                    valor={formularioDeDados.dataNascimento}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, dataNascimento: e.target.value})}
                    legenda="Data de nascimento"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="profissao"
                    valor={formularioDeDados.profissao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, profissao: e.target.value})}
                    legenda="Profissão"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="telefone"
                    valor={formularioDeDados.telefone}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, telefone: e.target.value})}
                    legenda="Telefone pessoal"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="telefoneTrabalho"
                    valor={formularioDeDados.telefoneTrabalho}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, telefoneTrabalho: e.target.value})}
                    legenda="Telefone do trabalho"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="email"
                    id="email"
                    valor={formularioDeDados.email}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, email: e.target.value})}
                    legenda="Email"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="number"
                    id="rendaFamiliar"
                    valor={formularioDeDados.rendaFamiliar}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, rendaFamiliar: e.target.value})}
                    legenda="Renda familiar"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}}  disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_RESPONSAVEL_DO_PRATICANTE_POST,"responsavelPeloPraticante",setDesabilitar)
              }}>
                Salvar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ResponsavelPeloPraticante;
