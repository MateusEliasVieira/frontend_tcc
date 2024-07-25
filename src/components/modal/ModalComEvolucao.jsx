import React, {useEffect, useRef} from "react";
import {CButton, CCard, CCardBody, CCardHeader} from "@coreui/react";
import {CChartLine} from "@coreui/react-chartjs";
import {useReactToPrint} from "react-to-print";

const ModalComEvolucao = (props) => {
  const random = () => Math.round(Math.random() * 100)

  const conteudoDocumento = useRef()
  const manipuladorDeImpressao = useReactToPrint({
    content: () => conteudoDocumento.current
  })


  return (
    <div>

      <div>
        <button type="button" style={{border: "none", background: "none"}} data-toggle="modal"
                data-target=".bd-example-modal-lg">
          Visualizar
        </button>
      </div>

      <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <CCard ref={conteudoDocumento}>
              <CCardHeader>Evolução / {props.nomeCompleto}</CCardHeader>
              <CCardBody>
                <CChartLine
                  data={{
                    labels: ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    datasets: [
                      {
                        label: 'Frequência',
                        backgroundColor: 'rgba(151, 187, 205, 0.2)',
                        borderColor: 'rgba(151, 187, 205, 1)',
                        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                        pointBorderColor: '#fff',
                        data: [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()],
                      },
                      {
                        label: 'Falta',
                        backgroundColor: 'rgba(239,10,18,0.2)',
                        borderColor: 'rgba(239,10,18,0.2)',
                        pointBackgroundColor: 'rgba(239,10,18,0.2)',
                        pointBorderColor: 'rgba(239,10,18,0.2)',
                        data: [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()],
                      },
                    ],
                  }}
                />
              </CCardBody>
            </CCard>
            <CButton color="danger"
                     style={{color: "white", margin: "10px 30px",width:"100px"}} onClick={() => {
              manipuladorDeImpressao()
            }}>Download</CButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComEvolucao
