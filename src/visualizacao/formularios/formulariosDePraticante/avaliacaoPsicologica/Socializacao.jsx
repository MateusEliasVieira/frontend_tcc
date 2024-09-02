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
import {preencherLegenda} from "../../../../constantes/Constantes";
import {salvar, verificarStatusDoFormularioDeCadastro} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_SOCIALIZACAO_DO_PRATICANTE_POR_ID_GET,
  SALVAR_SOCIALIZACAO_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const Socializacao = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    interageBemComOutrasCriancas: '',
    interageBemComAdultos: '',
    buscaContatoSocial: '',
    temOportunidadeContato: '',
    fazContatoVisual: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusDoFormularioDeCadastro(BUSCAR_SOCIALIZACAO_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, formularioDeDados, setDesabilitar)

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
            <strong>Socialização</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    id="interageBemComOutrasCriancas"
                    tipo="select"
                    valor={formularioDeDados.interageBemComOutrasCriancas}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      interageBemComOutrasCriancas: e.target.value
                    })}
                    legenda="Interage bem com outras crianças?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="interageBemComAdultos"
                    tipo="select"
                    valor={formularioDeDados.interageBemComAdultos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, interageBemComAdultos: e.target.value})}
                    legenda="Interage bem com adultos?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="buscaContatoSocial"
                    tipo="select"
                    valor={formularioDeDados.buscaContatoSocial}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, buscaContatoSocial: e.target.value})}
                    legenda="Busca contato social?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="temOportunidadeContato"
                    tipo="select"
                    valor={formularioDeDados.temOportunidadeContato}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, temOportunidadeContato: e.target.value})}
                    legenda="Tem oportunidade de contato social?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="fazContatoVisual"
                    tipo="select"
                    valor={formularioDeDados.fazContatoVisual}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, fazContatoVisual: e.target.value})}
                    legenda="Faz contato visual?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_SOCIALIZACAO_DO_PRATICANTE_POST, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
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

export default Socializacao;
