import React from "react";
import { BarraCarregamento } from "../barraCarregamento/BarraCarregamento";

const ModalDeCarregamento = (props) => {
  return (
    <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
         style={{ display: props.dsp, backgroundColor: 'rgba(0,0,0,0.5)' }} role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{props.titulo}</h1>
          </div>
          <div className="modal-body">
            <BarraCarregamento conteudo={props.conteudo} esconderModal={props.esconderModal} setEspacar={props.setEspacar} manipuladorDeImpressao={props.manipuladorDeImpressao} setConteudoModal={props.setConteudoModal} />
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDeCarregamento;
