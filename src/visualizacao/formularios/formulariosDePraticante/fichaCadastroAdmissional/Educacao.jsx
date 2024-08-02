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
import {SALVAR_EDUCACAO_DO_PRATICANTE_POST} from "../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal"; // Importando as constantes corretamente

const Educacao = () => {

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
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const educacao = localStorage.getItem("educacao")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (educacao === CADASTRADO) {
        setDesabilitar("disabled")
      } else {
        setDesabilitar("")
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
          {
            desabilitar === "disabled" ?
              <CCardHeader style={{backgroundColor: "#1c323f"}}>
                <strong style={{color: "#0ecf8f"}}>Cadastrado com sucesso!</strong>
              </CCardHeader>
              :
              <CCardHeader>
                <strong>Escolaridade do Praticante</strong>
              </CCardHeader>
          }
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
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_EDUCACAO_DO_PRATICANTE_POST, "educacao", setDesabilitar,setDisplayModal, setTituloModal, setConteudoModal);
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
