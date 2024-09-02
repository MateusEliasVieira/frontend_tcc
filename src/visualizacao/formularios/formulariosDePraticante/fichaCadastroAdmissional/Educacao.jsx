import React, {useState, useEffect} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo'; // Importando o componente Campo
import {classeDeEscola, tipoInstituicaoEducacional, periodo, CADASTRADO} from '../../../../constantes/Constantes';
import {salvar} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_EDUCACAO_DO_PRATICANTE_POR_ID_GET,
  SALVAR_EDUCACAO_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios"; // Importando as constantes corretamente

const Educacao = () => {

  const login = JSON.parse(localStorage.getItem('login'));

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    serieEscolar: '',
    classeDeEscola: '',
    instituicaoEducacional: '',
    tipoDeInstituicaoEducacional: '',
    periodo: '',
    praticante: {
      idPraticante: ''
    }
  });

  useEffect(() => {

    const id = Number(window.location.href.split("?id=")[1]);

    if (id) {
      // Vai terminar o cadastro
      // Verificar se esse formulário já não foi cadastrado, se já estiver sido cadastrado, mostrar os dados nos campos e deixar bloqueados. Caso contrário, deixar a pessoa finalizar o cadastro
      axios.get(`${BUSCAR_EDUCACAO_DO_PRATICANTE_POR_ID_GET}`, {
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
            <strong>Escolaridade do Praticante</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="serieEscolar"
                    valor={formularioDeDados.serieEscolar}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, serieEscolar: e.target.value})}
                    legenda="Ano/Série Escolar"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="classeDeEscola"
                    valor={formularioDeDados.classeDeEscola}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, classeDeEscola: e.target.value})}
                    legenda="Classe de escola"
                    opcoes={classeDeEscola}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="instituicaoEducacional"
                    valor={formularioDeDados.instituicaoEducacional}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      instituicaoEducacional: e.target.value
                    })}
                    legenda="Instituição de Ensino"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="tipoDeInstituicaoEducacional"
                    valor={formularioDeDados.tipoDeInstituicaoEducacional}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      tipoDeInstituicaoEducacional: e.target.value
                    })}
                    legenda="Tipo de Instituição de Ensino"
                    opcoes={tipoInstituicaoEducacional}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="periodo"
                    valor={formularioDeDados.periodo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, periodo: e.target.value})}
                    legenda="Período"
                    opcoes={periodo}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_EDUCACAO_DO_PRATICANTE_POST, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal);
              }}>
                Salvar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Educacao;
