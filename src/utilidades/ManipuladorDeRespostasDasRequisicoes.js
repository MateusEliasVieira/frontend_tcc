import {apresentarModal} from "./ManipuladorDeModal";

const mensagemParaErro = (error, setDisplayModal, setTituloModal, setConteudoModal) => {
  console.log(error)
  if (error.response.data.titulo) {
    apresentarModal("Atenção", error.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
  } else if (error.response.data.mensagem) {
    if (error.response.data.redirecionar) {
      window.location = error.response.data.redirecionar
    }else{
      apresentarModal("Atenção", error.response.data.mensagem, setDisplayModal, setTituloModal, setConteudoModal);
    }
  }
  else if(error.response.data.urlRedirecionamento){
    window.location = error.response.data.urlRedirecionamento
  }
  else {
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

export {
  mensagemParaErro,
  mensagemParaListaDeErros
}
