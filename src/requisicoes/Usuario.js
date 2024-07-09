import {camposPreenchidos} from "../utilidades/VerificadorDeCampos";
import axios from "axios";
import {apresentarModal, esconderModalDeOpcoes} from "../utilidades/ManipuladorDeModal";
import {
  ATUALIZAR_USUARIO_PUT,
  DELETAR_USUARIO_DELETE,
  PESQUISAR_USUARIO_GET,
  PESQUISAR_USUARIO_POR_ID_GET
} from "../endpoints/usuario/Endpoints";
import {resolve} from "chart.js/helpers";

var login = JSON.parse(localStorage.getItem("login"));
const mensagemParaErro = (error, setDisplayModal, setTituloModal, setConteudoModal) => {
  if (error.response.data.titulo) {
    apresentarModal("Atenção", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
  } else if (error.response.data.mensagem) {
    apresentarModal("Atenção", error.response.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal);
    setTimeout(() => {
      window.location = "/#/login"
    }, 5000)
  } else {
    apresentarModal("Atenção", "Erro interno do sistema!", setDisplayModal, setTituloModal, setConteudoModal);
  }
}

const mensagemParaListaDeErros = (error, setDisplayModal, setTituloModal, setConteudoModal) => {
  if (error.response.data.titulo !== undefined) {
    apresentarModal("Atenção", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
  }
  if (error.response.data.lista !== undefined) {
    let lista = "";
    error.response.data.lista.forEach((item) => {
      lista += `<strong>*</strong> ${item.titulo}` + "<br/>";
    });
    apresentarModal("Atenção", lista, setDisplayModal, setTituloModal, setConteudoModal);
  }
}

const salvar = async (formularioDeDados, endpoint, setDisplayModal, setTituloModal, setConteudoModal) => {
  if (camposPreenchidos(formularioDeDados)) {
    try {
      const response = await axios.post(endpoint, JSON.stringify({...formularioDeDados}), {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
      });
      apresentarModal("Aviso", response.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal);
    } catch (error) {
      console.log("Erro = "+error.response.data.mensagem)
      mensagemParaListaDeErros(error, setDisplayModal, setTituloModal, setConteudoModal)
      mensagemParaErro(error, setDisplayModal, setTituloModal, setConteudoModal)
    }
  } else {
    console.log("Preencha todos os campos")
    apresentarModal("Atenção", "Por favor, preencha todos os campos!", setDisplayModal, setTituloModal, setConteudoModal);
  }
};
const atualizarDadosDoUsuario = async (formularioDeDados, setDisplayModal, setTituloModal, setConteudoModal) => {
  if (camposPreenchidos(formularioDeDados)) {
    const dados = {
      ...formularioDeDados,
    };
    try {
      const response = await axios.put(
        ATUALIZAR_USUARIO_PUT,
        JSON.stringify(dados),
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${login.token}`
          },
        }
      );
      apresentarModal("Resposta", response.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal);
    } catch (error) {
      mensagemParaListaDeErros(error, setDisplayModal, setTituloModal, setConteudoModal)
      mensagemParaErro(error, setDisplayModal, setTituloModal, setConteudoModal)
    }
  } else {
    apresentarModal("Atenção", "Por favor, preencha todos os campos obrigatórios!", setDisplayModal, setTituloModal, setConteudoModal);
  }
};

const deletar = async (idParaDeletar, setList, setDisplayModal, setTituloModal, setConteudoModal) => {
  if (idParaDeletar !== null) {
    try {
      const response = await axios.delete(DELETAR_USUARIO_DELETE, {
        params: {id: idParaDeletar},
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
      });
      setList(prevList => prevList.filter(item => item.idUsuario !== idParaDeletar));
      apresentarModal("Aviso", "Usuário deletado com sucesso!", setDisplayModal, setTituloModal, setConteudoModal);
    } catch (error) {
      mensagemParaErro(error, setDisplayModal, setTituloModal, setConteudoModal)
    }
  }
}

const buscarTodosUsuarios = async (setList, setDisplayModal, setTituloModal, setConteudoModal) => {
  try {
    const response = await axios.get(PESQUISAR_USUARIO_GET, {
      params: {nome: ""},
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login.token}`
      },
    });
    setList(response.data);
  } catch (error) {
    mensagemParaErro(error, setDisplayModal, setTituloModal, setConteudoModal)
  }
};
const buscarUsuarioPorId = async (getIdUrl, setUsuarioExiste, setFormularioDeDados, setFotoAtual) => {
  const idUrl = getIdUrl();
  if (idUrl !== null && idUrl !== "") {
    try {
      const response = await axios.get(PESQUISAR_USUARIO_POR_ID_GET, {
        params: {
          id: idUrl,
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
      });
      if (response.status === 200) {
        setUsuarioExiste(true);
        setFormularioDeDados(response.data);
        setFotoAtual(response.data.foto);
      } else {
        setUsuarioExiste(false);
      }
    } catch (error) {
      setUsuarioExiste(false);
    }
  } else {
    setUsuarioExiste(false);
  }
}
const pesquisar = async (formData, setList, setDisplayModal, setTituloModal, setConteudoModal) => {
  try {
    const response = await axios.get(PESQUISAR_USUARIO_GET, {
      params: {nome: formData.nome},
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login.token}`
      },
    });
    setList(response.data);
  } catch (error) {
    mensagemParaErro(error, setDisplayModal, setTituloModal, setConteudoModal)
  }
};


export {salvar, deletar, pesquisar, buscarTodosUsuarios, buscarUsuarioPorId, atualizarDadosDoUsuario};
