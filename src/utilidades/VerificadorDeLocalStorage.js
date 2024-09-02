import {CADASTRADO, NAO_CADASTRADO} from "../constantes/Constantes";
import {apresentarModal} from "./ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";
import {
  ATUALIZAR_DADOS_PESSOAIS_DO_PRATICANTE_PUT,
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_DO_PRATICANTE_GET,
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET,
} from "../endpoints/praticante/fichaCadastroAdmissional/Endpoints";

const login = JSON.parse(localStorage.getItem('login'));
const idPraticanteSalvo = Number(localStorage.getItem("idPraticanteSalvo"))

const variaveisDeCadastroLocalStorage = [
  'avaliacaoFisioterapeutica', 'coordenacaoMotora', 'emPE', 'equilibrioDinamico', 'equilibrioEstatico', 'formaDeComunicacao',
  'gruposMusculares', 'habilidadesMotorasAVD', 'mobilidadeArticular', 'quadroAtual', 'saudeGeralDosPraticantes',
  'afetividade', 'avaliacaoPsicologica', 'comportamento', 'compreensao', 'cuidadosPessoais', 'habilidadesSociais',
  'linguagem', 'relacaoDaFamiliaComOExaminado', 'rotina', 'saude', 'saudeMental', 'sobreACrianca', 'socializacao',
  'tracoDePersonalidade', 'completudeMatricula', 'dadosPessoaisCadastrado', 'educacao', 'emergencia', 'outrasAtividadesManha',
  'outrasAtividadesTarde', 'responsavelPeloPraticante', 'planoTerapeuticoSingular'
]

var dados = {}


const atualizarDadosPessoaisDoPraticante = async (setDisplayModal, setTituloModal, setConteudoModal) => {
  await axios.put(ATUALIZAR_DADOS_PESSOAIS_DO_PRATICANTE_PUT,
    JSON.stringify({...dados}),
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login.token}`
      }

    }
  )
    .then((response) => {
      if (response.status === HttpStatusCode.Created) {
        limparLocalStorage()
        window.location.href = "/pesquisar-praticante"
      } else {
        apresentarModal("Aviso", `Falhou ao finalizar o cadastro do praticante ${dados.nomeCompleto}!`, setDisplayModal, setTituloModal, setConteudoModal)
      }
    })
    .catch((error) => {
      console.log(error.response.data)
      apresentarModal("Aviso", "Erro ao finalizar cadastro do praticante!", setDisplayModal, setTituloModal, setConteudoModal)
    })
}

// vai buscar os dados para poder setar o status de finalizado igual verdadeiro
const buscarDadosPessoisDoPraticante = async (setDisplayModal, setTituloModal, setConteudoModal) => {
  await axios.get(BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_DO_PRATICANTE_GET,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login.token}`
      }, params: {
        id: idPraticanteSalvo // trabalhar aqui
      }

    })
    .then((response) => {
        if (response.status === HttpStatusCode.Ok) {
          dados = {...response.data}
          if (dados.finalizado === true || dados.finalizado === 'true') {
            // já foi finalizado
            return true
          } else {
            // não foi finalizado
            dados = {...dados, finalizado: true}
            atualizarDadosPessoaisDoPraticante(setDisplayModal, setTituloModal, setConteudoModal)
          }
        } else {
          return false
        }
      }
    )
    .catch((error) => {
      console.log(error)
      return false
    })

}


const finalizado = async () => {
  await axios.get(BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_DO_PRATICANTE_GET,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login.token}`
      }, params: {
        id: idPraticanteSalvo // trabalhar aqui
      }

    })
    .then((response) => {
        if (response.status === HttpStatusCode.Ok) {
          dados = {...response.data}
          if (dados.finalizado === true || dados.finalizado === 'true') {
            // já foi finalizado
            return true
          } else {
            // não foi finalizado
            return false
          }
        } else {
          return false
        }
      }
    )
    .catch((error) => {
      return false
    })

}


const verificarSeEstaFinalizado = (setDisplayModal, setTituloModal, setConteudoModal) => {

    if(finalizado() === true){

    }

}


// const verificarSeEstaFinalizado = (setDisplayModal, setTituloModal, setConteudoModal) => {
//
//   // Essa verificação, apenas vale para quando estou fazendo um novo cadastro.
//   let contador = 0;
//   variaveisDeCadastroLocalStorage.map((variavel) => {
//     if (localStorage.getItem(variavel) === CADASTRADO) {
//       contador++
//     }
//   })
//   if (contador === variaveisDeCadastroLocalStorage.length) {
//     // só entra aqui se tiver finalizado todos os formularios de cadastro do praticante
//     buscarDadosPessoisDoPraticante(setDisplayModal, setTituloModal, setConteudoModal)
//   } else {
//
//     // Essa verificação, vale, caso já tenha sido feito o cadastro. (verificamos por pre-calção)
//     if(finalizado() === true){
//       return true
//     }
//
//
//     return false
//   }
// }

const limparLocalStorage = () => {
  localStorage.setItem("idPraticanteSalvo", '')
  variaveisDeCadastroLocalStorage.map((variavel) => {
    localStorage.setItem(variavel, NAO_CADASTRADO)
  })
}

export {
  verificarSeEstaFinalizado, limparLocalStorage
}
