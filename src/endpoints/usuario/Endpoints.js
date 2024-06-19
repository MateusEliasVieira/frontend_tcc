const URL = 'http://localhost:8080/'

const LOGIN__POST = URL  + 'login/logar'
const SALVAR_NOVO_FUNCIONARIO__POST = URL + 'usuario/salvar-novo-usuario'
const ATUALIZAR_FUNCIONARIO__PUT = URL + 'usuario/atualizar-usuario'
const PESQUISAR_FUNCIONARIO__GET = URL + 'usuario/buscar-usuario-por-nome'
const PESQUISAR_FUNCIONARIO_POR_ID__GET = URL + 'usuario/buscar-usuario-por-id'
const DELETAR_FUNCIONARIO__DELETE = URL + 'usuario/deletar-usuario'

export {
  SALVAR_NOVO_FUNCIONARIO__POST,
  PESQUISAR_FUNCIONARIO__GET,
  PESQUISAR_FUNCIONARIO_POR_ID__GET,
  ATUALIZAR_FUNCIONARIO__PUT,
  DELETAR_FUNCIONARIO__DELETE,
  LOGIN__POST
}
