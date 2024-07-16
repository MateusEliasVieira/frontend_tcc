import {CCard, CCardBody, CCardHeader, CCol, CRow} from "@coreui/react";
import {useEffect, useState} from "react";
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import {calcularIdade, formatarDataParaDiaMesAno} from "../../../utilidades/ManipuladorDeDatas";
import {formatarTipoSanguineo} from "../../../utilidades/ManipuladorTipoSanguineo";
import {colocarApenasPrimeiraLetraMaiuscula} from "../../../utilidades/ManipuladorTexto";



const DadosPessoaisRelatorio = ({idUsuario}) => {

  const[dados,setDados]=useState({
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
  })

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Dados Pessoais</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="auto">
            <p><strong>Nome completo:</strong> {dados.nomeCompleto}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Diagnóstico clínico:</strong> {dados.diagnosticoClinico}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>CID:</strong> {dados.cid}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Data de nascimento:</strong> {formatarDataParaDiaMesAno(dados.dataNascimento)}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Idade:</strong> {calcularIdade(dados.dataNascimento)}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Peso:</strong> {dados.peso}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Tipo sanguíneo:</strong> {formatarTipoSanguineo(dados.tipoSanguineo)}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Fator RH</strong> {dados.fatorRH}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Altura</strong> {dados.altura}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Sexo</strong> {colocarApenasPrimeiraLetraMaiuscula(dados.sexo)}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Naturalidade</strong> {dados.naturalidade}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Cor/Raça:</strong> {colocarApenasPrimeiraLetraMaiuscula(dados.corOuRaca)}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>CPF:</strong> {dados.cpf}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Nº cartão do SUS:</strong> {dados.cartaoSUS}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Endereço residencial:</strong> {dados.enderecoResidencial}</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Bairro:</strong> {dados.bairro}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>Cidade:</strong> {dados.cidade}</p>
          </CCol>
          <CCol md="auto">
            <p><strong>CEP:</strong> {dados.cep}</p>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default DadosPessoaisRelatorio
