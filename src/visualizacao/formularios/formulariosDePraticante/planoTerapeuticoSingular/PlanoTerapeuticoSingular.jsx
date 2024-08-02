import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CRow
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {salvar} from "../../../../requisicoes/Praticante";
import {CADASTRADO} from "../../../../constantes/Constantes";
import {
  SALVAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/planoTerapeuticoSingular/Endpoints";
import {converterImagemEmBase64} from "../../../../utilidades/ConversorDeImagem";

const PlanoTerapeuticoSingular = () => {
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
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const planoTerapeuticoSingular = localStorage.getItem("planoTerapeuticoSingular")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (planoTerapeuticoSingular === CADASTRADO) {
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
          {
            desabilitar === "disabled" ?
              <CCardHeader style={{backgroundColor: "#1c323f"}}>
                <strong style={{color: "#0ecf8f"}}>Cadastrado com sucesso!</strong>
              </CCardHeader>
              :
              <CCardHeader>
                <strong>Plano Terapêutico Singular (PTS)</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="date"
                    id="dataPlanejamento"
                    valor={formularioDeDados.dataPlanejamento}
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
                    valor={formularioDeDados.fisioterapeutaImagemDaAssinaturaOuCarimbo}
                    setar={(e) => {
                      converterImagemEmBase64(e.target.files[0])
                        .then((resolve) => {
                          setFormularioDeDados({...formularioDeDados, fisioterapeutaImagemDaAssinaturaOuCarimbo: resolve});
                        })
                        .catch((reject) => {
                          console.log(reject);
                        });
                    }}
                    legenda={"Imagem do carimbo/assinatura do fisioterapeuta"}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_POST, "planoTerapeuticoSingular", setDesabilitar)
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
