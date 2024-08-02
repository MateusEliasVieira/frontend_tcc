import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {CADASTRADO, preencherLegenda} from '../../../../constantes/Constantes';
import {salvar} from "../../../../requisicoes/Praticante";
import {SALVAR_LINGUAGEM_DO_PRATICANTE_POST} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const Linguagem = () => {

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    compreensaoVerbal: '',
    gesto: '',
    gritos: '',
    mimicaFacial: '',
    monossilabos: '',
    frasesCurtas: '',
    frasesCompletas: '',
    praticante: {
      idPraticante: '',
    },
  });
  useEffect(() => {
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    const linguagem = localStorage.getItem("linguagem")
    if (idPraticanteSalvo) {
      setFormularioDeDados(prevFormData => ({
        ...prevFormData,
        praticante: {
          ...prevFormData.praticante,
          idPraticante: idPraticanteSalvo
        }
      }));
      if (linguagem === CADASTRADO) {
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
          <Modal
            dsp={displayModal}
            titulo={tituloModal}
            conteudo={<div dangerouslySetInnerHTML={{__html: conteudoModal}}/>}
            esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
          />
          {
            desabilitar === "disabled" ?
              <CCardHeader style={{backgroundColor: "#1c323f"}}>
                <strong style={{color: "#0ecf8f"}}>Cadastrado com sucesso!</strong>
              </CCardHeader>
              :
              <CCardHeader>
                <strong>Linguagem</strong>
              </CCardHeader>
          }
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="compreensaoVerbal"
                    valor={formularioDeDados.compreensaoVerbal}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, compreensaoVerbal: e.target.value})}
                    legenda="Tem linguagem verbal compreensiva?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="gesto"
                    valor={formularioDeDados.gesto}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, gesto: e.target.value})}
                    legenda="Gestual?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="gritos"
                    valor={formularioDeDados.gritos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, gritos: e.target.value})}
                    legenda="Gritos?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="mimicaFacial"
                    valor={formularioDeDados.mimicaFacial}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, mimicaFacial: e.target.value})}
                    legenda="Mímica facial?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="select"
                    id="monossilabos"
                    valor={formularioDeDados.monossilabos}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, monossilabos: e.target.value})}
                    legenda="Monossílabos?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="select"
                    id="frasesCurtas"
                    valor={formularioDeDados.frasesCurtas}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, frasesCurtas: e.target.value})}
                    legenda="Fala frases curtas?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="select"
                    id="frasesCompletas"
                    valor={formularioDeDados.frasesCompletas}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, frasesCompletas: e.target.value})}
                    legenda="Fala frases completas?"
                    opcoes={preencherLegenda}
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_LINGUAGEM_DO_PRATICANTE_POST, "linguagem", setDesabilitar)
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

export default Linguagem;
