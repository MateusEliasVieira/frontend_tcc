import React, { useRef } from "react";
import { CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { useReactToPrint } from "react-to-print";

const ModalComEvolucaoGraficoDeLinhas = (props) => {
  const random = () => Math.round(Math.random() * 100);

  const conteudoDocumento = useRef();
  const manipuladorDeImpressao = useReactToPrint({
    content: () => conteudoDocumento.current,
  });

  return (
    <div>
      <div>
        <button
          title={`Gerar gráfico de linhas para ${props.nomeCompleto}`}
          type="button"
          style={{ border: "none", background: "none" }}
          data-toggle="modal"
          data-target={`#modalLine-${props.nomeCompleto}`} // ID único para cada praticante
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-graph-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
            />
          </svg>
        </button>
      </div>

      <div
        className="modal fade"
        id={`modalLine-${props.nomeCompleto}`} // ID único para a modal
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <CCard ref={conteudoDocumento}>
              <CCardHeader>Evolução / {props.nomeCompleto}</CCardHeader>
              <CCardBody>
                <CChartLine
                  data={{
                    labels: [
                      "Jan",
                      "Fev",
                      "Mar",
                      "Abril",
                      "Maio",
                      "Jun",
                      "Jul",
                      "Ago",
                      "Set",
                      "Out",
                      "Nov",
                      "Dez",
                    ],
                    datasets: [
                      {
                        label: "Frequência",
                        backgroundColor: "rgba(151, 187, 205, 0.2)",
                        borderColor: "rgba(151, 187, 205, 1)",
                        pointBackgroundColor: "rgba(151, 187, 205, 1)",
                        pointBorderColor: "#fff",
                        data: [
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                        ],
                      },
                      {
                        label: "Falta",
                        backgroundColor: "rgba(239,10,18,0.2)",
                        borderColor: "rgba(239,10,18,0.2)",
                        pointBackgroundColor: "rgba(239,10,18,0.2)",
                        pointBorderColor: "rgba(239,10,18,0.2)",
                        data: [
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                          random(),
                        ],
                      },
                    ],
                  }}
                />
              </CCardBody>
            </CCard>
            <CButton
              color="danger"
              title="Download do gráfico"
              style={{ color: "white", margin: "10px 30px", width: "100px" }}
              onClick={() => {
                manipuladorDeImpressao();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>
            </CButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComEvolucaoGraficoDeLinhas;
