import React, {useEffect} from 'react'
import {AppContent, AppSidebar, AppFooter, AppHeader} from '../components/index'
import Logo from '../assets/images/Logo.jpg'

const DefaultLayout = () => {
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
                <AppHeader/>
                <div className="body flex-grow-1 px-3">
                    <AppContent/>
                </div>
                <AppFooter/>
            </div>
        </div>
    )
}

export default DefaultLayout
