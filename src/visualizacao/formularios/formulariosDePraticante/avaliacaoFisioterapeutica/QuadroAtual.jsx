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
import {CADASTRADO} from "../../../../constantes/Constantes";
import {
  SALVAR_QUADRO_ATUAL_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const QuadroAtual = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    locomocaoAtual: '',
    restricoes: '',
    deformidades: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const quadroAtual = localStorage.getItem("quadroAtual")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (quadroAtual === CADASTRADO) {
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
              <CCardHeader style={{backgroundColor: "#e55353"}}>
                <strong style={{color: "white"}}>Cadastrado com sucesso!</strong>
              </CCardHeader>
              :
              <CCardHeader>
                <strong>Quadro Atual</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="locomocaoAtual"
                    valor={formularioDeDados.locomocaoAtual}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, locomocaoAtual: e.target.value})}
                    legenda="Locomoção Atual"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="restricoes"
                    valor={formularioDeDados.restricoes}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, restricoes: e.target.value})}
                    legenda="Restrições"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="deformidades"
                    valor={formularioDeDados.deformidades}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, deformidades: e.target.value})}
                    legenda="Deformidades"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_QUADRO_ATUAL_DO_PRATICANTE_POST, "quadroAtual", setDesabilitar,setDisplayModal, setTituloModal, setConteudoModal)
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

export default QuadroAtual;
