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
import { salvar } from "../../../../requisicoes/EquilibrioEstatico"; // Importe a função salvar apropriada
import {
  SALVAR_EQUILIBRIO_ESTATICO_POST
} from "../../../../endpoints/avaliacaoFisioterapeutica/Endpoints"; // Certifique-se de que o endpoint está correto
import { CADASTRADO } from "../../../../constantes/Constantes";

const EquilibrioEstatico = () => {
  const [desabilitar, setDesabilitar] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idEquilibrioEstatico: '',
    apoioCabeca: '',
    comentariosApoioCabeca: '',
    sentarSemApoio: '',
    comentariosSentarSemApoio: '',
    sentarComApoio: '',
    comentariosSentarComApoio: '',
    emPeSemApoio: '',
    comentariosEmPeSemApoio: '',
    emPeComApoio: '',
    comentariosEmPeComApoio: '',
    posicaoDeSentinelaOlhosAbertos: '',
    comentariosPosicaoDeSentinelaOlhosAbertos: '',
    posicaoDeSentinelaOlhosFechados: '',
    comentariosPosicaoDeSentinelaOlhosFechados: '',
    umPeOlhosAbertos: '',
    comentariosUmPeOlhosAbertos: '',
    umPeOlhosFechados: '',
    comentariosUmPeOlhosFechados: '',
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
            <strong>Equilíbrio Estático</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="apoioCabeca"
                    valor={formularioDeDados.apoioCabeca}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, apoioCabeca: e.target.value })}
                    legenda="Apoio da Cabeça"
                    disabled={desabilitar}
                    opcoes={[
                      { valor: '', label: 'Selecione' },
                      { valor: 'SIM', label: 'Sim' },
                      { valor: 'NAO', label: 'Não' },
                    ]}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="comentariosApoioCabeca"
                    valor={formularioDeDados.comentariosApoioCabeca}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, comentariosApoioCabeca: e.target.value })}
                    legenda="Comentários Apoio da Cabeça"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="sentarSemApoio"
                    valor={formularioDeDados.sentarSemApoio}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, sentarSemApoio: e.target.value })}
                    legenda="Sentar Sem Apoio"
                    disabled={desabilitar}
                    opcoes={[
                      { valor: '', label: 'Selecione' },
                      { valor: 'SIM', label: 'Sim' },
                      { valor: 'NAO', label: 'Não' },
                    ]}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="comentariosSentarSemApoio"
                    valor={formularioDeDados.comentariosSentarSemApoio}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, comentariosSentarSemApoio: e.target.value })}
                    legenda="Comentários Sentar Sem Apoio"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="sentarComApoio"
                    valor={formularioDeDados.sentarComApoio}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, sentarComApoio: e.target.value })}
                    legenda="Sentar Com Apoio"
                    disabled={desabilitar}
                    opcoes={[
                      { valor: '', label: 'Selecione' },
                      { valor: 'SIM', label: 'Sim' },
                      { valor: 'NAO', label: 'Não' },
                    ]}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="comentariosSentarComApoio"
                    valor={formularioDeDados.comentariosSentarComApoio}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, comentariosSentarComApoio: e.target.value })}
                    legenda="Comentários Sentar Com Apoio"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="emPeSemApoio"
                    valor={formularioDeDados.emPeSemApoio}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, emPeSemApoio: e.target.value })}
                    legenda="Em Pé Sem Apoio"
                    disabled={desabilitar}
                    opcoes={[
                      { valor: '', label: 'Selecione' },
                      { valor: 'SIM', label: 'Sim' },
                      { valor: 'NAO', label: 'Não' },
                    ]}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="comentariosEmPeSemApoio"
                    valor={formularioDeDados.comentariosEmPeSemApoio}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, comentariosEmPeSemApoio: e.target.value })}
                    legenda="Comentários Em Pé Sem Apoio"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="emPeComApoio"
                    valor={formularioDeDados.emPeComApoio}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, emPeComApoio: e.target.value })}
                    legenda="Em Pé Com Apoio"
                    disabled={desabilitar}
                    opcoes={[
                      { valor: '', label: 'Selecione' },
                      { valor: 'SIM', label: 'Sim' },
                      { valor: 'NAO', label: 'Não' },
                    ]}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="comentariosEmPeComApoio"
                    valor={formularioDeDados.comentariosEmPeComApoio}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, comentariosEmPeComApoio: e.target.value })}
                    legenda="Comentários Em Pé Com Apoio"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="posicaoDeSentinelaOlhosAbertos"
                    valor={formularioDeDados.posicaoDeSentinelaOlhosAbertos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, posicaoDeSentinelaOlhosAbertos: e.target.value })}
                    legenda="Posição de Sentinela Olhos Abertos"
                    disabled={desabilitar}
                    opcoes={[
                      { valor: '', label: 'Selecione' },
                      { valor: 'SIM', label: 'Sim' },
                      { valor: 'NAO', label: 'Não' },
                    ]}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="comentariosPosicaoDeSentinelaOlhosAbertos"
                    valor={formularioDeDados.comentariosPosicaoDeSentinelaOlhosAbertos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, comentariosPosicaoDeSentinelaOlhosAbertos: e.target.value })}
                    legenda="Comentários Posição de Sentinela Olhos Abertos"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="posicaoDeSentinelaOlhosFechados"
                    valor={formularioDeDados.posicaoDeSentinelaOlhosFechados}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, posicaoDeSentinelaOlhosFechados: e.target.value })}
                    legenda="Posição de Sentinela Olhos Fechados"
                    disabled={desabilitar}
                    opcoes={[
                      { valor: '', label: 'Selecione' },
                      { valor: 'SIM', label: 'Sim' },
                      { valor: 'NAO', label: 'Não' },
                    ]}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="comentariosPosicaoDeSentinelaOlhosFechados"
                    valor={formularioDeDados.comentariosPosicaoDeSentinelaOlhosFechados}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, comentariosPosicaoDeSentinelaOlhosFechados: e.target.value })}
                    legenda="Comentários Posição de Sentinela Olhos Fechados"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="umPeOlhosAbertos"
                    valor={formularioDeDados.umPeOlhosAbertos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, umPeOlhosAbertos: e.target.value })}
                    legenda="Um Pé Olhos Abertos"
                    disabled={desabilitar}
                    opcoes={[
                      { valor: '', label: 'Selecione' },
                      { valor: 'SIM', label: 'Sim' },
                      { valor: 'NAO', label: 'Não' },
                    ]}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="comentariosUmPeOlhosAbertos"
                    valor={formularioDeDados.comentariosUmPeOlhosAbertos}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, comentariosUmPeOlhosAbertos: e.target.value })}
                    legenda="Comentários Um Pé Olhos Abertos"
                    disabled={desabilitar}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="umPeOlhosFechados"
                    valor={formularioDeDados.umPeOlhosFechados}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, umPeOlhosFechados: e.target.value })}
                    legenda="Um Pé Olhos Fechados"
                    disabled={desabilitar}
                    opcoes={[
                      { valor: '', label: 'Selecione' },
                      { valor: 'SIM', label: 'Sim' },
                      { valor: 'NAO', label: 'Não' },
                    ]}
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="comentariosUmPeOlhosFechados"
                    valor={formularioDeDados.comentariosUmPeOlhosFechados}
                    setar={(e) => setFormularioDeDados({ ...formularioDeDados, comentariosUmPeOlhosFechados: e.target.value })}
                    legenda="Comentários Um Pé Olhos Fechados"
                    disabled={desabilitar}
                  />
                </CCol>
              </CRow>
              <CButton color="primary" disabled={desabilitar} onClick={() => {
                salvar(formularioDeDados, SALVAR_EQUILIBRIO_ESTATICO_POST, "equilibrioEstatico", setDesabilitar)
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

export default EquilibrioEstatico;
