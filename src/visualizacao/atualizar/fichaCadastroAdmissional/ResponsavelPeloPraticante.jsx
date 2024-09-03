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
  ATUALIZAR_RESPONSAVEL_DO_PRATICANTE_PUT, BUSCAR_RESPONSAVEL_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Campo from '../../../components/campos/Campo';
import {atualizar, verificarStatusCadastroParaAtualizacaoDosDemaisFormularios} from "../../../requisicoes/Praticante";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {aplicaMascaraDeTelefone} from "../../../utilidades/ValidadorDeCampos";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import {formatarDataPadraoAnoMesDia} from "../../../utilidades/ManipuladorDeDatas"; // Importando o componente Campo

const ResponsavelPeloPraticante = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
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

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_RESPONSAVEL_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

  }, [idPraticante]);


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

          <CCardHeader>
            <strong>Responsável pelo Praticante</strong>
          </CCardHeader>

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
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="grauParentesco"
                    valor={formularioDeDados.grauParentesco}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, grauParentesco: e.target.value})}
                    legenda="Grau de parentesco"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="date"
                    id="dataNascimento"
                    valor={formatarDataPadraoAnoMesDia(formularioDeDados.dataNascimento)}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, dataNascimento: e.target.value})}
                    legenda="Data de nascimento"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="profissao"
                    valor={formularioDeDados.profissao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, profissao: e.target.value})}
                    legenda="Profissão"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="telefone"
                    valor={formularioDeDados.telefone}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      telefone: aplicaMascaraDeTelefone(e.target.value)
                    })}
                    legenda="Telefone pessoal"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="telefoneTrabalho"
                    valor={formularioDeDados.telefoneTrabalho}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      telefoneTrabalho: aplicaMascaraDeTelefone(e.target.value)
                    })}
                    legenda="Telefone do trabalho"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="email"
                    id="email"
                    valor={formularioDeDados.email}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, email: e.target.value})}
                    legenda="Email"
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
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_RESPONSAVEL_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
              }}>
                Atualizar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ResponsavelPeloPraticante;
