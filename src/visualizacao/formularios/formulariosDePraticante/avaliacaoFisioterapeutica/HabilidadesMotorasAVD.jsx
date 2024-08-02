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
  SALVAR_HABILIDADES_MOTORAS_AVD_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";

const HabilidadesMotorasAVD = () => {
  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    alcancarObjetos: '',
    consideracoesAlcancarObjetos: '',
    usoBimanual: '',
    consideracoesUsoBimanual: '',
    alimentacaoIndependente: '',
    consideracoesAlimentacaoIndependente: '',
    vestirIndependente: '',
    consideracoesVestirIndependente: '',
    pegarObjetos: '',
    consideracoesPegarObjetos: '',
    negligenciaMembro: '',
    consideracoesNegligenciaMembro: '',
    higienePessoal: '',
    consideracoesHigienePessoal: '',
    andar: '',
    consideracoesAndar: '',
    escritaManual: '',
    consideracoesEscritaManual: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const habilidadesMotorasAVD = localStorage.getItem("habilidadesMotorasAVD")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (habilidadesMotorasAVD === CADASTRADO) {
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
                <strong>Habilidades Motoras/AVD's</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="alcancarObjetos"
                    valor={formularioDeDados.alcancarObjetos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, alcancarObjetos: e.target.value})}
                    legenda="Alcançar Objetos"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesAlcancarObjetos"
                    valor={formularioDeDados.consideracoesAlcancarObjetos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesAlcancarObjetos: e.target.value
                    })}
                    legenda="Considerações Alcançar Objetos"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="usoBimanual"
                    valor={formularioDeDados.usoBimanual}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, usoBimanual: e.target.value})}
                    legenda="Uso Bimanual"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesUsoBimanual"
                    valor={formularioDeDados.consideracoesUsoBimanual}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesUsoBimanual: e.target.value
                    })}
                    legenda="Considerações Uso Bimanual"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="alimentacaoIndependente"
                    valor={formularioDeDados.alimentacaoIndependente}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      alimentacaoIndependente: e.target.value
                    })}
                    legenda="Alimentação Independente"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesAlimentacaoIndependente"
                    valor={formularioDeDados.consideracoesAlimentacaoIndependente}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesAlimentacaoIndependente: e.target.value
                    })}
                    legenda="Considerações Alimentação Independente"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="vestirIndependente"
                    valor={formularioDeDados.vestirIndependente}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, vestirIndependente: e.target.value})}
                    legenda="Vestir Independente"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesVestirIndependente"
                    valor={formularioDeDados.consideracoesVestirIndependente}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesVestirIndependente: e.target.value
                    })}
                    legenda="Considerações Vestir Independente"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="pegarObjetos"
                    valor={formularioDeDados.pegarObjetos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, pegarObjetos: e.target.value})}
                    legenda="Pegar Objetos"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesPegarObjetos"
                    valor={formularioDeDados.consideracoesPegarObjetos}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesPegarObjetos: e.target.value
                    })}
                    legenda="Considerações Pegar Objetos"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="negligenciaMembro"
                    valor={formularioDeDados.negligenciaMembro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, negligenciaMembro: e.target.value})}
                    legenda="Negligência de Membro"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesNegligenciaMembro"
                    valor={formularioDeDados.consideracoesNegligenciaMembro}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesNegligenciaMembro: e.target.value
                    })}
                    legenda="Considerações Negligência de Membro"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="higienePessoal"
                    valor={formularioDeDados.higienePessoal}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, higienePessoal: e.target.value})}
                    legenda="Higiene Pessoal"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesHigienePessoal"
                    valor={formularioDeDados.consideracoesHigienePessoal}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesHigienePessoal: e.target.value
                    })}
                    legenda="Considerações Higiene Pessoal"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="andar"
                    valor={formularioDeDados.andar}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, andar: e.target.value})}
                    legenda="Andar"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesAndar"
                    valor={formularioDeDados.consideracoesAndar}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, consideracoesAndar: e.target.value})}
                    legenda="Considerações Andar"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="escritaManual"
                    valor={formularioDeDados.escritaManual}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, escritaManual: e.target.value})}
                    legenda="Escrita Manual"
                    disabled={desabilitar}
                    opcoes={simOuNao}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="consideracoesEscritaManual"
                    valor={formularioDeDados.consideracoesEscritaManual}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      consideracoesEscritaManual: e.target.value
                    })}
                    legenda="Considerações Escrita Manual"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_HABILIDADES_MOTORAS_AVD_DO_PRATICANTE_POST, "habilidadesMotorasAVD", setDesabilitar)
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

export default HabilidadesMotorasAVD;
