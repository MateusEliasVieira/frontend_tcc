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
import Campo from '../../../../components/campos/Campo';
import {preencherLegenda} from "../../../../constantes/Constantes";
import {salvar} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_POR_ID_GET,
  SALVAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const TracoDePersonalidade = () => {

  const login = JSON.parse(localStorage.getItem('login'));

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    extroversao: '',
    fobia: '',
    obsessao: '',
    introversao: '',
    ansiedade: '',
    histeria: '',
    dependenciaEmocional: '',
    timidez: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    const id = Number(window.location.href.split("?id=")[1]);

    if (id) {
      // Vai terminar o cadastro
      // Verificar se esse formulário já não foi cadastrado, se já estiver sido cadastrado, mostrar os dados nos campos e deixar bloqueados. Caso contrário, deixar a pessoa finalizar o cadastro
      axios.get(`${BUSCAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_POR_ID_GET}`, {
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
            <strong>Traços de Personalidade</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    id="extroversao"
                    tipo="select"
                    valor={formularioDeDados.extroversao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extroversao: e.target.value})}
                    legenda="É extrovertido(a)?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="fobia"
                    tipo="select"
                    valor={formularioDeDados.fobia}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, fobia: e.target.value})}
                    legenda="Tem fobia?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="obsessao"
                    tipo="select"
                    valor={formularioDeDados.obsessao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, obsessao: e.target.value})}
                    legenda="Possui alguma obsessão?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="introversao"
                    tipo="select"
                    valor={formularioDeDados.introversao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, introversao: e.target.value})}
                    legenda="É introvertido?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    id="ansiedade"
                    tipo="select"
                    valor={formularioDeDados.ansiedade}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, ansiedade: e.target.value})}
                    legenda="Tem ansiedade?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    id="histeria"
                    tipo="select"
                    valor={formularioDeDados.histeria}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, histeria: e.target.value})}
                    legenda="Tem histeria?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="dependenciaEmocional"
                    tipo="select"
                    valor={formularioDeDados.dependenciaEmocional}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, dependenciaEmocional: e.target.value})}
                    legenda="Tem alguma dependência emocional?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    id="timidez"
                    tipo="select"
                    valor={formularioDeDados.timidez}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, timidez: e.target.value})}
                    legenda="É timido(a)?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_TRACOS_PERSONALIDADE_DO_PRATICANTE_POST, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
              }
              }>
                Salvar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default TracoDePersonalidade;
