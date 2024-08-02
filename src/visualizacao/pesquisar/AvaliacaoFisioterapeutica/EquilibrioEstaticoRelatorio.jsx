import React, {useState, useEffect} from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable, CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react';
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_EQUILIBRIO_ESTATICO_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import {equilibrioEstatico} from "../../../constantes/Constantes";

const SaudeGeralDoPraticanteRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    apoioCabeca: '',
    comentariosApoioCabeca: '',
    sentarSemApoio: '',
    comentariosSentarSemApoio: '',
    sentarComApoio: '',
    comentariosSentarComApoio: '',
    emPeSemApoio: '',
    comentariosEmPeSemApoio: '',
    emPeComApoio: '',
    comentariosEmPeComApoio: '',
    posicaoDeSentinelaOlhosAbertos: '',
    comentariosPosicaoDeSentinelaOlhosAbertos: '',
    posicaoDeSentinelaOlhosFechados: '',
    comentariosPosicaoDeSentinelaOlhosFechados: '',
    umPeOlhosAbertos: '',
    comentariosUmPeOlhosAbertos: '',
    umPeOlhosFechados: '',
    comentariosUmPeOlhosFechados: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_EQUILIBRIO_ESTATICO_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Equilíbrio Estático</strong>
      </CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell></CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Nenhuma Dificuldade</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Alguma Dificuldade</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Bastante Dificuldade</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Não Realiza</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Comentário</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>Sustento da cabeça</CTableDataCell>
              <CTableDataCell>{dados.apoioCabeca === equilibrioEstatico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.apoioCabeca === equilibrioEstatico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.apoioCabeca === equilibrioEstatico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.apoioCabeca === equilibrioEstatico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosApoioCabeca}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Senta-se sem apoio</CTableDataCell>
              <CTableDataCell>{dados.sentarSemApoio === equilibrioEstatico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.sentarSemApoio === equilibrioEstatico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.sentarSemApoio === equilibrioEstatico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.sentarSemApoio === equilibrioEstatico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosSentarSemApoio}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Senta-se com apoio</CTableDataCell>
              <CTableDataCell>{dados.sentarComApoio === equilibrioEstatico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.sentarComApoio === equilibrioEstatico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.sentarComApoio === equilibrioEstatico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.sentarComApoio === equilibrioEstatico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosSentarComApoio}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Posição ortostática - sem apoio</CTableDataCell>
              <CTableDataCell>{dados.emPeSemApoio === equilibrioEstatico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.emPeSemApoio === equilibrioEstatico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.emPeSemApoio === equilibrioEstatico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.emPeSemApoio === equilibrioEstatico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosEmPeSemApoio}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Posição ortostática - com apoio</CTableDataCell>
              <CTableDataCell>{dados.emPeComApoio === equilibrioEstatico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.emPeComApoio === equilibrioEstatico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.emPeComApoio === equilibrioEstatico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.emPeComApoio === equilibrioEstatico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosEmPeComApoio}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Posição militar - olhos abertos</CTableDataCell>
              <CTableDataCell>{dados.posicaoDeSentinelaOlhosAbertos === equilibrioEstatico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.posicaoDeSentinelaOlhosAbertos === equilibrioEstatico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.posicaoDeSentinelaOlhosAbertos === equilibrioEstatico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.posicaoDeSentinelaOlhosAbertos === equilibrioEstatico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosPosicaoDeSentinelaOlhosAbertos}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Posição militar - olhos fechados</CTableDataCell>
              <CTableDataCell>{dados.posicaoDeSentinelaOlhosFechados === equilibrioEstatico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.posicaoDeSentinelaOlhosFechados === equilibrioEstatico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.posicaoDeSentinelaOlhosFechados === equilibrioEstatico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.posicaoDeSentinelaOlhosFechados === equilibrioEstatico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosPosicaoDeSentinelaOlhosFechados}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Em um pé só - olhos abertos</CTableDataCell>
              <CTableDataCell>{dados.umPeOlhosAbertos === equilibrioEstatico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.umPeOlhosAbertos === equilibrioEstatico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.umPeOlhosAbertos === equilibrioEstatico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.umPeOlhosAbertos === equilibrioEstatico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosUmPeOlhosAbertos}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Em um pé só - olhos fechados</CTableDataCell>
              <CTableDataCell>{dados.umPeOlhosFechados === equilibrioEstatico[0].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.umPeOlhosFechados === equilibrioEstatico[1].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.umPeOlhosFechados === equilibrioEstatico[2].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.umPeOlhosFechados === equilibrioEstatico[3].value ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.comentariosUmPeOlhosFechados}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default SaudeGeralDoPraticanteRelatorio;
