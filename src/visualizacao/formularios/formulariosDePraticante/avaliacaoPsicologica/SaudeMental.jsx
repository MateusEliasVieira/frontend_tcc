import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer, CForm,
  CRow,
} from '@coreui/react';
import Campo from "../../../../components/campos/Campo";
import {CADASTRADO, preencherLegenda} from "../../../../constantes/Constantes";
import {salvar} from "../../../../requisicoes/Praticante";
import {SALVAR_SAUDE_MENTAL_DO_PRATICANTE_POST} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const SaudeMental = () => {

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    apresentaConfusaoMental: '',
    apresentaDelirios: '',
    apresentaAlucinacoes: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const saudeMental = localStorage.getItem("saudeMental")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (saudeMental === CADASTRADO) {
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
                <strong>Saúde Mental</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="apresentaConfusaoMental"
                    valor={formularioDeDados.apresentaConfusaoMental}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, apresentaConfusaoMental: e.target.value})}
                    legenda="Apresenta confusão mental?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  /></CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="apresentaDelirios"
                    valor={formularioDeDados.apresentaDelirios}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, apresentaDelirios: e.target.value})}
                    legenda="Apresenta delírios?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="apresentaAlucinacoes"
                    valor={formularioDeDados.apresentaAlucinacoes}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, apresentaAlucinacoes: e.target.value})}
                    legenda="Apresenta alucinações?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  /></CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_SAUDE_MENTAL_DO_PRATICANTE_POST, "saudeMental", setDesabilitar)
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

export default SaudeMental;
