import React, {useEffect, useState} from "react";
import axios from "axios";
import {CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import {BUSCAR_EVOLUCOES_DO_PRATICANTE_POR_ID_GET} from "../../endpoints/praticante/evolucao/Endpoint";
import {formatarDataParaDiaMesAno} from "../../utilidades/ManipuladorDeDatas";

const TabelaEvolucaoPraticante = (props) => {
  const login = JSON.parse(localStorage.getItem('login'));
  const [evolucoes, setEvolucoes] = useState([]);
  const [ativar, setAtivar] = useState(true);

  useEffect(() => {
    const fetchEvolucoes = () => {
      axios.get(BUSCAR_EVOLUCOES_DO_PRATICANTE_POR_ID_GET, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
        params: {
          id: props.id
        }
      })
        .then((response) => {
          setEvolucoes(response.data);
          setAtivar(false);
        })
        .catch((erro) => {
          console.log(erro.response.data.titulo);
          setAtivar(false);
        });
    };

    fetchEvolucoes();
  }, [props.id, login.token, props.refreshTabela]);

  return (
    <>
      {evolucoes.length !== 0 ? (
        <div style={{maxHeight: '300px', width: '100%', overflowY: 'auto'}}>
          <CTable hover style={{height: '100px', zIndex: '1000'}}>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell style={{width: "20px", textAlign: "center"}}>Código</CTableHeaderCell>
                <CTableHeaderCell style={{width: "100px", textAlign: "center"}}>Data</CTableHeaderCell>
                <CTableHeaderCell style={{width: "20px", textAlign: "center"}}>Presente?</CTableHeaderCell>
                <CTableHeaderCell style={{width: "200px", textAlign: "center"}}>Observação</CTableHeaderCell>
                <CTableHeaderCell style={{width: "20px", textAlign: "center"}}>Atualizar</CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            {ativar ? (
              <div className="spinner-border" role="status" style={{margin: '50px auto', display: 'block'}}>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <CTableBody>
                {evolucoes.map((item, key) => (

                  <CTableRow key={key}>
                    <CTableDataCell style={{textAlign: "center"}}>{item.idEvolucao}</CTableDataCell>
                    <CTableDataCell style={{textAlign: "center"}}>
                      {formatarDataParaDiaMesAno(item.data)}
                    </CTableDataCell>
                    <CTableDataCell style={{textAlign: "center"}}>
                      <strong>{item.estavaPresente ? 'Sim' : 'Não'}</strong>
                    </CTableDataCell>
                    <CTableDataCell style={{textAlign: "center"}}>
                      {item.observacao === '' ? 'Nenhuma observação' : item.observacao}
                    </CTableDataCell>
                    <CTableDataCell style={{cursor: 'pointer'}}
                                    title={`Atualizar evolução do dia ${formatarDataParaDiaMesAno(item.data)}`}
                                    onClick={() => {
                                      props.setDisabled(false)
                                      props.setDados(
                                        {
                                          idEvolucao: item.idEvolucao,
                                          data: item.data,
                                          observacao: item.observacao,
                                          estavaPresente: item.estavaPresente,
                                          praticante: {
                                            idPraticante: item.praticante.idPraticante
                                          }
                                        }
                                      )
                                    }}
                    >

                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                           className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                      </svg>

                    </CTableDataCell>
                  </CTableRow>

                ))}
              </CTableBody>
            )}
          </CTable>
        </div>
      ) : (
        <div>
          <br/>
          <p style={{textAlign: 'center', display: 'block'}}><strong>Nenhuma evolução cadastrada no momento!</strong>
          </p>
        </div>
      )}
    </>
  );
};

export default TabelaEvolucaoPraticante;
