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
import {atualizar} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_AFETIVIDADE_DO_PRATICANTE_PUT,
  BUSCAR_AFETIVIDADE_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const Afetividade = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idAfetividade: '',
    demonstraAfeicaoEspecialPorAlguem: '',
    compartilhaSuasCoisas: '',
    ajudaQuandoSolicitado: '',
    expressaoDeSentimentos: '',
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

      axios.get(BUSCAR_AFETIVIDADE_DO_PRATICANTE_POR_ID_GET, {
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
            <strong>Afetividade</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="demonstraAfeicaoEspecialPorAlguem"
                    valor={formularioDeDados.demonstraAfeicaoEspecialPorAlguem}
                    setar={(e) =>
                      setFormularioDeDados({...formularioDeDados, demonstraAfeicaoEspecialPorAlguem: e.target.value})
                    }
                    legenda="Demonstra carinho especial por alguém?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="compartilhaSuasCoisas"
                    valor={formularioDeDados.compartilhaSuasCoisas}
                    setar={(e) =>
                      setFormularioDeDados({...formularioDeDados, compartilhaSuasCoisas: e.target.value})
                    }
                    legenda="Divide suas coisas?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="ajudaQuandoSolicitado"
                    valor={formularioDeDados.ajudaQuandoSolicitado}
                    setar={(e) =>
                      setFormularioDeDados({...formularioDeDados, ajudaQuandoSolicitado: e.target.value})
                    }
                    legenda="Ajuda quando solicitado?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="expressaoDeSentimentos"
                    valor={formularioDeDados.expressaoDeSentimentos}
                    setar={(e) =>
                      setFormularioDeDados({...formularioDeDados, expressaoDeSentimentos: e.target.value})
                    }
                    legenda="Expressão de sentimentos (Carinho, Raiva, ...)?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_AFETIVIDADE_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default Afetividade;
