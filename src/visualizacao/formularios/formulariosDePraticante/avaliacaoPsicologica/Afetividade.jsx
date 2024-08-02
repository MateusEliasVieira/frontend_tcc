import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {CADASTRADO, preencherLegenda} from "../../../../constantes/Constantes";
import {salvar} from "../../../../requisicoes/Praticante";
import {SALVAR_AFETIVIDADE_DO_PRATICANTE_POST} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const Afetividade = () => {

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    demonstraAfeicaoEspecialPorAlguem: '',
    compartilhaSuasCoisas: '',
    ajudaQuandoSolicitado: '',
    expressaoDeSentimentos: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const afetividade = localStorage.getItem("afetividade")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (afetividade === CADASTRADO) {
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
                <strong>Afetividade</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="demonstraAfeicaoEspecialPorAlguem"
                    valor={formularioDeDados.demonstraAfeicaoEspecialPorAlguem}
                    setar={(e) =>
                      setFormularioDeDados({...formularioDeDados, demonstraAfeicaoEspecialPorAlguem: e.target.value})
                    }
                    legenda="Demonstra carinho especial por alguém?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="compartilhaSuasCoisas"
                    valor={formularioDeDados.compartilhaSuasCoisas}
                    setar={(e) =>
                      setFormularioDeDados({...formularioDeDados, compartilhaSuasCoisas: e.target.value})
                    }
                    legenda="Divide suas coisas?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="ajudaQuandoSolicitado"
                    valor={formularioDeDados.ajudaQuandoSolicitado}
                    setar={(e) =>
                      setFormularioDeDados({...formularioDeDados, ajudaQuandoSolicitado: e.target.value})
                    }
                    legenda="Ajuda quando solicitado?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="expressaoDeSentimentos"
                    valor={formularioDeDados.expressaoDeSentimentos}
                    setar={(e) =>
                      setFormularioDeDados({...formularioDeDados, expressaoDeSentimentos: e.target.value})
                    }
                    legenda="Expressão de sentimentos (Carinho, Raiva, ...)?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_AFETIVIDADE_DO_PRATICANTE_POST, "afetividade", setDesabilitar)
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

export default Afetividade;
