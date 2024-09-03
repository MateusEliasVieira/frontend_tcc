import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react';
import Campo from "../../../components/campos/Campo";
import {
  ATUALIZAR_AVALIACAO_FISIOTERAPEUTICA_DO_PRATICANTE_PUT,
  BUSCAR_AVALIACAO_FISIOTERAPEUTICA_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";
import {atualizar, verificarStatusCadastroParaAtualizacaoDosDemaisFormularios} from "../../../requisicoes/Praticante";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";


const AvaliacaoFisioterapeutica = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idAvaliacaoFisioterapeutica: '',
    diagnosticoFisioterapeutico: '',
    historicoGravidez: '',
    tonusMuscular: '',
    conclusaoIndicacaoEquoterapia: '',
    praticante: {
      idPraticante: ''
    }
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_AVALIACAO_FISIOTERAPEUTICA_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_AVALIACAO_FISIOTERAPEUTICA_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default AvaliacaoFisioterapeutica;
