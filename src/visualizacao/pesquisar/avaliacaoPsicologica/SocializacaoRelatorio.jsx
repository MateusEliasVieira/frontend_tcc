import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";
import React, {useEffect, useState} from "react";
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_SOCIALIZACAO_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";

const SocializacaoRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    interageBemComOutrasCriancas: '',
    interageBemComAdultos: '',
    buscaContatoSocial: '',
    temOportunidadeContato: '',
    fazContatoVisual: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_SOCIALIZACAO_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Socialização</strong>
      </CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell></CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Sim</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Não</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Não Observado</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Parcialmente</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell><strong>Interage bem com outras crianças?</strong></CTableDataCell>
              <CTableDataCell>{dados.interageBemComOutrasCriancas === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.interageBemComOutrasCriancas === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.interageBemComOutrasCriancas === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.interageBemComOutrasCriancas === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Interage bem com adultos?</strong></CTableDataCell>
              <CTableDataCell>{dados.interageBemComAdultos === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.interageBemComAdultos === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.interageBemComAdultos === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.interageBemComAdultos === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Busca contato social?</strong></CTableDataCell>
              <CTableDataCell>{dados.buscaContatoSocial === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.buscaContatoSocial === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.buscaContatoSocial === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.buscaContatoSocial === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Tem oportunidade de contato?</strong></CTableDataCell>
              <CTableDataCell>{dados.temOportunidadeContato === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.temOportunidadeContato === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.temOportunidadeContato === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.temOportunidadeContato === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Faz contato visual?</strong></CTableDataCell>
              <CTableDataCell>{dados.fazContatoVisual === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.fazContatoVisual === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.fazContatoVisual === "NAO_OBSERVADO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.fazContatoVisual === "PARCIALMENTE" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export {SocializacaoRelatorio}
