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
import { salvar } from "../../../../requisicoes/Praticante";
import { CADASTRADO } from "../../../../constantes/Constantes";
import {
  SALVAR_SAUDE_GERAL_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";

const SaudeGeralDosPraticantes = () => {
  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idSaudeGeralDosPacientes: '',
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
          <CCardHeader>
            <strong>Saúde Geral dos Praticantes</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="convulsoesAnteriores"
                    checked={formularioDeDados.convulsoesAnteriores}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, convulsoesAnteriores: e.target.checked })}
                    legenda="Convulsões Anteriores"
                    disabled={desabilitar}
                  />
                  {formularioDeDados.convulsoesAnteriores && (
                    <Campo
                      tipo="text"
                      id="consideracoesConvulsoesAnteriores"
                      valor={formularioDeDados.consideracoesConvulsoesAnteriores}
                      setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesConvulsoesAnteriores: e.target.value })}
                      legenda="Considerações"
                      disabled={desabilitar}
                    />
                  )}
                  <Campo
                    tipo="checkbox"
                    id="convulsoesAtuais"
                    checked={formularioDeDados.convulsoesAtuais}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, convulsoesAtuais: e.target.checked })}
                    legenda="Convulsões Atuais"
                    disabled={desabilitar}
                  />
                  {formularioDeDados.convulsoesAtuais && (
                    <>
                      <Campo
                        tipo="text"
                        id="frequenciaConvulsoesAtuais"
                        valor={formularioDeDados.frequenciaConvulsoesAtuais}
                        setar={(e) => setFormularioDeDados({ ...formularioDeDados, frequenciaConvulsoesAtuais: e.target.value })}
                        legenda="Frequência"
                        disabled={desabilitar}
                      />
                      <Campo
                        tipo="text"
                        id="consideracoesConvulsoesAtuais"
                        valor={formularioDeDados.consideracoesConvulsoesAtuais}
                        setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesConvulsoesAtuais: e.target.value })}
                        legenda="Considerações"
                        disabled={desabilitar}
                      />
                    </>
                  )}
                  <Campo
                    tipo="checkbox"
                    id="medicamentos"
                    checked={formularioDeDados.medicamentos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, medicamentos: e.target.checked })}
                    legenda="Medicamentos"
                    disabled={desabilitar}
                  />
                  {formularioDeDados.medicamentos && (
                    <Campo
                      tipo="text"
                      id="consideracoesMedicamentos"
                      valor={formularioDeDados.consideracoesMedicamentos}
                      setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesMedicamentos: e.target.value })}
                      legenda="Considerações"
                      disabled={desabilitar}
                    />
                  )}
                  <Campo
                    tipo="checkbox"
                    id="constipacao"
                    checked={formularioDeDados.constipacao}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, constipacao: e.target.checked })}
                    legenda="Constipação"
                    disabled={desabilitar}
                  />
                  {formularioDeDados.constipacao && (
                    <Campo
                      tipo="text"
                      id="consideracoesConstipacao"
                      valor={formularioDeDados.consideracoesConstipacao}
                      setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesConstipacao: e.target.value })}
                      legenda="Considerações"
                      disabled={desabilitar}
                    />
                  )}
                  <Campo
                    tipo="checkbox"
                    id="sono"
                    checked={formularioDeDados.sono}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, sono: e.target.checked })}
                    legenda="Sono"
                    disabled={desabilitar}
                  />
                  {formularioDeDados.sono && (
                    <Campo
                      tipo="text"
                      id="consideracoesSono"
                      valor={formularioDeDados.consideracoesSono}
                      setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesSono: e.target.value })}
                      legenda="Considerações"
                      disabled={desabilitar}
                    />
                  )}
                  <Campo
                    tipo="checkbox"
                    id="audicao"
                    checked={formularioDeDados.audicao}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, audicao: e.target.checked })}
                    legenda="Audição"
                    disabled={desabilitar}
                  />
                  {formularioDeDados.audicao && (
                    <Campo
                      tipo="text"
                      id="consideracoesAudicao"
                      valor={formularioDeDados.consideracoesAudicao}
                      setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesAudicao: e.target.value })}
                      legenda="Considerações"
                      disabled={desabilitar}
                    />
                  )}
                  <Campo
                    tipo="checkbox"
                    id="visao"
                    checked={formularioDeDados.visao}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, visao: e.target.checked })}
                    legenda="Visão"
                    disabled={desabilitar}
                  />
                  {formularioDeDados.visao && (
                    <Campo
                      tipo="text"
                      id="consideracoesVisao"
                      valor={formularioDeDados.consideracoesVisao}
                      setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesVisao: e.target.value })}
                      legenda="Considerações"
                      disabled={desabilitar}
                    />
                  )}
                  <Campo
                    tipo="checkbox"
                    id="refluxoGastroesofagico"
                    checked={formularioDeDados.refluxoGastroesofagico}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, refluxoGastroesofagico: e.target.checked })}
                    legenda="Refluxo Gastroesofágico"
                    disabled={desabilitar}
                  />
                  {formularioDeDados.refluxoGastroesofagico && (
                    <Campo
                      tipo="text"
                      id="consideracoesRefluxoGastroesofagico"
                      valor={formularioDeDados.consideracoesRefluxoGastroesofagico}
                      setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesRefluxoGastroesofagico: e.target.value })}
                      legenda="Considerações"
                      disabled={desabilitar}
                    />
                  )}
                  <Campo
                    tipo="checkbox"
                    id="intervencoesCirurgicas"
                    checked={formularioDeDados.intervencoesCirurgicas}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, intervencoesCirurgicas: e.target.checked })}
                    legenda="Intervenções Cirúrgicas"
                    disabled={desabilitar}
                  />
                  {formularioDeDados.intervencoesCirurgicas && (
                    <Campo
                      tipo="text"
                      id="consideracoesIntervencoesCirurgicas"
                      valor={formularioDeDados.consideracoesIntervencoesCirurgicas}
                      setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesIntervencoesCirurgicas: e.target.value })}
                      legenda="Considerações"
                      disabled={desabilitar}
                    />
                  )}
                  <Campo
                    tipo="checkbox"
                    id="alergias"
                    checked={formularioDeDados.alergias}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, alergias: e.target.checked })}
                    legenda="Alergias"
                    disabled={desabilitar}
                  />
                  {formularioDeDados.alergias && (
                    <Campo
                      tipo="text"
                      id="consideracoesAlergias"
                      valor={formularioDeDados.consideracoesAlergias}
                      setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesAlergias: e.target.value })}
                      legenda="Considerações"
                      disabled={desabilitar}
                    />
                  )}
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_SAUDE_GERAL_DO_PRATICANTE_POST, "saudeGeralDosPraticantes", setDesabilitar)
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

export default SaudeGeralDosPraticantes;
