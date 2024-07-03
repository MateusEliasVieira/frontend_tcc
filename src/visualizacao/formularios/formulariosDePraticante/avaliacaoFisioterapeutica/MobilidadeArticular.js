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
import {CADASTRADO} from "../../../../constantes/Constantes";
import {
  SALVAR_MOBILIDADE_ARTICULAR_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";

const MobilidadeArticular = () => {
  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idMobilidadeArticular: '',
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
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const mobilidadeArticular = localStorage.getItem("mobilidadeArticular")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (mobilidadeArticular === CADASTRADO) {
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
          {
            desabilitar === "disabled" ?
              <CCardHeader style={{backgroundColor: "#1c323f"}}>
                <strong style={{color: "#0ecf8f"}}>Cadastrado com sucesso!</strong>
              </CCardHeader>
              :
              <CCardHeader>
                <strong>Mobilidade Articular</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexaoAtivaOmbro"
                    valor={formularioDeDados.flexaoAtivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoAtivaOmbro: e.target.value})}
                    legenda="Flexão Ativa Ombro"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="flexaoPassivaOmbro"
                    valor={formularioDeDados.flexaoPassivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoPassivaOmbro: e.target.value})}
                    legenda="Flexão Passiva Ombro"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="abducaoAtivaOmbro"
                    valor={formularioDeDados.abducaoAtivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, abducaoAtivaOmbro: e.target.value})}
                    legenda="Abdução Ativa Ombro"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="abducaoPassivaOmbro"
                    valor={formularioDeDados.abducaoPassivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, abducaoPassivaOmbro: e.target.value})}
                    legenda="Abdução Passiva Ombro"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="aducaoAtivaOmbro"
                    valor={formularioDeDados.aducaoAtivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, aducaoAtivaOmbro: e.target.value})}
                    legenda="Adução Ativa Ombro"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="aducaoPassivaOmbro"
                    valor={formularioDeDados.aducaoPassivaOmbro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, aducaoPassivaOmbro: e.target.value})}
                    legenda="Adução Passiva Ombro"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexaoAtivaCotovelo"
                    valor={formularioDeDados.flexaoAtivaCotovelo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoAtivaCotovelo: e.target.value})}
                    legenda="Flexão Ativa Cotovelo"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="flexaoPassivaCotovelo"
                    valor={formularioDeDados.flexaoPassivaCotovelo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoPassivaCotovelo: e.target.value})}
                    legenda="Flexão Passiva Cotovelo"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="extensaoAtivaCotovelo"
                    valor={formularioDeDados.extensaoAtivaCotovelo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoAtivaCotovelo: e.target.value})}
                    legenda="Extensão Ativa Cotovelo"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="extensaoPassivaCotovelo"
                    valor={formularioDeDados.extensaoPassivaCotovelo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoPassivaCotovelo: e.target.value})}
                    legenda="Extensão Passiva Cotovelo"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="flexaoAtivaQuadril"
                    valor={formularioDeDados.flexaoAtivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoAtivaQuadril: e.target.value})}
                    legenda="Flexão Ativa Quadril"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="flexaoPassivaQuadril"
                    valor={formularioDeDados.flexaoPassivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoPassivaQuadril: e.target.value})}
                    legenda="Flexão Passiva Quadril"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="extensaoAtivaQuadril"
                    valor={formularioDeDados.extensaoAtivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoAtivaQuadril: e.target.value})}
                    legenda="Extensão Ativa Quadril"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="extensaoPassivaQuadril"
                    valor={formularioDeDados.extensaoPassivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoPassivaQuadril: e.target.value})}
                    legenda="Extensão Passiva Quadril"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="aducaoAtivaQuadril"
                    valor={formularioDeDados.aducaoAtivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, aducaoAtivaQuadril: e.target.value})}
                    legenda="Adução Ativa Quadril"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="aducaoPassivaQuadril"
                    valor={formularioDeDados.aducaoPassivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, aducaoPassivaQuadril: e.target.value})}
                    legenda="Adução Passiva Quadril"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="abducaoAtivaQuadril"
                    valor={formularioDeDados.abducaoAtivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, abducaoAtivaQuadril: e.target.value})}
                    legenda="Abdução Ativa Quadril"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="abducaoPassivaQuadril"
                    valor={formularioDeDados.abducaoPassivaQuadril}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, abducaoPassivaQuadril: e.target.value})}
                    legenda="Abdução Passiva Quadril"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="rotacaoInternaAtivaQuadril"
                    valor={formularioDeDados.rotacaoInternaAtivaQuadril}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      rotacaoInternaAtivaQuadril: e.target.value
                    })}
                    legenda="Rotação Interna Ativa Quadril"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="rotacaoInternaPassivaQuadril"
                    valor={formularioDeDados.rotacaoInternaPassivaQuadril}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      rotacaoInternaPassivaQuadril: e.target.value
                    })}
                    legenda="Rotação Interna Passiva Quadril"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="rotacaoExternaAtivaQuadril"
                    valor={formularioDeDados.rotacaoExternaAtivaQuadril}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      rotacaoExternaAtivaQuadril: e.target.value
                    })}
                    legenda="Rotação Externa Ativa Quadril"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="rotacaoExternaPassivaQuadril"
                    valor={formularioDeDados.rotacaoExternaPassivaQuadril}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      rotacaoExternaPassivaQuadril: e.target.value
                    })}
                    legenda="Rotação Externa Passiva Quadril"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="extensaoAtivaJoelho"
                    valor={formularioDeDados.extensaoAtivaJoelho}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoAtivaJoelho: e.target.value})}
                    legenda="Extensão Ativa Joelho"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="extensaoPassivaJoelho"
                    valor={formularioDeDados.extensaoPassivaJoelho}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, extensaoPassivaJoelho: e.target.value})}
                    legenda="Extensão Passiva Joelho"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="flexaoAtivaJoelho"
                    valor={formularioDeDados.flexaoAtivaJoelho}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoAtivaJoelho: e.target.value})}
                    legenda="Flexão Ativa Joelho"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="flexaoPassivaJoelho"
                    valor={formularioDeDados.flexaoPassivaJoelho}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, flexaoPassivaJoelho: e.target.value})}
                    legenda="Flexão Passiva Joelho"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="dorsiflexaoAtivaTornozelo"
                    valor={formularioDeDados.dorsiflexaoAtivaTornozelo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      dorsiflexaoAtivaTornozelo: e.target.value
                    })}
                    legenda="Dorsiflexão Ativa Tornozelo"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="dorsiflexaoPassivaTornozelo"
                    valor={formularioDeDados.dorsiflexaoPassivaTornozelo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      dorsiflexaoPassivaTornozelo: e.target.value
                    })}
                    legenda="Dorsiflexão Passiva Tornozelo"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="flexaoPlantarAtivaTornozelo"
                    valor={formularioDeDados.flexaoPlantarAtivaTornozelo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      flexaoPlantarAtivaTornozelo: e.target.value
                    })}
                    legenda="Flexão Plantar Ativa Tornozelo"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="text"
                    id="flexaoPlantarPassivaTornozelo"
                    valor={formularioDeDados.flexaoPlantarPassivaTornozelo}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      flexaoPlantarPassivaTornozelo: e.target.value
                    })}
                    legenda="Flexão Plantar Passiva Tornozelo"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_MOBILIDADE_ARTICULAR_DO_PRATICANTE_POST, "mobilidadeArticular", setDesabilitar)
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

export default MobilidadeArticular;
