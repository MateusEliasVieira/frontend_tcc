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
import {CADASTRADO, preencherLegenda} from '../../../../constantes/Constantes';
import {salvar} from "../../../../requisicoes/Praticante";
import {
  SALVAR_HABILIDADES_SOCIAIS_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const HabilidadesSociais = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    passividade: '',
    autoagressao: '',
    heteroagressividade: '',
    assertividade: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const habilidadesSociais = localStorage.getItem("habilidadesSociais")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (habilidadesSociais === CADASTRADO) {
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
                <strong>Habilidades Sociais</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="passividade"
                    valor={formularioDeDados.passividade}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, passividade: e.target.value})}
                    legenda="Passividade?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  /></CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="autoagressao"
                    valor={formularioDeDados.autoagressao}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, autoagressao: e.target.value})}
                    legenda="Autoagressividade?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="heteroagressividade"
                    valor={formularioDeDados.heteroagressividade}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, heteroagressividade: e.target.value})}
                    legenda="Heteroagressividade?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="assertividade"
                    valor={formularioDeDados.assertividade}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, assertividade: e.target.value})}
                    legenda="Assertividade?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_HABILIDADES_SOCIAIS_DO_PRATICANTE_POST, "habilidadesSociais", setDesabilitar,setDisplayModal, setTituloModal, setConteudoModal)
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

export default HabilidadesSociais;
