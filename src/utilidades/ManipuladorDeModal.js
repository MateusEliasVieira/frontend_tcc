const apresentarModal = (titulo, conteudo, setDisplayModal, setTituloModal, setConteudoModal) => {
  setDisplayModal(true);
  setTituloModal(titulo);
  setConteudoModal(conteudo);
};


const esconderModal = (setDisplayModal, setTituloModal, setConteudoModal) => {
  setDisplayModal(false);
  setTituloModal("");
  setConteudoModal(""); // Aqui está sendo chamado como uma função
};

const apresentarModalDeOpcoes = (titulo, conteudo, setDisplayModalOpcoes, setTituloModalOpcoes, setConteudoModalOpcoes) => {
  setDisplayModalOpcoes(true);
  setTituloModalOpcoes(titulo);
  setConteudoModalOpcoes(conteudo);
};

const esconderModalDeOpcoes = (setDisplayModalOpcoes, setTituloModalOpcoes, setConteudoModalOpcoes, setIdParaDeletar) => {
  setDisplayModalOpcoes(false);
  setTituloModalOpcoes("");
  setConteudoModalOpcoes("");
  setIdParaDeletar(null);
};

const confirmar = (idParaDeletar, deletar, esconderModalDeOpcoes) => {
  if (idParaDeletar !== null) {
    deletar(idParaDeletar);
    esconderModalDeOpcoes();
  }
};

export {
  apresentarModal, esconderModal,
  apresentarModalDeOpcoes, esconderModalDeOpcoes,
  confirmar
};
