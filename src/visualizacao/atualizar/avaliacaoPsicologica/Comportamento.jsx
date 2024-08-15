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
import {preencherLegenda} from "../../../constantes/Constantes";
import {
  ATUALIZAR_COMPORTAMENTO_DO_PRATICANTE_PUT,
  BUSCAR_COMPORTAMENTO_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import {atualizar} from "../../../requisicoes/Praticante";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const Comportamento = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idComportamento:'',
    agitacao: '',
    toleranciaFrustracao: '',
    respeitaLimitesRegras: '',
    oposicao: '',
    atencaoConcentracao: '',
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

      axios.get(BUSCAR_COMPORTAMENTO_DO_PRATICANTE_POR_ID_GET, {
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
    <CCard className="mb-4">
      <Modal
        dsp={displayModal}
        titulo={tituloModal}
        conteudo={<div dangerouslySetInnerHTML={{__html: conteudoModal}}/>}
        esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
      />
      <CCardHeader>
        <strong>Comportamento</strong>
      </CCardHeader>
      <CCardBody>
        <CContainer>
          <CRow>
            <CCol md="auto">
              <Campo
                tipo="select"
                id="agitacao"
                valor={formularioDeDados.agitacao}
                setar={(e) => setFormularioDeDados({...formularioDeDados, agitacao: e.target.value})}
                legenda="Tem comportamento agitado?"
                opcoes={preencherLegenda}
              />
            </CCol>
            <CCol md="auto">
              <Campo
                tipo="select"
                id="toleranciaFrustracao"
                valor={formularioDeDados.toleranciaFrustracao}
                setar={(e) => setFormularioDeDados({...formularioDeDados, toleranciaFrustracao: e.target.value})}
                legenda="Tem tolerância à frustração?"
                opcoes={preencherLegenda}
              />
            </CCol>
            <CCol md="auto">
              <Campo
                tipo="select"
                id="respeitaLimitesRegras"
                valor={formularioDeDados.respeitaLimitesRegras}
                setar={(e) => setFormularioDeDados({...formularioDeDados, respeitaLimitesRegras: e.target.value})}
                legenda="Respeita limites e regras?"
                opcoes={preencherLegenda}
              />
            </CCol>
            <CCol md="auto">
              <Campo
                tipo="select"
                id="oposicao"
                valor={formularioDeDados.oposicao}
                setar={(e) => setFormularioDeDados({...formularioDeDados, oposicao: e.target.value})}
                legenda="Oposição?"
                opcoes={preencherLegenda}
              />
            </CCol>
            <CCol md="auto">
              <Campo
                tipo="select"
                id="atencaoConcentracao"
                valor={formularioDeDados.atencaoConcentracao}
                setar={(e) => setFormularioDeDados({...formularioDeDados, atencaoConcentracao: e.target.value})}
                legenda="Possui atenção e concentração?"
                opcoes={preencherLegenda}
              />
            </CCol>
          </CRow>
          <CButton color="danger" style={{color: "white"}} onClick={() => {
            atualizar(formularioDeDados, ATUALIZAR_COMPORTAMENTO_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
          }
          }>
            Atualizar
          </CButton>
        </CContainer>
      </CCardBody>
    </CCard>
  );
};

export default Comportamento;
