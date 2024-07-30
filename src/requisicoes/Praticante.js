import axios, {HttpStatusCode} from "axios";
import {
  SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST
} from "../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import {CADASTRADO} from "../constantes/Constantes";
import {limparLocalStorage, verificarSeEstaFinalizado} from "../utilidades/VerificadorDeLocalStorage";
import {mensagemParaErro, mensagemParaListaDeErros} from "../utilidades/ManipuladorDeRespostasDasRequisicoes";

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
      alert('Dados salvos com sucesso');
    } else {
      alert('Não foi possível cadastrar os dados do praticante!');
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
          alert(resposta.data.mensagem)
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

const salvar = async (formularioDeDados, endpoint, chaveLocalStorage, setDesabilitar) => {
  if (idPraticanteSalvo) {
    try {
      await axios.post(
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
      alert('Dados salvos com sucesso');
      verificarSeEstaFinalizado()
    } catch (error) {
      console.log(error)
      const resposta = error.response
      if (resposta.data !== undefined) {
        if (resposta.data.lista !== undefined) {
          var lista = ""
          resposta.data.lista.map((item) => {
            lista += item.mensagem + "\n"
          })
          alert(lista)
        } else if (resposta.data.mensagem !== undefined) {
          if (resposta.data.redirect) {
            alert(resposta.data.mensagem)
            setTimeout(() => {
              window.location = resposta.data.redirect
            }, 5000)
          } else {
            alert(resposta.data.mensagem)
          }
        } else if (resposta.data.titulo !== undefined) {
          alert(resposta.data.titulo)
        } else {
          alert("Erro interno do sistema!")
        }
      } else {
        alert("Erro interno do sistema!")
      }
    }

  } else {
    alert("Cadastre os Dados Pessoais do Praticante primeiro!");
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
