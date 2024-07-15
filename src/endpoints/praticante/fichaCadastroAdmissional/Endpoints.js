const URL = 'http://localhost:8080/'

// DADOS PESSOAIS
const BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET = URL+'praticante/dados-pessoais/buscar-dados-pessoais-do-praticante-por-id'
const BUSCAR_DADOS_PESSOAIS_DOS_PRATICANTES_GET = URL+'praticante/dados-pessoais/buscar-dados-pessoais-dos-praticantes'
const SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST = URL+'praticante/dados-pessoais/salvar-dados-pessoais-do-praticante'
const ATUALIZAR_DADOS_PESSOAIS_DO_PRATICANTE_PUT = URL+'praticante/dados-pessoais/atualizar-dados-pessoais-do-praticante'

// EDUCAÇÃO
const SALVAR_EDUCACAO_DO_PRATICANTE_POST = URL+'praticante/educacao-praticante/salvar-educacao-do-praticante'
const BUSCAR_EDUCACAO_DO_PRATICANTE_POR_ID_GET = URL+'praticante/educacao-praticante/buscar-educacao-do-praticante-por-id'
const ATUALIZAR_EDUCACAO_DO_PRATICANTE_PUT = URL+'praticante/educacao-praticante/atualizar-educacao-do-praticante'

// RESPONSÁVEL DO PRATICANTE
const SALVAR_RESPONSAVEL_DO_PRATICANTE_POST = URL+'praticante/responsavel-pelo-praticante/salvar-responsavel-do-praticante'
const BUSCAR_RESPONSAVEL_DO_PRATICANTE_POR_ID_GET = URL+'praticante/responsavel-pelo-praticante/buscar-responsavel-do-praticante-por-id'
const ATUALIZAR_RESPONSAVEL_DO_PRATICANTE_PUT = URL+'praticante/responsavel-pelo-praticante/atualizar-responsavel-do-praticante-praticante'

// OUTRAS ATIVIDADES MANHA
const SALVAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POST = URL + 'praticante/outras-atividades-manha/salvar-outras-atividades-manha-do-praticante'
const ATUALIZAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_PUT = URL + 'praticante/outras-atividades-manha/atualizar-outras-atividades-manha-do-praticante'
const BUSCAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POR_ID_GET = URL + 'praticante/outras-atividades-manha/buscar-outras-atividades-manha-do-praticante-por-id'

// OUTRAS ATIVIDADES TARDE
const SALVAR_OUTRAS_ATIVIDADE_TARDE_DO_PRATICANTE_POST = URL + 'praticante/outras-atividades-tarde/salvar-outras-atividades-tarde-do-praticante'
const ATUALIZAR_OUTRAS_ATIVIDADE_TARDE_DO_PRATICANTE_PUT = URL + 'praticante/outras-atividades-tarde/atualizar-outras-atividades-tarde-do-praticante'
const BUSCAR_OUTRAS_ATIVIDADE_TARDE_DO_PRATICANTE_POR_ID_GET = URL + 'praticante/outras-atividades-tarde/buscar-outras-atividades-tarde-do-praticante-por-id'


// COMPLETUDE MATRICULA
const SALVAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POST = URL+'praticante/completude-matricula/salvar-completude-matricula-do-praticante'
const BUSCAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POR_ID_GET = URL+'praticante/completude-matricula/buscar-completude-matricula-do-praticante-por-id'
const ATUALIZAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_PUT = URL+'praticante/completude-matricula/atualizar-completude-matricula-do-praticante'


const SALVAR_EMERGENCIA_DO_PRATICANTE_POST = URL+'praticante/emergencia/salvar-emergencia-do-praticante'
const ATUALIZAR_EMERGENCIA_DO_PRATICANTE_PUT = URL+'praticante/emergencia/atualizar-emergencia-do-praticante'
const BUSCAR_EMERGENCIA_DO_PRATICANTE_POR_ID_GET = URL+'praticante/emergencia/buscar-emergencia-do-praticante-por-id'

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
  ATUALIZAR_RESPONSAVEL_DO_PRATICANTE_PUT,

  SALVAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POST,
  ATUALIZAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_PUT,
  BUSCAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POR_ID_GET,

  SALVAR_OUTRAS_ATIVIDADE_TARDE_DO_PRATICANTE_POST,
  ATUALIZAR_OUTRAS_ATIVIDADE_TARDE_DO_PRATICANTE_PUT,
  BUSCAR_OUTRAS_ATIVIDADE_TARDE_DO_PRATICANTE_POR_ID_GET,

  SALVAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POST,
  ATUALIZAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_PUT,
  BUSCAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POR_ID_GET,

  SALVAR_EMERGENCIA_DO_PRATICANTE_POST,
  ATUALIZAR_EMERGENCIA_DO_PRATICANTE_PUT,
  BUSCAR_EMERGENCIA_DO_PRATICANTE_POR_ID_GET
}



