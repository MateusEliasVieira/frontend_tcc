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
import {simOuNao} from "../../../constantes/Constantes";
import Campo from "../../../components/campos/Campo";
import {
  ATUALIZAR_COORDENACAO_MOTORA_DO_PRATICANTE_PUT, BUSCAR_COORDENACAO_MOTORA_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import {atualizar} from "../../../requisicoes/Praticante";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";

const CoordenacaoMotora = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idCoordenacaMotora: '',
    testeMaoObjeto: '',
    consideracoesTesteMaoObjeto: '',
    indiceNarizUnilateral: '',
    consideracoesIndiceNarizUnilateral: '',
    testeIndiceIndice: '',
    consideracoesTesteIndiceIndice: '',
    movimentosAlternados: '',
    consideracoesMovimentosAlternados: '',
    testeAlcancePegar: '',
    consideracoesTesteAlcancePegar: '',
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

      axios.get(BUSCAR_COORDENACAO_MOTORA_DO_PRATICANTE_POR_ID_GET, {
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
            <strong>Coordenação Motora</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="testeMaoObjeto"
                    valor={formularioDeDados.testeMaoObjeto}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      testeMaoObjeto: e.target.value
                    })}
                    legenda="Teste Mão-Objeto"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesTesteMaoObjeto"
                    valor={formularioDeDados.consideracoesTesteMaoObjeto}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesTesteMaoObjeto: e.target.value
                    })}
                    legenda="Considerações Teste Mão-Objeto"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="indiceNarizUnilateral"
                    valor={formularioDeDados.indiceNarizUnilateral}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      indiceNarizUnilateral: e.target.value
                    })}
                    legenda="Índice Nariz Unilateral"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesIndiceNarizUnilateral"
                    valor={formularioDeDados.consideracoesIndiceNarizUnilateral}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesIndiceNarizUnilateral: e.target.value
                    })}
                    legenda="Considerações Índice Nariz Unilateral"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="testeIndiceIndice"
                    valor={formularioDeDados.testeIndiceIndice}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      testeIndiceIndice: e.target.value
                    })}
                    legenda="Teste Índice-Índice"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesTesteIndiceIndice"
                    valor={formularioDeDados.consideracoesTesteIndiceIndice}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesTesteIndiceIndice: e.target.value
                    })}
                    legenda="Considerações Teste Índice-Índice"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="movimentosAlternados"
                    valor={formularioDeDados.movimentosAlternados}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      movimentosAlternados: e.target.value
                    })}
                    legenda="Movimentos Alternados"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesMovimentosAlternados"
                    valor={formularioDeDados.consideracoesMovimentosAlternados}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesMovimentosAlternados: e.target.value
                    })}
                    legenda="Considerações Movimentos Alternados"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="testeAlcancePegar"
                    valor={formularioDeDados.testeAlcancePegar}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      testeAlcancePegar: e.target.value
                    })}
                    legenda="Teste Alcance Pegar"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesTesteAlcancePegar"
                    valor={formularioDeDados.consideracoesTesteAlcancePegar}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesTesteAlcancePegar: e.target.value
                    })}
                    legenda="Considerações Teste Alcance Pegar"
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_COORDENACAO_MOTORA_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default CoordenacaoMotora;
