import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAccountLogout,
  cilChartPie,
  cilClipboard, cilContact,
  cilDescription,
  cilMagnifyingGlass, cilSpeedometer, cilTrash,
  cilUser,
  cilUserFollow,
  cilUserPlus
} from '@coreui/icons'
import {CNavGroup, CNavItem} from '@coreui/react'

const login = JSON.parse(localStorage.getItem("login"))

const _nav_administrador = [
  {
    component: CNavGroup,
    name: 'Praticantes',
    to: '/base',
    icon: <CIcon icon={cilUser} customClassName="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'Novo',
        to: '/formulario/cadastrar-praticante',
        icon:<CIcon icon={cilUserPlus} customClassName={"nav-icon"} />
      },
      {
        component: CNavItem,
        name: 'Pesquisa',
        to: '/formulario/pesquisar-praticante',
        icon: <CIcon icon={cilMagnifyingGlass} customClassName={"nav-icon"}/>
      },
      {
        component: CNavItem,
        name: 'Relatórios',
        to: '/relatorio/gerar-relatorio-de-praticante',
        icon: <CIcon icon={cilClipboard} customClassName="nav-icon"/>,
      },
      {
        component: CNavItem,
        name: 'Evolução',
        to: '/evolucao-praticantes',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon"/>,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Usuários',
    to: '/buttons',
    icon: <CIcon icon={cilUser} customClassName="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'Novo',
        to: '/formulario/cadastrar-usuario',
        icon:<CIcon icon={cilUserPlus} customClassName={"nav-icon"}/>
      },
      {
        component: CNavItem,
        name: 'Pesquisa',
        to: '/formulario/pesquisar-usuario',
        icon: <CIcon icon={cilMagnifyingGlass} customClassName={"nav-icon"}/>
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Sair',
    href: '/#/login',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon"/>,
  },
]

const _nav_usuario = [
  {
    component: CNavGroup,
    name: 'Praticantes',
    to: '/base',
    icon: <CIcon icon={cilUser} customClassName="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'Novo Praticante',
        to: '/formulario/cadastrar-praticante',
        icon:<CIcon icon={cilUserPlus} customClassName={"nav-icon"} />
      },
      {
        component: CNavItem,
        name: 'Visualizar Praticantes',
        to: '/formulario/pesquisar-praticante',
        icon: <CIcon icon={cilMagnifyingGlass} customClassName={"nav-icon"}/>
      },
      {
        component: CNavItem,
        name: 'Gerar Relatórios',
        to: '/relatorio-praticantes',
        icon: <CIcon icon={cilClipboard} customClassName="nav-icon"/>,
      },
      {
        component: CNavItem,
        name: 'Estatística',
        to: '/graficos-praticantes',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon"/>,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Sair',
    href: '/#/login',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon"/>,
  },
]

export default (login.role === "ROLE_ADMIN" ? _nav_administrador : _nav_usuario)
