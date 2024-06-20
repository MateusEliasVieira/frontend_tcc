import React from "react";

const Modal = (props) => {
  return (
    <div className={props.classModal} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: props.dsp, backgroundColor: 'rgba(0,0,0,0.5)'}} role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{props.title}</h1>
            <button type="button" className="btn-close" aria-label="Close" onClick={props.handleHideModal}></button>
          </div>
          <div className="modal-body">
            {props.message}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={props.handleHideModal}>Fechar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;