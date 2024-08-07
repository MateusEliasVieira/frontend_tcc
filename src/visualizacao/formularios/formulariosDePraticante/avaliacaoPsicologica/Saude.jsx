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
import {CADASTRADO} from "../../../../constantes/Constantes";
import {salvar} from "../../../../requisicoes/Praticante";
import {SALVAR_SAUDE_DO_PRATICANTE_POST} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const Saude = () => {

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
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const saude = localStorage.getItem("saude")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (saude === CADASTRADO) {
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
                <strong>Saúde do Praticante</strong>
              </CCardHeader>
          }
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
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_SAUDE_DO_PRATICANTE_POST, "saude", setDesabilitar,setDisplayModal, setTituloModal, setConteudoModal)
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
