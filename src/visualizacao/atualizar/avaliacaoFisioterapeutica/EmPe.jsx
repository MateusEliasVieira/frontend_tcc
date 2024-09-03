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
import Campo from '../../../components/campos/Campo';
import {
  atualizar,
  salvar,
  verificarStatusCadastroParaAtualizacaoDosDemaisFormularios
} from "../../../requisicoes/Praticante";
import {CADASTRADO, simOuNao} from "../../../constantes/Constantes";
import {
  ATUALIZAR_EM_PE_DO_PRATICANTE_PUT,
  BUSCAR_COORDENACAO_MOTORA_DO_PRATICANTE_POR_ID_GET, BUSCAR_EM_PE_DO_PRATICANTE_POR_ID_GET,
  SALVAR_EM_PE_DO_PRATICANTE_POST
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const EmPE = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idEmPe: '',
    sequenciaDeMovimentos: '',
    consideracoesSequenciaDeMovimentos: '',
    entrarSairPosicaoSentadoChao: '',
    consideracoesEntrarSairPosicaoSentadoChao: '',
    sentadoCadeira: '',
    consideracoesSentadoCadeira: '',
    posturaEquilibrio: '',
    consideracoesPosturaEquilibrio: '',
    seqMovRolaSenta: '',
    consideracoesSeqMovRolaSenta: '',
    passaParaSentado: '',
    consideracoesPassaParaSentado: '',
    observacoes: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_EM_PE_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
            <strong>Em Pé</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="sequenciaDeMovimentos"
                    valor={formularioDeDados.sequenciaDeMovimentos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      sequenciaDeMovimentos: e.target.value
                    })}
                    legenda="Sequência de Movimentos"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesSequenciaDeMovimentos"
                    valor={formularioDeDados.consideracoesSequenciaDeMovimentos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesSequenciaDeMovimentos: e.target.value
                    })}
                    legenda="Considerações Sequência de Movimentos"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="entrarSairPosicaoSentadoChao"
                    valor={formularioDeDados.entrarSairPosicaoSentadoChao}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      entrarSairPosicaoSentadoChao: e.target.value
                    })}
                    legenda="Entrar/Sair da Posição Sentado no Chão"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesEntrarSairPosicaoSentadoChao"
                    valor={formularioDeDados.consideracoesEntrarSairPosicaoSentadoChao}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesEntrarSairPosicaoSentadoChao: e.target.value
                    })}
                    legenda="Considerações Entrar/Sair da Posição Sentado no Chão"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="sentadoCadeira"
                    valor={formularioDeDados.sentadoCadeira}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      sentadoCadeira: e.target.value
                    })}
                    legenda="Sentado na Cadeira"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesSentadoCadeira"
                    valor={formularioDeDados.consideracoesSentadoCadeira}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesSentadoCadeira: e.target.value
                    })}
                    legenda="Considerações Sentado na Cadeira"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="posturaEquilibrio"
                    valor={formularioDeDados.posturaEquilibrio}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      posturaEquilibrio: e.target.value
                    })}
                    legenda="Postura e Equilíbrio"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesPosturaEquilibrio"
                    valor={formularioDeDados.consideracoesPosturaEquilibrio}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesPosturaEquilibrio: e.target.value
                    })}
                    legenda="Considerações Postura e Equilíbrio"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="seqMovRolaSenta"
                    valor={formularioDeDados.seqMovRolaSenta}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      seqMovRolaSenta: e.target.value
                    })}
                    legenda="Seq. de Mov. Rola-Senta"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesSeqMovRolaSenta"
                    valor={formularioDeDados.consideracoesSeqMovRolaSenta}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesSeqMovRolaSenta: e.target.value
                    })}
                    legenda="Considerações Seq. de Mov. Rola-Senta"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="passaParaSentado"
                    valor={formularioDeDados.passaParaSentado}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      passaParaSentado: e.target.value
                    })}
                    legenda="Passa para Sentado"
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesPassaParaSentado"
                    valor={formularioDeDados.consideracoesPassaParaSentado}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesPassaParaSentado: e.target.value
                    })}
                    legenda="Considerações Passa para Sentado"
                  />
                </CCol>
                <CRow>
                  <CCol>
                    <Campo
                      tipo="textarea"
                      id="observacoesEmPe"
                      valor={formularioDeDados.observacoes}
                      setar={(e) => setFormularioDeDados({
                        ...formularioDeDados,
                        observacoes: e.target.value
                      })}
                      legenda="Observações"
                      />
                  </CCol>
                </CRow>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_EM_PE_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default EmPE;
