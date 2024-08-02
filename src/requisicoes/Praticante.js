import axios, {HttpStatusCode} from "axios";
import {
  SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST
} from "../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import {CADASTRADO} from "../constantes/Constantes";
import {limparLocalStorage, verificarSeEstaFinalizado} from "../utilidades/VerificadorDeLocalStorage";
import {mensagemParaErro, mensagemParaListaDeErros} from "../utilidades/ManipuladorDeRespostasDasRequisicoes";
import {apresentarModal} from "../utilidades/ManipuladorDeModal";

const login = JSON.parse(localStorage.getItem('login'));
const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");

const salvarDadosPessoais = async (formularioDeDados, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal) => {
  limparLocalStorage()
  try {
    const response = await axios.post(
      SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST,
      JSON.stringify({...formularioDeDados}),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        }
      }
    );
    if (response.status === HttpStatusCode.Created) {
      localStorage.setItem('idPraticanteSalvo', response.data.praticante.idPraticante);
      localStorage.setItem("dadosPessoaisCadastrado", CADASTRADO)
      setDesabilitar("disabled")
     apresentarModal("Aviso",response.data.mensagem,setDisplayModal, setTituloModal, setConteudoModal);
    } else {
     apresentarModal("Aviso",'Não foi possível cadastrar os dados do praticante!',setDisplayModal, setTituloModal, setConteudoModal);
    }
  } catch (error) {
    console.log(error)
    const resposta = error.response
    if (resposta.data !== undefined) {
      if (resposta.data.lista !== undefined) {
        var lista = ""
        resposta.data.lista.map((item) => {
          lista += item.mensagem + "\n"
        })
        mensagemParaListaDeErros(lista, setDisplayModal, setTituloModal, setConteudoModal)
      } else if (resposta.data.mensagem !== undefined) {
        if (resposta.data.redirect) {
         apresentarModal("Aviso",resposta.data.mensagem,setDisplayModal, setTituloModal, setConteudoModal)
          setTimeout(() => {
            window.location = resposta.data.redirect
          }, 5000)
        } else {
          mensagemParaErro(resposta.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal)
        }
      } else if (resposta.data.titulo !== undefined) {
        mensagemParaErro(resposta.data.titulo, setDisplayModal, setTituloModal, setConteudoModal)
      } else {
        mensagemParaErro("Erro interno do sistema!", setDisplayModal, setTituloModal, setConteudoModal)
      }
    } else {
      mensagemParaErro("Erro interno do sistema!", setDisplayModal, setTituloModal, setConteudoModal)
    }
  }
};

const salvar = async (formularioDeDados, endpoint, chaveLocalStorage, setDesabilitar,setDisplayModal, setTituloModal, setConteudoModal) => {
  if (idPraticanteSalvo) {
    try {
      const resposta= await axios.post(
        endpoint,
        JSON.stringify({...formularioDeDados}),
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${login.token}`
          },
        }
      );
      localStorage.setItem(chaveLocalStorage, CADASTRADO)
      setDesabilitar("disabled")
     apresentarModal("Aviso",resposta.data.mensagem,setDisplayModal, setTituloModal, setConteudoModal);
      verificarSeEstaFinalizado()
    } catch (error) {
      const resposta = error.response
      if (resposta.data !== undefined) {
        if (resposta.data.lista !== undefined) {
          var lista = ""
          resposta.data.lista.map((item) => {
            lista += item.mensagem + "\n"
          })
         apresentarModal("Aviso",lista)
        } else if (resposta.data.mensagem !== undefined) {
          if (resposta.data.redirect) {
           apresentarModal("Aviso",resposta.data.mensagem,setDisplayModal, setTituloModal, setConteudoModal)
            setTimeout(() => {
              window.location = resposta.data.redirect
            }, 5000)
          } else {
           apresentarModal("Aviso",resposta.data.mensagem,setDisplayModal, setTituloModal, setConteudoModal)
          }
        } else if (resposta.data.titulo !== undefined) {
         mensagemParaErro(resposta.data.titulo,setDisplayModal, setTituloModal, setConteudoModal)
        } else {
          mensagemParaErro("Erro interno do sistema!",setDisplayModal, setTituloModal, setConteudoModal)
        }
      } else {
       mensagemParaErro("Erro interno do sistema!",setDisplayModal, setTituloModal, setConteudoModal)
      }
    }

  } else {
    apresentarModal("Aviso","Cadastre os Dados Pessoais do Praticante primeiro!",setDisplayModal, setTituloModal, setConteudoModal);
  }
};

const buscarDadosPraticante = async (endpoint, setDados, idPraticante) => {
  axios.get(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${login.token}`
    },
    params: {
      id: idPraticante
    }
  })
    .then((response) => {
      setDados(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

export {salvarDadosPessoais, salvar, buscarDadosPraticante}
