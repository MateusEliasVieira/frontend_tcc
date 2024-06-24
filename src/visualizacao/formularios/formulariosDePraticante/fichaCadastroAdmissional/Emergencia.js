import React, {useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import Campo from '../../../../components/campos/Campo'; // Importando o componente Campo
import {simOuNao} from '../../../../constantes/Constantes'; // Ajuste o caminho conforme a estrutura do seu projeto

const Emergencia = () => {

  const[possuiPlanoDeSaude,setPossuiPlanoDeSaude]=useState('')

  const [formData, setFormData] = useState({
    ligarPara: '',
    telefone: '',
    possuiPlanoDeSaude: '',
    plano: '',
  });

  const salvar = async () => {
    const dados = {
      ...formData,
    };

    try {
      const response = await axios.post(
        SEU_ENDPOINT_DE_SALVAR_AQUI,
        JSON.stringify(dados),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Dados salvos com sucesso:', response.data);
    } catch (error) {
      console.log('Erro ao salvar os dados:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Em caso de emergência</strong>
          </CCardHeader>
          <CCardBody>
            <Campo
              tipo="text"
              id="ligarPara"
              valor={formData.ligarPara}
              setar={(e) => setFormData({...formData, ligarPara: e.target.value})}
              legenda="Ligar para"
            />
            <Campo
              tipo="text"
              id="telefone"
              valor={formData.telefone}
              setar={(e) => setFormData({...formData, telefone: e.target.value})}
              legenda="Telefone"
            />
            <Campo
              tipo="select"
              id="possuiPlanoDeSaude"
              valor={formData.possuiPlanoDeSaude}
              setar={(e) => {
                setFormData({...formData, possuiPlanoDeSaude: e.target.value})
                setPossuiPlanoDeSaude(e.target.value)
              }}
              legenda="Possui plano de saúde?"
              opcoes={simOuNao}
            />
            {possuiPlanoDeSaude === 'true' ?
              (<Campo
                tipo="text"
                id="plano"
                valor={formData.plano}
                setar={(e) => setFormData({...formData, plano: e.target.value})}
                legenda="Qual é o plano?"
              />)
              :
              (<></>)
            }
            <CButton color="primary" onClick={salvar}>
              Salvar
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Emergencia;
