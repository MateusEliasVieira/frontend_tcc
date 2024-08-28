import {DOMINIO} from '../../../URL/URL'

// Avaliação Fisioterapeutica
const SALVAR_EVOLUCAO_DO_PRATICANTE_POST = DOMINIO + 'praticante/evolucao/salvar-evolucao-do-praticante';
const ATUALIZAR_EVOLUCAO_DO_PRATICANTE_PUT = DOMINIO + 'praticante/evolucao/atualizar-evolucao-do-praticante';
const BUSCAR_EVOLUCOES_DO_PRATICANTE_POR_ID_GET = DOMINIO + 'praticante/evolucao/buscar-evolucoes-do-praticante-por-id';
const BUSCAR_EVOLUCAO_DO_PRATICANTE_POR_INTERVALO_DE_DATAS_POST = DOMINIO + 'praticante/evolucao/buscar-evolucao-do-praticante-por-intervalo-de-datas';



export {
  SALVAR_EVOLUCAO_DO_PRATICANTE_POST,
  ATUALIZAR_EVOLUCAO_DO_PRATICANTE_PUT,
  BUSCAR_EVOLUCOES_DO_PRATICANTE_POR_ID_GET,
  BUSCAR_EVOLUCAO_DO_PRATICANTE_POR_INTERVALO_DE_DATAS_POST,
}
