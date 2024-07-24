import React from 'react'

//Container do Dashboard
const Dashboard = React.lazy(() => import('./visualizacao/dashboard/Dashboard'))

//Formulários Praticante
const CadastroPraticante = React.lazy(() => import('./visualizacao/formularios/formulariosDePraticante/CadastroDePraticante'))

// Relatório de Praticante
const RelatorioPraticante = React.lazy(() => import('./visualizacao/relatorio/RelatorioPraticante'))
const PesquisarPraticante = React.lazy(() => import('./visualizacao/pesquisar/Pesquisar'))

//Formulários Funcionário
const CadastroDeUsuario = React.lazy(() => import('./visualizacao/formularios/formulariosDeUsuario/CadastroDeUsuario'))
const PesquisaDeUsuario = React.lazy(() => import('./visualizacao/formularios/formulariosDeUsuario/PesquisaDeUsuario'))
const AtualizacaoDeUsuario = React.lazy(() => import('./visualizacao/formularios/formulariosDeUsuario/AtualizacaoDeUsuario'))

// Gráfico
const Grafico = React.lazy(() => import('./visualizacao/graficos/Grafico'))

const rotas = [
  { path: '/', exact: true, name: 'Início' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/evolucao-praticantes', name: 'Evolução', element: Grafico },
  { path: '/relatorio/gerar-relatorio-de-praticante/*', name: 'Relatório', element: RelatorioPraticante },
  { path: '/formulario/pesquisar-praticante', name: 'Pesquisar', element:PesquisarPraticante },
  { path: '/formulario/cadastrar-praticante', name: 'Novo', element: CadastroPraticante },
  { path: '/formulario/cadastrar-usuario', name: 'Novo', element: CadastroDeUsuario },
  { path: '/formulario/pesquisar-usuario', name: 'Usuários', element: PesquisaDeUsuario },
  { path: '/formulario/atualizar-usuario/*', name: 'Atualizar', element:  AtualizacaoDeUsuario},
]
export default rotas
