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
import {simOuNao, alimentacao, CADASTRADO} from "../../../../constantes/Constantes";
import {salvar} from "../../../../requisicoes/Praticante";
import {
  SALVAR_SOBRE_A_CRIANCA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const SobreACrianca = () => {

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    fezTerapiaEquina: '',
    criancaPlanejada: '',
    cuidadosPreNatais: '',
    chorouNoNascimento: '',
    alimentacao: '',
    observacao: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const sobreACrianca = localStorage.getItem("sobreACrianca")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (sobreACrianca === CADASTRADO) {
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
                <strong>Sobre o Praticante</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="fezTerapiaEquina"
                    valor={formularioDeDados.fezTerapiaEquina}
                    setar={valor => setFormularioDeDados({...formularioDeDados, fezTerapiaEquina: valor})}
                    legenda="Já fez equoterapia antes?"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="criancaPlanejada"
                    valor={formularioDeDados.criancaPlanejada}
                    setar={valor => setFormularioDeDados({...formularioDeDados, criancaPlanejada: valor})}
                    legenda="A criança foi planejada?"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="cuidadosPreNatais"
                    valor={formularioDeDados.cuidadosPreNatais}
                    setar={valor => setFormularioDeDados({...formularioDeDados, cuidadosPreNatais: valor})}
                    legenda="Teve acompanhamento pré-natal?"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="chorouNoNascimento"
                    valor={formularioDeDados.chorouNoNascimento}
                    setar={valor => setFormularioDeDados({...formularioDeDados, chorouNoNascimento: valor})}
                    legenda="Chorou ao nascer?"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="alimentacao"
                    valor={formularioDeDados.alimentacao}
                    setar={valor => setFormularioDeDados({...formularioDeDados, alimentacao: valor})}
                    legenda="Qual foi a alimentação?"
                    opcoes={alimentacao}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="observacao"
                    valor={formularioDeDados.observacao}
                    setar={valor => setFormularioDeDados({...formularioDeDados, observacao: valor})}
                    legenda="Observação"
                  />
                </CCol>
              </CRow>

              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_SOBRE_A_CRIANCA_DO_PRATICANTE_POST, "sobreACrianca", setDesabilitar)
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

export default SobreACrianca;
