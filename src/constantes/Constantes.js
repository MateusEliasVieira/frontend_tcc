const estados = [
  {label: 'Acre', value: 'AC'},
  {label: 'Alagoas', value: 'AL'},
  {label: 'Amapá', value: 'AP'},
  {label: 'Amazonas', value: 'AM'},
  {label: 'Bahia', value: 'BA'},
  {label: 'Ceará', value: 'CE'},
  {label: 'Distrito Federal', value: 'DF'},
  {label: 'Espírito Santo', value: 'ES'},
  {label: 'Goiás', value: 'GO'},
  {label: 'Maranhão', value: 'MA'},
  {label: 'Mato Grosso', value: 'MT'},
  {label: 'Mato Grosso do Sul', value: 'MS'},
  {label: 'Minas Gerais', value: 'MG'},
  {label: 'Pará', value: 'PA'},
  {label: 'Paraíba', value: 'PB'},
  {label: 'Paraná', value: 'PR'},
  {label: 'Pernambuco', value: 'PE'},
  {label: 'Piauí', value: 'PI'},
  {label: 'Rio de Janeiro', value: 'RJ'},
  {label: 'Rio Grande do Norte', value: 'RN'},
  {label: 'Rio Grande do Sul', value: 'RS'},
  {label: 'Rondônia', value: 'RO'},
  {label: 'Roraima', value: 'RR'},
  {label: 'Santa Catarina', value: 'SC'},
  {label: 'São Paulo', value: 'SP'},
  {label: 'Sergipe', value: 'SE'},
  {label: 'Tocantins', value: 'TO'}
];
const preencherLegenda = [
  {label: 'Sim', value: 'SIM'},
  { label: 'Não', value: 'NAO'},
  {label: 'Não Observado', value: 'NAO_OBSERVADO'},
  {label: 'Parcialmente', value: 'PARCIALMENTE'},]
const tipoSanguineo = [
  {label: 'A +', value: 'A_POSITIVO'},
  {label: 'A -', value: 'A_NEGATIVO'},
  {label: 'B +', value: 'B_POSITIVO'},
  {label: 'B -', value: 'B_NEGATIVO'},
  {label: 'AB +', value: 'AB_POSITIVO'},
  {label: 'AB -', value: 'AB_NEGATIVO'},
  {label: 'O +', value: 'O_POSITIVO'},
  {label: 'O -', value: 'O_NEGATIVO'}
  // outros tipos sanguíneos aqui
];

const corOuRaca = [
  {label: 'Branco', value: 'BRANCO'},
  {label: 'Pardo', value: 'PARDO'},
  {label: 'Negro', value: 'NEGRO'},
  {label: 'Amarelo', value: 'AMARELO'},
  {label: 'Indigena', value: 'INDIGENA'}
  // outras cores ou raças aqui
];

const estadoCivil = [
  {label: 'Solteiro', value: 'SOLTEIRO'},
  {label: 'Casado', value: 'CASADO'},
  {label: 'Divorciado', value: 'DIVORCIADO'},
  {label: 'Viuvo', value: 'VIUVO'},
  // outros estados civis aqui
];

const role = [
  {label: 'Usuário', value: 'ROLE_USER'},
  {label: 'Administrador', value: 'ROLE_ADMIN'}
];

const vinculo = [
  {label: 'Prefeitura de Pires do Rio', value: 'PREFEITURA_PIRES_DO_RIO'},
  {label: 'Prefeitura de Urutaí', value: 'PREFEITURA_URUTAI'},
  {label: 'IFG Urutaí', value: 'IFGOIANO'}
];

const classeDeEscola = [
  {label: 'Especial', value: 'ESPECIAL'},
  {label: 'Inclusão', value: 'INCLUSAO'},
  {label: 'Regular', value: 'REGULAR'}
];

const tipoInstituicaoEducacional = [
  {label: 'Pública', value: 'PUBLICA'},
  {label: 'Privada', value: 'PRIVADA'}
];

const periodo = [
  {label: 'Matutino', value: 'MATUTINO'},
  {label: 'Vespertino', value: 'VESPERTINO'}
];
const alimentacao = [
  {label: 'Seio', value: 'SEIO'},
  {label: 'Mamadeira', value: 'MAMADEIRA'}
];
const simOuNao = [
  {label: 'Sim', value: 'true'},
  {label: 'Não', value: 'false'}
];
const sexo = [
  {label: 'Masculino', value: 'MASCULINO'},
  {label: 'Feminino', value: 'FEMININO'}
];
const equilibrioEstatico = [
  {label: 'Nenhuma Dificuldade', value: 'NENHUMA_DIFICULDADE'},
  {label: 'Alguma Dificuldade', value: 'ALGUMA_DIFICULDADE'},
  {label: 'Bastante Dificuldade', value: 'BASTANTE_DIFICULDADE'},
  {label: 'Não Realiza', value: 'NAO_REALIZA'}
]
const equilibrioDinamico = [
  {label: 'Engatinha', value: 'ENGATINHA'},
  {label: 'Marcha Voluntária', value: 'MARCHA_VOLUNTARIA'},
  {label: 'Saltar com os Dois Pés Juntos', value: 'SALTAR_COM_OS_DOIS_PES_JUNTOS'},
  {label: 'Correr Desviando de Obstáculos', value: 'CORRER_DESVIANDO_OBSTACULOS'}
]
ENGATINHA, MARCHA_VOLUNTARIA, SALTAR_COM_OS_DOIS_PES_JUNTOS, CORRER_DESVIANDO_OBSTACULOS

const CADASTRADO = "true"
const NAO_CADASTRADO = "false"

export {
  estados,
  tipoSanguineo,
  corOuRaca,
  estadoCivil,
  role,
  vinculo,
  classeDeEscola,
  tipoInstituicaoEducacional,
  periodo,
  simOuNao,
  preencherLegenda,
  alimentacao,
  sexo,
  CADASTRADO,
  NAO_CADASTRADO,
  equilibrioEstatico,
  equilibrioDinamico
};
