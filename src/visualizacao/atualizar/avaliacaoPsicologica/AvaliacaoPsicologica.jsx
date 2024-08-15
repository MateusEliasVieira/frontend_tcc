import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader, CCol,
  CContainer, CImage, CRow,
} from '@coreui/react';
import Campo from '../../../components/campos/Campo';
import {atualizar} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_PUT,
  BUSCAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import {converterImagemEmBase64} from "../../../utilidades/ConversorDeImagem";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const AvaliacaoPsicologica = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idAvaliacaoPsicologica: '',
    expectativasFamiliaresTerapiaEquina: '',
    resumoCasoObservacoesComplementares: '',
    imagemAssinaturaOuCRPECarimbo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    const id = Number(window.location.href.split("?id=")[1]);
    if (id) {
      setIdPraticante(id);
    } else {
      window.location.href = PESQUISAR_PRATICANTE;
    }

    if (idPraticante) {
      const login = JSON.parse(localStorage.getItem('login'));

      axios.get(BUSCAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POR_ID_GET, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
        params: {
          id: idPraticante
        }
      })
        .then((response) => {
          setFormularioDeDados(response.data);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, [idPraticante]);

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
          />
          <Campo
            tipo="textarea"
            id="resumoCasoObservacoesComplementares"
            valor={formularioDeDados.resumoCasoObservacoesComplementares}
            setar={(e) =>
              setFormularioDeDados({...formularioDeDados, resumoCasoObservacoesComplementares: e.target.value})
            }
            legenda="Síntese do caso e observações complementares"
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
          />
            {formularioDeDados.imagemAssinaturaOuCRPECarimbo !== '' ?
              <div>
                <CImage src={formularioDeDados.imagemAssinaturaOuCRPECarimbo} width={600} height={300}
                        style={{margin: "20px auto"}}/>
              </div>
              :
              <strong style={{margin: "20px auto"}}>Nenhuma imagem selecionada</strong>
            }
          <CButton color="danger" style={{color: "white"}} onClick={() => {
            atualizar(formularioDeDados, ATUALIZAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
          }
          }>
            Atualizar
          </CButton>
        </CContainer>
      </CCardBody>
    </CCard>
  );
};

export default AvaliacaoPsicologica;
