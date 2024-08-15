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
import {preencherLegenda} from "../../../constantes/Constantes";
import {atualizar, salvar} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_PUT,
  BUSCAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const TracoDePersonalidade = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idTracosDePersonalidade: '',
    extroversao: '',
    fobia: '',
    obsessao: '',
    introversao: '',
    ansiedade: '',
    histeria: '',
    dependenciaEmocional: '',
    timidez: '',
    praticante: {
      idPraticante: ''
    }
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

      axios.get(BUSCAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_POR_ID_GET, {
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
            <strong>Traços de Personalidade</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    id="extroversao"
                    tipo="select"
                    valor={formularioDeDados.extroversao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extroversao: e.target.value})}
                    legenda="É extrovertido(a)?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="fobia"
                    tipo="select"
                    valor={formularioDeDados.fobia}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, fobia: e.target.value})}
                    legenda="Tem fobia?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="obsessao"
                    tipo="select"
                    valor={formularioDeDados.obsessao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, obsessao: e.target.value})}
                    legenda="Possui alguma obsessão?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="introversao"
                    tipo="select"
                    valor={formularioDeDados.introversao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, introversao: e.target.value})}
                    legenda="É introvertido?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol>
                  <Campo
                    id="ansiedade"
                    tipo="select"
                    valor={formularioDeDados.ansiedade}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, ansiedade: e.target.value})}
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
                    setar={(e) => setFormularioDeDados({...formularioDeDados, histeria: e.target.value})}
                    legenda="Tem histeria?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="dependenciaEmocional"
                    tipo="select"
                    valor={formularioDeDados.dependenciaEmocional}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, dependenciaEmocional: e.target.value})}
                    legenda="Tem alguma dependência emocional?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol>
                  <Campo
                    id="timidez"
                    tipo="select"
                    valor={formularioDeDados.timidez}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, timidez: e.target.value})}
                    legenda="É timido(a)?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default TracoDePersonalidade;
