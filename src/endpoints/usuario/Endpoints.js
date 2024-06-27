const URL = 'http://localhost:8080/'

const LOGIN_POST = URL  + 'login/logar'
const SALVAR_NOVO_USUARIO_POST = URL + 'usuario/salvar-novo-usuario'
const ATUALIZAR_USUARIO_PUT = URL + 'usuario/atualizar-usuario'
const PESQUISAR_USUARIO_GET = URL + 'usuario/buscar-usuario-por-nome'
const PESQUISAR_USUARIO_POR_ID_GET = URL + 'usuario/buscar-usuario-por-id'
const DELETAR_USUARIO_DELETE = URL + 'usuario/deletar-usuario'

export {
  SALVAR_NOVO_USUARIO_POST,
  PESQUISAR_USUARIO_GET,
  PESQUISAR_USUARIO_POR_ID_GET,
  ATUALIZAR_USUARIO_PUT,
  DELETAR_USUARIO_DELETE,
  LOGIN_POST
}
