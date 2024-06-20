import React, {useState} from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm, CFormCheck,
    CFormInput,
    CFormLabel,
    CRow,
} from '@coreui/react';
import axios from 'axios';

const Rotina = () => {
    const [formData, setFormData] = useState({
        brincadeiras: '',
        preferenciasPorBrincadeiras: '',
        aceitaMudancasNaRotina: false,
        consideracoesSobreRotina: '',
        paciente: {
            idPaciente: '',
        },
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
            console.log('Dados de preferências de brincadeiras salvos com sucesso:', response.data);
        } catch (error) {
            console.log('Erro ao salvar os dados de preferências de brincadeiras:', error);
        }
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Preferências de Brincadeiras</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CFormLabel htmlFor="brincadeiras">Brincadeiras (onde, como, com quem?)</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="brincadeiras"
                                    value={formData.brincadeiras}
                                    onChange={(e) =>
                                        setFormData({...formData, brincadeiras: e.target.value})
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="preferenciasPorBrincadeiras">Preferências e Aversões</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="preferenciasPorBrincadeiras"
                                    value={formData.preferenciasPorBrincadeiras}
                                    onChange={(e) =>
                                        setFormData({...formData, preferenciasPorBrincadeiras: e.target.value})
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="aceitaMudancasNaRotina">Aceita Mudanças na sua Rotina?</CFormLabel>
                                <CFormCheck
                                    type="radio"
                                    id="flexRadioDefault1"
                                    name="mudancaRotina"
                                    label="Sim"
                                    value='true'
                                    checked={formData.aceitaMudancasNaRotina === 'true'}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setFormData({...formData, aceitaMudancasNaRotina: e.target.value});
                                        }
                                    }}
                                />
                                <CFormCheck
                                    type="radio"
                                    id="flexRadioDefault2"
                                    name="mudancaRotina"
                                    label="Não"
                                    value='false'
                                    checked={formData.aceitaMudancasNaRotina === 'false'}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setFormData({...formData, aceitaMudancasNaRotina: e.target.value});
                                        }
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="consideracoesSobreRotina">Considerações Sobre Rotina</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="consideracoesSobreRotina"
                                    value={formData.consideracoesSobreRotina}
                                    onChange={(e) =>
                                        setFormData({...formData, consideracoesSobreRotina: e.target.value})
                                    }
                                />
                            </div>
                            {/* Botão para salvar */}
                            <CButton color="primary" onClick={salvar}>
                                Salvar
                            </CButton>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default Rotina;
