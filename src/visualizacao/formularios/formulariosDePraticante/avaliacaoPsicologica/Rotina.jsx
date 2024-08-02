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
import {CADASTRADO, simOuNao} from "../../../../constantes/Constantes";
import {salvar} from "../../../../requisicoes/Praticante";
import {SALVAR_ROTINA_DO_PRATICANTE_POST} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const Rotina = () => {

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
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const rotina = localStorage.getItem("rotina")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (rotina === CADASTRADO) {
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
                <strong>Rotina</strong>
              </CCardHeader>
          }
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
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_ROTINA_DO_PRATICANTE_POST, "rotina", setDesabilitar)
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
