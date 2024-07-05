import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm, CContainer,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {CADASTRADO, preencherLegenda} from '../../../../constantes/Constantes';
import {salvar} from "../../../../requisicoes/Praticante";
import {
  SALVAR_CUIDADOS_PESSOAIS_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const CuidadosPessoais = () => {

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    higienePessoalSozinho: '',
    vesteRoupasCalcadosSozinho: '',
    seAlimentaSozinho: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const cuidadosPessoais = localStorage.getItem("cuidadosPessoais")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (cuidadosPessoais === CADASTRADO) {
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
                <strong>Cuidados Pessoais</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="higienePessoalSozinho"
                    valor={formularioDeDados.higienePessoalSozinho}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, higienePessoalSozinho: e.target.value})}
                    legenda="Executa higiene pessoal sozinho(a)?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="vesteRoupasCalcadosSozinho"
                    valor={formularioDeDados.vesteRoupasCalcadosSozinho}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      vesteRoupasCalcadosSozinho: e.target.value
                    })}
                    legenda="Veste as roupas/sapatos sozinho(a)?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="seAlimentaSozinho"
                    valor={formularioDeDados.seAlimentaSozinho}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, seAlimentaSozinho: e.target.value})}
                    legenda="Se alimenta sozinho(a)?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_CUIDADOS_PESSOAIS_DO_PRATICANTE_POST, "cuidadosPessoais", setDesabilitar)
              }
              }>
                Salvar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CuidadosPessoais;
