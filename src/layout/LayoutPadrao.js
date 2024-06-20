import React, {useEffect} from 'react'
import {AppContent, AppSidebar, AppFooter, AppCabecalho} from '../components'
import Logo from '../assets/imagens/Logo.jpg'

const LayoutPadrao = () => {
    useEffect(() => {
      let login = JSON.parse(localStorage.getItem("login"))
      if (!(login.idUsuario !== "" && login.nomeUsuario !== "" && login.token !== "" && login.role !== "")) {
        // Esta logado
        window.location.href = "/#/login"
      }
    }, []);
    return (
        <div>
            <AppSidebar/>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppCabecalho/>
                <div className="body flex-grow-1 px-3">
                    <AppContent/>
                </div>
                <AppFooter/>
            </div>
        </div>
    )
}

export default LayoutPadrao
