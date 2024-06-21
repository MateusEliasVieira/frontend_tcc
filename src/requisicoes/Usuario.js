import {camposPreenchidos} from "../utilidades/VerificadorDeCampos";
import axios from "axios";
import {apresentarModal} from "../utilidades/ManipuladorDeModal";

var login = JSON.stringify(localStorage.getItem("login"))

const salvar = async (formularioDeDados,endpoint) => {
  if (camposPreenchidos(formularioDeDados)) {
    try {
      const response = await axios.post(endpoint,JSON.stringify(...formularioDeDados),
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${login.token}`
          },
        }
      );
      apresentarModal("Resposta", response.data.mensagem)
    } catch (error) {
      // Caso seja apenas um erro
      if (error.response.data.title !== undefined) {
        apresentarModal("Atenção", error.response.data.title)
      }
      // Caso seja uma lista de erros
      if (error.response.data.lista !== undefined) {
        // Há lista de erros
        let lista = ""
        error.response.data.lista.forEach((item) => {
          lista += `Campo ${item.nomeCampo}, ${item.mensagem}` + "\n"
        })
        apresentarModal("Atenção", lista)
      }
    }
  } else {
    // Tem algum campo obrigatório não preenchido
    apresentarModal("Atenção", "Por favor, preencha todos os campos!")
  }
};

export {salvar}
