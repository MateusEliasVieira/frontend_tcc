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
import {preencherLegenda} from "../../../../constantes/Constantes";
import {salvar, verificarStatusDoFormularioDeCadastro} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_SAUDE_MENTAL_DO_PRATICANTE_POR_ID_GET,
  SALVAR_SAUDE_MENTAL_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const SaudeMental = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

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

    verificarStatusDoFormularioDeCadastro(BUSCAR_SAUDE_MENTAL_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setDesabilitar)

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
          <CCardHeader>
            <strong>Saúde Mental</strong>
          </CCardHeader>
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
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_SAUDE_MENTAL_DO_PRATICANTE_POST, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
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
