import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {salvar, verificarStatusDoFormularioDeCadastro} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POR_ID_GET,
  SALVAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import {converterImagemEmBase64} from "../../../../utilidades/ConversorDeImagem";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const AvaliacaoPsicologica = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    expectativasFamiliaresTerapiaEquina: '',
    resumoCasoObservacoesComplementares: '',
    imagemAssinaturaOuCRPECarimbo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusDoFormularioDeCadastro(BUSCAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, formularioDeDados, setDesabilitar)

  }, []);

  return (
    <CCard className="mb-4">
      <Modal
        dsp={displayModal}
        titulo={tituloModal}
        conteudo={<div dangerouslySetInnerHTML={{__html: conteudoModal}}/>}
        esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
      />
      <CCardHeader>
        <strong>Avaliação Psicológica</strong>
      </CCardHeader>
      <CCardBody>
        <CContainer>
          <Campo
            tipo="textarea"
            id="expectativasFamiliaresTerapiaEquina"
            valor={formularioDeDados.expectativasFamiliaresTerapiaEquina}
            setar={(e) =>
              setFormularioDeDados({...formularioDeDados, expectativasFamiliaresTerapiaEquina: e.target.value})
            }
            legenda="Qual a expectativa da família quanto à equoterapia?"
            disabled={desabilitar}
          />
          <Campo
            tipo="textarea"
            id="resumoCasoObservacoesComplementares"
            valor={formularioDeDados.resumoCasoObservacoesComplementares}
            setar={(e) =>
              setFormularioDeDados({...formularioDeDados, resumoCasoObservacoesComplementares: e.target.value})
            }
            legenda="Síntese do caso e observações complementares"
            disabled={desabilitar}
          />
          <Campo
            tipo="file"
            id="imagemAssinaturaOuCRPECarimbo"
            setar={(e) =>
              converterImagemEmBase64(e.target.files[0])
                .then((imagemBase64) => {
                  setFormularioDeDados({...formularioDeDados, imagemAssinaturaOuCRPECarimbo: imagemBase64})
                })
                .catch(() => {
                  alert("Falha ao selecionar imagem!")
                })
            }
            legenda="Imagem da assinatura ou CRP e carimbo"
            disabled={desabilitar}
          />
          <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
            salvar(formularioDeDados, SALVAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POST, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
          }
          }>
            Salvar
          </CButton>
        </CContainer>
      </CCardBody>
    </CCard>
  );
};

export default AvaliacaoPsicologica;
