import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer, CImage,
  CRow
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {salvar, verificarStatusDoFormularioDeCadastro} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_POR_ID_GET,
  SALVAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/planoTerapeuticoSingular/Endpoints";
import {converterImagemEmBase64} from "../../../../utilidades/ConversorDeImagem";
import Modal from "../../../../components/modal/Modal";
import {apresentarModal, esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";
import {formatarDataPadraoAnoMesDia} from "../../../../utilidades/ManipuladorDeDatas";

const PlanoTerapeuticoSingular = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    dataPlanejamento: '',
    responsavelTerapeutico: '',
    problema: '',
    justificativaHipotesesBiologicasSociaisEmocionais: '',
    objetivoTerapeutico: '',
    medida: '',
    estrategiasIntervencao: '',
    selasMediadorasAnimais: '',
    evolucao: '',
    fisioterapeutaImagemDaAssinaturaOuCarimbo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusDoFormularioDeCadastro(BUSCAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, formularioDeDados, setDesabilitar)

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
            <strong>Plano Terapêutico Singular (PTS)</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="date"
                    id="dataPlanejamento"
                    valor={formatarDataPadraoAnoMesDia(formularioDeDados.dataPlanejamento)}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, dataPlanejamento: e.target.value})}
                    legenda="Data do planejamento"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="responsavelTerapeutico"
                    valor={formularioDeDados.responsavelTerapeutico}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, responsavelTerapeutico: e.target.value})}
                    legenda="Responsável terapêutico"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="problema"
                    valor={formularioDeDados.problema}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, problema: e.target.value})}
                    legenda="Problema (O que acontece?)"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="justificativaHipotesesBiologicasSociaisEmocionais"
                    valor={formularioDeDados.justificativaHipotesesBiologicasSociaisEmocionais}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      justificativaHipotesesBiologicasSociaisEmocionais: e.target.value
                    })}
                    legenda="Hipóteses que justificativa o problema biológico, social e emocional: (Por que isso acontece?)"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="objetivoTerapeutico"
                    valor={formularioDeDados.objetivoTerapeutico}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, objetivoTerapeutico: e.target.value})}
                    legenda="Meta terapêutica"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="medida"
                    valor={formularioDeDados.medida}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, medida: e.target.value})}
                    legenda="Mensuração (Como vou medir?) (Tempo, escalas, repetições etc.)"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="estrategiasIntervencao"
                    valor={formularioDeDados.estrategiasIntervencao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, estrategiasIntervencao: e.target.value})}
                    legenda="Estratégias de intervenção (Plano de ação - o que fazer? Como treinar?)"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="selasMediadorasAnimais"
                    valor={formularioDeDados.selasMediadorasAnimais}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, selasMediadorasAnimais: e.target.value})}
                    legenda="Mediadores/Animal/Encilhamento"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="evolucao"
                    valor={formularioDeDados.evolucao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, evolucao: e.target.value})}
                    legenda="Como está evoluindo? (Devolutiva)"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="file"
                    id="fisioterapeutaImagemDaAssinaturaOuCarimbo"
                    setar={(e) => {
                      converterImagemEmBase64(e.target.files[0])
                        .then((resolve) => {
                          setFormularioDeDados({
                            ...formularioDeDados,
                            fisioterapeutaImagemDaAssinaturaOuCarimbo: resolve
                          })
                        })
                        .catch((reject) => {
                          apresentarModal("Aviso", reject, setDisplayModal, setTituloModal, setConteudoModal)
                        });
                    }}
                    legenda={"Imagem do carimbo/assinatura do fisioterapeuta"}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                {formularioDeDados.fisioterapeutaImagemDaAssinaturaOuCarimbo !== '' ?
                  <CCol>
                    <CImage src={formularioDeDados.fisioterapeutaImagemDaAssinaturaOuCarimbo} width={600} height={300}
                            style={{margin: "20px auto"}}/>
                  </CCol>
                  :
                  <strong style={{margin: "20px auto"}}>Nenhuma imagem selecionada</strong>
                }
              </CRow>
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_POST, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
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

export default PlanoTerapeuticoSingular;
