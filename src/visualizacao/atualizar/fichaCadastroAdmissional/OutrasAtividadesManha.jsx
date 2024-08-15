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
import {atualizar} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_PUT,
  BUSCAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios"; // Importando o componente Campo

const OutrasAtividadesManha = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
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
    }
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

      axios.get(BUSCAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POR_ID_GET, {
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
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="tercaFeira"
                    valor={formularioDeDados.tercaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, tercaFeira: e.target.value})}
                    legenda="Terça-feira"
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
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="quintaFeira"
                    valor={formularioDeDados.quintaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, quintaFeira: e.target.value})}
                    legenda="Quinta-feira"
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
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="sabado"
                    valor={formularioDeDados.sabado}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sabado: e.target.value})}
                    legenda="Sábado"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="domingo"
                    valor={formularioDeDados.domingo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, domingo: e.target.value})}
                    legenda="Domingo"
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default OutrasAtividadesManha;
