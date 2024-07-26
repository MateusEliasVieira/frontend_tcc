const URL = 'http://localhost:8080/';

// Avaliação Fisioterapeutica
const SALVAR_EVOLUCAO_DO_PRATICANTE_POST = URL + 'praticante/evolucao/salvar-evolucao-do-praticante';
const ATUALIZAR_EVOLUCAO_DO_PRATICANTE_PUT = URL + 'praticante/evolucao/atualizar-evolucao-do-praticante';
const BUSCAR_EVOLUCAO_DO_PRATICANTE_POR_ID_GET = URL + 'praticante/evolucao/buscar-evolucoes-do-praticante-por-id';
const BUSCAR_EVOLUCAO_DO_PRATICANTE_POR_INTERVALO_DE_DATAS_POST = URL + 'praticante/evolucao/buscar-evolucao-do-praticante-por-intervalo-de-datas';



export {
  SALVAR_EVOLUCAO_DO_PRATICANTE_POST,
  ATUALIZAR_EVOLUCAO_DO_PRATICANTE_PUT,
  BUSCAR_EVOLUCAO_DO_PRATICANTE_POR_ID_GET,
  BUSCAR_EVOLUCAO_DO_PRATICANTE_POR_INTERVALO_DE_DATAS_POST,
}
