import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler} from '@coreui/react'

import {AppNavBarraLateral} from './AppNavBarraLateral'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import Logo from '../assets/imagens/Logo.jpg'
import axios from "axios";
import {PESQUISAR_USUARIO_POR_ID_GET} from "../endpoints/usuario/Endpoints";

const AppBarraLateral = () => {
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
      var login = JSON.parse(localStorage.getItem("login"))
      if (login.idUsuario !== "" && login.idUsuario !== undefined) {
        axios.get(PESQUISAR_USUARIO_POR_ID_GET, {
          params: {
            id: login.idUsuario
          },
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${login.token}`
          },
        })
      .
        then((response) => {
          console.log("resposta = " + response)
          setUsuario({...response.data})
        })
          .catch((error) => {
            console.log("Erro ao buscar usuário por id: " + error)
          })
      }
    } catch (e) {
      console.log("Erro ao carregar dados do usuário no dashboard.")
    }
  }, []);
  return (
    <CSidebar
      style={{backgroundColor: '#181717'}}
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
                  <strong style={{color: "green"}}>
                    administrador
                  </strong>
                  :
                  <strong style={{color: "dodgerblue"}}>
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
          <AppNavBarraLateral items={navigation}/>
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({type: 'set', sidebarUnfoldable: !unfoldable})}
      />
    </CSidebar>
  )
}

export default React.memo(AppBarraLateral)
