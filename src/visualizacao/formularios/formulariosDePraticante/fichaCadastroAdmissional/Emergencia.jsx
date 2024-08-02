import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import Campo from '../../../../components/campos/Campo'; // Importando o componente Campo
import {CADASTRADO, simOuNao} from '../../../../constantes/Constantes';
import {salvar} from "../../../../requisicoes/Praticante";
import {
  SALVAR_EMERGENCIA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal"; // Ajuste o caminho conforme a estrutura do seu projeto

const Emergencia = () => {

  const [desabilitar, setDesabilitar] = useState("")
  const [possuiPlanoDeSaude, setPossuiPlanoDeSaude] = useState('')
  const [formularioDeDados, setFormularioDeDados] = useState({
    ligarPara: '',
    telefone: '',
    possuiPlanoDeSaude: '',
    plano: 'Sem Plano',
    praticante: {
      idPraticante: ''
    }
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const emergencia = localStorage.getItem("emergencia")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (emergencia === CADASTRADO) {
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
                <strong>Em caso de emergência</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="ligarPara"
                    valor={formularioDeDados.ligarPara}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, ligarPara: e.target.value})}
                    legenda="Ligar para"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="telefone"
                    valor={formularioDeDados.telefone}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, telefone: e.target.value})}
                    legenda="Telefone"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="possuiPlanoDeSaude"
                    valor={formularioDeDados.possuiPlanoDeSaude}
                    setar={(e) => {
                      setFormularioDeDados({...formularioDeDados, possuiPlanoDeSaude: e.target.value})
                      setPossuiPlanoDeSaude(e.target.value)
                    }}
                    legenda="Possui plano de saúde?"
                    opcoes={simOuNao}
                    disabled={desabilitar}
                  />
                </CCol>
                {possuiPlanoDeSaude === 'true' ?
                  (<CCol md="auto">
                      <Campo
                        tipo="text"
                        id="plano"
                        valor={formularioDeDados.plano}
                        setar={(e) => {
                          setFormularioDeDados({...formularioDeDados, plano: e.target.value})
                        }}
                        legenda="Qual é o plano?"
                        disabled={desabilitar}
                      />
                    </CCol>
                  )
                  :
                  (<></>)
                }
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_EMERGENCIA_DO_PRATICANTE_POST, "emergencia", setDesabilitar)
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

export default Emergencia;
