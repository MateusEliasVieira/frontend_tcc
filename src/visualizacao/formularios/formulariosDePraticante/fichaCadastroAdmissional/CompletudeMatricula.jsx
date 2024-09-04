import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer, CImage,
  CRow,
} from '@coreui/react';
import {converterImagemEmBase64} from "../../../../utilidades/ConversorDeImagem";
import Campo from '../../../../components/campos/Campo';
import {salvar, verificarStatusDoFormularioDeCadastro} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POR_ID_GET,
  SALVAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {apresentarModal, esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";
import {formatarDataPadraoAnoMesDia} from "../../../../utilidades/ManipuladorDeDatas";

const CompletudeMatricula = () => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    dataCompletudeMatricula: '',
    imagemAssinaturaResponsavel: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusDoFormularioDeCadastro(BUSCAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, formularioDeDados, setDesabilitar)

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
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="file"
                    id="imagemAssinaturaResponsavel"
                    setar={(e) => {
                      converterImagemEmBase64(e.target.files[0])
                        .then((resolve) => {
                          setFormularioDeDados({...formularioDeDados, imagemAssinaturaResponsavel: resolve})
                        })
                        .catch((reject) => {
                          apresentarModal("Aviso", reject, setDisplayModal, setTituloModal, setConteudoModal)
                        });
                    }}
                    legenda="Imagem da assinatura do responsável"
                    disabled={desabilitar}
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

              <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POST, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
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

export default CompletudeMatricula;
