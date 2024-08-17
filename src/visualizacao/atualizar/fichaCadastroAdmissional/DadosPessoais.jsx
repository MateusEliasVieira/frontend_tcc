import React, {useEffect, useState} from 'react';
import {estados, tipoSanguineo, corOuRaca, sexo} from '../../../constantes/Constantes';
import {
  aplicaMascaraDeAltura,
  aplicaMascaraDeCartaoDoSUS,
  aplicaMascaraDeCEP, aplicaMascaraDeCPF, aplicaMascaraDePeso
} from '../../../utilidades/ValidadorDeCampos';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow
} from '@coreui/react';
import Campo from '../../../components/campos/Campo';
import {atualizarDadosPessoais} from "../../../requisicoes/Praticante";
import Modal from "../../../components/modal/Modal";
import {apresentarModal, esconderModal} from "../../../utilidades/ManipuladorDeModal";
import {
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import axios from "axios";
import {formatarDataPadraoAnoMesDia} from "../../../utilidades/ManipuladorDeDatas";
import {PESQUISAR_PRATICANTE} from "../../../URL/URL";

const DadosPessoais = () => {

  const [idPraticante, setIdPraticante] = useState(null);
  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [formularioDeDados, setFormularioDeDados] = useState({
    idDadosPessoais: '',
    nomeCompleto: '',
    diagnosticoClinico: '',
    queixaPrincipal: '',
    cid: '',
    dataNascimento: '',
    peso: '',
    tipoSanguineo: '',
    fatorRH: '',
    altura: '',
    sexo: '',
    naturalidade: '',
    corOuRaca: '',
    cpf: '',
    cartaoSUS: '',
    enderecoResidencial: '',
    bairro: '',
    cidade: '',
    cep: '',
    praticante:{
      idPraticante: ''
    }
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

      axios.get(BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET, {
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
          if(error.response.data.urlRedirecionamento){
            window.location.href=error.response.data.urlRedirecionamento
          }
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
            <strong>Dados Pessoais do Praticante</strong>
          </CCardHeader>

          <CCardBody>
            <Modal
              dsp={displayModal}
              titulo={tituloModal}
              conteudo={<div dangerouslySetInnerHTML={{__html: conteudoModal}}/>}
              esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
            />
            <CContainer>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="cid"
                    valor={formularioDeDados.cid}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, cid: e.target.value})}
                    legenda="CID"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="nomeCompleto"
                    valor={formularioDeDados.nomeCompleto}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, nomeCompleto: e.target.value})}
                    legenda="Nome Completo"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="cpf"
                    valor={formularioDeDados.cpf}
                    setar={(e) => {
                      setFormularioDeDados({...formularioDeDados, cpf: aplicaMascaraDeCPF(e.target.value)});
                    }}
                    legenda="CPF"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="date"
                    id="dataNascimento"
                    valor={formatarDataPadraoAnoMesDia(formularioDeDados.dataNascimento)}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, dataNascimento: e.target.value})}
                    legenda="Data de Nascimento"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="number"
                    id="altura"
                    valor={formularioDeDados.altura}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      altura: aplicaMascaraDeAltura(e.target.value)
                    })}
                    legenda="Altura(cm) Exemplo: 180"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="number"
                    id="peso"
                    valor={formularioDeDados.peso}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      peso: aplicaMascaraDePeso(e.target.value)
                    })}
                    legenda="Peso"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="sexo"
                    legenda="Sexo"
                    valor={formularioDeDados.sexo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, sexo: e.target.value})}
                    opcoes={sexo}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="select"
                    id="tipoSanguineo"
                    valor={formularioDeDados.tipoSanguineo}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, tipoSanguineo: e.target.value})}
                    legenda="Tipo Sanguíneo"
                    opcoes={tipoSanguineo}
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="select"
                    id="corOuRaca"
                    valor={formularioDeDados.corOuRaca}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, corOuRaca: e.target.value})}
                    legenda="Cor/Raça"
                    opcoes={corOuRaca}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="diagnosticoClinico"
                    valor={formularioDeDados.diagnosticoClinico}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, diagnosticoClinico: e.target.value})}
                    legenda="Diagnóstico Clínico"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="queixaPrincipal"
                    valor={formularioDeDados.queixaPrincipal}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, queixaPrincipal: e.target.value})}
                    legenda="Queixa Principal"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="fatorRH"
                    valor={formularioDeDados.fatorRH}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, fatorRH: e.target.value})}
                    legenda="Fator RH"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <Campo
                    tipo="text"
                    id="cartaoSUS"
                    valor={formularioDeDados.cartaoSUS}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      cartaoSUS: aplicaMascaraDeCartaoDoSUS(e.target.value)
                    })}
                    legenda="Cartão SUS"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="cep"
                    valor={formularioDeDados.cep}
                    setar={(e) => setFormularioDeDados({
                      ...formularioDeDados,
                      cep: aplicaMascaraDeCEP(e.target.value)
                    })}
                    legenda="CEP"
                  />
                </CCol>
                <CCol>
                  <Campo
                    tipo="text"
                    id="enderecoResidencial"
                    valor={formularioDeDados.enderecoResidencial}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, enderecoResidencial: e.target.value})}
                    legenda="Endereço Residencial"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="bairro"
                    valor={formularioDeDados.bairro}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, bairro: e.target.value})}
                    legenda="Bairro"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="text"
                    id="cidade"
                    valor={formularioDeDados.cidade}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, cidade: e.target.value})}
                    legenda="Cidade"
                  />
                </CCol>
                <CCol md="auto">
                  <Campo
                    tipo="select"
                    id="naturalidade"
                    legenda="Naturalidade"
                    valor={formularioDeDados.naturalidade}
                    setar={(e) => setFormularioDeDados({...formularioDeDados, naturalidade: e.target.value})}
                    opcoes={estados}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <CButton color="danger" style={{color: "white", marginTop: "10px"}}
                           onClick={() => {
                             atualizarDadosPessoais(formularioDeDados, setDisplayModal, setTituloModal, setConteudoModal);
                           }}>
                    Atualizar
                  </CButton>
                </CCol>
              </CRow>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default DadosPessoais;
