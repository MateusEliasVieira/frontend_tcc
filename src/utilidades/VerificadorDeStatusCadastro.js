import {apresentarModal} from "./ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";
import {STATUS_CADASTRO_GET} from "../endpoints/praticante/statusCadastro/Endpoints";

const login = JSON.parse(localStorage.getItem('login'));

const verificarSeEstaFinalizado = (setDisplayModal, setTituloModal, setConteudoModal, idPraticante) => {

  axios.get(STATUS_CADASTRO_GET, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${login.token}`
    },
    params: {
      id: idPraticante
    }
  })
    .then((response) => {
      if (response.status === HttpStatusCode.Ok) {
        if (response.data.status === true) {
          apresentarModal("Aviso", "Cadastro finalizado com sucesso!", setDisplayModal, setTituloModal, setConteudoModal)
          return true
        } else {
          return false
        }
      }
    })
    .catch((error) => {
      return false
    })
}


export {
  verificarSeEstaFinalizado
}
