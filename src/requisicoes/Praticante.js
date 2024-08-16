import axios, {HttpStatusCode} from "axios";
import {
  ATUALIZAR_DADOS_PESSOAIS_DO_PRATICANTE_PUT,
  SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST
} from "../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import {CADASTRADO} from "../constantes/Constantes";
import {limparLocalStorage, verificarSeEstaFinalizado} from "../utilidades/VerificadorDeLocalStorage";
import {apresentarModal} from "../utilidades/ManipuladorDeModal";
import {camposPreenchidos} from "../utilidades/VerificadorDeCampos";
import {
  aplicarValorParaCamposDaAPI_NAO_INFORMADO,
  aplicarValorParaCampoVazioCasoExista
} from "../utilidades/ValidadorDeCampos";

const login = JSON.parse(localStorage.getItem('login'));

const salvarDadosPessoais = async (formularioDeDados, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal) => {
  if (camposPreenchidos(formularioDeDados)) {
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
      } else {
        apresentarModal("Aviso", 'Não foi possível cadastrar os dados do praticante!', setDisplayModal, setTituloModal, setConteudoModal);
      }
    } catch (error) {
      // Verifique se error.response e error.response.data existem
      const resposta = error.response;

      if (resposta && resposta.data) {
        if (resposta.data.lista) {
          const lista = resposta.data.lista.map((item) => item.mensagem).join("\n");
          apresentarModal("Aviso", lista, setDisplayModal, setTituloModal, setConteudoModal);
        } else if (resposta.data.mensagem) {
          if (resposta.data.redirect) {
            apresentarModal("Aviso", resposta.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal);
            setTimeout(() => {
              window.location = resposta.data.redirect;
            }, 5000);
          } else {
            apresentarModal("Aviso", resposta.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal);
          }
        } else if (resposta.data.titulo) {
          apresentarModal("Aviso", resposta.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
        } else {
          apresentarModal("Aviso", "Erro interno do sistema!", setDisplayModal, setTituloModal, setConteudoModal);
        }
      } else {
        apresentarModal("Aviso", "Erro interno do sistema!", setDisplayModal, setTituloModal, setConteudoModal);
      }
    }
  } else {
    apresentarModal("Aviso", "Informe os dados pessoais do praticante!", setDisplayModal, setTituloModal, setConteudoModal);
  }
};

const atualizarDadosPessoais = async (formularioDeDados, setDisplayModal, setTituloModal, setConteudoModal) => {
  if (camposPreenchidos(formularioDeDados)) {
    try {
      const response = await axios.put(
        ATUALIZAR_DADOS_PESSOAIS_DO_PRATICANTE_PUT,
        JSON.stringify({...formularioDeDados}),
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${login.token}`
          }
        }
      );
      if (response.status === HttpStatusCode.Created) {
        apresentarModal("Aviso", "Dados do praticante atualizados com sucesso!", setDisplayModal, setTituloModal, setConteudoModal)
      } else {
        apresentarModal("Aviso", 'Não foi possível atualizar os dados do praticante!', setDisplayModal, setTituloModal, setConteudoModal);
      }
    } catch (error) {
      // Verifique se error.response e error.response.data existem
      const resposta = error.response;

      if (resposta && resposta.data) {
        if (resposta.data.lista) {
          const lista = resposta.data.lista.map((item) => item.mensagem).join("\n");
          apresentarModal("Aviso", lista, setDisplayModal, setTituloModal, setConteudoModal);
        } else if (resposta.data.mensagem) {
          if (resposta.data.redirect) {
            apresentarModal("Aviso", resposta.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal);
            setTimeout(() => {
              window.location = resposta.data.redirect;
            }, 5000);
          } else {
            apresentarModal("Aviso", resposta.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal);
          }
        } else if (resposta.data.titulo) {
          apresentarModal("Aviso", resposta.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
        } else {
          apresentarModal("Aviso", "Erro interno do sistema!", setDisplayModal, setTituloModal, setConteudoModal);
        }
      } else {
        apresentarModal("Aviso", "Erro interno do sistema!", setDisplayModal, setTituloModal, setConteudoModal);
      }
    }
  } else {
    apresentarModal("Aviso", "Informe os dados pessoais do praticante!", setDisplayModal, setTituloModal, setConteudoModal);
  }
};

const salvar = async (formularioDeDados, endpoint, chaveLocalStorage, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal) => {

  const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");

  if (idPraticanteSalvo) {

    formularioDeDados = aplicarValorParaCampoVazioCasoExista(formularioDeDados);

    await axios.post(
      endpoint,
      JSON.stringify({...formularioDeDados}),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
      }
    )
      .then((response) => {
        if (response.status === HttpStatusCode.Created) {
          localStorage.setItem(chaveLocalStorage, CADASTRADO);
          setDesabilitar("disabled");
          verificarSeEstaFinalizado(setDisplayModal, setTituloModal, setConteudoModal);
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.data) {
            if (error.response.data.lista) {
              const lista = error.response.data.lista.map((item) => item.titulo).join("\n");
              apresentarModal("Aviso", lista, setDisplayModal, setTituloModal, setConteudoModal);
            } else if (error.response.data.titulo) {
              if (error.response.data.redirect) {
                apresentarModal("Aviso", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
                setTimeout(() => {
                  window.location = error.response.data.redirect;
                }, 5000);
              } else {
                apresentarModal("Aviso", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
              }
            } else {
              apresentarModal("Aviso", "Erro interno do sistema!", setDisplayModal, setTituloModal, setConteudoModal);
            }
          } else {
            apresentarModal("Aviso", "Erro interno do sistema! Resposta sem dados.", setDisplayModal, setTituloModal, setConteudoModal);
          }
        } else {
          apresentarModal("Aviso", "Erro interno do sistema! Nenhuma resposta recebida.", setDisplayModal, setTituloModal, setConteudoModal);
        }
      })

  } else {
    apresentarModal("Aviso", "Cadastre os Dados Pessoais do Praticante primeiro!", setDisplayModal, setTituloModal, setConteudoModal);
  }
};
const atualizar = async (formularioDeDados, endpoint, setDisplayModal, setTituloModal, setConteudoModal) => {

  formularioDeDados = aplicarValorParaCampoVazioCasoExista(formularioDeDados);

  await axios.put(
    endpoint,
    JSON.stringify({...formularioDeDados}),
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login.token}`
      },
    }
  )
    .then((response) => {
      if (response.status === HttpStatusCode.Created) {
        apresentarModal("Aviso", "Dados do praticante atualizados com sucesso!", setDisplayModal, setTituloModal, setConteudoModal)
      } else {
        apresentarModal("Aviso", 'Não foi possível atualizar os dados do praticante!', setDisplayModal, setTituloModal, setConteudoModal);
      }
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.data) {
          if (error.response.data.lista) {
            const lista = error.response.data.lista.map((item) => item.titulo).join("\n");
            apresentarModal("Aviso", lista, setDisplayModal, setTituloModal, setConteudoModal);
          } else if (error.response.data.titulo) {
            if (error.response.data.redirect) {
              apresentarModal("Aviso", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
              setTimeout(() => {
                window.location = error.response.data.redirect;
              }, 5000);
            } else {
              apresentarModal("Aviso", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
            }
          } else {
            apresentarModal("Aviso", "Erro interno do sistema!", setDisplayModal, setTituloModal, setConteudoModal);
          }
        } else {
          apresentarModal("Aviso", "Erro interno do sistema! Resposta sem dados.", setDisplayModal, setTituloModal, setConteudoModal);
        }
      } else {
        apresentarModal("Aviso", "Erro interno do sistema! Nenhuma resposta recebida.", setDisplayModal, setTituloModal, setConteudoModal);
      }
    })

};


const buscarDadosPraticante = async (endpoint, setDados, idPraticante, setDisplayModal, setTituloModal, setConteudoModal) => {

  await axios.get(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${login.token}`
    },
    params: {
      id: idPraticante
    }
  })
    .then((response) => {
      setDados(aplicarValorParaCamposDaAPI_NAO_INFORMADO(response.data));
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.data) {
          if (error.response.data.lista) {
            const lista = error.response.data.lista.map((item) => item.titulo).join("\n");
            apresentarModal("Aviso", lista, setDisplayModal, setTituloModal, setConteudoModal);
          } else if (error.response.data.titulo) {
            if (error.response.data.urlRedirecionamento) {
              apresentarModal("Aviso", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
              setTimeout(() => {
                window.location = error.response.data.redirect;
              }, 5000);
            } else {
              apresentarModal("Aviso", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
            }
          } else {
            apresentarModal("Aviso", "Erro interno do sistema!", setDisplayModal, setTituloModal, setConteudoModal);
          }
        } else {
          apresentarModal("Aviso", "Erro interno do sistema! Resposta sem dados.", setDisplayModal, setTituloModal, setConteudoModal);
        }
      } else {
        apresentarModal("Aviso", "Erro interno do sistema! Nenhuma resposta recebida.", setDisplayModal, setTituloModal, setConteudoModal);
      }
    })

}

export {
  salvar,
  atualizar,
  salvarDadosPessoais,
  buscarDadosPraticante,
  atualizarDadosPessoais
}
