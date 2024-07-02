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
import {salvar} from "../../../../requisicoes/Praticante";
import {
  SALVAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints"; // Importando o componente Campo

const OutrasAtividadesManha = () => {
  const [formularioDeDados, setFormularioDeDados] = useState({
    segundaFeira: '',
    tercaFeira: '',
    quartaFeira: '',
    quintaFeira: '',
    sextaFeira: '',
    sabado: '',
    domingo: '',
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
            <strong>Outras atividades matutinas</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="segundaFeira"
                    valor={formularioDeDados.segundaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, segundaFeira: e.target.value})}
                    legenda="Segunda-feira"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="tercaFeira"
                    valor={formularioDeDados.tercaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, tercaFeira: e.target.value})}
                    legenda="Terça-feira"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="quartaFeira"
                    valor={formularioDeDados.quartaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, quartaFeira: e.target.value})}
                    legenda="Quarta-feira"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="quintaFeira"
                    valor={formularioDeDados.quintaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, quintaFeira: e.target.value})}
                    legenda="Quinta-feira"
                  />
                </CCol>
              </CRow>

              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="sextaFeira"
                    valor={formularioDeDados.sextaFeira}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sextaFeira: e.target.value})}
                    legenda="Sexta-feira"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="sabado"
                    valor={formularioDeDados.sabado}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sabado: e.target.value})}
                    legenda="Sábado"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="domingo"
                    valor={formularioDeDados.domingo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, domingo: e.target.value})}
                    legenda="Domingo"
                  />
                </CCol>
              </CRow>
              <CButton color="primary" onClick={() => {
                salvar(formularioDeDados, SALVAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POST)
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

export default OutrasAtividadesManha;
