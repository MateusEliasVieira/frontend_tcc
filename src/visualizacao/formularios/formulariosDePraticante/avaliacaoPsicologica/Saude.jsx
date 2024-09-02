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
import {salvar} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_SAUDE_DO_PRATICANTE_POR_ID_GET,
  SALVAR_SAUDE_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const Saude = () => {

  const login = JSON.parse(localStorage.getItem('login'));

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    alergias: '',
    convulsoes: '',
    doencas: '',
    digestao: '',
    transtornoAlimentar: '',
    respiracao: '',
    sono: '',
    deficitCognitivo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    const id = Number(window.location.href.split("?id=")[1]);

    if (id) {
      // Vai terminar o cadastro
      // Verificar se esse formulário já não foi cadastrado, se já estiver sido cadastrado, mostrar os dados nos campos e deixar bloqueados. Caso contrário, deixar a pessoa finalizar o cadastro
      axios.get(`${BUSCAR_SAUDE_DO_PRATICANTE_POR_ID_GET}`, {
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
            <strong>Saúde do Praticante</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="alergias"
                    valor={formularioDeDados.alergias}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, alergias: e.target.value})}
                    legenda="Alergias"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="convulsoes"
                    valor={formularioDeDados.convulsoes}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, convulsoes: e.target.value})}
                    legenda="Convulsões? Controladas? Tipo?"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="doencas"
                    valor={formularioDeDados.doencas}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, doencas: e.target.value})}
                    legenda="Doenças significativas/traumas"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="digestao"
                    valor={formularioDeDados.digestao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, digestao: e.target.value})}
                    legenda="Digestão"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="transtornoAlimentar"
                    valor={formularioDeDados.transtornoAlimentar}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, transtornoAlimentar: e.target.value})}
                    legenda="Transtorno alimentar"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>

              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="respiracao"
                    valor={formularioDeDados.respiracao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, respiracao: e.target.value})}
                    legenda="Respiração"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="sono"
                    valor={formularioDeDados.sono}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sono: e.target.value})}
                    legenda="Sono"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="deficitCognitivo"
                    valor={formularioDeDados.deficitCognitivo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, deficitCognitivo: e.target.value})}
                    legenda="Déficit cognitivo"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_SAUDE_DO_PRATICANTE_POST, "saude", setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
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

export default Saude;
