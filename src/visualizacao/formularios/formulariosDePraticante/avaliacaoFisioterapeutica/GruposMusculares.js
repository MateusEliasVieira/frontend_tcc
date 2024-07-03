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
import Campo from '../../../../components/campos/Campo'; // Certifique-se de que o caminho está correto
import { salvar } from "../../../../requisicoes/GruposMusculares"; // Importe a função salvar apropriada
import {
  SALVAR_GRUPOS_MUSCULARES_POST
} from "../../../../endpoints/physicalTherapyAssessment/Endpoints"; // Certifique-se de que o endpoint está correto
import { CADASTRADO } from "../../../../constantes/Constantes";

const GruposMusculares = () => {
  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idGruposMusculares: '',
    flexoresOmbroDireito: '',
    flexoresOmbroEsquerdo: '',
    extensoresOmbroDireito: '',
    extensoresOmbroEsquerdo: '',
    flexoresCotoveloDireito: '',
    flexoresCotoveloEsquerdo: '',
    extensoresCotoveloDireito: '',
    extensoresCotoveloEsquerdo: '',
    flexoresPulsoDireito: '',
    flexoresPulsoEsquerdo: '',
    extensoresPulsoDireito: '',
    extensoresPulsoEsquerdo: '',
    flexoresQuadrilDireito: '',
    flexoresQuadrilEsquerdo: '',
    extensoresQuadrilDireito: '',
    extensoresQuadrilEsquerdo: '',
    flexoresJoelhoDireito: '',
    flexoresJoelhoEsquerdo: '',
    dorsiflexoresTornozeloDireito: '',
    dorsiflexoresTornozeloEsquerdo: '',
    plantiflexoresTornozeloDireito: '',
    plantiflexoresTornozeloEsquerdo: '',
    praticante: {
      idPraticante: '',
    },
  });
  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const avaliacaoFisioterapeutica = localStorage.getItem("avaliacaoFisioterapeutica")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (avaliacaoFisioterapeutica === CADASTRADO) {
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
          <CCardHeader>
            <strong>Grupos Musculares e Escala de Ashworth Modificada</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexoresOmbroDireito"
                    valor={formularioDeDados.flexoresOmbroDireito}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, flexoresOmbroDireito: e.target.value })}
                    legenda="Flexores do Ombro Direito"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexoresOmbroEsquerdo"
                    valor={formularioDeDados.flexoresOmbroEsquerdo}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, flexoresOmbroEsquerdo: e.target.value })}
                    legenda="Flexores do Ombro Esquerdo"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="extensoresOmbroDireito"
                    valor={formularioDeDados.extensoresOmbroDireito}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, extensoresOmbroDireito: e.target.value })}
                    legenda="Extensores do Ombro Direito"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="extensoresOmbroEsquerdo"
                    valor={formularioDeDados.extensoresOmbroEsquerdo}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, extensoresOmbroEsquerdo: e.target.value })}
                    legenda="Extensores do Ombro Esquerdo"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexoresCotoveloDireito"
                    valor={formularioDeDados.flexoresCotoveloDireito}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, flexoresCotoveloDireito: e.target.value })}
                    legenda="Flexores do Cotovelo Direito"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexoresCotoveloEsquerdo"
                    valor={formularioDeDados.flexoresCotoveloEsquerdo}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, flexoresCotoveloEsquerdo: e.target.value })}
                    legenda="Flexores do Cotovelo Esquerdo"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="extensoresCotoveloDireito"
                    valor={formularioDeDados.extensoresCotoveloDireito}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, extensoresCotoveloDireito: e.target.value })}
                    legenda="Extensores do Cotovelo Direito"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="extensoresCotoveloEsquerdo"
                    valor={formularioDeDados.extensoresCotoveloEsquerdo}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, extensoresCotoveloEsquerdo: e.target.value })}
                    legenda="Extensores do Cotovelo Esquerdo"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexoresPulsoDireito"
                    valor={formularioDeDados.flexoresPulsoDireito}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, flexoresPulsoDireito: e.target.value })}
                    legenda="Flexores do Pulso Direito"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexoresPulsoEsquerdo"
                    valor={formularioDeDados.flexoresPulsoEsquerdo}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, flexoresPulsoEsquerdo: e.target.value })}
                    legenda="Flexores do Pulso Esquerdo"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="extensoresPulsoDireito"
                    valor={formularioDeDados.extensoresPulsoDireito}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, extensoresPulsoDireito: e.target.value })}
                    legenda="Extensores do Pulso Direito"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="extensoresPulsoEsquerdo"
                    valor={formularioDeDados.extensoresPulsoEsquerdo}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, extensoresPulsoEsquerdo: e.target.value })}
                    legenda="Extensores do Pulso Esquerdo"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexoresQuadrilDireito"
                    valor={formularioDeDados.flexoresQuadrilDireito}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, flexoresQuadrilDireito: e.target.value })}
                    legenda="Flexores do Quadril Direito"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexoresQuadrilEsquerdo"
                    valor={formularioDeDados.flexoresQuadrilEsquerdo}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, flexoresQuadrilEsquerdo: e.target.value })}
                    legenda="Flexores do Quadril Esquerdo"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="extensoresQuadrilDireito"
                    valor={formularioDeDados.extensoresQuadrilDireito}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, extensoresQuadrilDireito: e.target.value })}
                    legenda="Extensores do Quadril Direito"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="extensoresQuadrilEsquerdo"
                    valor={formularioDeDados.extensoresQuadrilEsquerdo}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, extensoresQuadrilEsquerdo: e.target.value })}
                    legenda="Extensores do Quadril Esquerdo"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexoresJoelhoDireito"
                    valor={formularioDeDados.flexoresJoelhoDireito}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, flexoresJoelhoDireito: e.target.value })}
                    legenda="Flexores do Joelho Direito"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexoresJoelhoEsquerdo"
                    valor={formularioDeDados.flexoresJoelhoEsquerdo}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, flexoresJoelhoEsquerdo: e.target.value })}
                    legenda="Flexores do Joelho Esquerdo"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="dorsiflexoresTornozeloDireito"
                    valor={formularioDeDados.dorsiflexoresTornozeloDireito}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, dorsiflexoresTornozeloDireito: e.target.value })}
                    legenda="Dorsiflexores do Tornozelo Direito"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="dorsiflexoresTornozeloEsquerdo"
                    valor={formularioDeDados.dorsiflexoresTornozeloEsquerdo}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, dorsiflexoresTornozeloEsquerdo: e.target.value })}
                    legenda="Dorsiflexores do Tornozelo Esquerdo"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="plantiflexoresTornozeloDireito"
                    valor={formularioDeDados.plantiflexoresTornozeloDireito}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, plantiflexoresTornozeloDireito: e.target.value })}
                    legenda="Plantiflexores do Tornozelo Direito"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="plantiflexoresTornozeloEsquerdo"
                    valor={formularioDeDados.plantiflexoresTornozeloEsquerdo}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, plantiflexoresTornozeloEsquerdo: e.target.value })}
                    legenda="Plantiflexores do Tornozelo Esquerdo"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_GRUPOS_MUSCULARES_POST, "gruposMusculares", setDesabilitar)
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

export default GruposMusculares;
