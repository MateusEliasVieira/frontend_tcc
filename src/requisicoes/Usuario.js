import {camposPreenchidos} from "../utilidades/VerificadorDeCampos";
import axios from "axios";
import {apresentarModal} from "../utilidades/ManipuladorDeModal";
import {DELETAR_USUARIO_DELETE, PESQUISAR_USUARIO_GET} from "../endpoints/usuario/Endpoints";

var login = JSON.parse(localStorage.getItem("login"));

const salvar = async (formularioDeDados, endpoint, setDisplayModal, setClassModal, setTituloModal, setConteudoModal) => {
  if (camposPreenchidos(formularioDeDados)) {
    try {
      const response = await axios.post(endpoint, JSON.stringify({...formularioDeDados}), {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
      });
      apresentarModal("Aviso", response.data.mensagem, setDisplayModal, setClassModal, setTituloModal, setConteudoModal);
    } catch (error) {
      if (error.response.data.title !== undefined) {
        apresentarModal("Atenção", error.response.data.title, setDisplayModal, setClassModal, setTituloModal, setConteudoModal);
      }
      if (error.response.data.lista !== undefined) {
        let lista = "";
        error.response.data.lista.forEach((item) => {
          lista += `<strong>*</strong> ${item.mensagem}` + "<br/>";
        });
        apresentarModal("Atenção", lista, setDisplayModal, setClassModal, setTituloModal, setConteudoModal);
      }
    }
  } else {
    apresentarModal("Atenção", "Por favor, preencha todos os campos!", setDisplayModal, setClassModal, setTituloModal, setConteudoModal);
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
      apresentarModal("Atenção", error.response.data.title, setDisplayModal, setTituloModal, setConteudoModal);
    }
  } else {
    apresentarModal("Atenção", "O id do usuário está nulo!", setDisplayModal, setTituloModal, setConteudoModal);
  }
};
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
    apresentarModal("Atenção", error.response.data.title, setDisplayModal, setTituloModal, setConteudoModal);
  }
};

export {salvar, deletar, pesquisar};
