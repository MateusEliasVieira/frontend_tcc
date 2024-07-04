import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {CADASTRADO, preencherLegenda} from '../../../../constantes/Constantes';
import {salvar} from "../../../../requisicoes/Praticante";
import {
  SALVAR_HABILIDADES_SOCIAIS_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const HabilidadesSociais = () => {

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    passividade: '',
    autoagressao: '',
    heteroagressividade: '',
    assertividade: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const habilidadesSociais = localStorage.getItem("habilidadesSociais")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (habilidadesSociais === CADASTRADO) {
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
                <strong>Habilidades Sociais</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CForm>
              <Campo
                tipo="select"
                id="passividade"
                valor={formularioDeDados.passividade}
                setar={(e) => setFormularioDeDados({ ...formularioDeDados, passividade: e.target.value })}
                legenda="Passividade?"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="autoagressao"
                valor={formularioDeDados.autoagressao}
                setar={(e) => setFormularioDeDados({ ...formularioDeDados, autoagressao: e.target.value })}
                legenda="Autoagressividade?"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="heteroagressividade"
                valor={formularioDeDados.heteroagressividade}
                setar={(e) => setFormularioDeDados({ ...formularioDeDados, heteroagressividade: e.target.value })}
                legenda="Heteroagressividade?"
                opcoes={preencherLegenda}
              />
              <Campo
                tipo="select"
                id="assertividade"
                valor={formularioDeDados.assertividade}
                setar={(e) => setFormularioDeDados({ ...formularioDeDados, assertividade: e.target.value })}
                legenda="Assertividade?"
                opcoes={preencherLegenda}
              />

              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_HABILIDADES_SOCIAIS_DO_PRATICANTE_POST, "habilidadesSociais", setDesabilitar)
              }
              }>
                Salvar
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default HabilidadesSociais;
