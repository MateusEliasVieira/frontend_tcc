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
import {atualizar, verificarStatusCadastroParaAtualizacaoDosDemaisFormularios} from "../../../requisicoes/Praticante";
import {
  ATUALIZAR_MOBILIDADE_ARTICULAR_DO_PRATICANTE_PUT,
  BUSCAR_MOBILIDADE_ARTICULAR_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const MobilidadeArticular = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idMobilidadeArticular:'',
    flexaoAtivaOmbro: '',
    flexaoPassivaOmbro: '',
    abducaoAtivaOmbro: '',
    abducaoPassivaOmbro: '',
    aducaoAtivaOmbro: '',
    aducaoPassivaOmbro: '',
    flexaoAtivaCotovelo: '',
    flexaoPassivaCotovelo: '',
    extensaoAtivaCotovelo: '',
    extensaoPassivaCotovelo: '',
    flexaoAtivaQuadril: '',
    flexaoPassivaQuadril: '',
    extensaoAtivaQuadril: '',
    extensaoPassivaQuadril: '',
    aducaoAtivaQuadril: '',
    aducaoPassivaQuadril: '',
    abducaoAtivaQuadril: '',
    abducaoPassivaQuadril: '',
    rotacaoInternaAtivaQuadril: '',
    rotacaoInternaPassivaQuadril: '',
    rotacaoExternaAtivaQuadril: '',
    rotacaoExternaPassivaQuadril: '',
    extensaoAtivaJoelho: '',
    extensaoPassivaJoelho: '',
    flexaoAtivaJoelho: '',
    flexaoPassivaJoelho: '',
    dorsiflexaoAtivaTornozelo: '',
    dorsiflexaoPassivaTornozelo: '',
    flexaoPlantarAtivaTornozelo: '',
    flexaoPlantarPassivaTornozelo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_MOBILIDADE_ARTICULAR_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
            <strong>Mobilidade Articular</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="flexaoAtivaOmbro"
                    valor={formularioDeDados.flexaoAtivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoAtivaOmbro: e.target.value})}
                    legenda="Flexão Ativa Ombro"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="flexaoPassivaOmbro"
                    valor={formularioDeDados.flexaoPassivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoPassivaOmbro: e.target.value})}
                    legenda="Flexão Passiva Ombro"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="abducaoAtivaOmbro"
                    valor={formularioDeDados.abducaoAtivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, abducaoAtivaOmbro: e.target.value})}
                    legenda="Abdução Ativa Ombro"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="abducaoPassivaOmbro"
                    valor={formularioDeDados.abducaoPassivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, abducaoPassivaOmbro: e.target.value})}
                    legenda="Abdução Passiva Ombro"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="aducaoAtivaOmbro"
                    valor={formularioDeDados.aducaoAtivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, aducaoAtivaOmbro: e.target.value})}
                    legenda="Adução Ativa Ombro"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="aducaoPassivaOmbro"
                    valor={formularioDeDados.aducaoPassivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, aducaoPassivaOmbro: e.target.value})}
                    legenda="Adução Passiva Ombro"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="flexaoAtivaCotovelo"
                    valor={formularioDeDados.flexaoAtivaCotovelo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoAtivaCotovelo: e.target.value})}
                    legenda="Flexão Ativa Cotovelo"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="flexaoPassivaCotovelo"
                    valor={formularioDeDados.flexaoPassivaCotovelo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoPassivaCotovelo: e.target.value})}
                    legenda="Flexão Passiva Cotovelo"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="extensaoAtivaCotovelo"
                    valor={formularioDeDados.extensaoAtivaCotovelo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoAtivaCotovelo: e.target.value})}
                    legenda="Extensão Ativa Cotovelo"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="extensaoPassivaCotovelo"
                    valor={formularioDeDados.extensaoPassivaCotovelo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoPassivaCotovelo: e.target.value})}
                    legenda="Extensão Passiva Cotovelo"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="flexaoAtivaQuadril"
                    valor={formularioDeDados.flexaoAtivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoAtivaQuadril: e.target.value})}
                    legenda="Flexão Ativa Quadril"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="flexaoPassivaQuadril"
                    valor={formularioDeDados.flexaoPassivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoPassivaQuadril: e.target.value})}
                    legenda="Flexão Passiva Quadril"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="extensaoAtivaQuadril"
                    valor={formularioDeDados.extensaoAtivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoAtivaQuadril: e.target.value})}
                    legenda="Extensão Ativa Quadril"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="extensaoPassivaQuadril"
                    valor={formularioDeDados.extensaoPassivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoPassivaQuadril: e.target.value})}
                    legenda="Extensão Passiva Quadril"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="aducaoAtivaQuadril"
                    valor={formularioDeDados.aducaoAtivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, aducaoAtivaQuadril: e.target.value})}
                    legenda="Adução Ativa Quadril"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="aducaoPassivaQuadril"
                    valor={formularioDeDados.aducaoPassivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, aducaoPassivaQuadril: e.target.value})}
                    legenda="Adução Passiva Quadril"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="abducaoAtivaQuadril"
                    valor={formularioDeDados.abducaoAtivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, abducaoAtivaQuadril: e.target.value})}
                    legenda="Abdução Ativa Quadril"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="abducaoPassivaQuadril"
                    valor={formularioDeDados.abducaoPassivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, abducaoPassivaQuadril: e.target.value})}
                    legenda="Abdução Passiva Quadril"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="rotacaoInternaAtivaQuadril"
                    valor={formularioDeDados.rotacaoInternaAtivaQuadril}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      rotacaoInternaAtivaQuadril: e.target.value
                    })}
                    legenda="Rotação Interna Ativa Quadril"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="rotacaoInternaPassivaQuadril"
                    valor={formularioDeDados.rotacaoInternaPassivaQuadril}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      rotacaoInternaPassivaQuadril: e.target.value
                    })}
                    legenda="Rotação Interna Passiva Quadril"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="rotacaoExternaAtivaQuadril"
                    valor={formularioDeDados.rotacaoExternaAtivaQuadril}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      rotacaoExternaAtivaQuadril: e.target.value
                    })}
                    legenda="Rotação Externa Ativa Quadril"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="rotacaoExternaPassivaQuadril"
                    valor={formularioDeDados.rotacaoExternaPassivaQuadril}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      rotacaoExternaPassivaQuadril: e.target.value
                    })}
                    legenda="Rotação Externa Passiva Quadril"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="extensaoAtivaJoelho"
                    valor={formularioDeDados.extensaoAtivaJoelho}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoAtivaJoelho: e.target.value})}
                    legenda="Extensão Ativa Joelho"
                  />
                </CCol>
                <CCol>

                  <Campo
                    tipo="text"
                    id="extensaoPassivaJoelho"
                    valor={formularioDeDados.extensaoPassivaJoelho}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoPassivaJoelho: e.target.value})}
                    legenda="Extensão Passiva Joelho"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="flexaoAtivaJoelho"
                    valor={formularioDeDados.flexaoAtivaJoelho}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoAtivaJoelho: e.target.value})}
                    legenda="Flexão Ativa Joelho"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="flexaoPassivaJoelho"
                    valor={formularioDeDados.flexaoPassivaJoelho}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoPassivaJoelho: e.target.value})}
                    legenda="Flexão Passiva Joelho"
                  />
                </CCol>
              </CRow>
              <CRow>

                <CCol>
                  <Campo
                    tipo="text"
                    id="dorsiflexaoAtivaTornozelo"
                    valor={formularioDeDados.dorsiflexaoAtivaTornozelo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      dorsiflexaoAtivaTornozelo: e.target.value
                    })}
                    legenda="Dorsiflexão Ativa Tornozelo"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="dorsiflexaoPassivaTornozelo"
                    valor={formularioDeDados.dorsiflexaoPassivaTornozelo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      dorsiflexaoPassivaTornozelo: e.target.value
                    })}
                    legenda="Dorsiflexão Passiva Tornozelo"
                  />
                </CCol>
              </CRow>
              <CRow>

                <CCol>

                  <Campo
                    tipo="text"
                    id="flexaoPlantarAtivaTornozelo"
                    valor={formularioDeDados.flexaoPlantarAtivaTornozelo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      flexaoPlantarAtivaTornozelo: e.target.value
                    })}
                    legenda="Flexão Plantar Ativa Tornozelo"
                  />
                </CCol>
                <CCol>

                  <Campo
                    tipo="text"
                    id="flexaoPlantarPassivaTornozelo"
                    valor={formularioDeDados.flexaoPlantarPassivaTornozelo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      flexaoPlantarPassivaTornozelo: e.target.value
                    })}
                    legenda="Flexão Plantar Passiva Tornozelo"
                  />
                </CCol>
              </CRow>

              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_MOBILIDADE_ARTICULAR_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
              }}>
                Atualizar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
    ;
};

export default MobilidadeArticular;
