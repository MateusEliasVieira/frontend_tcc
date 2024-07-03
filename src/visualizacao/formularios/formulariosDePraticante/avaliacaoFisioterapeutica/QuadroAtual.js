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
import { salvar } from "../../../../requisicoes/QuadroAtual"; // Importe a função salvar apropriada
import {
  SALVAR_QUADRO_ATUAL_POST
} from "../../../../endpoints/physicalTherapyAssessment/Endpoints"; // Certifique-se de que o endpoint está correto
import { CADASTRADO } from "../../../../constantes/Constantes";

const QuadroAtual = () => {
  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idQuadroAtual: '',
    locomocaoAtual: '',
    restricoes: '',
    deformidades: '',
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
            <strong>Quadro Atual</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="locomocaoAtual"
                    valor={formularioDeDados.locomocaoAtual}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, locomocaoAtual: e.target.value })}
                    legenda="Locomoção Atual"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="restricoes"
                    valor={formularioDeDados.restricoes}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, restricoes: e.target.value })}
                    legenda="Restrições"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="deformidades"
                    valor={formularioDeDados.deformidades}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, deformidades: e.target.value })}
                    legenda="Deformidades"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_QUADRO_ATUAL_POST, "quadroAtual", setDesabilitar)
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

export default QuadroAtual;
