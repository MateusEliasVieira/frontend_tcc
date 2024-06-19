import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler} from '@coreui/react'

import {AppSidebarNav} from './AppSidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import Logo from '../assets/images/Logo.jpg'
import axios from "axios";
import {PESQUISAR_FUNCIONARIO_POR_ID__GET} from "../endpoints/usuario/Endpoints";

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const [usuario, setUsuario] = useState({
    idUsuario: '',
    nome: '',
    foto: '',
    dataNascimento: '',
    cpf: '',
    estadoCivil: '',
    telefone: '',
    email: '',
    detalhesFormacao: 'Sem Formação',
    cidade: '',
    bairro: '',
    logradouro: '',
    role: '',
    vinculo: '',
    possuiFormacao: false
  })

  useEffect(() => {
    try {
      let login = JSON.parse(localStorage.getItem("login"))
      if (login.idUsuario !== "" && login.idUsuario !== undefined) {
        axios.get(PESQUISAR_FUNCIONARIO_POR_ID__GET, {params: {id: login.idUsuario}})
          .then((response) => {
            setUsuario({...response.data})
          })
          .catch((error) => {
            console.log("Erro ao buscar usuário por id.")
          })
      }
    } catch (e) {
      console.log("Erro ao carregar dados do usuário no dashboard.")
    }
  }, []);
  return (
    <CSidebar
      style={{backgroundColor:'#2b191b'}}
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({type: 'set', sidebarShow: visible})
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <div className="container text-center">
          <div className="col">
            <div className="col">
              <img src={usuario.foto} width={100} height={100} style={{margin: 10, borderRadius: '50%'}}/>
            </div>
            <div className="col">
              <p>{usuario.nome} (
                {usuario.role === "ROLE_ADMIN" ?
                  <strong style={{color:"green"}}>
                    administrador
                  </strong>
                  :
                  <strong style={{color:"dodgerblue"}}>
                    usuário
                  </strong>
                }
              )</p>
            </div>
          </div>
        </div>
      </CSidebarBrand>

      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation}/>
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({type: 'set', sidebarUnfoldable: !unfoldable})}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
