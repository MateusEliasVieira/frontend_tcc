import {camposPreenchidos} from "../utilidades/VerificadorDeCampos";
import axios, {HttpStatusCode} from "axios";
import {SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST} from "../endpoints/praticante/fichaCadastroAdmissional/Endpoints";

var login = JSON.parse(localStorage.getItem('login'));
var idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");

const salvarDadosPessoais = async (formularioDeDados) => {
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
        localStorage.setItem('idPraticanteSalvo', response.data.praticante.idPraticante);
        alert('Dados salvos com sucesso');
      } else {
        alert('Não foi possível cadastrar os dados do praticante!');
      }
    } catch (error) {
      if (error.response.data.titulo !== undefined) {
        alert(error.response.data.titulo)
        //apresentarModal("Atenção", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
      }
      if (error.response.data.lista !== undefined) {
        let lista = "";
        error.response.data.lista.forEach((item) => {
          lista += `<strong>*</strong> ${item.mensagem}` + "<br/>";
        });
        alert(lista)
        //apresentarModal("Atenção", lista, setDisplayModal, setTituloModal, setConteudoModal);
      }
    }
  } else {
    alert('Preencha todos os campos vazios!');
  }
};

const salvar = async (formularioDeDados, endpoint) => {
  if (idPraticanteSalvo) {
    alert("Id "+idPraticanteSalvo)
    if (camposPreenchidos(formularioDeDados)) {
      try {
        const response = await axios.post(
          endpoint,
          JSON.stringify({...formularioDeDados}),
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${login.token}`
            },
          }
        );
        alert('Dados salvos com sucesso');
      } catch (error) {
        console.log('Erro ao salvar os dados:', error);
        alert("nao salvou")
      }
    } else {
      alert("Preencha todos os campos vazios!");
    }
  } else {
    alert("Cadastre os Dados Pessoais do Praticante primeiro!");
  }
};

export {salvarDadosPessoais, salvar}
