import {camposPreenchidos} from "../utilidades/VerificadorDeCampos";
import axios, {HttpStatusCode} from "axios";
import {SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST} from "../endpoints/praticante/fichaCadastroAdmissional/Endpoints";
import {CADASTRADO} from "../constantes/Constantes";

var login = JSON.parse(localStorage.getItem('login'));
var idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");

const salvarDadosPessoais = async (formularioDeDados,setDesabilitar) => {
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
        localStorage.setItem("dadosPessoaisCadastrado",CADASTRADO)
        setDesabilitar("disabled")
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

const salvar = async (formularioDeDados, endpoint,chaveLocalStorage,setDesabilitar) => {
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
        localStorage.setItem(chaveLocalStorage,CADASTRADO)
        setDesabilitar("disabled")
        alert('Dados salvos com sucesso');
      } catch (error) {
        const resposta = error.response;
        if(resposta.data){
          if(resposta.data.lista){
            var lista = ""
            resposta.data.lista.map((item)=>{
              lista += item.mensagem + "\n"
            })
            alert(lista)
          }else if(resposta.data.mensagem){
            alert(resposta.data.mensagem)
          }else if(resposta.data.titulo){
            alert(resposta.data.titulo)
          }else{
            alert("Erro interno do sistema!")
          }
        }else{
          alert("Erro interno do sistema!")
        }
      }
    } else {
      alert("Preencha todos os campos vazios!");
    }
  } else {
    alert("Cadastre os Dados Pessoais do Praticante primeiro!");
  }
};

export {salvarDadosPessoais, salvar}
