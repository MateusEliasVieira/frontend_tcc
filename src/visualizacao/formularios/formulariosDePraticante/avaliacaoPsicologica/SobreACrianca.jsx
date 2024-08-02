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
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const SobreACrianca = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

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
                    setar={(e) =>  setFormularioDeDados({...formularioDeDados, fezTerapiaEquina: e.target.value})}
                    legenda="Já fez equoterapia antes?"
                    opcoes={simOuNao}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="criancaPlanejada"
                    valor={formularioDeDados.criancaPlanejada}
                    setar={(e) =>  setFormularioDeDados({...formularioDeDados, criancaPlanejada: e.target.value})}
                    legenda="A criança foi planejada?"
                    opcoes={simOuNao}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="cuidadosPreNatais"
                    valor={formularioDeDados.cuidadosPreNatais}
                    setar={(e) =>  setFormularioDeDados({...formularioDeDados, cuidadosPreNatais: e.target.value})}
                    legenda="Teve acompanhamento pré-natal?"
                    opcoes={simOuNao}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="chorouNoNascimento"
                    valor={formularioDeDados.chorouNoNascimento}
                    setar={(e) =>  setFormularioDeDados({...formularioDeDados, chorouNoNascimento: e.target.value})}
                    legenda="Chorou ao nascer?"
                    opcoes={simOuNao}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="alimentacao"
                    valor={formularioDeDados.alimentacao}
                    setar={(e) =>  setFormularioDeDados({...formularioDeDados, alimentacao: e.target.value})}
                    legenda="Qual foi a alimentação?"
                    opcoes={alimentacao}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="textarea"
                    id="observacao"
                    valor={formularioDeDados.observacao}
                    setar={(e) =>  setFormularioDeDados({...formularioDeDados, observacao: e.target.value})}
                    legenda="Observação"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>

              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
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
