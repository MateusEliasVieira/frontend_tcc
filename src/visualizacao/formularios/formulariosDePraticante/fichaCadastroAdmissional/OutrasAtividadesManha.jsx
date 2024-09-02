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
  BUSCAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POR_ID_GET,
  SALVAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios"; // Importando o componente Campo

const OutrasAtividadesManha = () => {

  const login = JSON.parse(localStorage.getItem('login'));

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    segundaFeira: '',
    tercaFeira: '',
    quartaFeira: '',
    quintaFeira: '',
    sextaFeira: '',
    sabado: '',
    domingo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    const id = Number(window.location.href.split("?id=")[1]);

    if (id) {
      // Vai terminar o cadastro
      // Verificar se esse formulário já não foi cadastrado, se já estiver sido cadastrado, mostrar os dados nos campos e deixar bloqueados. Caso contrário, deixar a pessoa finalizar o cadastro
      axios.get(`${BUSCAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POR_ID_GET}`, {
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
            <strong>Outras atividades matutinas</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="segundaFeira"
                    valor={formularioDeDados.segundaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, segundaFeira: e.target.value})}
                    legenda="Segunda-feira"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="tercaFeira"
                    valor={formularioDeDados.tercaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, tercaFeira: e.target.value})}
                    legenda="Terça-feira"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="quartaFeira"
                    valor={formularioDeDados.quartaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, quartaFeira: e.target.value})}
                    legenda="Quarta-feira"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="quintaFeira"
                    valor={formularioDeDados.quintaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, quintaFeira: e.target.value})}
                    legenda="Quinta-feira"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>

              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="sextaFeira"
                    valor={formularioDeDados.sextaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sextaFeira: e.target.value})}
                    legenda="Sexta-feira"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="sabado"
                    valor={formularioDeDados.sabado}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sabado: e.target.value})}
                    legenda="Sábado"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="domingo"
                    valor={formularioDeDados.domingo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, domingo: e.target.value})}
                    legenda="Domingo"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POST, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
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

export default OutrasAtividadesManha;
