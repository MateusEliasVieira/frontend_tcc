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
import Modal from "../../../components/modal/Modal";
import Campo from "../../../components/campos/Campo";
import {atualizar, verificarStatusCadastroParaAtualizacaoDosDemaisFormularios} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_PUT,
  BUSCAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/planoTerapeuticoSingular/Endpoints";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";
import {converterImagemEmBase64} from "../../../utilidades/ConversorDeImagem";
import {apresentarModal, esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {formatarDataPadraoAnoMesDia} from "../../../utilidades/ManipuladorDeDatas";

const PlanoTerapeuticoSingular = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idPlanoTerapeuticoSingular: '',
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

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="responsavelTerapeutico"
                    valor={formularioDeDados.responsavelTerapeutico}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, responsavelTerapeutico: e.target.value})}
                    legenda="Responsável terapêutico"
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
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="file"
                    id="fisioterapeutaImagemDaAssinaturaOuCarimbo"
                    valor={formularioDeDados.fisioterapeutaImagemDaAssinaturaOuCarimbo}
                    setar={(e) => {
                      converterImagemEmBase64(e.target.files[0])
                        .then((resolve) => {
                          setFormularioDeDados({
                            ...formularioDeDados,
                            fisioterapeutaImagemDaAssinaturaOuCarimbo: resolve
                          });
                        })
                        .catch((reject) => {
                          apresentarModal("Aviso", reject, setDisplayModal, setTituloModal, setConteudoModal)
                        });
                    }}
                    legenda={"Imagem do carimbo/assinatura do fisioterapeuta"}
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
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default PlanoTerapeuticoSingular;
