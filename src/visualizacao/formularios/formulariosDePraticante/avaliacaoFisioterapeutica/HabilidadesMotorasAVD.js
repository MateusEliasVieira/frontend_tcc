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
import { salvar } from "../../../../requisicoes/HabilidadesMotorasAVD"; // Importe a função salvar apropriada
import {
  SALVAR_HABILIDADES_MOTORAS_AVD_POST
} from "../../../../endpoints/avaliacaoFisioterapeutica/Endpoints"; // Certifique-se de que o endpoint está correto
import { CADASTRADO } from "../../../../constantes/Constantes";

const HabilidadesMotorasAVD = () => {
  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idHabilidadesMotorasAVD: '',
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
            <strong>Habilidades Motoras/AVD's</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="alcancarObjetos"
                    valor={formularioDeDados.alcancarObjetos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, alcancarObjetos: e.target.checked })}
                    legenda="Alcançar Objetos"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="textarea"
                    id="consideracoesAlcancarObjetos"
                    valor={formularioDeDados.consideracoesAlcancarObjetos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesAlcancarObjetos: e.target.value })}
                    legenda="Considerações Alcançar Objetos"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="usoBimanual"
                    valor={formularioDeDados.usoBimanual}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, usoBimanual: e.target.checked })}
                    legenda="Uso Bimanual"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="textarea"
                    id="consideracoesUsoBimanual"
                    valor={formularioDeDados.consideracoesUsoBimanual}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesUsoBimanual: e.target.value })}
                    legenda="Considerações Uso Bimanual"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="alimentacaoIndependente"
                    valor={formularioDeDados.alimentacaoIndependente}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, alimentacaoIndependente: e.target.checked })}
                    legenda="Alimentação Independente"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="textarea"
                    id="consideracoesAlimentacaoIndependente"
                    valor={formularioDeDados.consideracoesAlimentacaoIndependente}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesAlimentacaoIndependente: e.target.value })}
                    legenda="Considerações Alimentação Independente"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="vestirIndependente"
                    valor={formularioDeDados.vestirIndependente}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, vestirIndependente: e.target.checked })}
                    legenda="Vestir Independente"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="textarea"
                    id="consideracoesVestirIndependente"
                    valor={formularioDeDados.consideracoesVestirIndependente}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesVestirIndependente: e.target.value })}
                    legenda="Considerações Vestir Independente"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="pegarObjetos"
                    valor={formularioDeDados.pegarObjetos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, pegarObjetos: e.target.checked })}
                    legenda="Pegar Objetos"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="textarea"
                    id="consideracoesPegarObjetos"
                    valor={formularioDeDados.consideracoesPegarObjetos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesPegarObjetos: e.target.value })}
                    legenda="Considerações Pegar Objetos"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="negligenciaMembro"
                    valor={formularioDeDados.negligenciaMembro}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, negligenciaMembro: e.target.checked })}
                    legenda="Negligência de Membro"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="textarea"
                    id="consideracoesNegligenciaMembro"
                    valor={formularioDeDados.consideracoesNegligenciaMembro}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesNegligenciaMembro: e.target.value })}
                    legenda="Considerações Negligência de Membro"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="higienePessoal"
                    valor={formularioDeDados.higienePessoal}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, higienePessoal: e.target.checked })}
                    legenda="Higiene Pessoal"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="textarea"
                    id="consideracoesHigienePessoal"
                    valor={formularioDeDados.consideracoesHigienePessoal}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesHigienePessoal: e.target.value })}
                    legenda="Considerações Higiene Pessoal"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="andar"
                    valor={formularioDeDados.andar}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, andar: e.target.checked })}
                    legenda="Andar"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="textarea"
                    id="consideracoesAndar"
                    valor={formularioDeDados.consideracoesAndar}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesAndar: e.target.value })}
                    legenda="Considerações Andar"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="checkbox"
                    id="escritaManual"
                    valor={formularioDeDados.escritaManual}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, escritaManual: e.target.checked })}
                    legenda="Escrita Manual"
                    disabled={desabilitar}
                  />
                  <Campo
                    tipo="textarea"
                    id="consideracoesEscritaManual"
                    valor={formularioDeDados.consideracoesEscritaManual}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, consideracoesEscritaManual: e.target.value })}
                    legenda="Considerações Escrita Manual"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_HABILIDADES_MOTORAS_AVD_POST, "habilidadesMotorasAVD", setDesabilitar)
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
