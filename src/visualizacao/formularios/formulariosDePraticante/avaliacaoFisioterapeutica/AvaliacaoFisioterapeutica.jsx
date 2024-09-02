import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CRow,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {salvar, verificarStatusDoFormularioDeCadastro} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_AVALIACAO_FISIOTERAPEUTICA_DO_PRATICANTE_POR_ID_GET,
  SALVAR_AVALIACAO_FISIOTERAPEUTICA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const AvaliacaoFisioterapeutica = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    diagnosticoFisioterapeutico: '',
    historicoGravidez: '',
    tonusMuscular: '',
    conclusaoIndicacaoEquoterapia: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusDoFormularioDeCadastro(BUSCAR_AVALIACAO_FISIOTERAPEUTICA_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, formularioDeDados, setDesabilitar)

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
          <CCardHeader>
            <strong>Avaliação Fisioterapêutica</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="diagnosticoFisioterapeutico"
                    valor={formularioDeDados.diagnosticoFisioterapeutico}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      diagnosticoFisioterapeutico: e.target.value
                    })}
                    legenda="Diagnóstico Fisioterapêutico"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="historicoGravidez"
                    valor={formularioDeDados.historicoGravidez}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, historicoGravidez: e.target.value})}
                    legenda="Histórico de Gravidez"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="tonusMuscular"
                    valor={formularioDeDados.tonusMuscular}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, tonusMuscular: e.target.value})}
                    legenda="Tônus Muscular"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="conclusaoIndicacaoEquoterapia"
                    valor={formularioDeDados.conclusaoIndicacaoEquoterapia}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      conclusaoIndicacaoEquoterapia: e.target.value
                    })}
                    legenda="Conclusão/Indicação para Equoterapia"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_AVALIACAO_FISIOTERAPEUTICA_DO_PRATICANTE_POST, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
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

export default AvaliacaoFisioterapeutica;
