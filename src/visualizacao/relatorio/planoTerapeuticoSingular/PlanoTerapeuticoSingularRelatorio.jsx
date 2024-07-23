import {CCard, CCardBody, CCardHeader, CCol, CImage, CRow} from "@coreui/react";
import React, {useEffect, useState} from "react";
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/planoTerapeuticoSingular/Endpoints";
import {formatarDataParaDiaMesAno} from "../../../utilidades/ManipuladorDeDatas";

const PlanoTerapeuticoSingularRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    dataPlanejamento: '',
    responsavelTerapeutico: '',
    problema: '',
    justificativaHipotesesBiologicasSociaisEmocionais: '',
    objetivoTerapeutico: '',
    medida: '',
    estrategiasIntervencao: '',
    selasMediadorasAnimais: '',
    evolucao: '',
    fisioterapeutaImagemDaAssinaturaOuCarimbo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_PLANO_TERAPEUTICO_SINGULAR_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Plano Terapêutico Singular</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <p><strong>Data do planejamento:</strong> <p>{formatarDataParaDiaMesAno(dados.dataPlanejamento)}</p></p>
        </CRow>
        <CRow>
          <p><strong>Responsável terapêutico:</strong> <p>{dados.responsavelTerapeutico}</p></p>
        </CRow>
        <CRow>
          <p><strong>Problema: (O que acontece?)</strong> <p>{dados.problema}</p></p>
        </CRow>
        <CRow>
          <p><strong>Hipóteses que justificam o problema biológico, social e emocional: (Por que isso
            acontece?)</strong> <p>{dados.justificativaHipotesesBiologicasSociaisEmocionais}</p></p>
        </CRow>
        <CRow>
          <p><strong>Meta terapêutica:</strong> <p>{dados.objetivoTerapeutico}</p></p>
        </CRow>
        <CRow>
          <p><strong>Mensuração: (Como vou medir?) (Tempo, escalas, repetições etc.)</strong> <p>{dados.medida}</p></p>
        </CRow>
        <CRow>
          <p><strong>Estratégias de intervenção: (Plano de ação - o que fazer? Como treinar?)</strong>
            <p>{dados.estrategiasIntervencao}</p></p>
        </CRow>
        <CRow>
          <p><strong>Mediadores/Animal/Encilhamento:</strong> <p>{dados.selasMediadorasAnimais}</p></p>
        </CRow>
        <CRow>
          <p><strong>Como está evoluindo?: (Devolutiva)</strong> <p>{dados.evolucao}</p></p>
        </CRow>
        <CRow>
          <CCol md="auto">
            <p><strong>Assinatura/Carimbo:</strong></p> <CImage width="350" height="200px" src={dados.fisioterapeutaImagemDaAssinaturaOuCarimbo}/>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default PlanoTerapeuticoSingularRelatorio
