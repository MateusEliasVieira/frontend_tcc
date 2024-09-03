import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow,
} from '@coreui/react';
import Campo from '../../../components/campos/Campo';
import {preencherLegenda} from "../../../constantes/Constantes";
import {
  atualizar,
  salvar,
  verificarStatusCadastroParaAtualizacaoDosDemaisFormularios
} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_SOCIALIZACAO_DO_PRATICANTE_PUT,
  BUSCAR_SOCIALIZACAO_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const Socializacao = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idSocializacao: '',
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

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_SOCIALIZACAO_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_SOCIALIZACAO_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
              }
              }>
                Atualizar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Socializacao;
