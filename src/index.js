import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import relatarSinaisVitaisDaWeb from './RelatarSinaisVitaisDaWeb'
import { Provider } from 'react-redux'
import loja from './Loja'

createRoot(document.getElementById('root')).render(
  <Provider store={loja}>
    <App />
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: relatarSinaisVitaisDaWeb(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
relatarSinaisVitaisDaWeb()
