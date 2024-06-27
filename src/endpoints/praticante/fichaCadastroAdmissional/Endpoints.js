const URL = 'http://localhost:8080/'

// DADOS PESSOAIS
const BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET = URL+'praticante/dados-pessoais/buscar-dados-pessoais-do-praticante-por-id/'
const BUSCAR_DADOS_PESSOAIS_DOS_PRATICANTES_GET = URL+'praticante/dados-pessoais/buscar-dados-pessoais-dos-praticantes'
const SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST = URL+'praticante/dados-pessoais/salvar-dados-pessoais-do-praticante'
const ATUALIZAR_DADOS_PESSOAIS_DO_PRATICANTE_PUT = URL+'praticante/dados-pessoais/atualizar-dados-pessoais-do-praticante'

// EDUCAÇÃO
const SALVAR_EDUCACAO_DO_PRATICANTE_POST = URL+'praticante/educacao-praticante/salvar-educacao-praticante'
const BUSCAR_EDUCACAO_DO_PRATICANTE_POR_ID_GET = URL+'praticante/educacao-praticante/buscar-educacao-praticante-por-id/'
const ATUALIZAR_EDUCACAO_DO_PRATICANTE_PUT = URL+'praticante/educacao-praticante/atualizar-educacao-praticante'

// RESPONSÁVEL DO PRATICANTE
const SALVAR_RESPONSAVEL_DO_PRATICANTE_POST = URL+'praticante/responsavel-pelo-praticante/salvar-responsavel-pelo-praticante'
const BUSCAR_RESPONSAVEL_DO_PRATICANTE_POR_ID_GET = URL+'praticante/educacao-praticante/buscar-educacao-praticante-por-id/'
const ATUALIZAR_RESPONSAVEL_DO_PRATICANTE_PUT = URL+'praticante/educacao-praticante/atualizar-educacao-praticante'

export{
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET,
  BUSCAR_DADOS_PESSOAIS_DOS_PRATICANTES_GET,
  SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST,
  ATUALIZAR_DADOS_PESSOAIS_DO_PRATICANTE_PUT,

  SALVAR_EDUCACAO_DO_PRATICANTE_POST,
  BUSCAR_EDUCACAO_DO_PRATICANTE_POR_ID_GET,
  ATUALIZAR_EDUCACAO_DO_PRATICANTE_PUT,

  SALVAR_RESPONSAVEL_DO_PRATICANTE_POST,
  BUSCAR_RESPONSAVEL_DO_PRATICANTE_POR_ID_GET,
  ATUALIZAR_RESPONSAVEL_DO_PRATICANTE_PUT
}



