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
import Campo from '../../../../components/campos/Campo';
import {salvar} from "../../../../requisicoes/Praticante";
import {CADASTRADO} from "../../../../constantes/Constantes";
import {
  SALVAR_PLANO_TERAPÊUTICO_SINGULAR_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/planoTerapeuticoSingular/Endpoints";

const PlanoTerapeuticoSingular = () => {
  const [desabilitar, setDesabilitar] = useState("");
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
    imagemCarimboAssinaturaTerapeutas: '',
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
                    legenda="Data de Planejamento"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="responsavelTerapeutico"
                    valor={formularioDeDados.responsavelTerapeutico}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, responsavelTerapeutico: e.target.value})}
                    legenda="Responsável Terapêutico"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="problema"
                    valor={formularioDeDados.problema}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, problema: e.target.value})}
                    legenda="Problema"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="justificativaHipotesesBiologicasSociaisEmocionais"
                    valor={formularioDeDados.justificativaHipotesesBiologicasSociaisEmocionais}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      justificativaHipotesesBiologicasSociaisEmocionais: e.target.value
                    })}
                    legenda="Justificativa e Hipóteses Biológicas, Sociais, Emocionais"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="objetivoTerapeutico"
                    valor={formularioDeDados.objetivoTerapeutico}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, objetivoTerapeutico: e.target.value})}
                    legenda="Objetivo Terapêutico"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="medida"
                    valor={formularioDeDados.medida}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, medida: e.target.value})}
                    legenda="Medida"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="estrategiasIntervencao"
                    valor={formularioDeDados.estrategiasIntervencao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, estrategiasIntervencao: e.target.value})}
                    legenda="Estratégias de Intervenção"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="selasMediadorasAnimais"
                    valor={formularioDeDados.selasMediadorasAnimais}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, selasMediadorasAnimais: e.target.value})}
                    legenda="Selas Mediadoras Animais"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="evolucao"
                    valor={formularioDeDados.evolucao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, evolucao: e.target.value})}
                    legenda="Evolução"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="imagemCarimboAssinaturaTerapeutas"
                    valor={formularioDeDados.imagemCarimboAssinaturaTerapeutas}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      imagemCarimboAssinaturaTerapeutas: e.target.value
                    })}
                    legenda="Imagem do Carimbo/Assinatura dos Terapeutas"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_PLANO_TERAPÊUTICO_SINGULAR_DO_PRATICANTE_POST, "planoTerapeuticoSingular", setDesabilitar)
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
