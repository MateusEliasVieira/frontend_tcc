import {
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BUSCAR_EVOLUCOES_DO_PRATICANTE_POR_ID_GET } from "../../endpoints/praticante/evolucao/Endpoint";
import { apresentarModal } from "../../utilidades/ManipuladorDeModal";
import { formatarDataParaDiaMesAno } from "../../utilidades/ManipuladorDeDatas";

const TabelaEvolucaoPraticante = (props) => {
  const login = JSON.parse(localStorage.getItem('login'));
  const [evolucoes, setEvolucoes] = useState([]);
  const [ativar, setAtivar] = useState(true);

  useEffect(() => {
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
        console.log(erro.response.data);
        setAtivar(false);
        //apresentarModal("Aviso", erro.response.data.titulo, setDisplayModal, setTituloModal, setConteudoModal);
      });
  }, [props.id, login.token]);

  return (
    <>
      {evolucoes.length !== 0 ? (
        <div style={{ maxHeight: '300px', width: '100%', overflowY: 'auto' }}>
          <CTable hover style={{ height: '100px' }}>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell style={{ width: "20px", textAlign: "center" }}>Código</CTableHeaderCell>
                <CTableHeaderCell style={{ width: "100px", textAlign: "center" }}>Data</CTableHeaderCell>
                <CTableHeaderCell style={{ width: "20px", textAlign: "center" }}>Presente?</CTableHeaderCell>
                <CTableHeaderCell style={{ width: "200px", textAlign: "center" }}>Observação</CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            {ativar ? (
              <div className="spinner-border" role="status" style={{ margin: '50px auto', display: 'block' }}>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <CTableBody>
                {evolucoes.map((item, key) => (
                  <CTableRow key={key}>
                    <CTableDataCell style={{ textAlign: "center" }}>{item.idEvolucao}</CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>
                      {formatarDataParaDiaMesAno(item.data)}
                    </CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>
                      <strong>{item.estavaPresente ? 'Sim' : 'Não'}</strong>
                    </CTableDataCell>
                    <CTableDataCell style={{ textAlign: "center" }}>
                      {item.observacao === '' ? 'Nenhuma observação' : item.observacao}
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            )}
          </CTable>
        </div>
      ) : (
        <p>Nenhuma evolução cadastrada no momento!</p>
      )}
    </>
  );
};

export default TabelaEvolucaoPraticante;
