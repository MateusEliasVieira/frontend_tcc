import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {preencherLegenda} from "../../../../constantes/Constantes";
import {
  BUSCAR_COMPORTAMENTO_DO_PRATICANTE_POR_ID_GET,
  SALVAR_COMPORTAMENTO_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import {salvar} from "../../../../requisicoes/Praticante";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const Comportamento = () => {

  const login = JSON.parse(localStorage.getItem('login'));

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
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
      // Vai terminar o cadastro
      // Verificar se esse formulário já não foi cadastrado, se já estiver sido cadastrado, mostrar os dados nos campos e deixar bloqueados. Caso contrário, deixar a pessoa finalizar o cadastro
      axios.get(`${BUSCAR_COMPORTAMENTO_DO_PRATICANTE_POR_ID_GET}`, {
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
                disabled={desabilitar}
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
                disabled={desabilitar}
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
                disabled={desabilitar}
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
                disabled={desabilitar}
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
                disabled={desabilitar}
              />
            </CCol>
          </CRow>
          <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
            salvar(formularioDeDados, SALVAR_COMPORTAMENTO_DO_PRATICANTE_POST, "comportamento", setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
          }
          }>
            Salvar
          </CButton>
        </CContainer>
      </CCardBody>
    </CCard>
  );
};

export default Comportamento;
