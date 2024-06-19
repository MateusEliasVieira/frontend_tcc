const estados = [
  'Selecione',
  { label: 'Acre', value: 'AC' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Amapá', value: 'AP' },
  { label: 'Amazonas', value: 'AM' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Distrito Federal', value: 'DF' },
  { label: 'Espírito Santo', value: 'ES' },
  { label: 'Goiás', value: 'GO' },
  { label: 'Maranhão', value: 'MA' },
  { label: 'Mato Grosso', value: 'MT' },
  { label: 'Mato Grosso do Sul', value: 'MS' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Pará', value: 'PA' },
  { label: 'Paraíba', value: 'PB' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Piauí', value: 'PI' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Rio Grande do Norte', value: 'RN' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Rondônia', value: 'RO' },
  { label: 'Roraima', value: 'RR' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'São Paulo', value: 'SP' },
  { label: 'Sergipe', value: 'SE' },
  { label: 'Tocantins', value: 'TO' },
]
const tipoSanguineo = [
  'Selecione',
  { label: 'A +', value: 'A_POSITIVO' },
  { label: 'A -', value: 'A_NEGATIVO' },
  { label: 'B +', value: 'B_POSITIVO' },
  { label: 'B -', value: 'B_NEGATIVO' },
  { label: 'AB +', value: 'AB_POSITIVO' },
  { label: 'AB -', value: 'AB_NEGATIVO' },
  { label: 'O +', value: 'O_POSITIVO' },
  { label: 'O -', value: 'O_NEGATIVO' },
]

const corOuRaca = [
  'Selecione',
  { label: 'Branco', value: 'BRANCO'},
  { label: 'Pardo', value: 'PARDO'},
  { label: 'Negro', value: 'NEGRO'},
  { label: 'Amarelo', value: 'AMARELO'},
  { label: 'Indigena', value: 'INDIGENA'}
]

const estadoCivil = [
 'Selecione',
  { label: 'Solteiro', value: 'SOLTEIRO'},
  { label: 'Casado', value: 'CASADO'},
  { label: 'Divorciado', value: 'DIVORCIADO'},
  { label: 'Viuvo', value: 'VIUVO'}
]

const role = [
  'Selecione',
  { label:'Usuário', value:'ROLE_USER'},
  { label:'Administrador', value:'ROLE_ADMIN'}
]

const vinculo = [
  'Selecione',
  {label:'Prefeitura de Pires do Rio', value:'PREFEITURA_PIRES_DO_RIO'},
  {label:'Prefeitura de Urutaí', value:'PREFEITURA_URUTAI'},
  {label:'IFG Urutaí', value:'IFGOIANO'}
]

export { estados, tipoSanguineo, corOuRaca, estadoCivil, role, vinculo }
