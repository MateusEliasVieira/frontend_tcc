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
import Campo from '../../../../components/campos/Campo'; // Certifique-se de que o caminho está correto
import { salvar } from "../../../../requisicoes/Praticante"; // Importe a função salvar apropriada
import {
  SALVAR_AVALIACAO_FISIOTERAPEUTICA_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints"; // Certifique-se de que o endpoint está correto
import { CADASTRADO } from "../../../../constantes/Constantes";

const AvaliacaoFisioterapeutica = () => {
  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idAvaliacaoFisioterapeutica: '',
    diagnosticoFisioterapeutico: '',
    historicoGravidez: '',
    tonusMuscular: '',
    conclusaoIndicacaoEquoterapia: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const avaliacaoFisioterapeutica = localStorage.getItem("avaliacaoFisioterapeutica")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (avaliacaoFisioterapeutica === CADASTRADO) {
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
            <strong>Avaliação Fisioterapêutica</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="diagnosticoFisioterapeutico"
                    valor={formularioDeDados.diagnosticoFisioterapeutico}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, diagnosticoFisioterapeutico: e.target.value })}
                    legenda="Diagnóstico Fisioterapêutico"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="historicoGravidez"
                    valor={formularioDeDados.historicoGravidez}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, historicoGravidez: e.target.value })}
                    legenda="Histórico de Gravidez"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="tonusMuscular"
                    valor={formularioDeDados.tonusMuscular}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, tonusMuscular: e.target.value })}
                    legenda="Tônus Muscular"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="conclusaoIndicacaoEquoterapia"
                    valor={formularioDeDados.conclusaoIndicacaoEquoterapia}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, conclusaoIndicacaoEquoterapia: e.target.value })}
                    legenda="Conclusão/Indicação para Equoterapia"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_AVALIACAO_FISIOTERAPEUTICA_POST, "avaliacaoFisioterapeutica", setDesabilitar)
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
