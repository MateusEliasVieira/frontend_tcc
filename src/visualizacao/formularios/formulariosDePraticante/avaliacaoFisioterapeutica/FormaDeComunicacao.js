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
import Campo from '../../../../components/campos/Campo'; // Certifique-se de que o caminho está correto
import { salvar } from "../../../../requisicoes/FormaDeComunicacao"; // Importe a função salvar apropriada
import {
  SALVAR_FORMA_DE_COMUNICACAO_POST
} from "../../../../endpoints/avaliacaoFisioterapeutica/Endpoints"; // Certifique-se de que o endpoint está correto
import { CADASTRADO } from "../../../../constantes/Constantes";

const FormaDeComunicacao = () => {
  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idFormaDeComunicacao: '',
    fala: false,
    consideracoesFala: '',
    gestos: false,
    consideracoesGestos: '',
    usoDosOlhos: false,
    consideracoesUsoDosOlhos: '',
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
            <strong>Forma de Comunicação</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="fala"
                    valor={formularioDeDados.fala}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, fala: e.target.checked })}
                    legenda="Fala"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="consideracoesFala"
                    valor={formularioDeDados.consideracoesFala}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesFala: e.target.value })}
                    legenda="Considerações sobre a Fala"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="gestos"
                    valor={formularioDeDados.gestos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, gestos: e.target.checked })}
                    legenda="Gestos"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="consideracoesGestos"
                    valor={formularioDeDados.consideracoesGestos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesGestos: e.target.value })}
                    legenda="Considerações sobre os Gestos"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="usoDosOlhos"
                    valor={formularioDeDados.usoDosOlhos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, usoDosOlhos: e.target.checked })}
                    legenda="Uso dos Olhos"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="consideracoesUsoDosOlhos"
                    valor={formularioDeDados.consideracoesUsoDosOlhos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesUsoDosOlhos: e.target.value })}
                    legenda="Considerações sobre o Uso dos Olhos"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_FORMA_DE_COMUNICACAO_POST, "formaDeComunicacao", setDesabilitar)
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

export default FormaDeComunicacao;
