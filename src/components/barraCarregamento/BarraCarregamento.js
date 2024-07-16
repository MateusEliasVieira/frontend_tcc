import React, { useEffect, useState } from "react";
import "./BarraCarregamento.css"

const BarraCarregamento = (props) => {
  const [classe, setClasse] = useState("tinta")

  useEffect(() => {
    if (props.conteudo) {
      setClasse("tinta-carregar")
      setTimeout(() => {
        setClasse("tinta")
        props.esconderModal()
        props.manipuladorDeImpressao()
        props.setConteudoModal(false)
        props.setEspacar(false)
      }, 6000)
    }
  }, [props.conteudo]); // Dependência adicionada

  return (
    <div className="barra">
      <div className={classe}></div>
    </div>
  )
}

export { BarraCarregamento }
