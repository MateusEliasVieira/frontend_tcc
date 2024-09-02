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
import Campo from '../../../../components/campos/Campo';
import {simOuNao} from "../../../../constantes/Constantes";
import {salvar} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_ROTINA_DO_PRATICANTE_POR_ID_GET,
  SALVAR_ROTINA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const Rotina = () => {

  const login = JSON.parse(localStorage.getItem('login'));

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    brincadeiras: '',
    preferenciasPorBrincadeiras: '',
    aceitaMudancasNaRotina: '',
    consideracoesSobreRotina: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    const id = Number(window.location.href.split("?id=")[1]);

    if (id) {
      // Vai terminar o cadastro
      // Verificar se esse formulário já não foi cadastrado, se já estiver sido cadastrado, mostrar os dados nos campos e deixar bloqueados. Caso contrário, deixar a pessoa finalizar o cadastro
      axios.get(`${BUSCAR_ROTINA_DO_PRATICANTE_POR_ID_GET}`, {
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
                disabled={desabilitar}
              />
              <Campo
                tipo="textarea"
                id="preferenciasPorBrincadeiras"
                valor={formularioDeDados.preferenciasPorBrincadeiras}
                setar={(e) => setFormularioDeDados({...formularioDeDados, preferenciasPorBrincadeiras: e.target.value})}
                legenda="Preferências e aversões"
                disabled={desabilitar}
              />
              <Campo
                tipo="select"
                id="aceitaMudancasNaRotina"
                valor={formularioDeDados.aceitaMudancasNaRotina}
                setar={(e) => setFormularioDeDados({...formularioDeDados, aceitaMudancasNaRotina: e.target.value})}
                legenda="Aceita mudanças na sua rotina?"
                opcoes={simOuNao}
                disabled={desabilitar}
              />
              <Campo
                tipo="textarea"
                id="consideracoesSobreRotina"
                valor={formularioDeDados.consideracoesSobreRotina}
                setar={(e) => setFormularioDeDados({...formularioDeDados, consideracoesSobreRotina: e.target.value})}
                legenda="Considerações sobre rotina"
                disabled={desabilitar}
              />
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_ROTINA_DO_PRATICANTE_POST, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
              }
              }>
                Salvar
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Rotina;
