import React, {useEffect, useRef, useState} from "react";
import {CButton, CCard, CCardBody, CCardHeader} from "@coreui/react";

import Campo from "../campos/Campo";
import {simOuNao} from "../../constantes/Constantes";
import axios, {HttpStatusCode} from "axios";
import {SALVAR_EVOLUCAO_DO_PRATICANTE_POST} from "../../endpoints/praticante/evolucao/Endpoint";

const ModalParaEvoluir = (props) => {

  const login = JSON.parse(localStorage.getItem('login'));

  const [dados, setDados] = useState({
    data: '',
    observacao: '',
    estavaPresente: '',
    praticante: {
      idPraticante: ''
    }
  })

  useEffect(() => {
    setDados(prevDados => ({
      ...prevDados,
      praticante: {
        ...prevDados.praticante,
        idPraticante: props.idPraticante // substitua 'novoValor' pelo valor desejado
      }
    }));
  }, []);

  const salvarEvolucao = () => {
    if (dados.praticante.idPraticante) {
      axios.post(SALVAR_EVOLUCAO_DO_PRATICANTE_POST,
        JSON.stringify({...dados}),
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${login.token}`
          },
        })
        .then((response) => {
          if (response.status === HttpStatusCode.Created) {
            alert("Praticante evoluido com sucesso!")
          } else {
            alert("Erro ao evoluir praticante!")
          }
        })
        .catch(() => {
          alert("Erro ao evoluir praticante!")
        })
    } else {
      alert("Erro ao evoluir praticante!")
    }
  }


  return (

    <div>
      <div>
        <button
          title={`Gerar gráfico de linhas para ${props.nomeCompleto}`}
          type="button"
          style={{border: "none", background: "none"}}
          data-toggle="modal"
          data-target={`#modalLine-${props.nomeCompleto}-evolucao`} // ID único para cada praticante
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
        id={`modalLine-${props.nomeCompleto}-evolucao`} // ID único para a modal
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <CCard>
              <CCardHeader>
                <strong>Evoluir Praticante / {props.nomeCompleto}</strong>
              </CCardHeader>
              <CCardBody>
                <Campo
                  id="dataEvolucao"
                  legenda="Data"
                  tipo="date"
                  valor={dados.data}
                  setar={(e) => {
                    setDados({...dados, data: e.target.value})
                  }}
                />
                <Campo
                  legenda="Observações"
                  id="observacoes"
                  tipo="textarea"
                  valor={dados.observacao}
                  setar={(e) => setDados({...dados, observacao: e.target.value})}
                />
                <Campo
                  legenda="Presente?"
                  id="observacoes"
                  tipo="select"
                  opcoes={simOuNao}
                  valor={dados.estavaPresente}
                  setar={(e) => setDados({...dados, estavaPresente: e.target.value})}
                />
                <CButton color="danger" style={{color:"white"}} onClick={() => {
                  salvarEvolucao()
                }}>Evoluir {props.nomeCompleto}</CButton>
              </CCardBody>
            </CCard>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalParaEvoluir;
