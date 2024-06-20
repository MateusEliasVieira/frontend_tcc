import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import LayoutPadrao from "./layout/LayoutPadrao";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Container
const DefaultLayout = React.lazy(() => import('./layout/LayoutPadrao'))

// Paginas
const Login = React.lazy(() => import('./visualizacao/paginas/login/Login'))
const Pagina404 = React.lazy(() => import('./visualizacao/paginas/pagina404/Pagina404'))
const Pagina500 = React.lazy(() => import('./visualizacao/paginas/pagina500/Pagina500'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Pagina de Login" element={<Login />} />
            <Route exact path="/404" name="Pagina 404" element={<Pagina404 />} />
            <Route exact path="/500" name="Pagina 500" element={<Pagina500 />} />
            <Route path="*" name="Inicio" element={<LayoutPadrao />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
