import React, {useState, useEffect} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer
} from '@coreui/react';
import Campo from '../../../components/campos/Campo'; // Importando o componente Campo
import {classeDeEscola, tipoInstituicaoEducacional, periodo} from '../../../constantes/Constantes';
import {
  atualizar,
  salvar,
  verificarStatusCadastroParaAtualizacaoDosDemaisFormularios
} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_EDUCACAO_DO_PRATICANTE_PUT, BUSCAR_EDUCACAO_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import axios from "axios";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL"; // Importando as constantes corretamente

const Educacao = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idEducacaoPraticante: '',
    serieEscolar: '',
    classeDeEscola: '',
    instituicaoEducacional: '',
    tipoDeInstituicaoEducacional: '',
    periodo: '',
    praticante: {
      idPraticante: ''
    }
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_EDUCACAO_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
            <strong>Escolaridade do Praticante</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="serieEscolar"
                    valor={formularioDeDados.serieEscolar}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, serieEscolar: e.target.value})}
                    legenda="Ano/Série Escolar"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="classeDeEscola"
                    valor={formularioDeDados.classeDeEscola}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, classeDeEscola: e.target.value})}
                    legenda="Classe de escola"
                    opcoes={classeDeEscola}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="instituicaoEducacional"
                    valor={formularioDeDados.instituicaoEducacional}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      instituicaoEducacional: e.target.value
                    })}
                    legenda="Instituição de Ensino"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="tipoDeInstituicaoEducacional"
                    valor={formularioDeDados.tipoDeInstituicaoEducacional}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      tipoDeInstituicaoEducacional: e.target.value
                    })}
                    legenda="Tipo de Instituição de Ensino"
                    opcoes={tipoInstituicaoEducacional}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="periodo"
                    valor={formularioDeDados.periodo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, periodo: e.target.value})}
                    legenda="Período"
                    opcoes={periodo}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_EDUCACAO_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal);
              }}>
                Atualizar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Educacao;
