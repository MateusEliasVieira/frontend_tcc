import React from "react";

const ModalComOpcoes = (props) => {
  return (
    <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: props.dsp, backgroundColor: 'rgba(0,0,0,0.5)'}} role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{props.titulo}</h1>
            <button type="button" className="btn-close" aria-label="Close" onClick={props.esconderModalDeOpcoes}></button>
          </div>
          <div className="modal-body">
            {props.conteudo}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" style={{color:"white"}} onClick={props.confirmar}>Confirmar</button>
            <button type="button" className="btn btn-danger" style={{color:"white"}} onClick={props.esconderModalDeOpcoes}>Fechar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComOpcoes;
