import {camposPreenchidos} from "../utilidades/VerificadorDeCampos";
import axios, {HttpStatusCode} from "axios";
import {SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST} from "../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
var login = JSON.parse(localStorage.getItem('login'));

const salvarDadosPessoais = async (formularioDeDados) => {
  console.log("Entrou aqui para salvar")
  console.log("Token = "+login.token)
  if (camposPreenchidos(formularioDeDados)) {
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
        console.log("Salvou")
        console.log(response.data)
        localStorage.setItem('idPraticanteSalvo', response.data.praticante.idPraticante);
        alert('Dados salvos com sucesso');
      } else {
        alert('Não foi possível cadastrar os dados do praticante!');
      }
    } catch (error) {
      console.log("Erro = "+error)
      // if (error.response.data.lista) {
      //   error.response.data.lista.forEach((item) => {
      //     alert(item.mensagem);
      //   });
      // } else {
      //   alert(error.response.data?.title || 'Erro desconhecido');
      // }
    }
  } else {
    alert('Preencha todos os campos vazios!');
  }
};

export {salvarDadosPessoais}
