import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo'; // Importando o componente Campo
import {simOuNao} from '../../../../constantes/Constantes';
import {salvar, verificarStatusDoFormularioDeCadastro} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_EMERGENCIA_DO_PRATICANTE_POR_ID_GET,
  SALVAR_EMERGENCIA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import {aplicaMascaraDeTelefone} from "../../../../utilidades/ValidadorDeCampos";
import axios, {HttpStatusCode} from "axios"; // Ajuste o caminho conforme a estrutura do seu projeto

const Emergencia = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [possuiPlanoDeSaude, setPossuiPlanoDeSaude] = useState('')
  const [formularioDeDados, setFormularioDeDados] = useState({
    ligarPara: '',
    telefone: '',
    possuiPlanoDeSaude: '',
    plano: '',
    praticante: {
      idPraticante: ''
    }
  });

  useEffect(() => {

    verificarStatusDoFormularioDeCadastro(BUSCAR_EMERGENCIA_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, formularioDeDados, setDesabilitar)

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
            <strong>Em caso de emergência</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="ligarPara"
                    valor={formularioDeDados.ligarPara}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      ligarPara: aplicaMascaraDeTelefone(e.target.value)
                    })}
                    legenda="Ligar para"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="telefone"
                    valor={formularioDeDados.telefone}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      telefone: aplicaMascaraDeTelefone(e.target.value)
                    })}
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
                      if (formularioDeDados.possuiPlanoDeSaude === 'NAO') {
                        setFormularioDeDados({...formularioDeDados, plano: ''})
                      }
                    }}
                    legenda="Possui plano de saúde?"
                    opcoes={simOuNao}
                    disabled={desabilitar}
                  />
                </CCol>
                {formularioDeDados.possuiPlanoDeSaude === 'SIM' ?
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
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_EMERGENCIA_DO_PRATICANTE_POST, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
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
