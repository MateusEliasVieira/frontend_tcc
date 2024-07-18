import React, {useEffect, useState} from "react";
import DadosPessoais from "./fichaCadastroAdmissional/DadosPessoais";
import Educacao from "./fichaCadastroAdmissional/Educacao";
import ResponsavelPeloPraticante from "./fichaCadastroAdmissional/ResponsavelPeloPraticante";
import OutrasAtividadesManha from "./fichaCadastroAdmissional/OutrasAtividadesManha";
import OutrasAtividadesTarde from "./fichaCadastroAdmissional/OutrasAtividadesTarde";
import Emergencia from "./fichaCadastroAdmissional/Emergencia";
import CompletudeMatricula from "./fichaCadastroAdmissional/CompletudeMatricula";
import SobreACrianca from "./avaliacaoPsicologica/SobreACrianca";
import Saude from "./avaliacaoPsicologica/Saude";
import Rotina from "./avaliacaoPsicologica/Rotina";
import CuidadosPessoais from "./avaliacaoPsicologica/CuidadosPessoais";
import TracoDePersonalidade from "./avaliacaoPsicologica/TracoDePersonalidade";
import Linguagem from "./avaliacaoPsicologica/Linguagem";
import Compreensao from "./avaliacaoPsicologica/Compreensao";
import SaudeMental from "./avaliacaoPsicologica/SaudeMental";
import Socializacao from "./avaliacaoPsicologica/Socializacao";
import Comportamento from "./avaliacaoPsicologica/Comportamento";
import HabilidadesSociais from "./avaliacaoPsicologica/HabilidadesSociais";
import Afetividade from "./avaliacaoPsicologica/Afetividade";
import RelacaoDaFamiliaComOExaminado from "./avaliacaoPsicologica/RelacaoDaFamiliaComOExaminado";
import AvaliacaoPsicologica from "./avaliacaoPsicologica/AvaliacaoPsicologica";
import axios from "axios";
import {
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import AvaliacaoFisioterapeutica from "./avaliacaoFisioterapeutica/AvaliacaoFisioterapeutica";
import CoordenacaoMotora from "./avaliacaoFisioterapeutica/CoordenacaoMotora";
import EquilibrioDinamico from "./avaliacaoFisioterapeutica/EquilibrioDinamico";
import EquilibrioEstatico from "./avaliacaoFisioterapeutica/EquilibrioEstatico";
import FormaDeComunicacao from "./avaliacaoFisioterapeutica/FormaDeComunicacao";
import GruposMusculares from "./avaliacaoFisioterapeutica/GruposMusculares";
import HabilidadesMotorasAVD from "./avaliacaoFisioterapeutica/HabilidadesMotorasAVD";
import MobilidadeArticular from "./avaliacaoFisioterapeutica/MobilidadeArticular";
import QuadroAtual from "./avaliacaoFisioterapeutica/QuadroAtual";
import SaudeGeralDoPraticante from "./avaliacaoFisioterapeutica/SaudeGeralDoPraticante";
import PlanoTerapeuticoSingular from "./planoTerapeuticoSingular/PlanoTerapeuticoSingular";

import "./CadastroDePraticante.css"
import {verificarSeEstaFinalizado} from "../../../utilidades/VerificadorDeLocalStorage";
import EmPE from "./avaliacaoFisioterapeutica/EmPe";

const CadastroDePraticante = () => {
  const [activeTab, setActiveTab] = useState("dadosPessoais");

  useEffect(() => {
    verificarSeEstaFinalizado()
    const login = JSON.parse(localStorage.getItem("login"));
    const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
    if (idPraticanteSalvo !== null && idPraticanteSalvo !== "" && login.idUsuario !== "" && login.idUsuario !== undefined) {
      axios
        .get(BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET, {
          params: {
            id: idPraticanteSalvo,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${login.token}`,
          },
        })
        .then((response) => {
          console.log(response);
          alert("Ainda não foi concluído o cadastro do praticante " + response.data.nomeCompleto);
        })
        .catch((erro) => {
        });
    }
  }, []);

  const renderComponent = () => {
    switch (activeTab) {
      case "dadosPessoais":
        return <DadosPessoais/>;
      case "educacao":
        return <Educacao/>;
      case "responsavelPeloPraticante":
        return <ResponsavelPeloPraticante/>;
      case "outrasAtividadesManha":
        return <OutrasAtividadesManha/>;
      case "outrasAtividadesTarde":
        return <OutrasAtividadesTarde/>;
      case "emergencia":
        return <Emergencia/>;
      case "completudeMatricula":
        return <CompletudeMatricula/>;
      case "sobreACrianca":
        return <SobreACrianca/>;
      case "saude":
        return <Saude/>;
      case "rotina":
        return <Rotina/>;
      case "cuidadosPessoais":
        return <CuidadosPessoais/>;
      case "tracoDePersonalidade":
        return <TracoDePersonalidade/>;
      case "linguagem":
        return <Linguagem/>;
      case "compreensao":
        return <Compreensao/>;
      case "saudeMental":
        return <SaudeMental/>;
      case "socializacao":
        return <Socializacao/>;
      case "comportamento":
        return <Comportamento/>;
      case "habilidadesSociais":
        return <HabilidadesSociais/>;
      case "afetividade":
        return <Afetividade/>;
      case "relacaoDaFamiliaComOExaminado":
        return <RelacaoDaFamiliaComOExaminado/>;
      case "avaliacaoPsicologica":
        return <AvaliacaoPsicologica/>;
      case "avaliacaoFisioterapeutica":
        return <AvaliacaoFisioterapeutica/>;
      case "coordenacaoMotora":
        return <CoordenacaoMotora/>;
      case "emPe":
        return <EmPE/>;
      case "equilibrioDinamico":
        return <EquilibrioDinamico/>;
      case "equilibrioEstatico":
        return <EquilibrioEstatico/>;
      case "formaDeComunicacao":
        return <FormaDeComunicacao/>;
      case "gruposMusculares":
        return <GruposMusculares/>;
      case "habilidadesMotorasAVD":
        return <HabilidadesMotorasAVD/>;
      case "mobilidadeArticular":
        return <MobilidadeArticular/>;
      case "quadroAtual":
        return <QuadroAtual/>;
      case "saudeGeralDosPraticantes":
        return <SaudeGeralDoPraticante/>;
      case "planoTerapeuticoSingular":
        return <PlanoTerapeuticoSingular/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div id="box-tabs">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "dadosPessoais" ? "active" : ""}`}
              onClick={() => setActiveTab("dadosPessoais")}
            >
              Dados Pessoais
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "educacao" ? "active" : ""}`}
              onClick={() => setActiveTab("educacao")}
            >
              Educação
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "responsavelPeloPraticante" ? "active" : ""}`}
              onClick={() => setActiveTab("responsavelPeloPraticante")}
            >
              Responsável
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "outrasAtividadesManha" ? "active" : ""}`}
              onClick={() => setActiveTab("outrasAtividadesManha")}
            >
              Outras Atividades Manhã
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "outrasAtividadesTarde" ? "active" : ""}`}
              onClick={() => setActiveTab("outrasAtividadesTarde")}
            >
              Outras Atividades Tarde
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "emergencia" ? "active" : ""}`}
              onClick={() => setActiveTab("emergencia")}
            >
              Emergência
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "completudeMatricula" ? "active" : ""}`}
              onClick={() => setActiveTab("completudeMatricula")}
            >
              Completude Matrícula
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "sobreACrianca" ? "active" : ""}`}
              onClick={() => setActiveTab("sobreACrianca")}
            >
              Sobre a Criança
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "saude" ? "active" : ""}`}
              onClick={() => setActiveTab("saude")}
            >
              Saúde
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "rotina" ? "active" : ""}`}
              onClick={() => setActiveTab("rotina")}
            >
              Rotina
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "cuidadosPessoais" ? "active" : ""}`}
              onClick={() => setActiveTab("cuidadosPessoais")}
            >
              Cuidados Pessoais
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "tracoDePersonalidade" ? "active" : ""}`}
              onClick={() => setActiveTab("tracoDePersonalidade")}
            >
              Traço de Personalidade
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "linguagem" ? "active" : ""}`}
              onClick={() => setActiveTab("linguagem")}
            >
              Linguagem
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "compreensao" ? "active" : ""}`}
              onClick={() => setActiveTab("compreensao")}
            >
              Compreensão
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "saudeMental" ? "active" : ""}`}
              onClick={() => setActiveTab("saudeMental")}
            >
              Saúde Mental
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "socializacao" ? "active" : ""}`}
              onClick={() => setActiveTab("socializacao")}
            >
              Socialização
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "comportamento" ? "active" : ""}`}
              onClick={() => setActiveTab("comportamento")}
            >
              Comportamento
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "habilidadesSociais" ? "active" : ""}`}
              onClick={() => setActiveTab("habilidadesSociais")}
            >
              Habilidades Sociais
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "afetividade" ? "active" : ""}`}
              onClick={() => setActiveTab("afetividade")}
            >
              Afetividade
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "relacaoDaFamiliaComOExaminado" ? "active" : ""}`}
              onClick={() => setActiveTab("relacaoDaFamiliaComOExaminado")}
            >
              Relação da Família
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "avaliacaoPsicologica" ? "active" : ""}`}
              onClick={() => setActiveTab("avaliacaoPsicologica")}
            >
              Avaliação Psicológica
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "avaliacaoFisioterapeutica" ? "active" : ""}`}
              onClick={() => setActiveTab("avaliacaoFisioterapeutica")}
            >
              Avaliação Fisioterapêutica
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "coordenacaoMotora" ? "active" : ""}`}
              onClick={() => setActiveTab("coordenacaoMotora")}
            >
              Coordenação Motora
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "emPe" ? "active" : ""}`}
              onClick={() => setActiveTab("emPe")}
            >
              Em Pé
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "equilibrioDinamico" ? "active" : ""}`}
              onClick={() => setActiveTab("equilibrioDinamico")}
            >
              Equilíbrio Dinâmico
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "equilibrioEstatico" ? "active" : ""}`}
              onClick={() => setActiveTab("equilibrioEstatico")}
            >
              Equilíbrio Estático
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "formaDeComunicacao" ? "active" : ""}`}
              onClick={() => setActiveTab("formaDeComunicacao")}
            >
              Forma de Comunicação
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "gruposMusculares" ? "active" : ""}`}
              onClick={() => setActiveTab("gruposMusculares")}
            >
              Grupos Musculares
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "habilidadesMotorasAVD" ? "active" : ""}`}
              onClick={() => setActiveTab("habilidadesMotorasAVD")}
            >
              Habilidades Motoras AVD
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "mobilidadeArticular" ? "active" : ""}`}
              onClick={() => setActiveTab("mobilidadeArticular")}
            >
              Mobilidade Articular
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "quadroAtual" ? "active" : ""}`}
              onClick={() => setActiveTab("quadroAtual")}
            >
              Quadro Atual
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "saudeGeralDosPraticantes" ? "active" : ""}`}
              onClick={() => setActiveTab("saudeGeralDosPraticantes")}
            >
              Saúde Geral dos Praticantes
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "planoTerapeuticoSingular" ? "active" : ""}`}
              onClick={() => setActiveTab("planoTerapeuticoSingular")}
            >
              Plano Terapêutico Singular
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default CadastroDePraticante;
