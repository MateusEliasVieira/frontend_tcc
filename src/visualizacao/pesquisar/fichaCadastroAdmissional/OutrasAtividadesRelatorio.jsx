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
import {useEffect, useState} from "react";
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POR_ID_GET,
  BUSCAR_OUTRAS_ATIVIDADE_TARDE_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints";

const OutrasAtividadesRelatorio = ({idUsuario}) => {
  const [dadosMatutino, setDadosMatutino] = useState({
    segundaFeira: '',
    tercaFeira: '',
    quartaFeira: '',
    quintaFeira: '',
    sextaFeira: '',
    sabado: '',
    domingo: '',
    praticante: {
      idPraticante: '',
    },
  });
  const [dadosVespertino, setDadosVespertino] = useState({
    segundaFeira: '',
    tercaFeira: '',
    quartaFeira: '',
    quintaFeira: '',
    sextaFeira: '',
    sabado: '',
    domingo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDadosMatutino = async () => {
      await buscarDadosPraticante(BUSCAR_OUTRAS_ATIVIDADE_MANHA_DO_PRATICANTE_POR_ID_GET, setDadosMatutino, idUsuario);
    };
    buscarDadosMatutino();
  }, [idUsuario]);

  useEffect(() => {
    const buscarDadosVespertino = async () => {
      await buscarDadosPraticante(BUSCAR_OUTRAS_ATIVIDADE_TARDE_DO_PRATICANTE_POR_ID_GET, setDadosVespertino, idUsuario);
    };
    buscarDadosVespertino()
  }, [idUsuario]);

  return(
    <CCard>
      <CCardHeader>
        <strong>Cronograma de atividade do Praticante em outras instituições:</strong>
      </CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableHeaderCell>Turno/dia</CTableHeaderCell>
            <CTableHeaderCell>Segunda</CTableHeaderCell>
            <CTableHeaderCell>Terça</CTableHeaderCell>
            <CTableHeaderCell>Quarta</CTableHeaderCell>
          <CTableHeaderCell>Quinta</CTableHeaderCell>
            <CTableHeaderCell>Sexta</CTableHeaderCell>
            <CTableHeaderCell>Sábado</CTableHeaderCell>
            <CTableHeaderCell>Domingo</CTableHeaderCell>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>Matutino</CTableDataCell>
              <CTableDataCell>{dadosMatutino.segundaFeira}</CTableDataCell>
              <CTableDataCell>{dadosMatutino.tercaFeira}</CTableDataCell>
              <CTableDataCell>{dadosMatutino.quartaFeira}</CTableDataCell>
              <CTableDataCell>{dadosMatutino.quintaFeira}</CTableDataCell>
              <CTableDataCell>{dadosMatutino.sextaFeira}</CTableDataCell>
              <CTableDataCell>{dadosMatutino.sabado}</CTableDataCell>
              <CTableDataCell>{dadosMatutino.domingo}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Vespertino</CTableDataCell>
              <CTableDataCell>{dadosVespertino.segundaFeira}</CTableDataCell>
              <CTableDataCell>{dadosVespertino.tercaFeira}</CTableDataCell>
              <CTableDataCell>{dadosVespertino.quartaFeira}</CTableDataCell>
              <CTableDataCell>{dadosVespertino.quintaFeira}</CTableDataCell>
              <CTableDataCell>{dadosVespertino.sextaFeira}</CTableDataCell>
              <CTableDataCell>{dadosVespertino.sabado}</CTableDataCell>
              <CTableDataCell>{dadosVespertino.domingo}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export {OutrasAtividadesRelatorio}
