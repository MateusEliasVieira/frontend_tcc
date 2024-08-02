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

import {CADASTRADO, equilibrioDinamico} from "../../../../constantes/Constantes";
import {
  SALVAR_EQUILIBRIO_DINAMICO_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const EquilibrioDinamico = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
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
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const equilibrioDinamico = localStorage.getItem("equilibrioDinamico")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (equilibrioDinamico === CADASTRADO) {
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
                <strong>Equilíbrio Dinâmico</strong>
              </CCardHeader>
          }
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_EQUILIBRIO_DINAMICO_DO_PRATICANTE_POST, "equilibrioDinamico", setDesabilitar)
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

export default EquilibrioDinamico;
