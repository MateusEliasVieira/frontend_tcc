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
  BUSCAR_HABILIDADES_MOTORAS_AVD_DO_PRATICANTE_POR_ID_GET,
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";

const HabilidadesMotorasAVDRelatorio = ({idUsuario}) => {

  const [dados, setDados] = useState({
    alcancarObjetos: '',
    consideracoesAlcancarObjetos: '',
    usoBimanual: '',
    consideracoesUsoBimanual: '',
    alimentacaoIndependente: '',
    consideracoesAlimentacaoIndependente: '',
    vestirIndependente: '',
    consideracoesVestirIndependente: '',
    pegarObjetos: '',
    consideracoesPegarObjetos: '',
    negligenciaMembro: '',
    consideracoesNegligenciaMembro: '',
    higienePessoal: '',
    consideracoesHigienePessoal: '',
    andar: '',
    consideracoesAndar: '',
    escritaManual: '',
    consideracoesEscritaManual: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_HABILIDADES_MOTORAS_AVD_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Motricidade/AVD's</strong>
      </CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell></CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Sim</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Não</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">Considerações</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell><strong>Alcance de objetos?</strong></CTableDataCell>
              <CTableDataCell>{dados.alcancarObjetos === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.alcancarObjetos === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesAlcancarObjetos}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Uso bimanual?</strong></CTableDataCell>
              <CTableDataCell>{dados.usoBimanual === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.usoBimanual === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesUsoBimanual}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Alimenta-se?</strong></CTableDataCell>
              <CTableDataCell>{dados.alimentacaoIndependente === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.alimentacaoIndependente === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesAlimentacaoIndependente}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Veste-se?</strong></CTableDataCell>
              <CTableDataCell>{dados.vestirIndependente === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.vestirIndependente === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesVestirIndependente}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Preensão de objetos?</strong></CTableDataCell>
              <CTableDataCell>{dados.pegarObjetos === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.pegarObjetos === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesPegarObjetos}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Negligência de membro?</strong></CTableDataCell>
              <CTableDataCell>{dados.negligenciaMembro === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.negligenciaMembro === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesNegligenciaMembro}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Higieniza-se?</strong></CTableDataCell>
              <CTableDataCell>{dados.higienePessoal === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.higienePessoal === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesHigienePessoal}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><strong>Caminhar?</strong></CTableDataCell>
              <CTableDataCell>{dados.andar === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell>{dados.andar === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{dados.consideracoesAndar}</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableDataCell><strong>Escrita manual?</strong></CTableDataCell>
            <CTableDataCell>{dados.escritaManual === "SIM" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            <CTableDataCell>{dados.escritaManual === "NAO" ? <h3 className="h3-tabela">X</h3> : ""}</CTableDataCell>
            <CTableDataCell className="celula-header-tabela">{dados.consideracoesEscritaManual}</CTableDataCell>
          </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default HabilidadesMotorasAVDRelatorio;
