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
import Campo from '../../../components/campos/Campo';
import {
  atualizar,
  salvar,
  verificarStatusCadastroParaAtualizacaoDosDemaisFormularios
} from "../../../requisicoes/Praticante";
import {CADASTRADO} from "../../../constantes/Constantes";
import {
  ATUALIZAR_QUADRO_ATUAL_DO_PRATICANTE_PUT,
  BUSCAR_MOBILIDADE_ARTICULAR_DO_PRATICANTE_POR_ID_GET, BUSCAR_QUADRO_ATUAL_DO_PRATICANTE_POR_ID_GET,
  SALVAR_QUADRO_ATUAL_DO_PRATICANTE_POST
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const QuadroAtual = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idQuadroAtual:'',
    locomocaoAtual: '',
    restricoes: '',
    deformidades: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_QUADRO_ATUAL_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
            <strong>Quadro Atual</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="locomocaoAtual"
                    valor={formularioDeDados.locomocaoAtual}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, locomocaoAtual: e.target.value})}
                    legenda="Locomoção Atual"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="restricoes"
                    valor={formularioDeDados.restricoes}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, restricoes: e.target.value})}
                    legenda="Restrições"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="deformidades"
                    valor={formularioDeDados.deformidades}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, deformidades: e.target.value})}
                    legenda="Deformidades"
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_QUADRO_ATUAL_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
              }}>
                Atualizar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default QuadroAtual;
