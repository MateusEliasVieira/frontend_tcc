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
import {CADASTRADO, simOuNao} from "../../../constantes/Constantes";
import {
  ATUALIZAR_FORMA_COMUNICACAO_DO_PRATICANTE_PUT,
  BUSCAR_EQUILIBRIO_ESTATICO_DO_PRATICANTE_POR_ID_GET, BUSCAR_FORMA_COMUNICACAO_DO_PRATICANTE_POR_ID_GET,
  SALVAR_FORMA_COMUNICACAO_DO_PRATICANTE_POST
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const FormaDeComunicacao = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idFormaDeComunicacao: '',
    fala: '',
    consideracoesFala: '',
    gestos: '',
    consideracoesGestos: '',
    usoDosOlhos: '',
    consideracoesUsoDosOlhos: '',
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

      axios.get(BUSCAR_FORMA_COMUNICACAO_DO_PRATICANTE_POR_ID_GET, {
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
            <strong>Forma de Comunicação</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="fala"
                    valor={formularioDeDados.fala}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, fala: e.target.value})}
                    legenda="Fala"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesFala"
                    valor={formularioDeDados.consideracoesFala}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, consideracoesFala: e.target.value})}
                    legenda="Considerações sobre a Fala"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="gestos"
                    valor={formularioDeDados.gestos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, gestos: e.target.value})}
                    legenda="Gestos"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesGestos"
                    valor={formularioDeDados.consideracoesGestos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, consideracoesGestos: e.target.value})}
                    legenda="Considerações sobre os Gestos"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="usoDosOlhos"
                    valor={formularioDeDados.usoDosOlhos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, usoDosOlhos: e.target.value})}
                    legenda="Uso dos Olhos"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesUsoDosOlhos"
                    valor={formularioDeDados.consideracoesUsoDosOlhos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesUsoDosOlhos: e.target.value
                    })}
                    legenda="Considerações sobre o Uso dos Olhos"
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_FORMA_COMUNICACAO_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default FormaDeComunicacao;
