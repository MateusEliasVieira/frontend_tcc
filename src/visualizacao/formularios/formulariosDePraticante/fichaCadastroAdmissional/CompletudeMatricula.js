import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CForm,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import {converterImagemEmBase64} from "../../../../utilidades/ConversorDeImagem";
import Campo from '../../../../components/campos/Campo';
import {salvar} from "../../../../requisicoes/Praticante";
import {
  SALVAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints"; // Importando o componente Campo

const CompletudeMatricula = () => {
  const [formularioDeDados, setFormularioDeDados] = useState({
    dataCompletudeMatricula: '',
    imagemAssinaturaResponsavel: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
    }
  }, []);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Data de efetivação da matrícula</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <Campo
                tipo="date"
                id="dataCompletudeMatricula"
                valor={formularioDeDados.dataCompletudeMatricula}
                setar={(e) => setFormularioDeDados({...formularioDeDados, dataCompletudeMatricula: e.target.value})}
                legenda="Data da matrícula"
              />
              <Campo
                tipo="file"
                id="imagemAssinaturaResponsavel"
                setar={(e) => {
                  converterImagemEmBase64(e.target.files[0])
                    .then((resolve) => {
                      setFormularioDeDados({...formularioDeDados, imagemAssinaturaResponsavel: resolve});
                    })
                    .catch((reject) => {
                      console.log(reject);
                    });
                }}
                legenda="Imagem da assinatura do responsável"
              />
              {/* Botão para salvar */}
              <CButton color="primary" onClick={() => {
                salvar(formularioDeDados, SALVAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POST)
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

export default CompletudeMatricula;
