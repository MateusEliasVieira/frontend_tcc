const apresentarModal = (title, message) => {
  setDisplayModal("block")
  setClassModal("modal fade show")
  setTituloModal(title)
  setConteudoModal(message)
}
const esconderModal = () => {
  setDisplayModal("none")
  setClassModal("modal fade")
  setTituloModal("")
  setConteudoModal("")
}
const apresentarModalDeOpcoes = (title, message, id) => {
  setDisplayModalOpcoes(true);
  setTituloModalOpcoes(title);
  setConteudoModalOpcoes(message);
  setIdParaDeletar(id);
}
const esconderModalDeOpcoes = () => {
  setDisplayModalOpcoes(false);
  setTituloModalOpcoes("");
  setConteudoModalOpcoes("");
  setIdParaDeletar(null);
}
const confirmar = () => {
  if (idParaDeletar !== null) {
    deletar(idParaDeletar);
    esconderModalDeOpcoes();
  }
}

export {
  apresentarModal, esconderModal,
  apresentarModalDeOpcoes, esconderModalDeOpcoes,
  confirmar
}
