import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CRow,
} from '@coreui/react';
import Campo from '../../../components/campos/Campo';
import {simOuNao} from "../../../constantes/Constantes";
import {atualizar, salvar} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_ROTINA_DO_PRATICANTE_PUT,
  BUSCAR_ROTINA_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const Rotina = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idRotina:'',
    brincadeiras: '',
    preferenciasPorBrincadeiras: '',
    aceitaMudancasNaRotina: '',
    consideracoesSobreRotina: '',
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

      axios.get(BUSCAR_ROTINA_DO_PRATICANTE_POR_ID_GET, {
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
            <strong>Rotina</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <Campo
                tipo="textarea"
                id="brincadeiras"
                valor={formularioDeDados.brincadeiras}
                setar={(e) => setFormularioDeDados({...formularioDeDados, brincadeiras: e.target.value})}
                legenda="Brincadeiras (onde, como, com quem?)"
              />
              <Campo
                tipo="textarea"
                id="preferenciasPorBrincadeiras"
                valor={formularioDeDados.preferenciasPorBrincadeiras}
                setar={(e) => setFormularioDeDados({...formularioDeDados, preferenciasPorBrincadeiras: e.target.value})}
                legenda="Preferências e aversões"
              />
              <Campo
                tipo="select"
                id="aceitaMudancasNaRotina"
                valor={formularioDeDados.aceitaMudancasNaRotina}
                setar={(e) => setFormularioDeDados({...formularioDeDados, aceitaMudancasNaRotina: e.target.value})}
                legenda="Aceita mudanças na sua rotina?"
                opcoes={simOuNao}
              />
              <Campo
                tipo="textarea"
                id="consideracoesSobreRotina"
                valor={formularioDeDados.consideracoesSobreRotina}
                setar={(e) => setFormularioDeDados({...formularioDeDados, consideracoesSobreRotina: e.target.value})}
                legenda="Considerações sobre rotina"
              />
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_ROTINA_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
              }
              }>
               Atualizar
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Rotina;
