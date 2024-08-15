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
import {atualizar} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_LINGUAGEM_DO_PRATICANTE_PUT,
  BUSCAR_LINGUAGEM_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const Linguagem = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idLinguagem: '',
    compreensaoVerbal: '',
    gesto: '',
    gritos: '',
    mimicaFacial: '',
    monossilabos: '',
    frasesCurtas: '',
    frasesCompletas: '',
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

      axios.get(BUSCAR_LINGUAGEM_DO_PRATICANTE_POR_ID_GET, {
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
            <strong>Linguagem</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="compreensaoVerbal"
                    valor={formularioDeDados.compreensaoVerbal}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, compreensaoVerbal: e.target.value})}
                    legenda="Tem linguagem verbal compreensiva?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="gesto"
                    valor={formularioDeDados.gesto}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, gesto: e.target.value})}
                    legenda="Gestual?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="gritos"
                    valor={formularioDeDados.gritos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, gritos: e.target.value})}
                    legenda="Gritos?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="mimicaFacial"
                    valor={formularioDeDados.mimicaFacial}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, mimicaFacial: e.target.value})}
                    legenda="Mímica facial?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="select"
                    id="monossilabos"
                    valor={formularioDeDados.monossilabos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, monossilabos: e.target.value})}
                    legenda="Monossílabos?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="select"
                    id="frasesCurtas"
                    valor={formularioDeDados.frasesCurtas}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, frasesCurtas: e.target.value})}
                    legenda="Fala frases curtas?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="select"
                    id="frasesCompletas"
                    valor={formularioDeDados.frasesCompletas}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, frasesCompletas: e.target.value})}
                    legenda="Fala frases completas?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_LINGUAGEM_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default Linguagem;
