import React from 'react'
import {useState} from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CRow,
} from '@coreui/react'
import {estados, tipoSanguineo, corOuRaca} from "../../../../constantes/Constantes"
import axios from "axios";
import {SALVAR_DADOS_PESSOAIS__POST} from "../../../../endpoints/paciente/fichaCadastroAdmissional/Endpoints";

const DadosPessoais = (props) => {

    const [formData, setFormData] = useState(
        {
            nomeCompleto: "",
            diagnosticoClinico: "",
            queixaPrincipal: "",
            cid: "",
            dataNascimento: "",
            peso: "",
            tipoSanguineo: "",
            fatorRH: "",
            altura: "",
            sexo: "",
            naturalidade: "",
            corOuRaca: "",
            cpf: "",
            cartaoSUS: "",
            enderecoResidencial: "",
            bairro: "",
            cidade: "",
            cep: ""
        }
    );

  // Verifica se todos os dados foram preenchidos
  const isFormDataEmpty = () => {
    for (const key in formData) {
      if (formData[key] === "") {
        return true; // Retorna true se encontrar um valor vazio
      }
    }
    return false; // Retorna false se nenhum valor vazio for encontrado
  };

    // Função para aplicar a máscara de CPF
    const aplicaMascaraDeCPF = (value) => {
        return value
            .replace(/\D/g, '') // Remove caracteres não numéricos
            .slice(0, 11) // Limita a 11 caracteres (incluindo os pontos e traço)
            .replace(/(\d{3})(\d)/, '$1.$2') // Insere o primeiro ponto após o terceiro dígito
            .replace(/(\d{3})(\d)/, '$1.$2') // Insere o segundo ponto após o sexto dígito
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere o traço após o nono dígito
    };
    // Função para aplicar a máscara cartão do SUS
    const aplicaMascaraDeCartaoDoSUS = (value) => {
        return value
            .replace(/\D/g, '') // Remove caracteres não numéricos
            .slice(0, 15) // Limita a 15 caracteres (número total de dígitos do cartão SUS)
            .replace(/(\d{3})(\d{4})(\d{4})(\d{4})$/, '$1 $2 $3 $4'); // Adiciona espaços para separar os grupos de 4 dígitos
    };
    // Função para aplicar a máscara de CEP
    const aplicaMascaraDeCEP = (value) => {
        return value
            .replace(/\D/g, '') // Remove caracteres não numéricos
            .slice(0, 8) // Limita a 8 caracteres (incluindo o hífen)
            .replace(/(\d{5})(\d{1,3})$/, '$1-$2'); // Insere o hífen após os primeiros 5 dígitos
    };
    const salvar = async () => {
      if(isFormDataEmpty() === false){
        try {
            const response = await axios.post(
                SALVAR_DADOS_PESSOAIS__POST,
                JSON.stringify(formData),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            if(response.data.paciente.idPaciente != null){
              localStorage.setItem("idPraticanteSalvo",response.data.paciente.idPaciente)
              alert('Dados salvos com sucesso');
            }else{
              alert("Houve um erro interno do sistema!")
            }
            console.log(response.data)
        } catch (error) {
          console.log("erro = "+error)
          if (error.response.data?.lista) {
            for(let i = 0; i < error.response.data.lista.length; i++){
              alert(error.response.data.lista[i].nomeCampo+", "+error.response.data.lista[i].mensagem)
            }
          } else {
            alert(error.response.data?.title || "Erro desconhecido");
          }
          console.log('Erro ao salvar os dados:', error);
        }
      }else{
        alert("Preencha todos os campos vazios!")
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

                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">CID</CFormLabel>
                            <CFormInput type="text" value={formData.cid} onChange={(e) => {
                                setFormData({...formData, cid: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Nome Completo</CFormLabel>
                            <CFormInput type="text" value={formData.nomeCompleto} onChange={(e) => {
                                setFormData({...formData, nomeCompleto: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Diagnóstico Clínico</CFormLabel>
                            <CFormInput type="text" value={formData.diagnosticoClinico} onChange={(e) => {
                                setFormData({...formData, diagnosticoClinico: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Queixa Principal</CFormLabel>
                            <CFormInput type="text" value={formData.queixaPrincipal} onChange={(e) => {
                                setFormData({...formData, queixaPrincipal: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Data de Nascimento</CFormLabel>
                            <CFormInput type="date" value={formData.dataNascimento} onChange={(e) => {
                                setFormData({...formData, dataNascimento: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Peso</CFormLabel>
                            <CFormInput type="number" value={formData.peso} onChange={(e) => {
                                setFormData({...formData, peso: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Altura</CFormLabel>
                            <CFormInput type="number" value={formData.altura} onChange={(e) => {
                                setFormData({...formData, altura: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Tipo Sanguíneo</CFormLabel>
                            <CFormSelect options={tipoSanguineo} value={formData.tipoSanguineo} onChange={(e) => {
                                setFormData({...formData, tipoSanguineo: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Cor/Raça</CFormLabel>
                            <CFormSelect options={corOuRaca} value={formData.corOuRaca} onChange={(e) => {
                                setFormData({...formData, corOuRaca: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Fator RH</CFormLabel>
                            <CFormInput type="text" value={formData.fatorRH} onChange={(e) => {
                                setFormData({...formData, fatorRH: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="flexRadioDefault1">Sexo</CFormLabel>
                            <CFormCheck
                                type="radio"
                                id="flexRadioDefault1"
                                name="sexo"
                                label="Masculino"
                                value="MASCULINO"
                                checked={formData.sexo === 'MASCULINO'}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setFormData({...formData, sexo: e.target.value});
                                    }
                                }}
                            />
                            <CFormCheck
                                type="radio"
                                id="flexRadioDefault2"
                                name="sexo"
                                label="Feminino"
                                value="FEMININO"
                                checked={formData.sexo === 'FEMININO'}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setFormData({...formData, sexo: e.target.value});
                                    }
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Naturalidade</CFormLabel>
                            <CFormSelect options={estados} value={formData.naturalidade} onChange={(e) => {
                                setFormData({...formData, naturalidade: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">CPF</CFormLabel>
                            <CFormInput
                                type="text"
                                name="cpf"
                                value={formData.cpf}
                                onChange={(e) => {
                                    const maskedValue = aplicaMascaraDeCPF(e.target.value);
                                    setFormData({...formData, cpf: maskedValue});
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Nº Cartão do SUS</CFormLabel>
                            <CFormInput
                                type="text"
                                name="sus"
                                value={formData.cartaoSUS}
                                onChange={(e) => {
                                    const maskedValue = aplicaMascaraDeCartaoDoSUS(e.target.value);
                                    setFormData({...formData, cartaoSUS: maskedValue});
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Endereço Residencial</CFormLabel>
                            <CFormInput type="text" value={formData.enderecoResidencial} onChange={(e) => {
                                setFormData({...formData, enderecoResidencial: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Bairro</CFormLabel>
                            <CFormInput type="text" value={formData.bairro} onChange={(e) => {
                                setFormData({...formData, bairro: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Cidade</CFormLabel>
                            <CFormInput type="text" value={formData.cidade} onChange={(e) => {
                                setFormData({...formData, cidade: e.target.value})
                            }}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">CEP</CFormLabel>
                            <CFormInput value={formData.cep}
                                        onChange={(e) => {
                                            const maskedValue = aplicaMascaraDeCEP(e.target.value);
                                            setFormData({...formData, cep: maskedValue});
                                        }}/>
                        </div>
                        <CButton color="primary"
                                 onClick={
                                     () => {
                                         salvar()
                                     }
                                 }
                        >Salvar</CButton>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default DadosPessoais
