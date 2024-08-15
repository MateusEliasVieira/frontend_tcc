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
import Campo from '../../../components/campos/Campo';
import {atualizar, atualizarr} from "../../../requisicoes/Praticante";

import {simOuNao} from "../../../constantes/Constantes";
import {
  ATUALIZAR_HABILIDADES_MOTORAS_AVD_DO_PRATICANTE_PUT,
  BUSCAR_HABILIDADES_MOTORAS_AVD_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import Modal from "../../../components/modal/Modal";
import {esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";
import axios from "axios";

const HabilidadesMotorasAVD = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
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

    const id = Number(window.location.href.split("?id=")[1]);
    if (id) {
      setIdPraticante(id);
    } else {
      window.location.href = PESQUISAR_PRATICANTE;
    }

    if (idPraticante) {
      const login = JSON.parse(localStorage.getItem('login'));

      axios.get(BUSCAR_HABILIDADES_MOTORAS_AVD_DO_PRATICANTE_POR_ID_GET, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
        params: {
          id: idPraticante
        }
      })
        .then((response) => {
          setFormularioDeDados(response.data);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, [idPraticante]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <Modal
            dsp={displayModal}
            titulo={tituloModal}
            conteudo={<div dangerouslySetInnerHTML={{__html: conteudoModal}}/>}
            esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
          />
          <CCardHeader>
            <strong>Habilidades Motoras/AVD's</strong>
          </CCardHeader>
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
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color: "white"}} onClick={() => {
                atualizar(formularioDeDados, ATUALIZAR_HABILIDADES_MOTORAS_AVD_DO_PRATICANTE_PUT, setDisplayModal, setTituloModal, setConteudoModal)
              }}>
                Atualizar
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default HabilidadesMotorasAVD;
