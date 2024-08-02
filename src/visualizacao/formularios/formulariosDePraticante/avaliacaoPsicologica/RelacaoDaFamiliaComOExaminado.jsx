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
import {CADASTRADO, preencherLegenda} from '../../../../constantes/Constantes';
import {salvar} from "../../../../requisicoes/Praticante";
import {
  SALVAR_RELACAO_FAMILIAR_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const RelacaoDaFamiliaComOExaminado = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    adequado: '',
    superprotecao: '',
    dificuldadePerceberDeficiencias: '',
    rejeicao: '',
    indiferenca: '',
    ansiedadePercebidaEntrevistador: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const relacaoDaFamiliaComOExaminado = localStorage.getItem("relacaoDaFamiliaComOExaminado")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (relacaoDaFamiliaComOExaminado === CADASTRADO) {
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
                <strong>Relação da Família com o Examinado (Percepção do Entrevistador)</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="adequado"
                    valor={formularioDeDados.adequado}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, adequado: e.target.value})}
                    legenda="Adequado?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="superprotecao"
                    valor={formularioDeDados.superprotecao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, superprotecao: e.target.value})}
                    legenda="Superproteção?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="dificuldadePerceberDeficiencias"
                    valor={formularioDeDados.dificuldadePerceberDeficiencias}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      dificuldadePerceberDeficiencias: e.target.value
                    })}
                    legenda="Dificuldade em perceber deficiências?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="rejeicao"
                    valor={formularioDeDados.rejeicao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, rejeicao: e.target.value})}
                    legenda="Rejeição?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="indiferenca"
                    valor={formularioDeDados.indiferenca}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, indiferenca: e.target.value})}
                    legenda="Indiferença?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="ansiedadePercebidaEntrevistador"
                    valor={formularioDeDados.ansiedadePercebidaEntrevistador}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      ansiedadePercebidaEntrevistador: e.target.value
                    })}
                    legenda="Ansiedade?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_RELACAO_FAMILIAR_DO_PRATICANTE_POST, "relacaoDaFamiliaComOExaminado", setDesabilitar,setDisplayModal, setTituloModal, setConteudoModal)
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

export default RelacaoDaFamiliaComOExaminado;
