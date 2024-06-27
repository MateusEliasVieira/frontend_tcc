const apresentarModal = (titulo, conteudo, setDisplayModal, setTituloModal, setConteudoModal) => {
  setDisplayModal("block");
  setTituloModal(titulo);
  setConteudoModal(conteudo);
};

const esconderModal = (setDisplayModal, setTituloModal, setConteudoModal) => {
  setDisplayModal("none");
  setTituloModal("");
  setConteudoModal("");
};

const apresentarModalDeOpcoes = (titulo, conteudo, setDisplayModalOpcoes, setTituloModalOpcoes, setConteudoModalOpcoes) => {
  setDisplayModalOpcoes("block");
  setTituloModalOpcoes(titulo);
  setConteudoModalOpcoes(conteudo);
};

const esconderModalDeOpcoes = (setDisplayModalOpcoes, setTituloModalOpcoes, setConteudoModalOpcoes) => {
  setDisplayModalOpcoes("none");
  setTituloModalOpcoes("");
  setConteudoModalOpcoes("");
};

const confirmar = (idParaDeletar, deletar, esconderModalDeOpcoes,setDisplayModalOpcoes, setTituloModalOpcoes, setConteudoModalOpcoes) => {
  if (idParaDeletar !== null) {
    deletar(idParaDeletar);
    esconderModalDeOpcoes(setDisplayModalOpcoes, setTituloModalOpcoes, setConteudoModalOpcoes);
  }
};

export {
  apresentarModal, esconderModal,
  apresentarModalDeOpcoes, esconderModalDeOpcoes,
  confirmar
};
