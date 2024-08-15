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
import {atualizar, salvar} from "../../../requisicoes/Praticante";

import {equilibrioDinamico} from "../../../constantes/Constantes";
import {
  ATUALIZAR_EQUILIBRIO_DINAMICO_DO_PRATICANTE_PUT,
  BUSCAR_EQUILIBRIO_DINAMICO_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";
const EquilibrioDinamico = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idEquilibrioDinamixo:'',
    engatinhar: '',
    comentariosEngatinhar: '',
    marchaVoluntaria: '',
    comentariosMarchaVoluntaria: '',
    saltarPesJuntos: '',
    comentariosSaltarPesJuntos: '',
    correrDesviandoObstaculos: '',
    comentariosCorrerDesviandoObstaculos: '',
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

      axios.get(BUSCAR_EQUILIBRIO_DINAMICO_DO_PRATICANTE_POR_ID_GET, {
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
            <strong>Equilíbrio Dinâmico</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="engatinhar"
                    valor={formularioDeDados.engatinhar}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, engatinhar: e.target.value})}
                    legenda="Engatinhar"
                    opcoes={equilibrioDinamico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosEngatinhar"
                    valor={formularioDeDados.comentariosEngatinhar}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, comentariosEngatinhar: e.target.value})}
                    legenda="Comentários Engatinhar"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="marchaVoluntaria"
                    valor={formularioDeDados.marchaVoluntaria}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, marchaVoluntaria: e.target.value})}
                    legenda="Marcha Voluntária"
                    opcoes={equilibrioDinamico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosMarchaVoluntaria"
                    valor={formularioDeDados.comentariosMarchaVoluntaria}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      comentariosMarchaVoluntaria: e.target.value
                    })}
                    legenda="Comentários Marcha Voluntária"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="saltarPesJuntos"
                    valor={formularioDeDados.saltarPesJuntos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, saltarPesJuntos: e.target.value})}
                    legenda="Saltar com os Pés Juntos"
                    opcoes={equilibrioDinamico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosSaltarPesJuntos"
                    valor={formularioDeDados.comentariosSaltarPesJuntos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      comentariosSaltarPesJuntos: e.target.value
                    })}
                    legenda="Comentários Saltar com os Pés Juntos"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="correrDesviandoObstaculos"
                    valor={formularioDeDados.correrDesviandoObstaculos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      correrDesviandoObstaculos: e.target.value
                    })}
                    legenda="Correr Desviando Obstáculos"
                    opcoes={equilibrioDinamico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosCorrerDesviandoObstaculos"
                    valor={formularioDeDados.comentariosCorrerDesviandoObstaculos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      comentariosCorrerDesviandoObstaculos: e.target.value
                    })}
                    legenda="Comentários Correr Desviando Obstáculos"
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_EQUILIBRIO_DINAMICO_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default EquilibrioDinamico;
