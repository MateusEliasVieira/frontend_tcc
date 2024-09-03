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
import {atualizar, verificarStatusCadastroParaAtualizacaoDosDemaisFormularios} from "../../../requisicoes/Praticante";
import {equilibrioEstatico} from "../../../constantes/Constantes";
import {
  ATUALIZAR_EQUILIBRIO_ESTATICO_DO_PRATICANTE_PUT,
  BUSCAR_EQUILIBRIO_ESTATICO_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const EquilibrioEstatico = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idEquilibrioEstatico: '',
    apoioCabeca: '',
    comentariosApoioCabeca: '',
    sentarSemApoio: '',
    comentariosSentarSemApoio: '',
    sentarComApoio: '',
    comentariosSentarComApoio: '',
    emPeSemApoio: '',
    comentariosEmPeSemApoio: '',
    emPeComApoio: '',
    comentariosEmPeComApoio: '',
    posicaoDeSentinelaOlhosAbertos: '',
    comentariosPosicaoDeSentinelaOlhosAbertos: '',
    posicaoDeSentinelaOlhosFechados: '',
    comentariosPosicaoDeSentinelaOlhosFechados: '',
    umPeOlhosAbertos: '',
    comentariosUmPeOlhosAbertos: '',
    umPeOlhosFechados: '',
    comentariosUmPeOlhosFechados: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_EQUILIBRIO_ESTATICO_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
            <strong>Equilíbrio Estático</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="apoioCabeca"
                    valor={formularioDeDados.apoioCabeca}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, apoioCabeca: e.target.value})}
                    legenda="Apoio da Cabeça"
                    opcoes={equilibrioEstatico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosApoioCabeca"
                    valor={formularioDeDados.comentariosApoioCabeca}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, comentariosApoioCabeca: e.target.value})}
                    legenda="Comentários Apoio da Cabeça"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="sentarSemApoio"
                    valor={formularioDeDados.sentarSemApoio}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sentarSemApoio: e.target.value})}
                    legenda="Sentar Sem Apoio"
                    opcoes={equilibrioEstatico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosSentarSemApoio"
                    valor={formularioDeDados.comentariosSentarSemApoio}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      comentariosSentarSemApoio: e.target.value
                    })}
                    legenda="Comentários Sentar Sem Apoio"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="sentarComApoio"
                    valor={formularioDeDados.sentarComApoio}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sentarComApoio: e.target.value})}
                    legenda="Sentar Com Apoio"
                    opcoes={equilibrioEstatico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosSentarComApoio"
                    valor={formularioDeDados.comentariosSentarComApoio}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      comentariosSentarComApoio: e.target.value
                    })}
                    legenda="Comentários Sentar Com Apoio"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="emPeSemApoio"
                    valor={formularioDeDados.emPeSemApoio}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, emPeSemApoio: e.target.value})}
                    legenda="Em Pé Sem Apoio"
                    opcoes={equilibrioEstatico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosEmPeSemApoio"
                    valor={formularioDeDados.comentariosEmPeSemApoio}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, comentariosEmPeSemApoio: e.target.value})}
                    legenda="Comentários Em Pé Sem Apoio"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="emPeComApoio"
                    valor={formularioDeDados.emPeComApoio}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, emPeComApoio: e.target.value})}
                    legenda="Em Pé Com Apoio"
                    opcoes={equilibrioEstatico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosEmPeComApoio"
                    valor={formularioDeDados.comentariosEmPeComApoio}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, comentariosEmPeComApoio: e.target.value})}
                    legenda="Comentários Em Pé Com Apoio"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="posicaoDeSentinelaOlhosAbertos"
                    valor={formularioDeDados.posicaoDeSentinelaOlhosAbertos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      posicaoDeSentinelaOlhosAbertos: e.target.value
                    })}
                    legenda="Posição de Sentinela Olhos Abertos"
                    opcoes={equilibrioEstatico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosPosicaoDeSentinelaOlhosAbertos"
                    valor={formularioDeDados.comentariosPosicaoDeSentinelaOlhosAbertos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      comentariosPosicaoDeSentinelaOlhosAbertos: e.target.value
                    })}
                    legenda="Comentários Posição de Sentinela Olhos Abertos"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="posicaoDeSentinelaOlhosFechados"
                    valor={formularioDeDados.posicaoDeSentinelaOlhosFechados}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      posicaoDeSentinelaOlhosFechados: e.target.value
                    })}
                    legenda="Posição de Sentinela Olhos Fechados"
                    opcoes={equilibrioEstatico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosPosicaoDeSentinelaOlhosFechados"
                    valor={formularioDeDados.comentariosPosicaoDeSentinelaOlhosFechados}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      comentariosPosicaoDeSentinelaOlhosFechados: e.target.value
                    })}
                    legenda="Comentários Posição de Sentinela Olhos Fechados"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="umPeOlhosAbertos"
                    valor={formularioDeDados.umPeOlhosAbertos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, umPeOlhosAbertos: e.target.value})}
                    legenda="Um Pé Olhos Abertos"
                    opcoes={equilibrioEstatico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosUmPeOlhosAbertos"
                    valor={formularioDeDados.comentariosUmPeOlhosAbertos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      comentariosUmPeOlhosAbertos: e.target.value
                    })}
                    legenda="Comentários Um Pé Olhos Abertos"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="umPeOlhosFechados"
                    valor={formularioDeDados.umPeOlhosFechados}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, umPeOlhosFechados: e.target.value})}
                    legenda="Um Pé Olhos Fechados"
                    opcoes={equilibrioEstatico}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="comentariosUmPeOlhosFechados"
                    valor={formularioDeDados.comentariosUmPeOlhosFechados}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      comentariosUmPeOlhosFechados: e.target.value
                    })}
                    legenda="Comentários Um Pé Olhos Fechados"
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_EQUILIBRIO_ESTATICO_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default EquilibrioEstatico;
