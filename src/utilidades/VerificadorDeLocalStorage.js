import {CADASTRADO, NAO_CADASTRADO} from "../constantes/Constantes";
import {apresentarModal} from "./ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";
import {DOMINIO} from "../URL/URL";

const login = JSON.parse(localStorage.getItem('login'));
const idPraticanteSalvo = Number(JSON.parse(localStorage.getItem("idPraticanteSalvo")))

const variaveisDeCadastroLocalStorage = [
  'avaliacaoFisioterapeutica', 'coordenacaoMotora', 'emPE', 'equilibrioDinamico', 'equilibrioEstatico', 'formaDeComunicacao',
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

    axios.post(`${DOMINIO}/praticante/finalizado/finalizar-cadastro`,
      JSON.stringify(
        {
          finalizado: true,
          praticante: {
            idPraticante: idPraticanteSalvo
          }
        }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        }
      }
    )
      .then((response) => {
        if (response.status === HttpStatusCode.Created)
          apresentarModal("Aviso", response.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal)
          limparLocalStorage()
      })
      .catch((error) => {
        apresentarModal("Aviso", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal)
      })

  }
}

const limparLocalStorage = () => {
  localStorage.setItem("idPraticanteSalvo", '')
  variaveisDeCadastroLocalStorage.map((variavel) => {
    localStorage.setItem(variavel, NAO_CADASTRADO)
  })
}

export {
  verificarSeEstaFinalizado, limparLocalStorage
}
