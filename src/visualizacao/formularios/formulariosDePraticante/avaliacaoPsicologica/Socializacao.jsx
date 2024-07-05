import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {CADASTRADO, preencherLegenda} from "../../../../constantes/Constantes";
import {salvar} from "../../../../requisicoes/Praticante";
import {SALVAR_SOCIALIZACAO_DO_PRATICANTE_POST} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const Socializacao = () => {

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    interageBemComOutrasCriancas: '',
    interageBemComAdultos: '',
    buscaContatoSocial: '',
    temOportunidadeContato: '',
    fazContatoVisual: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const socializacao = localStorage.getItem("socializacao")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (socializacao === CADASTRADO) {
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
                <strong>Socialização</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    id="interageBemComOutrasCriancas"
                    tipo="select"
                    valor={formularioDeDados.interageBemComOutrasCriancas}
                    setar={valor => setFormularioDeDados({...formularioDeDados, interageBemComOutrasCriancas: valor})}
                    legenda="Interage bem com outras crianças?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="interageBemComAdultos"
                    tipo="select"
                    valor={formularioDeDados.interageBemComAdultos}
                    setar={valor => setFormularioDeDados({...formularioDeDados, interageBemComAdultos: valor})}
                    legenda="Interage bem com adultos?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="buscaContatoSocial"
                    tipo="select"
                    valor={formularioDeDados.buscaContatoSocial}
                    setar={valor => setFormularioDeDados({...formularioDeDados, buscaContatoSocial: valor})}
                    legenda="Busca contato social?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="temOportunidadeContato"
                    tipo="select"
                    valor={formularioDeDados.temOportunidadeContato}
                    setar={valor => setFormularioDeDados({...formularioDeDados, temOportunidadeContato: valor})}
                    legenda="Tem oportunidade de contato social?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    id="fazContatoVisual"
                    tipo="select"
                    valor={formularioDeDados.fazContatoVisual}
                    setar={valor => setFormularioDeDados({...formularioDeDados, fazContatoVisual: valor})}
                    legenda="Faz contato visual?"
                    opcoes={preencherLegenda}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_SOCIALIZACAO_DO_PRATICANTE_POST, "socializacao", setDesabilitar)
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

export default Socializacao;
