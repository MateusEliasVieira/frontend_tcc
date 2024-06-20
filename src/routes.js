import React from 'react'

//Container do Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Formulários Praticante
const CadastroPraticante = React.lazy(() => import('./views/forms/formulariosDePraticante/CadastroPraticante'))

//Formulários Funcionário
const CadastroFuncionario = React.lazy(() => import('./views/forms/formulariosDeUsuario/CadastroDeUsuario'))
const AtualizacaoFuncionario = React.lazy(() => import('./views/forms/formulariosDeUsuario/AtualizacaoDeUsuario'))
const PesquisaFuncionario = React.lazy(() => import('./views/forms/formulariosDeUsuario/PesquisaDeUsuario'))

// Gráfico
const Grafico = React.lazy(() => import('./views/graficos/Grafico'))

const routes = [
  { path: '/', exact: true, name: 'Início' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/graficos-praticantes', name: 'Gráficos', element: Grafico },
  { path: '/formulario/cadastrar-praticante', name: 'Cadastro de Praticante', element: CadastroPraticante },
  { path: '/formulario/cadastrar-funcionario', name: 'Cadastro de Funcionário', element: CadastroFuncionario },
  { path: '/formulario/pesquisar-funcionario', name: 'Pesquisar Funcionário', element: PesquisaFuncionario },
  { path: '/formulario/pesquisar-funcionario/atualizar*', name: 'Atualizar Funcionário', element: AtualizacaoFuncionario },
  { path: '/formulario/pesquisar-funcionario/deletar*', name: 'Deletar Funcionário', element: PesquisaFuncionario }
]
export default routes
