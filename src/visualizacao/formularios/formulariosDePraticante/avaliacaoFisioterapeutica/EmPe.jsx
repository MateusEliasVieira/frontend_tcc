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
import Campo from '../../../../components/campos/Campo';
import {salvar} from "../../../../requisicoes/Praticante";
import {CADASTRADO, simOuNao} from "../../../../constantes/Constantes";
import {
  SALVAR_EM_PE_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const EmPE = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
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
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const emPE = localStorage.getItem("emPE")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (emPE === CADASTRADO) {
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
                <strong>Em Pé</strong>
              </CCardHeader>
          }
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                    disabled={desabilitar}
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
                      disabled={desabilitar}
                    />
                  </CCol>
                </CRow>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_EM_PE_DO_PRATICANTE_POST, "emPE", setDesabilitar,setDisplayModal, setTituloModal, setConteudoModal)
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

export default EmPE;
