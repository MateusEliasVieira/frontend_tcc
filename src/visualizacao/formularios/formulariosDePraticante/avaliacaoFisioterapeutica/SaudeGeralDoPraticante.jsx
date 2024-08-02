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
import {CADASTRADO, simOuNao} from "../../../../constantes/Constantes";
import {
  SALVAR_SAUDE_GERAL_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const SaudeGeralDoPraticante = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    convulsoesAnteriores: false,
    consideracoesConvulsoesAnteriores: '',
    convulsoesAtuais: false,
    consideracoesConvulsoesAtuais: '',
    frequenciaConvulsoesAtuais: '',
    medicamentos: false,
    consideracoesMedicamentos: '',
    constipacao: false,
    consideracoesConstipacao: '',
    sono: false,
    consideracoesSono: '',
    audicao: false,
    consideracoesAudicao: '',
    visao: false,
    consideracoesVisao: '',
    refluxoGastroesofagico: false,
    consideracoesRefluxoGastroesofagico: '',
    intervencoesCirurgicas: false,
    consideracoesIntervencoesCirurgicas: '',
    alergias: false,
    consideracoesAlergias: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const saudeGeralDosPraticantes = localStorage.getItem("saudeGeralDosPraticantes")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (saudeGeralDosPraticantes === CADASTRADO) {
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
                <strong>Saúde Geral dos Praticantes</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="convulsoesAnteriores"
                    value={formularioDeDados.convulsoesAnteriores}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, convulsoesAnteriores: e.target.value})}
                    legenda="Convulsões Anteriores"
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="convulsoesAtuais"
                    value={formularioDeDados.convulsoesAtuais}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, convulsoesAtuais: e.target.value})}
                    legenda="Convulsões Atuais"
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="medicamentos"
                    value={formularioDeDados.medicamentos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, medicamentos: e.target.value})}
                    legenda="Medicamentos"
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="constipacao"
                    value={formularioDeDados.constipacao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, constipacao: e.target.value})}
                    legenda="Constipação"
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="sono"
                    value={formularioDeDados.sono}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sono: e.target.value})}
                    legenda="Sono"
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="audicao"
                    value={formularioDeDados.audicao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, audicao: e.target.value})}
                    legenda="Audição"
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="visao"
                    value={formularioDeDados.visao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, visao: e.target.value})}
                    legenda="Visão"
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="refluxoGastroesofagico"
                    value={formularioDeDados.refluxoGastroesofagico}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      refluxoGastroesofagico: e.target.value
                    })}
                    legenda="Refluxo Gastroesofágico"
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="intervencoesCirurgicas"
                    value={formularioDeDados.intervencoesCirurgicas}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      intervencoesCirurgicas: e.target.value
                    })}
                    legenda="Intervenções Cirúrgicas"
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="alergias"
                    value={formularioDeDados.alergias}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, alergias: e.target.value})}
                    legenda="Alergias"
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_SAUDE_GERAL_DO_PRATICANTE_POST, "saudeGeralDosPraticantes", setDesabilitar,setDisplayModal, setTituloModal, setConteudoModal)
              }}>
                Salvar
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
