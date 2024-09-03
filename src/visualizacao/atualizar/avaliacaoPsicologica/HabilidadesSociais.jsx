import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer,
} from '@coreui/react';
import Campo from '../../../components/campos/Campo';
import {preencherLegenda} from '../../../constantes/Constantes';
import {
  atualizar,
  salvar,
  verificarStatusCadastroParaAtualizacaoDosDemaisFormularios
} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_HABILIDADES_SOCIAIS_DO_PRATICANTE_PUT,
  BUSCAR_HABILIDADES_SOCIAIS_DO_PRATICANTE_POR_ID_GET,
  SALVAR_HABILIDADES_SOCIAIS_DO_PRATICANTE_POST
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const HabilidadesSociais = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idHabilidadesSociais: '',
    passividade: '',
    autoagressao: '',
    heteroagressividade: '',
    assertividade: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_HABILIDADES_SOCIAIS_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
            <strong>Habilidades Sociais</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="passividade"
                    valor={formularioDeDados.passividade}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, passividade: e.target.value})}
                    legenda="Passividade?"
                    opcoes={preencherLegenda}
                  /></CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="autoagressao"
                    valor={formularioDeDados.autoagressao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, autoagressao: e.target.value})}
                    legenda="Autoagressividade?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="heteroagressividade"
                    valor={formularioDeDados.heteroagressividade}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, heteroagressividade: e.target.value})}
                    legenda="Heteroagressividade?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="assertividade"
                    valor={formularioDeDados.assertividade}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, assertividade: e.target.value})}
                    legenda="Assertividade?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_HABILIDADES_SOCIAIS_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
              }
              }>
                Atualizar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default HabilidadesSociais;
