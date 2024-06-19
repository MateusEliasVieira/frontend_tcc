const URL = 'http://localhost:8080/'

// DADOS PESSOAIS
const BUSCAR_DADOS_PESSOAIS__GET = URL+'paciente/dados-pessoais/buscar-dados-pessoais-por-id/'
const BUSCAR_DADOS_PESSOAIS_DOS_PACIENTES__GET = URL+'paciente/dados-pessoais/buscar-dados-pessoais-dos-pacientes'
const SALVAR_DADOS_PESSOAIS__POST = URL+'paciente/dados-pessoais/salvar-dados-pessoais'
const ATUALIZAR_DADOS_PESSOAIS__PUT = URL+'paciente/dados-pessoais/atualizar-dados-pessoais'

// EDUCAÇÃO
const SALVAR_EDUCACAO__POST = URL+'paciente/educacao-paciente/salvar-educacao-paciente'
const BUSCAR_EDUCACAO__GET = URL+'paciente/educacao-paciente/buscar-educacao-paciente-por-id/'
const ATUALIZAR_EDUCACAO__PUT = URL+'paciente/educacao-paciente/atualizar-educacao-paciente'

// RESPONSÁVEL DO PACIENTE

const SALVAR_RESPONSAVEL__POST = URL+'paciente/responsavel-pelo-paciente/salvar-responsavel-pelo-paciente'
const BUSCAR_RESPONSAVEL__GET = URL+'paciente/educacao-paciente/buscar-educacao-paciente-por-id/'
const ATUALIZAR_RESPONSAVEL__PUT = URL+'paciente/educacao-paciente/atualizar-educacao-paciente'


export { SALVAR_DADOS_PESSOAIS__POST, ATUALIZAR_DADOS_PESSOAIS__PUT, BUSCAR_DADOS_PESSOAIS__GET, BUSCAR_DADOS_PESSOAIS_DOS_PACIENTES__GET,
SALVAR_EDUCACAO__POST, BUSCAR_EDUCACAO__GET, ATUALIZAR_EDUCACAO__PUT,
SALVAR_RESPONSAVEL__POST, BUSCAR_RESPONSAVEL__GET, ATUALIZAR_RESPONSAVEL__PUT}


