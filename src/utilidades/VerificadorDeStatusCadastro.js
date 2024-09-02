import axios, { HttpStatusCode } from "axios";
import { STATUS_CADASTRO_GET } from "../endpoints/praticante/statusCadastro/Endpoints";

const login = JSON.parse(localStorage.getItem('login'));

const verificarSeEstaFinalizado = async (idPraticante) => {
  try {
    const response = await axios.get(STATUS_CADASTRO_GET, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login.token}`
      },
      params: {
        id: idPraticante
      }
    });

    if (response.status === HttpStatusCode.Ok) {
      console.log(response.data)
      return response.data;
    } else {
      return { finalizados: 0, status: false, total: 0 };
    }
  } catch (error) {
    console.log(error.response ? error.response.data : error.message);
    return { finalizados: 0, status: false, total: 0 };
  }
};

export {
  verificarSeEstaFinalizado
}
