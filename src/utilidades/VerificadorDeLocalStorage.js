import {CADASTRADO, NAO_CADASTRADO} from "../constantes/Constantes";
import {apresentarModal} from "./ManipuladorDeModal";

const variaveisDeCadastroLocalStorage = [
  'avaliacaoFisioterapeutica', 'coordenacaoMotora','emPE', 'equilibrioDinamico', 'equilibrioEstatico', 'formaDeComunicacao',
  'gruposMusculares', 'habilidadesMotorasAVD', 'mobilidadeArticular', 'quadroAtual', 'saudeGeralDosPraticantes',
  'afetividade', 'avaliacaoPsicologica', 'comportamento', 'compreensao', 'cuidadosPessoais', 'habilidadesSociais',
  'linguagem', 'relacaoDaFamiliaComOExaminado', 'rotina', 'saude', 'saudeMental', 'sobreACrianca', 'socializacao',
  'tracoDePersonalidade', 'completudeMatricula', 'dadosPessoaisCadastrado', 'educacao', 'emergencia', 'outrasAtividadesManha',
  'outrasAtividadesTarde', 'responsavelPeloPraticante', 'planoTerapeuticoSingular'
]
const verificarSeEstaFinalizado = (setDisplayModal, setTituloModal, setConteudoModal) => {
  let contador = 0;
  variaveisDeCadastroLocalStorage.map((variavel) => {
    if (localStorage.getItem(variavel) === CADASTRADO) {
      contador++
    }
  })
  if (contador === variaveisDeCadastroLocalStorage.length) {
    apresentarModal("Aviso","Finalizado cadastro do praticante!",setDisplayModal, setTituloModal, setConteudoModal)
    limparLocalStorage()
  }
}

const limparLocalStorage = () => {
  localStorage.setItem("idPraticanteSalvo", '')
  variaveisDeCadastroLocalStorage.map((variavel) => {
    localStorage.setItem(variavel, NAO_CADASTRADO)
  })
}

export {
  verificarSeEstaFinalizado,limparLocalStorage
}
