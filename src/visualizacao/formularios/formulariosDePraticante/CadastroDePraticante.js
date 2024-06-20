import React, { useState } from "react";
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


const CadastroDePraticante = () => {
  const [activeTab, setActiveTab] = useState('dadosPessoais');

  const renderComponent = () => {
    switch (activeTab) {
      case 'dadosPessoais':
        return <DadosPessoais />;
      case 'educacao':
        return <Educacao />;
      case 'responsavel':
        return <ResponsavelPeloPraticante />;
      case 'outrasManha':
        return <OutrasAtividadesManha />;
      case 'outrasTarde':
        return <OutrasAtividadesTarde />;
      case 'emergencia':
        return <Emergencia />;
      case 'completude':
        return <CompletudeMatricula />;
      case 'sobreCrianca':
        return <SobreACrianca />;
      case 'saude':
        return <Saude />;
      case 'rotina':
        return <Rotina />;
      case 'cuidados':
        return <CuidadosPessoais />;
      case 'traco':
        return <TracoDePersonalidade />;
      case 'linguagem':
        return <Linguagem />;
      case 'compreensao':
        return <Compreensao />;
      case 'saudeMental':
        return <SaudeMental />;
      case 'socializacao':
        return <Socializacao />;
      case 'comportamento':
        return <Comportamento />;
      case 'habilidades':
        return <HabilidadesSociais />;
      case 'afetividade':
        return <Afetividade />;
      case 'relacaoFamilia':
        return <RelacaoDaFamiliaComOExaminado />;
      case 'avaliacao':
        return <AvaliacaoPsicologica />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'dadosPessoais' ? 'active' : ''}`} onClick={() => setActiveTab('dadosPessoais')}>Dados Pessoais do Praticante</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'educacao' ? 'active' : ''}`} onClick={() => setActiveTab('educacao')}>Educação</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'responsavel' ? 'active' : ''}`} onClick={() => setActiveTab('responsavel')}>Responsável</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'outrasManha' ? 'active' : ''}`} onClick={() => setActiveTab('outrasManha')}>Outras Atividades Manhã</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'outrasTarde' ? 'active' : ''}`} onClick={() => setActiveTab('outrasTarde')}>Outras Atividades Tarde</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'emergencia' ? 'active' : ''}`} onClick={() => setActiveTab('emergencia')}>Emergência</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'completude' ? 'active' : ''}`} onClick={() => setActiveTab('completude')}>Completude da Matrícula</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'sobreCrianca' ? 'active' : ''}`} onClick={() => setActiveTab('sobreCrianca')}>Sobre a Criança</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'saude' ? 'active' : ''}`} onClick={() => setActiveTab('saude')}>Saúde</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'rotina' ? 'active' : ''}`} onClick={() => setActiveTab('rotina')}>Rotina</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'cuidados' ? 'active' : ''}`} onClick={() => setActiveTab('cuidados')}>Cuidados Pessoais</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'traco' ? 'active' : ''}`} onClick={() => setActiveTab('traco')}>Traços de Personalidade</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'linguagem' ? 'active' : ''}`} onClick={() => setActiveTab('linguagem')}>Linguagem</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'compreensao' ? 'active' : ''}`} onClick={() => setActiveTab('compreensao')}>Compreensão</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'saudeMental' ? 'active' : ''}`} onClick={() => setActiveTab('saudeMental')}>Saúde Mental</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'socializacao' ? 'active' : ''}`} onClick={() => setActiveTab('socializacao')}>Socialização</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'comportamento' ? 'active' : ''}`} onClick={() => setActiveTab('comportamento')}>Comportamento</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'habilidades' ? 'active' : ''}`} onClick={() => setActiveTab('habilidades')}>Habilidades Sociais</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'afetividade' ? 'active' : ''}`} onClick={() => setActiveTab('afetividade')}>Afetividade</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'relacaoFamilia' ? 'active' : ''}`} onClick={() => setActiveTab('relacaoFamilia')}>Relação da Família com o Examinado</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'avaliacao' ? 'active' : ''}`} onClick={() => setActiveTab('avaliacao')}>Avaliação Psicológica</button>
        </li>
      </ul>
      <div className="tab-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default CadastroDePraticante;
