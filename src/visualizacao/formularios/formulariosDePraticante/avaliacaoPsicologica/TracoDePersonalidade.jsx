import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {CADASTRADO, preencherLegenda} from "../../../../constantes/Constantes";
import {salvar} from "../../../../requisicoes/Praticante";
import {
  SALVAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const TracoDePersonalidade = () => {

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    extroversao: '',
    fobia: '',
    obsessao: '',
    introversao: '',
    ansiedade: '',
    histeria: '',
    dependenciaEmocional: '',
    timidez: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const tracoDePersonalidade = localStorage.getItem("tracoDePersonalidade")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (tracoDePersonalidade === CADASTRADO) {
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
                <strong>Traços de Personalidade</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    id="extroversao"
                    tipo="select"
                    valor={formularioDeDados.extroversao}
                    setar={valor => setFormularioDeDados({...formularioDeDados, extroversao: valor})}
                    legenda="É extrovertido(a)?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="fobia"
                    tipo="select"
                    valor={formularioDeDados.fobia}
                    setar={valor => setFormularioDeDados({...formularioDeDados, fobia: valor})}
                    legenda="Tem fobia?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="obsessao"
                    tipo="select"
                    valor={formularioDeDados.obsessao}
                    setar={valor => setFormularioDeDados({...formularioDeDados, obsessao: valor})}
                    legenda="Possui alguma obsessão?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="introversao"
                    tipo="select"
                    valor={formularioDeDados.introversao}
                    setar={valor => setFormularioDeDados({...formularioDeDados, introversao: valor})}
                    legenda="É introvertido?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol>
                  <Campo
                    id="ansiedade"
                    tipo="select"
                    valor={formularioDeDados.ansiedade}
                    setar={valor => setFormularioDeDados({...formularioDeDados, ansiedade: valor})}
                    legenda="Tem ansiedade?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    id="histeria"
                    tipo="select"
                    valor={formularioDeDados.histeria}
                    setar={valor => setFormularioDeDados({...formularioDeDados, histeria: valor})}
                    legenda="Tem histeria?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="dependenciaEmocional"
                    tipo="select"
                    valor={formularioDeDados.dependenciaEmocional}
                    setar={valor => setFormularioDeDados({...formularioDeDados, dependenciaEmocional: valor})}
                    legenda="Tem alguma dependência emocional?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol>
                  <Campo
                    id="timidez"
                    tipo="select"
                    valor={formularioDeDados.timidez}
                    setar={valor => setFormularioDeDados({...formularioDeDados, timidez: valor})}
                    legenda="É timido(a)?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_POST, "tracoDePersonalidade", setDesabilitar)
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

export default TracoDePersonalidade;
