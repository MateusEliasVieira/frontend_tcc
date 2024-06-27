import React, {useState} from 'react';
import {estados, tipoSanguineo, corOuRaca, sexo} from '../../../../constantes/Constantes';
import {
  aplicaMascaraDeCartaoDoSUS,
  aplicaMascaraDeCEP,
  aplicaMascaraDeCPF
} from '../../../../utilidades/ValidadorDeCampos';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {salvarDadosPessoais} from "../../../../requisicoes/Praticante";

const DadosPessoais = (props) => {
  const [formularioDeDados, setFormularioDeDados] = useState({
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
              valor={formularioDeDados.cid}
              setar={(e) => setFormularioDeDados({...formularioDeDados, cid: e.target.value})}
              legenda="CID"
            />
            <Campo
              tipo="text"
              id="nomeCompleto"
              valor={formularioDeDados.nomeCompleto}
              setar={(e) => setFormularioDeDados({...formularioDeDados, nomeCompleto: e.target.value})}
              legenda="Nome Completo"
            />
            <Campo
              tipo="text"
              id="diagnosticoClinico"
              valor={formularioDeDados.diagnosticoClinico}
              setar={(e) => setFormularioDeDados({...formularioDeDados, diagnosticoClinico: e.target.value})}
              legenda="Diagnóstico Clínico"
            />
            <Campo
              tipo="text"
              id="queixaPrincipal"
              valor={formularioDeDados.queixaPrincipal}
              setar={(e) => setFormularioDeDados({...formularioDeDados, queixaPrincipal: e.target.value})}
              legenda="Queixa Principal"
            />
            <Campo
              tipo="date"
              id="dataNascimento"
              valor={formularioDeDados.dataNascimento}
              setar={(e) => setFormularioDeDados({...formularioDeDados, dataNascimento: e.target.value})}
              legenda="Data de Nascimento"
            />
            <Campo
              tipo="number"
              id="peso"
              valor={formularioDeDados.peso}
              setar={(e) => setFormularioDeDados({...formularioDeDados, peso: e.target.value})}
              legenda="Peso"
            />
            <Campo
              tipo="number"
              id="altura"
              valor={formularioDeDados.altura}
              setar={(e) => setFormularioDeDados({...formularioDeDados, altura: e.target.value})}
              legenda="Altura"
            />
            <Campo
              tipo="select"
              id="tipoSanguineo"
              valor={formularioDeDados.tipoSanguineo}
              setar={(e) => setFormularioDeDados({...formularioDeDados, tipoSanguineo: e.target.value})}
              legenda="Tipo Sanguíneo"
              opcoes={tipoSanguineo}
            />
            <Campo
              tipo="select"
              id="corOuRaca"
              valor={formularioDeDados.corOuRaca}
              setar={(e) => setFormularioDeDados({...formularioDeDados, corOuRaca: e.target.value})}
              legenda="Cor/Raça"
              opcoes={corOuRaca}
            />
            <Campo
              tipo="text"
              id="fatorRH"
              valor={formularioDeDados.fatorRH}
              setar={(e) => setFormularioDeDados({...formularioDeDados, fatorRH: e.target.value})}
              legenda="Fator RH"
            />
            <Campo
              tipo="select"
              id="sexo"
              legenda="Sexo"
              valor={formularioDeDados.sexo}
              setar={(e) => setFormularioDeDados({...formularioDeDados, sexo: e.target.value})}
              opcoes={sexo}
            />
            <Campo
              tipo="select"
              id="naturalidade"
              valor={formularioDeDados.naturalidade}
              setar={(e) => setFormularioDeDados({...formularioDeDados, naturalidade: e.target.value})}
              legenda="Naturalidade"
              opcoes={estados}
            />
            <Campo
              tipo="text"
              id="cpf"
              valor={formularioDeDados.cpf}
              setar={(e) => {
                const maskedValue = aplicaMascaraDeCPF(e.target.value);
                setFormularioDeDados({...formularioDeDados, cpf: maskedValue});
              }}
              legenda="CPF"
            />
            <Campo
              tipo="text"
              id="cartaoSUS"
              valor={formularioDeDados.cartaoSUS}
              setar={(e) => {
                const maskedValue = aplicaMascaraDeCartaoDoSUS(e.target.value);
                setFormularioDeDados({...formularioDeDados, cartaoSUS: maskedValue});
              }}
              legenda="Nº Cartão do SUS"
            />
            <Campo
              tipo="text"
              id="enderecoResidencial"
              valor={formularioDeDados.enderecoResidencial}
              setar={(e) => setFormularioDeDados({...formularioDeDados, enderecoResidencial: e.target.value})}
              legenda="Endereço Residencial"
            />
            <Campo
              tipo="text"
              id="bairro"
              valor={formularioDeDados.bairro}
              setar={(e) => setFormularioDeDados({...formularioDeDados, bairro: e.target.value})}
              legenda="Bairro"
            />
            <Campo
              tipo="text"
              id="cidade"
              valor={formularioDeDados.cidade}
              setar={(e) => setFormularioDeDados({...formularioDeDados, cidade: e.target.value})}
              legenda="Cidade"
            />
            <Campo
              tipo="text"
              id="cep"
              valor={formularioDeDados.cep}
              setar={(e) => {
                const maskedValue = aplicaMascaraDeCEP(e.target.value);
                setFormularioDeDados({...formularioDeDados, cep: maskedValue});
              }}
              legenda="CEP"
            />
            <CButton color="primary" onClick={()=>{
              salvarDadosPessoais(formularioDeDados)
            }
            }>
              Salvar
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default DadosPessoais;
