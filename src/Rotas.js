import React from 'react'

//Container do Dashboard
const Dashboard = React.lazy(() => import('./visualizacao/dashboard/Dashboard'))

//Formulários Praticante
const CadastroPraticante = React.lazy(() => import('./visualizacao/formularios/formulariosDePraticante/CadastroDePraticante'))

//Formulários Funcionário
const CadastroFuncionario = React.lazy(() => import('./visualizacao/formularios/formulariosDeUsuario/CadastroDeUsuario'))
const AtualizacaoFuncionario = React.lazy(() => import('./visualizacao/formularios/formulariosDeUsuario/AtualizacaoDeUsuario'))
const PesquisaFuncionario = React.lazy(() => import('./visualizacao/formularios/formulariosDeUsuario/PesquisaDeUsuario'))

// Gráfico
const Grafico = React.lazy(() => import('./visualizacao/graficos/Grafico'))

const rotas = [
  { path: '/', exact: true, name: 'Início' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/graficos-praticantes', name: 'Gráficos', element: Grafico },
  { path: '/formulario/cadastrar-praticante', name: 'Cadastro de Praticante', element: CadastroPraticante },
  { path: '/formulario/cadastrar-funcionario', name: 'Cadastro de Funcionário', element: CadastroFuncionario },
  { path: '/formulario/pesquisar-funcionario', name: 'Pesquisar Funcionário', element: PesquisaFuncionario },
  { path: '/formulario/pesquisar-funcionario/atualizar*', name: 'Atualizar Funcionário', element: AtualizacaoFuncionario },
  { path: '/formulario/pesquisar-funcionario/deletar*', name: 'Deletar Funcionário', element: PesquisaFuncionario }
]
export default rotas
