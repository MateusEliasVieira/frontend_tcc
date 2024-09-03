import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow,
} from '@coreui/react';
import Campo from '../../../components/campos/Campo'; // Importando o componente Campo
import {simOuNao} from '../../../constantes/Constantes';
import {atualizar, verificarStatusCadastroParaAtualizacaoDosDemaisFormularios} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_EMERGENCIA_DO_PRATICANTE_PUT,
  BUSCAR_EMERGENCIA_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {aplicaMascaraDeTelefone} from "../../../utilidades/ValidadorDeCampos";

const Emergencia = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idEmergencia:'',
    ligarPara: '',
    telefone: '',
    possuiPlanoDeSaude: '',
    plano: '',
    praticante: {
      idPraticante: ''
    }
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_EMERGENCIA_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
                      />
                    </CCol>
                  )
                  :
                  (<></>)
                }
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_EMERGENCIA_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default Emergencia;
