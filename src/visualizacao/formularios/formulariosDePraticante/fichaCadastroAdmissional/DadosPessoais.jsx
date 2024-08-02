import React, {useEffect, useState} from 'react';
import {estados, tipoSanguineo, corOuRaca, sexo, CADASTRADO} from '../../../../constantes/Constantes';
import {
  aplicaMascaraDeCartaoDoSUS,
  aplicaMascaraDeCEP
} from '../../../../utilidades/ValidadorDeCampos';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {salvarDadosPessoais} from "../../../../requisicoes/Praticante";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";

const DadosPessoais = (props) => {

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");
  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
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
    cep: ''
  });

  useEffect(() => {
    const dadosPessoaisCadastrados = localStorage.getItem("dadosPessoaisCadastrado")
    if (dadosPessoaisCadastrados === CADASTRADO) {
      setDesabilitar("disabled")
    } else {
      setDesabilitar("")
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
                  <strong>Dados Pessoais do Praticante</strong>
                </CCardHeader>
            }
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
                      disabled={desabilitar}
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
                      disabled={desabilitar}
                    />
                  </CCol>
                  <CCol md="auto">
                    <Campo
                      tipo="text"
                      id="cpf"
                      valor={formularioDeDados.cpf}
                      setar={(e) => {
                        //const maskedValue = aplicaMascaraDeCPF(e.target.value);
                        setFormularioDeDados({...formularioDeDados, cpf: e.target.value});
                      }}
                      legenda="CPF"
                      disabled={desabilitar}
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <Campo
                      tipo="date"
                      id="dataNascimento"
                      valor={formularioDeDados.dataNascimento}
                      setar={(e) => setFormularioDeDados({...formularioDeDados, dataNascimento: e.target.value})}
                      legenda="Data de Nascimento"
                      disabled={desabilitar}
                    />
                  </CCol>
                  <CCol md="auto">
                    <Campo
                      tipo="number"
                      id="altura"
                      valor={formularioDeDados.altura}
                      setar={(e) => setFormularioDeDados({...formularioDeDados, altura: e.target.value})}
                      legenda="Altura(cm) Exemplo: 180"
                      disabled={desabilitar}
                    />
                  </CCol>
                  <CCol md="auto">
                    <Campo
                      tipo="number"
                      id="peso"
                      valor={formularioDeDados.peso}
                      setar={(e) => setFormularioDeDados({...formularioDeDados, peso: e.target.value})}
                      legenda="Peso"
                      disabled={desabilitar}
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
                      disabled={desabilitar}
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
                      disabled={desabilitar}
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
                      disabled={desabilitar}
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
                      disabled={desabilitar}
                    />
                  </CCol>
                  <CCol>
                    <Campo
                      tipo="text"
                      id="queixaPrincipal"
                      valor={formularioDeDados.queixaPrincipal}
                      setar={(e) => setFormularioDeDados({...formularioDeDados, queixaPrincipal: e.target.value})}
                      legenda="Queixa Principal"
                      disabled={desabilitar}
                    />
                  </CCol>
                  <CCol md="auto">
                    <Campo
                      tipo="text"
                      id="fatorRH"
                      valor={formularioDeDados.fatorRH}
                      setar={(e) => setFormularioDeDados({...formularioDeDados, fatorRH: e.target.value})}
                      legenda="Fator RH"
                      disabled={desabilitar}
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <Campo
                      tipo="text"
                      id="cartaoSUS"
                      valor={formularioDeDados.cartaoSUS}
                      setar={(e) => {
                        const maskedValue = aplicaMascaraDeCartaoDoSUS(e.target.value);
                        setFormularioDeDados({...formularioDeDados, cartaoSUS: maskedValue});
                      }}
                      legenda="Nº Cartão do SUS"
                      disabled={desabilitar}
                    />
                  </CCol>
                  <CCol>
                    <Campo
                      tipo="select"
                      id="naturalidade"
                      valor={formularioDeDados.naturalidade}
                      setar={(e) => setFormularioDeDados({...formularioDeDados, naturalidade: e.target.value})}
                      legenda="Naturalidade"
                      opcoes={estados}
                      disabled={desabilitar}
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <Campo
                      tipo="text"
                      id="enderecoResidencial"
                      valor={formularioDeDados.enderecoResidencial}
                      setar={(e) => setFormularioDeDados({...formularioDeDados, enderecoResidencial: e.target.value})}
                      legenda="Endereço Residencial"
                      disabled={desabilitar}
                    />
                  </CCol>
                  <CCol>
                    <Campo
                      tipo="text"
                      id="bairro"
                      valor={formularioDeDados.bairro}
                      setar={(e) => setFormularioDeDados({...formularioDeDados, bairro: e.target.value})}
                      legenda="Bairro"
                      disabled={desabilitar}
                    />
                  </CCol>
                  <CCol md="auto">
                    <Campo
                      tipo="text"
                      id="cidade"
                      valor={formularioDeDados.cidade}
                      setar={(e) => setFormularioDeDados({...formularioDeDados, cidade: e.target.value})}
                      legenda="Cidade"
                      disabled={desabilitar}
                    />
                  </CCol>
                  <CCol md="auto">
                    <Campo
                      tipo="text"
                      id="cep"
                      valor={formularioDeDados.cep}
                      setar={(e) => {
                        const maskedValue = aplicaMascaraDeCEP(e.target.value);
                        setFormularioDeDados({...formularioDeDados, cep: maskedValue});
                      }}
                      legenda="CEP"
                      disabled={desabilitar}
                    />
                  </CCol>
                </CRow>
                <CButton color="danger" style={{color:"white"}} disabled={desabilitar} onClick={() => {
                  salvarDadosPessoais(formularioDeDados,setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
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

export default DadosPessoais;
