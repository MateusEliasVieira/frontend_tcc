const URL = 'http://localhost:8080/'

// DADOS PESSOAIS
const BUSCAR_DADOS_PESSOAIS__GET = URL+'praticante/dados-pessoais/buscar-dados-pessoais-por-id/'
const BUSCAR_DADOS_PESSOAIS_DOS_PACIENTES__GET = URL+'praticante/dados-pessoais/buscar-dados-pessoais-dos-pacientes'
const SALVAR_DADOS_PESSOAIS__POST = URL+'praticante/dados-pessoais/salvar-dados-pessoais'
const ATUALIZAR_DADOS_PESSOAIS__PUT = URL+'praticante/dados-pessoais/atualizar-dados-pessoais'

// EDUCAÇÃO
const SALVAR_EDUCACAO__POST = URL+'praticante/educacao-praticante/salvar-educacao-praticante'
const BUSCAR_EDUCACAO__GET = URL+'praticante/educacao-praticante/buscar-educacao-praticante-por-id/'
const ATUALIZAR_EDUCACAO__PUT = URL+'praticante/educacao-praticante/atualizar-educacao-praticante'

// RESPONSÁVEL DO PACIENTE

const SALVAR_RESPONSAVEL__POST = URL+'praticante/responsavel-pelo-praticante/salvar-responsavel-pelo-praticante'
const BUSCAR_RESPONSAVEL__GET = URL+'praticante/educacao-praticante/buscar-educacao-praticante-por-id/'
const ATUALIZAR_RESPONSAVEL__PUT = URL+'praticante/educacao-praticante/atualizar-educacao-praticante'


export { SALVAR_DADOS_PESSOAIS__POST, ATUALIZAR_DADOS_PESSOAIS__PUT, BUSCAR_DADOS_PESSOAIS__GET, BUSCAR_DADOS_PESSOAIS_DOS_PACIENTES__GET,
SALVAR_EDUCACAO__POST, BUSCAR_EDUCACAO__GET, ATUALIZAR_EDUCACAO__PUT,
SALVAR_RESPONSAVEL__POST, BUSCAR_RESPONSAVEL__GET, ATUALIZAR_RESPONSAVEL__PUT}


