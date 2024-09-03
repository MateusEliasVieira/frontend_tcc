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
import {CADASTRADO, gruposMusculares} from "../../../constantes/Constantes";
import {
  ATUALIZAR_GRUPOS_MUSCULARES_DO_PRATICANTE_PUT,
  BUSCAR_FORMA_COMUNICACAO_DO_PRATICANTE_POR_ID_GET, BUSCAR_GRUPOS_MUSCULARES_DO_PRATICANTE_POR_ID_GET,
  SALVAR_GRUPOS_MUSCULARES_DO_PRATICANTE_POST
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const GruposMusculares = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idGruposMusculares: '',
    flexoresOmbroDireito: '-',
    flexoresOmbroEsquerdo: '-',
    extensoresOmbroDireito: '-',
    extensoresOmbroEsquerdo: '-',
    flexoresCotoveloDireito: '-',
    flexoresCotoveloEsquerdo: '-',
    extensoresCotoveloDireito: '-',
    extensoresCotoveloEsquerdo: '-',
    flexoresPulsoDireito: '-',
    flexoresPulsoEsquerdo: '-',
    extensoresPulsoDireito: '-',
    extensoresPulsoEsquerdo: '-',
    flexoresQuadrilDireito: '-',
    flexoresQuadrilEsquerdo: '-',
    extensoresQuadrilDireito: '-',
    extensoresQuadrilEsquerdo: '-',
    flexoresJoelhoDireito: '-',
    flexoresJoelhoEsquerdo: '-',
    dorsiflexoresTornozeloDireito: '-',
    dorsiflexoresTornozeloEsquerdo: '-',
    plantiflexoresTornozeloDireito: '-',
    plantiflexoresTornozeloEsquerdo: '-',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    verificarStatusCadastroParaAtualizacaoDosDemaisFormularios(BUSCAR_GRUPOS_MUSCULARES_DO_PRATICANTE_POR_ID_GET, setFormularioDeDados, setIdPraticante)

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
            <strong>Grupos Musculares e Escala de Ashworth Modificada</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="flexoresOmbroDireito"
                    valor={formularioDeDados.flexoresOmbroDireito}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexoresOmbroDireito: e.target.value})}
                    legenda="Flexores do Ombro Direito"
                    opcoes={gruposMusculares}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="flexoresOmbroEsquerdo"
                    valor={formularioDeDados.flexoresOmbroEsquerdo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexoresOmbroEsquerdo: e.target.value})}
                    legenda="Flexores do Ombro Esquerdo"
                    opcoes={gruposMusculares}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="extensoresOmbroDireito"
                    valor={formularioDeDados.extensoresOmbroDireito}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensoresOmbroDireito: e.target.value})}
                    legenda="Extensores do Ombro Direito"
                    opcoes={gruposMusculares}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="extensoresOmbroEsquerdo"
                    valor={formularioDeDados.extensoresOmbroEsquerdo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensoresOmbroEsquerdo: e.target.value})}
                    legenda="Extensores do Ombro Esquerdo"
                    opcoes={gruposMusculares}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="flexoresCotoveloDireito"
                    valor={formularioDeDados.flexoresCotoveloDireito}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexoresCotoveloDireito: e.target.value})}
                    legenda="Flexores do Cotovelo Direito"
                    opcoes={gruposMusculares}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="flexoresCotoveloEsquerdo"
                    valor={formularioDeDados.flexoresCotoveloEsquerdo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      flexoresCotoveloEsquerdo: e.target.value
                    })}
                    legenda="Flexores do Cotovelo Esquerdo"
                    opcoes={gruposMusculares}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="extensoresCotoveloDireito"
                    valor={formularioDeDados.extensoresCotoveloDireito}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      extensoresCotoveloDireito: e.target.value
                    })}
                    legenda="Extensores do Cotovelo Direito"
                    opcoes={gruposMusculares}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="extensoresCotoveloEsquerdo"
                    valor={formularioDeDados.extensoresCotoveloEsquerdo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      extensoresCotoveloEsquerdo: e.target.value
                    })}
                    legenda="Extensores do Cotovelo Esquerdo"
                    opcoes={gruposMusculares}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="flexoresPulsoDireito"
                    valor={formularioDeDados.flexoresPulsoDireito}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexoresPulsoDireito: e.target.value})}
                    legenda="Flexores do Pulso Direito"
                    opcoes={gruposMusculares}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="flexoresPulsoEsquerdo"
                    valor={formularioDeDados.flexoresPulsoEsquerdo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexoresPulsoEsquerdo: e.target.value})}
                    legenda="Flexores do Pulso Esquerdo"
                    opcoes={gruposMusculares}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="extensoresPulsoDireito"
                    valor={formularioDeDados.extensoresPulsoDireito}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensoresPulsoDireito: e.target.value})}
                    legenda="Extensores do Pulso Direito"
                    opcoes={gruposMusculares}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="extensoresPulsoEsquerdo"
                    valor={formularioDeDados.extensoresPulsoEsquerdo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensoresPulsoEsquerdo: e.target.value})}
                    legenda="Extensores do Pulso Esquerdo"
                    opcoes={gruposMusculares}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="flexoresQuadrilDireito"
                    valor={formularioDeDados.flexoresQuadrilDireito}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexoresQuadrilDireito: e.target.value})}
                    legenda="Flexores do Quadril Direito"
                    opcoes={gruposMusculares}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="flexoresQuadrilEsquerdo"
                    valor={formularioDeDados.flexoresQuadrilEsquerdo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexoresQuadrilEsquerdo: e.target.value})}
                    legenda="Flexores do Quadril Esquerdo"
                    opcoes={gruposMusculares}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="extensoresQuadrilDireito"
                    valor={formularioDeDados.extensoresQuadrilDireito}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      extensoresQuadrilDireito: e.target.value
                    })}
                    legenda="Extensores do Quadril Direito"
                    opcoes={gruposMusculares}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="extensoresQuadrilEsquerdo"
                    valor={formularioDeDados.extensoresQuadrilEsquerdo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      extensoresQuadrilEsquerdo: e.target.value
                    })}
                    legenda="Extensores do Quadril Esquerdo"
                    opcoes={gruposMusculares}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="flexoresJoelhoDireito"
                    valor={formularioDeDados.flexoresJoelhoDireito}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexoresJoelhoDireito: e.target.value})}
                    legenda="Flexores do Joelho Direito"
                    opcoes={gruposMusculares}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="flexoresJoelhoEsquerdo"
                    valor={formularioDeDados.flexoresJoelhoEsquerdo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexoresJoelhoEsquerdo: e.target.value})}
                    legenda="Flexores do Joelho Esquerdo"
                    opcoes={gruposMusculares}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="dorsiflexoresTornozeloDireito"
                    valor={formularioDeDados.dorsiflexoresTornozeloDireito}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      dorsiflexoresTornozeloDireito: e.target.value
                    })}
                    legenda="Dorsiflexores do Tornozelo Direito"
                    opcoes={gruposMusculares}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="dorsiflexoresTornozeloEsquerdo"
                    valor={formularioDeDados.dorsiflexoresTornozeloEsquerdo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      dorsiflexoresTornozeloEsquerdo: e.target.value
                    })}
                    legenda="Dorsiflexores do Tornozelo Esquerdo"
                    opcoes={gruposMusculares}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="plantiflexoresTornozeloDireito"
                    valor={formularioDeDados.plantiflexoresTornozeloDireito}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      plantiflexoresTornozeloDireito: e.target.value
                    })}
                    legenda="Plantiflexores do Tornozelo Direito"
                    opcoes={gruposMusculares}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="plantiflexoresTornozeloEsquerdo"
                    valor={formularioDeDados.plantiflexoresTornozeloEsquerdo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      plantiflexoresTornozeloEsquerdo: e.target.value
                    })}
                    legenda="Plantiflexores do Tornozelo Esquerdo"
                    opcoes={gruposMusculares}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_GRUPOS_MUSCULARES_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
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

export default GruposMusculares;
