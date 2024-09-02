import axios, {HttpStatusCode} from "axios";
import {
  ATUALIZAR_DADOS_PESSOAIS_DO_PRATICANTE_PUT,
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET,
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_NOME_GET,
  SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST
} from "../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import {CADASTRADO} from "../constantes/Constantes";
import {verificarSeEstaFinalizado} from "../utilidades/VerificadorDeStatusCadastro";
import {apresentarModal} from "../utilidades/ManipuladorDeModal";
import {
  aplicarValorParaCamposDaAPI_NAO_INFORMADO,
  aplicarValorParaCampoVazioCasoExista
} from "../utilidades/ValidadorDeCampos";
import {DOMINIO} from "../URL/URL";
import {camposPreenchidosPraticante} from "../utilidades/VerificadorDeCamposPraticante";
import {ATUALIZAR_EVOLUCAO_DO_PRATICANTE_PUT} from "../endpoints/praticante/evolucao/Endpoint";

const login = JSON.parse(localStorage.getItem('login'));

const salvarDadosPessoais = async (formularioDeDados, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal) => {
  if (camposPreenchidosPraticante(formularioDeDados)) {
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
        localStorage.setItem('idPraticante', response.data.praticante.idPraticante);
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
            window.location = resposta.data.redirect;
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
  if (camposPreenchidosPraticante(formularioDeDados)) {
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
            window.location = resposta.data.redirect;
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

const salvar = async (formularioDeDados, endpoint, setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal) => {

  const idPraticante = localStorage.getItem("idPraticante");

  if (idPraticante) {

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
    ).then((response) => {
      if (response.status === HttpStatusCode.Created) {
        setDesabilitar("disabled");
        apresentarModal("Aviso", "Formulário cadastrado com sucesso!", setDisplayModal, setTituloModal, setConteudoModal)
        verificarSeEstaFinalizado(setDisplayModal, setTituloModal, setConteudoModal, idPraticante)
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
                window.location = error.response.data.redirect;
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
              window.location = error.response.data.redirect;
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
              window.location = error.response.data.redirect;
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

const buscarPraticantePorNome = (nome, setDados, setAtivar) => {
  setAtivar(true)
  axios.get(BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_NOME_GET, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${login.token}`
    },
    params: {
      nome: nome
    }
  })
    .then((response) => {
      setDados(response.data)
      setAtivar(false)
    })
    .catch((erro) => {
      console.log("Erro ao buscar praticante por nome!")
      setAtivar(false)
    })
}

const buscarPraticantePorID = (id, setDados, setAtivo) => {
  setAtivo(true)
  axios.get(BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${login.token}`
    },
    params: {
      id: id
    }
  })
    .then((response) => {
      setDados(response.data)
      setAtivo(false)
    })
    .catch((erro) => {
      console.log("Erro ao buscar praticante por id!")
      setAtivo(false)
    })
}

const buscarDadosPessoaisDosPraticantes = (setDados, setAtivar) => {
  axios.get(`${DOMINIO}praticante/dados-pessoais/buscar-dados-pessoais-dos-praticantes`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${login.token}`
    }
  })
    .then((response) => {
      setDados(response.data)
      setAtivar(false)
    })
    .catch((error) => {
      console.log(error)
      setAtivar(false)
    })
}


const atualizarEvolucao = (dados, setDisplayModal, setTituloModal, setConteudoModal) => {
  if (dados.data !== '') {
    if (dados.estavaPresente !== '') {
      if (dados.praticante.idPraticante) {
        axios.put(ATUALIZAR_EVOLUCAO_DO_PRATICANTE_PUT,
          JSON.stringify({...dados}),
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${login.token}`
            },
          })
          .then((response) => {
            if (response.status === HttpStatusCode.Created) {
              apresentarModal("Aviso", response.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal);
            }
          })
          .catch((error) => {
            if (error.response.data.lista) {
              let lista = "";
              let lista_erros = error.response.data.lista

              for (let i = 0; i < lista_erros.length; i++) {
                lista += `<strong>*</strong> ${lista_erros[i].mensagem}` + "<br/>"
              }

              apresentarModal("Atenção", lista, setDisplayModal, setTituloModal, setConteudoModal);
            } else if (error.response.data.titulo) {
              apresentarModal("Atenção", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
            } else if (error.response.data.mensagem) {
              if (error.response.data.redirecionar) {
                window.location = error.response.data.redirecionar
              } else {
                apresentarModal("Atenção", error.response.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal);
              }
            } else if (error.response.data.urlRedirecionamento) {
              window.location = error.response.data.urlRedirecionamento
            } else {
              apresentarModal("Atenção", "Erro interno do sistema!", setDisplayModal, setTituloModal, setConteudoModal);
            }
          })
      } else {
        apresentarModal("Aviso", "Erro ao atualizar evolução do praticante!", setDisplayModal, setTituloModal, setConteudoModal);
      }
    } else {
      apresentarModal("Aviso", "Informe se o praticante esteve presente ou não!", setDisplayModal, setTituloModal, setConteudoModal);

    }
  } else {
    apresentarModal("Aviso", "Informe a data para prosseguir com a atualização da evolução!", setDisplayModal, setTituloModal, setConteudoModal);
  }
}

export {
  salvar,
  atualizar,
  salvarDadosPessoais,
  buscarDadosPraticante,
  atualizarDadosPessoais,
  buscarPraticantePorNome,
  buscarPraticantePorID,
  buscarDadosPessoaisDosPraticantes,
  atualizarEvolucao
}
