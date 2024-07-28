import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAccountLogout,
  cilChartPie,
  cilClipboard, cilHome,
  cilMagnifyingGlass,
  cilUser,
  cilUserPlus
} from '@coreui/icons'
import {CNavGroup, CNavItem} from '@coreui/react'

const login = JSON.parse(localStorage.getItem("login")) || {}; // Garante que login seja um objeto

const _nav_administrador = [
  {
    component: CNavItem,
    name: 'Início',
    href: '/#/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon"/>,
  },
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
        icon: <CIcon icon={cilUserPlus} customClassName={"nav-icon"} />
      },
      {
        component: CNavItem,
        name: 'Pesquisa',
        to: '/formulario/pesquisar-praticante',
        icon: <CIcon icon={cilMagnifyingGlass} customClassName={"nav-icon"}/>
      },
      // {
      //   component: CNavItem,
      //   name: 'Início'
      //   to: '/evolucao-praticantes',
      //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon"/>,
      // },
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
        name: 'Novo',
        to: '/formulario/cadastrar-praticante',
        icon: <CIcon icon={cilUserPlus} customClassName={"nav-icon"} />
      },
      {
        component: CNavItem,
        name: 'Pesquisa',
        to: '/formulario/pesquisar-praticante',
        icon: <CIcon icon={cilMagnifyingGlass} customClassName={"nav-icon"}/>
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
    component: CNavItem,
    name: 'Sair',
    href: '/#/login',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon"/>,
  },
]


// Acessando o login.role com encadeamento opcional para evitar erros se login for null
export default (login?.role === "ROLE_ADMIN" ? _nav_administrador : _nav_usuario)
