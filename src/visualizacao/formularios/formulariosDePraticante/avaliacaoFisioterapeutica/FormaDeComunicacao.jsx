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
  BUSCAR_FORMA_COMUNICACAO_DO_PRATICANTE_POR_ID_GET,
  SALVAR_FORMA_COMUNICACAO_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const FormaDeComunicacao = () => {

  const login = JSON.parse(localStorage.getItem('login'));

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
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
      // Vai terminar o cadastro
      // Verificar se esse formulário já não foi cadastrado, se já estiver sido cadastrado, mostrar os dados nos campos e deixar bloqueados. Caso contrário, deixar a pessoa finalizar o cadastro
      axios.get(`${BUSCAR_FORMA_COMUNICACAO_DO_PRATICANTE_POR_ID_GET}`, {
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_FORMA_COMUNICACAO_DO_PRATICANTE_POST, "formaDeComunicacao", setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
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

export default FormaDeComunicacao;
