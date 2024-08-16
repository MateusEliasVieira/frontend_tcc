import {DOMINIO} from '../../../URL/URL'

// DADOS PESSOAIS

const BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET = DOMINIO+'praticante/dados-pessoais/buscar-dados-pessoais-do-praticante-por-id'
const BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_CPF_GET = DOMINIO+'praticante/dados-pessoais/buscar-dados-pessoais-do-praticante-por-cpf'
const BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_NOME_GET = DOMINIO+'praticante/dados-pessoais/buscar-dados-pessoais-do-praticante-por-nome'

const BUSCAR_DADOS_PESSOAIS_DOS_PRATICANTES_GET = DOMINIO+'praticante/dados-pessoais/buscar-dados-pessoais-dos-praticantes'
const SALVAR_DADOS_PESSOAIS_DO_PRATICANTE_POST = DOMINIO+'praticante/dados-pessoais/salvar-dados-pessoais-do-praticante'
const ATUALIZAR_DADOS_PESSOAIS_DO_PRATICANTE_PUT = DOMINIO+'praticante/dados-pessoais/atualizar-dados-pessoais-do-praticante'

// EDUCAÇÃO
const SALVAR_EDUCACAO_DO_PRATICANTE_POST = DOMINIO+'praticante/educacao-praticante/salvar-educacao-do-praticante'
const BUSCAR_EDUCACAO_DO_PRATICANTE_POR_ID_GET = DOMINIO+'praticante/educacao-praticante/buscar-educacao-do-praticante-por-id'
const ATUALIZAR_EDUCACAO_DO_PRATICANTE_PUT = DOMINIO+'praticante/educacao-praticante/atualizar-educacao-do-praticante'

// RESPONSÁVEL DO PRATICANTE
const SALVAR_RESPONSAVEL_DO_PRATICANTE_POST = DOMINIO+'praticante/responsavel-pelo-praticante/salvar-responsavel-do-praticante'
const BUSCAR_RESPONSAVEL_DO_PRATICANTE_POR_ID_GET = DOMINIO+'praticante/responsavel-pelo-praticante/buscar-responsavel-do-praticante-por-id'
const ATUALIZAR_RESPONSAVEL_DO_PRATICANTE_PUT = DOMINIO+'praticante/responsavel-pelo-praticante/atualizar-responsavel-do-praticante'

// OUTRAS ATIVIDADES MANHA
const SALVAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POST = DOMINIO + 'praticante/outras-atividades-manha/salvar-outras-atividades-manha-do-praticante'
const ATUALIZAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_PUT = DOMINIO + 'praticante/outras-atividades-manha/atualizar-outras-atividades-manha-do-praticante'
const BUSCAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POR_ID_GET = DOMINIO + 'praticante/outras-atividades-manha/buscar-outras-atividades-manha-do-praticante-por-id'

// OUTRAS ATIVIDADES TARDE
const SALVAR_OUTRAS_ATIVIDADE_TARDE_DO_PRATICANTE_POST = DOMINIO + 'praticante/outras-atividades-tarde/salvar-outras-atividades-tarde-do-praticante'
const ATUALIZAR_OUTRAS_ATIVIDADE_TARDE_DO_PRATICANTE_PUT = DOMINIO + 'praticante/outras-atividades-tarde/atualizar-outras-atividades-tarde-do-praticante'
const BUSCAR_OUTRAS_ATIVIDADE_TARDE_DO_PRATICANTE_POR_ID_GET = DOMINIO + 'praticante/outras-atividades-tarde/buscar-outras-atividades-tarde-do-praticante-por-id'


// COMPLETUDE MATRICULA
const SALVAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POST = DOMINIO+'praticante/completude-matricula/salvar-completude-matricula-do-praticante'
const BUSCAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_POR_ID_GET = DOMINIO+'praticante/completude-matricula/buscar-completude-matricula-do-praticante-por-id'
const ATUALIZAR_COMPLETUDE_MATRICULA_DO_PRATICANTE_PUT = DOMINIO+'praticante/completude-matricula/atualizar-completude-matricula-do-praticante'


const SALVAR_EMERGENCIA_DO_PRATICANTE_POST = DOMINIO+'praticante/emergencia/salvar-emergencia-do-praticante'
const ATUALIZAR_EMERGENCIA_DO_PRATICANTE_PUT = DOMINIO+'praticante/emergencia/atualizar-emergencia-do-praticante'
const BUSCAR_EMERGENCIA_DO_PRATICANTE_POR_ID_GET = DOMINIO+'praticante/emergencia/buscar-emergencia-do-praticante-por-id'

export{
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_ID_GET,
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_CPF_GET,
  BUSCAR_DADOS_PESSOAIS_DO_PRATICANTE_POR_NOME_GET,
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



