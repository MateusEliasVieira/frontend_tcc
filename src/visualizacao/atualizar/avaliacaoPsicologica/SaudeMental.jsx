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
import Campo from "../../../components/campos/Campo";
import {preencherLegenda} from "../../../constantes/Constantes";
import {atualizar, verificarStatusCadastroParaAtualizacaoDosDemaisFormularios} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_SAUDE_MENTAL_DO_PRATICANTE_PUT,
  BUSCAR_SAUDE_MENTAL_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const SaudeMental = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idSaudeMental: '',
    apresentaConfusaoMental: '',
    apresentaDelirios: '',
    apresentaAlucinacoes: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_SAUDE_MENTAL_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

  }, [idPraticante]);

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
                  /></CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="apresentaDelirios"
                    valor={formularioDeDados.apresentaDelirios}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, apresentaDelirios: e.target.value})}
                    legenda="Apresenta delírios?"
                    opcoes={preencherLegenda}
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
                  /></CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_SAUDE_MENTAL_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
              }
              }>
                Atualizar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default SaudeMental;
