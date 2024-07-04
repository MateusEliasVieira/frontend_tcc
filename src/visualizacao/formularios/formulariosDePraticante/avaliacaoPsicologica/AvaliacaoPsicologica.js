import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {CADASTRADO} from "../../../../constantes/Constantes";
import {salvar} from "../../../../requisicoes/Praticante";
import {
  SALVAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const AvaliacaoPsicologica = () => {

  const [desabilitar,setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    expectativasFamiliaresTerapiaEquina: '',
    resumoCasoObservacoesComplementares: '',
    imagemAssinaturaOuCRPECarimbo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const avaliacaoPsicologica = localStorage.getItem("avaliacaoPsicologica")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (avaliacaoPsicologica === CADASTRADO) {
        setDesabilitar("disabled")
      } else {
        setDesabilitar("")
      }
    }
  }, []);

  return (
    <CCard className="mb-4">
      {
        desabilitar === "disabled" ?
          <CCardHeader style={{backgroundColor: "#1c323f"}}>
            <strong style={{color: "#0ecf8f"}}>Cadastrado com sucesso!</strong>
          </CCardHeader>
          :
          <CCardHeader>
            <strong>Avaliação Psicológica</strong>
          </CCardHeader>
      }
      <CCardBody>
        <CContainer>
          <Campo
            tipo="textarea"
            id="expectativasFamiliaresTerapiaEquina"
            valor={formularioDeDados.expectativasFamiliaresTerapiaEquina}
            setar={(e) =>
              setFormularioDeDados({ ...formularioDeDados, expectativasFamiliaresTerapiaEquina: e.target.value })
            }
            legenda="Qual a expectativa da família quanto à equoterapia?"
          />
          <Campo
            tipo="textarea"
            id="resumoCasoObservacoesComplementares"
            valor={formularioDeDados.resumoCasoObservacoesComplementares}
            setar={(e) =>
              setFormularioDeDados({ ...formularioDeDados, resumoCasoObservacoesComplementares: e.target.value })
            }
            legenda="Síntese do caso e observações complementares"
          />
          <Campo
            tipo="file"
            id="imagemAssinaturaOuCRPECarimbo"
            setar={(e) =>
              setFormularioDeDados({ ...formularioDeDados, imagemAssinaturaOuCRPECarimbo: e.target.files[0] })
            }
            legenda="Imagem da assinatura ou CRP e carimbo"
          />
          <CButton color="primary" disabled={desabilitar} onClick={() => {
            salvar(formularioDeDados, SALVAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POST,"avaliacaoPsicologica", setDesabilitar)
          }
          }>
            Salvar
          </CButton>
        </CContainer>
      </CCardBody>
    </CCard>
  );
};

export default AvaliacaoPsicologica;
