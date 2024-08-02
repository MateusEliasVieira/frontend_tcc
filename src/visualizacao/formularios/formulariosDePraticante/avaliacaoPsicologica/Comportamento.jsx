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
import {CADASTRADO, preencherLegenda} from "../../../../constantes/Constantes";
import {SALVAR_COMPORTAMENTO_DO_PRATICANTE_POST} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import {salvar} from "../../../../requisicoes/Praticante";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const Comportamento = () => {

  const [desabilitar,setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    agitacao: '',
    toleranciaFrustracao: '',
    respeitaLimitesRegras: '',
    oposicao: '',
    atencaoConcentracao: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const comportamento = localStorage.getItem("comportamento")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (comportamento === CADASTRADO) {
        setDesabilitar("disabled")
      } else {
        setDesabilitar("")
      }
    }
  }, []);

  return (
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
            <strong>Comportamento</strong>
          </CCardHeader>
      }
      <CCardBody>
        <CContainer>
          <CRow>
            <CCol md="auto">
              <Campo
                tipo="select"
                id="agitacao"
                valor={formularioDeDados.agitacao}
                setar={(e) => setFormularioDeDados({...formularioDeDados, agitacao: e.target.value})}
                legenda="Tem comportamento agitado?"
                opcoes={preencherLegenda}
                disabled={desabilitar}
              />
            </CCol>
            <CCol md="auto">
              <Campo
                tipo="select"
                id="toleranciaFrustracao"
                valor={formularioDeDados.toleranciaFrustracao}
                setar={(e) => setFormularioDeDados({...formularioDeDados, toleranciaFrustracao: e.target.value})}
                legenda="Tem tolerância à frustração?"
                opcoes={preencherLegenda}
                disabled={desabilitar}
              />
            </CCol>
            <CCol md="auto">
              <Campo
                tipo="select"
                id="respeitaLimitesRegras"
                valor={formularioDeDados.respeitaLimitesRegras}
                setar={(e) => setFormularioDeDados({...formularioDeDados, respeitaLimitesRegras: e.target.value})}
                legenda="Respeita limites e regras?"
                opcoes={preencherLegenda}
                disabled={desabilitar}
              />
            </CCol>
            <CCol md="auto">
              <Campo
                tipo="select"
                id="oposicao"
                valor={formularioDeDados.oposicao}
                setar={(e) => setFormularioDeDados({...formularioDeDados, oposicao: e.target.value})}
                legenda="Oposição?"
                opcoes={preencherLegenda}
                disabled={desabilitar}
              />
            </CCol>
            <CCol md="auto">
              <Campo
                tipo="select"
                id="atencaoConcentracao"
                valor={formularioDeDados.atencaoConcentracao}
                setar={(e) => setFormularioDeDados({...formularioDeDados, atencaoConcentracao: e.target.value})}
                legenda="Possui atenção e concentração?"
                opcoes={preencherLegenda}
                disabled={desabilitar}
              />
            </CCol>
          </CRow>
          <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
            salvar(formularioDeDados, SALVAR_COMPORTAMENTO_DO_PRATICANTE_POST,"comportamento", setDesabilitar)
          }
          }>
            Salvar
          </CButton>
        </CContainer>
      </CCardBody>
    </CCard>
  );
};

export default Comportamento;
