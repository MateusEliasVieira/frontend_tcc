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
import {salvar} from "../../../../requisicoes/Praticante";
import {CADASTRADO, simOuNao} from "../../../../constantes/Constantes";
import {
  SALVAR_FORMA_COMUNICACAO_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const FormaDeComunicacao = () => {
  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    fala: '',
    consideracoesFala: '',
    gestos: '',
    consideracoesGestos: '',
    usoDosOlhos: '',
    consideracoesUsoDosOlhos: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    const [displayModal, setDisplayModal] = useState("none");
    const [tituloModal, setTituloModal] = useState("");
    const [conteudoModal, setConteudoModal] = useState("");

    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const formaDeComunicacao = localStorage.getItem("formaDeComunicacao")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (formaDeComunicacao === CADASTRADO) {
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
                <strong>Forma de Comunicação</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="fala"
                    valor={formularioDeDados.fala}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, fala: e.target.value})}
                    legenda="Fala"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesFala"
                    valor={formularioDeDados.consideracoesFala}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, consideracoesFala: e.target.value})}
                    legenda="Considerações sobre a Fala"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="gestos"
                    valor={formularioDeDados.gestos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, gestos: e.target.value})}
                    legenda="Gestos"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesGestos"
                    valor={formularioDeDados.consideracoesGestos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, consideracoesGestos: e.target.value})}
                    legenda="Considerações sobre os Gestos"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="usoDosOlhos"
                    valor={formularioDeDados.usoDosOlhos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, usoDosOlhos: e.target.value})}
                    legenda="Uso dos Olhos"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesUsoDosOlhos"
                    valor={formularioDeDados.consideracoesUsoDosOlhos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesUsoDosOlhos: e.target.value
                    })}
                    legenda="Considerações sobre o Uso dos Olhos"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_FORMA_COMUNICACAO_DO_PRATICANTE_POST, "formaDeComunicacao", setDesabilitar,setDisplayModal, setTituloModal, setConteudoModal)
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
