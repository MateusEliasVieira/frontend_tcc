import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer, CFormSelect,
  CRow,
} from '@coreui/react';
import Campo from '../../../components/campos/Campo';
import {atualizar, verificarStatusCadastroParaAtualizacaoDosDemaisFormularios} from "../../../requisicoes/Praticante";
import {simOuNao} from "../../../constantes/Constantes";
import {
  ATUALIZAR_SAUDE_GERAL_DO_PRATICANTE_PUT,
  BUSCAR_SAUDE_GERAL_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const SaudeGeralDoPraticante = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idSaudeGeralDoPraticante: '',
    convulsoesAnteriores: '',
    consideracoesConvulsoesAnteriores: '',
    convulsoesAtuais: '',
    consideracoesConvulsoesAtuais: '',
    frequenciaConvulsoesAtuais: '',
    medicamentos: '',
    consideracoesMedicamentos: '',
    constipacao: '',
    consideracoesConstipacao: '',
    sono: '',
    consideracoesSono: '',
    audicao: '',
    consideracoesAudicao: '',
    visao: '',
    consideracoesVisao: '',
    refluxoGastroesofagico: '',
    consideracoesRefluxoGastroesofagico: '',
    intervencoesCirurgicas: '',
    consideracoesIntervencoesCirurgicas: '',
    alergias: '',
    consideracoesAlergias: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_SAUDE_GERAL_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
            <strong>Saúde Geral dos Praticantes</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="convulsoesAnteriores"
                    valor={formularioDeDados.convulsoesAnteriores}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, convulsoesAnteriores: e.target.value})}
                    legenda="Convulsões Anteriores"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesConvulsoesAnteriores"
                    valor={formularioDeDados.consideracoesConvulsoesAnteriores}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesConvulsoesAnteriores: e.target.value
                    })}
                    legenda="Considerações"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="convulsoesAtuais"
                    valor={formularioDeDados.convulsoesAtuais}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, convulsoesAtuais: e.target.value})}
                    legenda="Convulsões Atuais"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="frequenciaConvulsoesAtuais"
                    valor={formularioDeDados.frequenciaConvulsoesAtuais}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      frequenciaConvulsoesAtuais: e.target.value
                    })}
                    legenda="Frequência"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesConvulsoesAtuais"
                    valor={formularioDeDados.consideracoesConvulsoesAtuais}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesConvulsoesAtuais: e.target.value
                    })}
                    legenda="Considerações"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="medicamentos"
                    valor={formularioDeDados.medicamentos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, medicamentos: e.target.value})}
                    legenda="Medicamentos"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesMedicamentos"
                    valor={formularioDeDados.consideracoesMedicamentos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesMedicamentos: e.target.value
                    })}
                    legenda="Considerações"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="constipacao"
                    valor={formularioDeDados.constipacao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, constipacao: e.target.value})}
                    legenda="Constipação"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesConstipacao"
                    valor={formularioDeDados.consideracoesConstipacao}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesConstipacao: e.target.value
                    })}
                    legenda="Considerações"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="sono"
                    valor={formularioDeDados.sono}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sono: e.target.value})}
                    legenda="Sono"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesSono"
                    valor={formularioDeDados.consideracoesSono}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, consideracoesSono: e.target.value})}
                    legenda="Considerações"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="audicao"
                    valor={formularioDeDados.audicao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, audicao: e.target.value})}
                    legenda="Audição"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesAudicao"
                    valor={formularioDeDados.consideracoesAudicao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, consideracoesAudicao: e.target.value})}
                    legenda="Considerações"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="visao"
                    valor={formularioDeDados.visao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, visao: e.target.value})}
                    legenda="Visão"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesVisao"
                    valor={formularioDeDados.consideracoesVisao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, consideracoesVisao: e.target.value})}
                    legenda="Considerações"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="refluxoGastroesofagico"
                    valor={formularioDeDados.refluxoGastroesofagico}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      refluxoGastroesofagico: e.target.value
                    })}
                    legenda="Refluxo Gastroesofágico"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesRefluxoGastroesofagico"
                    valor={formularioDeDados.consideracoesRefluxoGastroesofagico}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesRefluxoGastroesofagico: e.target.value
                    })}
                    legenda="Considerações"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="intervencoesCirurgicas"
                    valor={formularioDeDados.intervencoesCirurgicas}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      intervencoesCirurgicas: e.target.value
                    })}
                    legenda="Intervenções Cirúrgicas"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesIntervencoesCirurgicas"
                    valor={formularioDeDados.consideracoesIntervencoesCirurgicas}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesIntervencoesCirurgicas: e.target.value
                    })}
                    legenda="Considerações"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="alergias"
                    valor={formularioDeDados.alergias}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, alergias: e.target.value})}
                    legenda="Alergias"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesAlergias"
                    valor={formularioDeDados.consideracoesAlergias}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, consideracoesAlergias: e.target.value})}
                    legenda="Considerações"
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_SAUDE_GERAL_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
              }}>
                Atualizar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
    ;
};

export default SaudeGeralDoPraticante;
