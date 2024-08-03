import React from 'react'

//Container do Dashboard
const Dashboard = React.lazy(() => import('./visualizacao/dashboard/Dashboard'))

//Formulários Praticante
const CadastroPraticante = React.lazy(() => import('./visualizacao/formularios/formulariosDePraticante/CadastroDePraticante'))

// Relatório de Praticante
const RelatorioPraticante = React.lazy(() => import('./visualizacao/pesquisar/RelatorioPraticante'))
const PesquisarPraticante = React.lazy(() => import('./visualizacao/pesquisar/Pesquisar'))

//Formulários Funcionário
const CadastroDeUsuario = React.lazy(() => import('./visualizacao/formularios/formulariosDeUsuario/CadastroDeUsuario'))
const PesquisaDeUsuario = React.lazy(() => import('./visualizacao/formularios/formulariosDeUsuario/PesquisaDeUsuario'))
const AtualizacaoDeUsuario = React.lazy(() => import('./visualizacao/formularios/formulariosDeUsuario/AtualizacaoDeUsuario'))

const rotas = [
  { path: '/', exact: true, name: 'Início' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/gerar-relatorio-de-praticante/*', name: 'Relatório', element: RelatorioPraticante },
  { path: '/pesquisar-praticante', name: 'Pesquisar', element:PesquisarPraticante },
  { path: '/cadastrar-praticante', name: 'Novo', element: CadastroPraticante },
  { path: '/cadastrar-usuario', name: 'Novo', element: CadastroDeUsuario },
  { path: '/pesquisar-usuario', name: 'Usuários', element: PesquisaDeUsuario },
  { path: '/atualizar-usuario/*', name: 'Atualizar', element:  AtualizacaoDeUsuario},
]
export default rotas
