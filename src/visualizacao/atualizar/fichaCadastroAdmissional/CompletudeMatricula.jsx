import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer, CImage,
  CRow,
} from '@coreui/react';
import {converterImagemEmBase64} from "../../../utilidades/ConversorDeImagem";
import Campo from '../../../components/campos/Campo';
import {atualizar, verificarStatusCadastroParaAtualizacaoDosDemaisFormularios} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_PUT, BUSCAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import {CADASTRADO} from "../../../constantes/Constantes";
import Modal from "../../../components/modal/Modal";
import {apresentarModal, esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";
import {formatarDataPadraoAnoMesDia} from "../../../utilidades/ManipuladorDeDatas";

const CompletudeMatricula = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idCompletudeMatricula: '',
    dataCompletudeMatricula: '',
    imagemAssinaturaResponsavel: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
            <strong>Data de efetivação da matrícula</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="date"
                    id="dataCompletudeMatricula"
                    valor={formatarDataPadraoAnoMesDia(formularioDeDados.dataCompletudeMatricula)}
                    setar={(e) => {
                      setFormularioDeDados({...formularioDeDados, dataCompletudeMatricula: e.target.value})
                    }
                    }
                    legenda="Data da matrícula"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="file"
                    id="imagemAssinaturaResponsavel"
                    setar={(e) => {
                      converterImagemEmBase64(e.target.files[0])
                        .then((resolve) => {
                          setFormularioDeDados({...formularioDeDados, imagemAssinaturaResponsavel: resolve});
                        })
                        .catch((reject) => {
                          apresentarModal("Aviso", reject, setDisplayModal, setTituloModal, setConteudoModal)
                        });
                    }}
                    legenda="Imagem da assinatura do responsável"
                  />
                </CCol>
              </CRow>
              <CRow>
                {formularioDeDados.imagemAssinaturaResponsavel !== '' ?
                  <CCol>
                    <CImage src={formularioDeDados.imagemAssinaturaResponsavel} width={600} height={300}
                            style={{margin: "20px auto"}}/>
                  </CCol>
                  :
                  <strong style={{margin: "20px auto"}}>Nenhuma imagem selecionada</strong>
                }
              </CRow>

              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default CompletudeMatricula;
