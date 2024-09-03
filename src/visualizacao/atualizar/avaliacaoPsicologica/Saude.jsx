import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow,
} from '@coreui/react';
import Campo from '../../../components/campos/Campo';
import {atualizar, verificarStatusCadastroParaAtualizacaoDosDemaisFormularios} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_SAUDE_DO_PRATICANTE_PUT,
  BUSCAR_SAUDE_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const Saude = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idSaude: '',
    alergias: '',
    convulsoes: '',
    doencas: '',
    digestao: '',
    transtornoAlimentar: '',
    respiracao: '',
    sono: '',
    deficitCognitivo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_SAUDE_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
            <strong>Saúde do Praticante</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="alergias"
                    valor={formularioDeDados.alergias}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, alergias: e.target.value})}
                    legenda="Alergias"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="convulsoes"
                    valor={formularioDeDados.convulsoes}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, convulsoes: e.target.value})}
                    legenda="Convulsões? Controladas? Tipo?"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="doencas"
                    valor={formularioDeDados.doencas}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, doencas: e.target.value})}
                    legenda="Doenças significativas/traumas"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="digestao"
                    valor={formularioDeDados.digestao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, digestao: e.target.value})}
                    legenda="Digestão"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="transtornoAlimentar"
                    valor={formularioDeDados.transtornoAlimentar}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, transtornoAlimentar: e.target.value})}
                    legenda="Transtorno alimentar"
                  />
                </CCol>
              </CRow>

              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="respiracao"
                    valor={formularioDeDados.respiracao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, respiracao: e.target.value})}
                    legenda="Respiração"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="sono"
                    valor={formularioDeDados.sono}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sono: e.target.value})}
                    legenda="Sono"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="deficitCognitivo"
                    valor={formularioDeDados.deficitCognitivo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, deficitCognitivo: e.target.value})}
                    legenda="Déficit cognitivo"
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_SAUDE_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default Saude;
