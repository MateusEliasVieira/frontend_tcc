import {apresentarModal} from "./ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";
import {STATUS_CADASTRO_GET} from "../endpoints/praticante/statusCadastro/Endpoints";

const login = JSON.parse(localStorage.getItem('login'));

const verificarSeEstaFinalizado = async (idPraticante) => {

  await axios.get(STATUS_CADASTRO_GET, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${login.token}`
    },
    params: {
      id: idPraticante
    }
  })
    .then((response) => {
      console.log(response.data)
      if (response.status === HttpStatusCode.Ok) {
        if (response.data.status === true) {
          localStorage.setItem("idPraticante", null)
          return true
        } else {
          return false
        }
      }
    })
    .catch((error) => {
      console.log(error.response.data)
      return false
    })
}


export {
  verificarSeEstaFinalizado
}
