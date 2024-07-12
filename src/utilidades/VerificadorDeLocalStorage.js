import {CADASTRADO, NAO_CADASTRADO} from "../constantes/Constantes";

const variaveisDeCadastroLocalStorage = [
  'avaliacaoFisioterapeutica', 'coordenacaoMotora', 'equilibrioDinamico', 'equilibrioEstatico', 'formaDeComunicacao',
  'gruposMusculares', 'habilidadesMotorasAVD', 'mobilidadeArticular', 'quadroAtual', 'saudeGeralDosPraticantes',
  'afetividade', 'avaliacaoPsicologica', 'comportamento', 'compreensao', 'cuidadosPessoais', 'habilidadesSociais',
  'linguagem', 'relacaoDaFamiliaComOExaminado', 'rotina', 'saude', 'saudeMental', 'sobreACrianca', 'socializacao',
  'tracoDePersonalidade', 'completudeMatricula', 'dadosPessoaisCadastrado', 'educacao', 'emergencia', 'outrasAtividadesManha',
  'outrasAtividadesTarde', 'responsavelPeloPraticante', 'planoTerapeuticoSingular'
]
const verificarSeEstaFinalizado = () => {
  let contador = 0;
  variaveisDeCadastroLocalStorage.map((variavel) => {
    if (localStorage.getItem(variavel) === CADASTRADO) {
      contador++
    }
  })
  if (contador === variaveisDeCadastroLocalStorage.length) {
    alert("Finalizado cadastro do praticante!")
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
