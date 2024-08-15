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
import Campo from '../../../components/campos/Campo';
import {preencherLegenda} from '../../../constantes/Constantes';
import {atualizar, salvar} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_RELACAO_FAMILIAR_DO_PRATICANTE_PUT,
  BUSCAR_RELACAO_FAMILIAR_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const RelacaoDaFamiliaComOExaminado = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idRelacaoFamiliarExaminado: '',
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

    const id = Number(window.location.href.split("?id=")[1]);
    if (id) {
      setIdPraticante(id);
    } else {
      window.location.href = PESQUISAR_PRATICANTE;
    }

    if (idPraticante) {
      const login = JSON.parse(localStorage.getItem('login'));

      axios.get(BUSCAR_RELACAO_FAMILIAR_DO_PRATICANTE_POR_ID_GET, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
        params: {
          id: idPraticante
        }
      })
        .then((response) => {
          setFormularioDeDados(response.data);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
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
            <strong>Relação da Família com o Examinado (Percepção do Entrevistador)</strong>
          </CCardHeader>
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
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_RELACAO_FAMILIAR_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default RelacaoDaFamiliaComOExaminado;
