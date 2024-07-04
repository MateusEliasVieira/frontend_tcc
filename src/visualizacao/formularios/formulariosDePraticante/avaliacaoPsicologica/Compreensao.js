import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {CADASTRADO, preencherLegenda} from '../../../../constantes/Constantes';
import {salvar} from "../../../../requisicoes/Praticante";
import {SALVAR_COMPREENSAO_DO_PRATICANTE_POST} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const Compreensao = () => {

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    compreendeOrdens: '',
    executaOrdensVerbaisSimples: '',
    executaOrdensComplexas: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const compreensao = localStorage.getItem("compreensao")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (compreensao === CADASTRADO) {
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
                <strong>Compreensão</strong>
              </CCardHeader>
          }
          <CCardBody>
            <Campo
              tipo="select"
              id="compreendeOrdens"
              valor={formularioDeDados.compreendeOrdens}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, compreendeOrdens: e.target.value })}
              legenda="Compreende ordens ?"
              opcoes={preencherLegenda}
            />
            <Campo
              tipo="select"
              id="executaOrdensVerbaisSimples"
              valor={formularioDeDados.executaOrdensVerbaisSimples}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, executaOrdensVerbaisSimples: e.target.value })}
              legenda="Executa ordens verbais simples?"
              opcoes={preencherLegenda}
            />
            <Campo
              tipo="select"
              id="executaOrdensComplexas"
              valor={formularioDeDados.executaOrdensComplexas}
              setar={(e) => setFormularioDeDados({ ...formularioDeDados, executaOrdensComplexas: e.target.value })}
              legenda="Executa ordens complexas?"
              opcoes={preencherLegenda}
            />

            <CButton color="primary" disabled={desabilitar} onClick={() => {
              salvar(formularioDeDados, SALVAR_COMPREENSAO_DO_PRATICANTE_POST, "compreensao", setDesabilitar)
            }
            }>
              Salvar
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Compreensao;
