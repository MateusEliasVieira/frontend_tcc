import React, {useState} from 'react';
import {estados, tipoSanguineo, corOuRaca, sexo} from '../../../../constantes/Constantes';
import {
  aplicaMascaraDeCartaoDoSUS,
  aplicaMascaraDeCEP,
  aplicaMascaraDeCPF
} from '../../../../utilidades/ValidadorDeCampos';
import {camposPreenchidos} from '../../../../utilidades/VerificadorDeCampos';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck, CFormSelect,
  CRow
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import axios, {HttpStatusCode} from 'axios';
import {SALVAR_DADOS_PESSOAIS__POST} from '../../../../endpoints/praticante/fichaCadastroAdmissional/Endpoints';

const DadosPessoais = (props) => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    diagnosticoClinico: '',
    queixaPrincipal: '',
    cid: '',
    dataNascimento: '',
    peso: '',
    tipoSanguineo: '',
    fatorRH: '',
    altura: '',
    sexo: '',
    naturalidade: '',
    corOuRaca: '',
    cpf: '',
    cartaoSUS: '',
    enderecoResidencial: '',
    bairro: '',
    cidade: '',
    cep: ''
  });

  const salvar = async () => {
    const login = JSON.parse(localStorage.getItem('login'));
    if (camposPreenchidos(formData)) {
      try {
        const response = await axios.post(
          SALVAR_DADOS_PESSOAIS__POST,
          JSON.stringify(formData),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${login.token}`
            }
          }
        );
        if (response.status === HttpStatusCode.Created) {
          localStorage.setItem('idPraticanteSalvo', response.data.paciente.idPaciente);
          alert('Dados salvos com sucesso');
        } else {
          alert('Não foi possível cadastrar os dados do praticante!');
        }
      } catch (error) {
        if (error.response.data?.lista) {
          error.response.data.lista.forEach((item) => {
            alert(`${item.nomeCampo}, ${item.mensagem}`);
          });
        } else {
          alert(error.response.data?.title || 'Erro desconhecido');
        }
      }
    } else {
      alert('Preencha todos os campos vazios!');
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Dados Pessoais do Praticante</strong>
          </CCardHeader>
          <CCardBody>
            <Campo
              tipo="text"
              id="cid"
              valor={formData.cid}
              setar={(e) => setFormData({...formData, cid: e.target.value})}
              legenda="CID"
            />
            <Campo
              tipo="text"
              id="nomeCompleto"
              valor={formData.nomeCompleto}
              setar={(e) => setFormData({...formData, nomeCompleto: e.target.value})}
              legenda="Nome Completo"
            />
            <Campo
              tipo="text"
              id="diagnosticoClinico"
              valor={formData.diagnosticoClinico}
              setar={(e) => setFormData({...formData, diagnosticoClinico: e.target.value})}
              legenda="Diagnóstico Clínico"
            />
            <Campo
              tipo="text"
              id="queixaPrincipal"
              valor={formData.queixaPrincipal}
              setar={(e) => setFormData({...formData, queixaPrincipal: e.target.value})}
              legenda="Queixa Principal"
            />
            <Campo
              tipo="date"
              id="dataNascimento"
              valor={formData.dataNascimento}
              setar={(e) => setFormData({...formData, dataNascimento: e.target.value})}
              legenda="Data de Nascimento"
            />
            <Campo
              tipo="number"
              id="peso"
              valor={formData.peso}
              setar={(e) => setFormData({...formData, peso: e.target.value})}
              legenda="Peso"
            />
            <Campo
              tipo="number"
              id="altura"
              valor={formData.altura}
              setar={(e) => setFormData({...formData, altura: e.target.value})}
              legenda="Altura"
            />
            <Campo
              tipo="select"
              id="tipoSanguineo"
              valor={formData.tipoSanguineo}
              setar={(e) => setFormData({...formData, tipoSanguineo: e.target.value})}
              legenda="Tipo Sanguíneo"
              opcoes={tipoSanguineo}
            />
            <Campo
              tipo="select"
              id="corOuRaca"
              valor={formData.corOuRaca}
              setar={(e) => setFormData({...formData, corOuRaca: e.target.value})}
              legenda="Cor/Raça"
              opcoes={corOuRaca}
            />
            <Campo
              tipo="text"
              id="fatorRH"
              valor={formData.fatorRH}
              setar={(e) => setFormData({...formData, fatorRH: e.target.value})}
              legenda="Fator RH"
            />
            <Campo
              tipo="select"
              id="sexo"
              legenda="Sexo"
              valor={formData.sexo}
              setar={(e) => setFormData({...formData, sexo: e.target.value})}
              opcoes={sexo}
            />
            <Campo
              tipo="select"
              id="naturalidade"
              valor={formData.naturalidade}
              setar={(e) => setFormData({...formData, naturalidade: e.target.value})}
              legenda="Naturalidade"
              opcoes={estados}
            />
            <Campo
              tipo="text"
              id="cpf"
              valor={formData.cpf}
              setar={(e) => {
                const maskedValue = aplicaMascaraDeCPF(e.target.value);
                setFormData({...formData, cpf: maskedValue});
              }}
              legenda="CPF"
            />
            <Campo
              tipo="text"
              id="cartaoSUS"
              valor={formData.cartaoSUS}
              setar={(e) => {
                const maskedValue = aplicaMascaraDeCartaoDoSUS(e.target.value);
                setFormData({...formData, cartaoSUS: maskedValue});
              }}
              legenda="Nº Cartão do SUS"
            />
            <Campo
              tipo="text"
              id="enderecoResidencial"
              valor={formData.enderecoResidencial}
              setar={(e) => setFormData({...formData, enderecoResidencial: e.target.value})}
              legenda="Endereço Residencial"
            />
            <Campo
              tipo="text"
              id="bairro"
              valor={formData.bairro}
              setar={(e) => setFormData({...formData, bairro: e.target.value})}
              legenda="Bairro"
            />
            <Campo
              tipo="text"
              id="cidade"
              valor={formData.cidade}
              setar={(e) => setFormData({...formData, cidade: e.target.value})}
              legenda="Cidade"
            />
            <Campo
              tipo="text"
              id="cep"
              valor={formData.cep}
              setar={(e) => {
                const maskedValue = aplicaMascaraDeCEP(e.target.value);
                setFormData({...formData, cep: maskedValue});
              }}
              legenda="CEP"
            />
            <CButton color="primary" onClick={salvar}>
              Salvar
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default DadosPessoais;
