import React, {useEffect, useState} from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer,
  CRow,
} from '@coreui/react';
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_RESPONSAVEL_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import {formatarDataParaDiaMesAno} from "../../../utilidades/ManipuladorDeDatas";
import {formatarDinheiro} from "../../../utilidades/ManipuladorTexto"; // Importando o componente Campo

const ResponsavelPeloPraticanteRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    nomeResponsavel: '',
    grauParentesco: '',
    profissao: '',
    telefone: '',
    dataNascimento: '',
    email: '',
    telefoneTrabalho: '',
    rendaFamiliar: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_RESPONSAVEL_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (

    <CCard className="mb-4">
      <CCardHeader>
        <strong>Responsável pelo Praticante</strong>
      </CCardHeader>
      <CCardBody>
        <CContainer>
          <CRow>
            <CCol md="auto">
              <p><strong>Nome do responsável:</strong> {dados.nomeResponsavel}</p>
            </CCol>
            <CCol md="auto">
              <p><strong>Grau de parentesco:</strong> {dados.grauParentesco}</p>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="auto">
              <p><strong>Data de nascimento:</strong> {formatarDataParaDiaMesAno(dados.dataNascimento)}</p>
            </CCol>
            <CCol>
              <p><strong>Profissão:</strong> {dados.profissao}</p>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="auto">
              <p><strong>Telefone pessoal:</strong> {dados.telefone}</p>
            </CCol>
            <CCol md="auto">
              <p><strong>Telefone do trabalho:</strong> {dados.telefoneTrabalho}</p>
            </CCol>
            <CCol>
              <p><strong>Email:</strong> {dados.email}</p>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="auto">
              <p><strong>Renda familiar:</strong> {formatarDinheiro(dados.rendaFamiliar)}</p>
            </CCol>
          </CRow>
        </CContainer>
      </CCardBody>
    </CCard>
  );
};

export default ResponsavelPeloPraticanteRelatorio;
