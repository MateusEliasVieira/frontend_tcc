import {DOMINIO} from '../../URL/URL'

const LOGIN_POST = DOMINIO  + 'login/logar'
const SALVAR_NOVO_USUARIO_POST = DOMINIO + 'usuario/salvar-novo-usuario'
const ATUALIZAR_USUARIO_PUT = DOMINIO + 'usuario/atualizar-usuario'
const PESQUISAR_USUARIO_GET = DOMINIO + 'usuario/buscar-usuario-por-nome'
const PESQUISAR_USUARIO_POR_ID_GET = DOMINIO + 'usuario/buscar-usuario-por-id'
const DELETAR_USUARIO_DELETE = DOMINIO + 'usuario/deletar-usuario'

export {
  SALVAR_NOVO_USUARIO_POST,
  PESQUISAR_USUARIO_GET,
  PESQUISAR_USUARIO_POR_ID_GET,
  ATUALIZAR_USUARIO_PUT,
  DELETAR_USUARIO_DELETE,
  LOGIN_POST
}
