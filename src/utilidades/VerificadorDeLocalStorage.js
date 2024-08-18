import {CADASTRADO, NAO_CADASTRADO} from "../constantes/Constantes";
import {apresentarModal} from "./ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";
import {
  ATUALIZAR_DADOS_PESSOAIS_DO_PRATICANTE_PUT, BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_DO_PRATICANTE_GET,
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
      if (response.status === HttpStatusCode.Created)
        apresentarModal("Aviso", `Cadastro do praticante ${dados.nomeCompleto} finalizado com sucesso!`, setDisplayModal, setTituloModal, setConteudoModal)
        limparLocalStorage()
    })
    .catch((error) => {
      apresentarModal("Aviso", "Erro ao finalizar cadastro do praticante!", setDisplayModal, setTituloModal, setConteudoModal)
    })
}

const buscarDadosPessoisDoPraticante = async (setDisplayModal, setTituloModal, setConteudoModal) => {
  await axios.get(BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_DO_PRATICANTE_GET,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login.token}`
      }, params: {
        id: idPraticanteSalvo
      }

    })
    .then((response) => {
        if (response.status === HttpStatusCode.Ok) {
          dados = {...response.data}
          dados = {...dados, finalizado: true}
          atualizarDadosPessoaisDoPraticante(setDisplayModal, setTituloModal, setConteudoModal)
        }

      }
    )
    .catch((error) => {
      apresentarModal("Aviso",error.response.data,setDisplayModal, setTituloModal, setConteudoModal)
    })

}

const verificarSeEstaFinalizado = (setDisplayModal, setTituloModal, setConteudoModal) => {
  let contador = 0;
  variaveisDeCadastroLocalStorage.map((variavel) => {
    if (localStorage.getItem(variavel) === CADASTRADO) {
      contador++
    }
  })
  if (contador === variaveisDeCadastroLocalStorage.length) {
    buscarDadosPessoisDoPraticante(setDisplayModal, setTituloModal, setConteudoModal)
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
