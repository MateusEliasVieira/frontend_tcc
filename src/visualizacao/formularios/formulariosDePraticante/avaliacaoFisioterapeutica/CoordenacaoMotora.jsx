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
import {simOuNao} from "../../../../constantes/Constantes";
import {
  BUSCAR_COORDENACAO_MOTORA_DO_PRATICANTE_POR_ID_GET,
  SALVAR_COORDENACAO_MOTORA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const CoordenacaoMotora = () => {

  const login = JSON.parse(localStorage.getItem('login'));

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
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
      // Vai terminar o cadastro
      // Verificar se esse formulário já não foi cadastrado, se já estiver sido cadastrado, mostrar os dados nos campos e deixar bloqueados. Caso contrário, deixar a pessoa finalizar o cadastro
      axios.get(`${BUSCAR_COORDENACAO_MOTORA_DO_PRATICANTE_POR_ID_GET}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
        params: {
          id: id
        }
      })
        .then((response) => {
          if (response.status === HttpStatusCode.Ok) {
            setFormularioDeDados({...response.data})
            setDesabilitar(true) // desabilitamos os campos
          } else {
            setFormularioDeDados({...formularioDeDados, praticante: {idPraticante: id}});
          }
        })
        .catch((error) => {
          setFormularioDeDados({...formularioDeDados, praticante: {idPraticante: id}});
        })
    } else {
      // Se não tiver o id, significa que é um novo cadastro
      // Pegamos o id do cadastro atual (é preciso já ter cadastrado os dados pessoais primeiro)
      const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
      if (idPraticanteSalvo) {
        setFormularioDeDados({...formularioDeDados, praticante: {idPraticante: idPraticanteSalvo}});
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_COORDENACAO_MOTORA_DO_PRATICANTE_POST, "coordenacaoMotora", setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
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

export default CoordenacaoMotora;
