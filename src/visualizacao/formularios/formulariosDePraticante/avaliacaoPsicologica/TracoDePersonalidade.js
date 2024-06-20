import React, {useState} from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormLabel,
    CRow,
    CFormSelect,
} from '@coreui/react';
import axios from 'axios';

const TracoDePersonalidade = () => {
    const [formData, setFormData] = useState({
        extroversao: '',
        fobia: '',
        obsessao: '',
        introversao: '',
        ansiedade: '',
        histeria: '',
        dependenciaEmocional: '',
        timidez: '',
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
            console.log('Aspectos emocionais salvos com sucesso:', response.data);
        } catch (error) {
            console.log('Erro ao salvar os aspectos emocionais:', error);
        }
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Traços de Personalidade</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CFormLabel htmlFor="extroversao">Extroversão</CFormLabel>
                                <CFormSelect
                                    id="extroversao"
                                    value={formData.extroversao}
                                    onChange={(e) =>
                                        setFormData({...formData, extroversao: e.target.value})
                                    }
                                >
                                    <option value="">Selecionar</option>
                                    <option value="SIM">Sim</option>
                                    <option value="NAO">Não</option>
                                    <option value="NAO_OBSERVADO">Não Observado</option>
                                    <option value="PARCIALMENTE">Parcialmente</option>
                                </CFormSelect>
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="fobia">Fobia</CFormLabel>
                                <CFormSelect
                                    id="fobia"
                                    value={formData.fobia}
                                    onChange={(e) =>
                                        setFormData({...formData, fobia: e.target.value})
                                    }
                                >
                                    <option value="">Selecionar</option>
                                    <option value="SIM">Sim</option>
                                    <option value="NAO">Não</option>
                                    <option value="NAO_OBSERVADO">Não Observado</option>
                                    <option value="PARCIALMENTE">Parcialmente</option>
                                </CFormSelect>
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="obsessao">Obsessão</CFormLabel>
                                <CFormSelect
                                    id="obsessao"
                                    value={formData.obsessao}
                                    onChange={(e) =>
                                        setFormData({...formData, obsessao: e.target.value})
                                    }
                                >
                                    <option value="">Selecionar</option>
                                    <option value="SIM">Sim</option>
                                    <option value="NAO">Não</option>
                                    <option value="NAO_OBSERVADO">Não Observado</option>
                                    <option value="PARCIALMENTE">Parcialmente</option>
                                </CFormSelect>
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="introversao">Introversão</CFormLabel>
                                <CFormSelect
                                    id="introversao"
                                    value={formData.introversao}
                                    onChange={(e) =>
                                        setFormData({...formData, introversao: e.target.value})
                                    }
                                >
                                    <option value="">Selecionar</option>
                                    <option value="SIM">Sim</option>
                                    <option value="NAO">Não</option>
                                    <option value="NAO_OBSERVADO">Não Observado</option>
                                    <option value="PARCIALMENTE">Parcialmente</option>
                                </CFormSelect>
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="ansiedade">Ansiedade</CFormLabel>
                                <CFormSelect
                                    id="ansiedade"
                                    value={formData.ansiedade}
                                    onChange={(e) =>
                                        setFormData({...formData, ansiedade: e.target.value})
                                    }
                                >
                                    <option value="">Selecionar</option>
                                    <option value="SIM">Sim</option>
                                    <option value="NAO">Não</option>
                                    <option value="NAO_OBSERVADO">Não Observado</option>
                                    <option value="PARCIALMENTE">Parcialmente</option>
                                </CFormSelect>
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="histeria">Histeria</CFormLabel>
                                <CFormSelect
                                    id="histeria"
                                    value={formData.histeria}
                                    onChange={(e) =>
                                        setFormData({...formData, histeria: e.target.value})
                                    }
                                >
                                    <option value="">Selecionar</option>
                                    <option value="SIM">Sim</option>
                                    <option value="NAO">Não</option>
                                    <option value="NAO_OBSERVADO">Não Observado</option>
                                    <option value="PARCIALMENTE">Parcialmente</option>
                                </CFormSelect>
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="dependenciaEmocional">Dependência Emocional</CFormLabel>
                                <CFormSelect
                                    id="dependenciaEmocional"
                                    value={formData.dependenciaEmocional}
                                    onChange={(e) =>
                                        setFormData({...formData, dependenciaEmocional: e.target.value})
                                    }
                                >
                                    <option value="">Selecionar</option>
                                    <option value="SIM">Sim</option>
                                    <option value="NAO">Não</option>
                                    <option value="NAO_OBSERVADO">Não Observado</option>
                                    <option value="PARCIALMENTE">Parcialmente</option>
                                </CFormSelect>
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="timidez">Timidez</CFormLabel>
                                <CFormSelect
                                    id="timidez"
                                    value={formData.timidez}
                                    onChange={(e) =>
                                        setFormData({...formData, timidez: e.target.value})
                                    }
                                >
                                    <option value="">Selecionar</option>
                                    <option value="SIM">Sim</option>
                                    <option value="NAO">Não</option>
                                    <option value="NAO_OBSERVADO">Não Observado</option>
                                    <option value="PARCIALMENTE">Parcialmente</option>
                                </CFormSelect>
                            </div>

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

export default TracoDePersonalidade;

