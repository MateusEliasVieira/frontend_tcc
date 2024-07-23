import React, {useState, useEffect} from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react';
import {buscarDadosPraticante} from "../../../requisicoes/Praticante";
import {
  BUSCAR_GRUPOS_MUSCULARES_DO_PRATICANTE_POR_ID_GET
} from "../../../endpoints/praticante/avaliacaoFisioterapeutica/Endpoints";
import {gruposMuscularesPontuados} from "../../../constantes/Constantes";

const GruposMuscularesRelatorio = ({idUsuario}) => {

  const[pontuacaoTotal,setPontuacaoTotal]=useState(0)
  const [dados, setDados] = useState({
    flexoresOmbroDireito: '-',
    flexoresOmbroEsquerdo: '-',
    extensoresOmbroDireito: '-',
    extensoresOmbroEsquerdo: '-',
    flexoresCotoveloDireito: '-',
    flexoresCotoveloEsquerdo: '-',
    extensoresCotoveloDireito: '-',
    extensoresCotoveloEsquerdo: '-',
    flexoresPulsoDireito: '-',
    flexoresPulsoEsquerdo: '-',
    extensoresPulsoDireito: '-',
    extensoresPulsoEsquerdo: '-',
    flexoresQuadrilDireito: '-',
    flexoresQuadrilEsquerdo: '-',
    extensoresQuadrilDireito: '-',
    extensoresQuadrilEsquerdo: '-',
    flexoresJoelhoDireito: '-',
    flexoresJoelhoEsquerdo: '-',
    dorsiflexoresTornozeloDireito: '-',
    dorsiflexoresTornozeloEsquerdo: '-',
    plantiflexoresTornozeloDireito: '-',
    plantiflexoresTornozeloEsquerdo: '-',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {
    const calcularPontuacaoTotal = () => {
      let total = 0;
      Object.values(dados).forEach(dado => {
        const grupo = gruposMuscularesPontuados.find(grupo => grupo.value === dado);
        if (grupo) {
          total += grupo.label;
        }
      });
      setPontuacaoTotal(total);
    };
    calcularPontuacaoTotal();
  }, [dados]);

  const pontuacao = (dado) => {
    const grupo = gruposMuscularesPontuados.find((grupo) => grupo.value === dado);
    return grupo ? grupo.label : dado;
  }


  useEffect(() => {
    const buscarDados = async () => {
      await buscarDadosPraticante(BUSCAR_GRUPOS_MUSCULARES_DO_PRATICANTE_POR_ID_GET, setDados, idUsuario);
    };
    buscarDados();
    alert(dados.extensoresOmbroDireito)
  }, [idUsuario]);

  return (
    <CCard>
      <CCardHeader>
        <strong>Grupos Musculares</strong>
      </CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell className="celula-header-tabela">Grupos Musculares</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela" colSpan="2">Escala de Ashworth Modificada</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle"></CTableDataCell>
              <CTableDataCell className="celula-header-tabela"><strong>Direito</strong></CTableDataCell>
              <CTableDataCell className="celula-header-tabela"><strong>Esquerdo</strong></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle">Flexores de Ombro</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{pontuacao(dados.flexoresOmbroDireito)}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{pontuacao(dados.flexoresOmbroEsquerdo)}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle">Extensores de Ombro</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.extensoresOmbroDireito)}</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.extensoresOmbroEsquerdo)}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle">Flexores de Cotovelo</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.flexoresCotoveloDireito)}</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.flexoresCotoveloEsquerdo)}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle">Extensores de Cotovelo</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.extensoresCotoveloDireito)}</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.extensoresOmbroEsquerdo)}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle">Flexores de Punho</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{pontuacao(dados.flexoresPulsoDireito)}</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{pontuacao(dados.flexoresPulsoEsquerdo)}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle">Extensores de Punho</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.extensoresPulsoDireito)}</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.extensoresPulsoEsquerdo)}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle">Flexores de Quadril</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.flexoresQuadrilDireito)}</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.flexoresQuadrilEsquerdo)}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle">Extensores de Quadril</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.extensoresQuadrilDireito)}</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.extensoresQuadrilEsquerdo)}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle">Flexores de Joelho</CTableDataCell>
              <CTableDataCell className="celula-header-tabela">{pontuacao(dados.flexoresJoelhoDireito)}</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.flexoresJoelhoEsquerdo)}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle">Dorsiflexores de Tornozelo</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.dorsiflexoresTornozeloDireito)}</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.dorsiflexoresTornozeloEsquerdo)}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela align-middle">Plantiflexor de Tornozelo</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.plantiflexoresTornozeloDireito)}</CTableDataCell>
              <CTableDataCell
                className="celula-header-tabela">{pontuacao(dados.plantiflexoresTornozeloEsquerdo)}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell className="celula-header-tabela">0 = Tônus Normal</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">1 = Discreto Aumento do Tônus</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">2 = Aumento mais Pronunciado do Tônus</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">3 = Aumento Considerável do Tônus</CTableHeaderCell>
              <CTableHeaderCell className="celula-header-tabela">4 = Articulação Afetada Rígida em Flexão ou Extensão</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell className="celula-header-tabela" colSpan="5">Resultado da Escala de Ashworth Modificada - <strong>Score Obtido = {pontuacaoTotal}</strong></CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default GruposMuscularesRelatorio;
