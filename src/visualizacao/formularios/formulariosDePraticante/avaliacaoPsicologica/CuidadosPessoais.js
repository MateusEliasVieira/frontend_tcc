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

const CuidadosPessoais = () => {
    const [formData, setFormData] = useState({
        higienePessoalSozinho: '',
        vesteRoupasCalcadosSozinho: '',
        seAlimentaSozinho: '',
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
            console.log('Dados de cuidados pessoais salvos com sucesso:', response.data);
        } catch (error) {
            console.log('Erro ao salvar os dados de cuidados pessoais:', error);
        }
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Cuidados Pessoais</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CFormLabel htmlFor="higienePessoalSozinho">Executa higiene pessoal sozinho(a)</CFormLabel>
                                <CFormSelect
                                    id="higienePessoalSozinho"
                                    value={formData.higienePessoalSozinho}
                                    onChange={(e) =>
                                        setFormData({...formData, higienePessoalSozinho: e.target.value})
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
                                <CFormLabel htmlFor="vesteRoupasCalcadosSozinho">Veste as roupas/sapatos sozinho(a)</CFormLabel>
                                <CFormSelect
                                    id="vesteRoupasCalcadosSozinho"
                                    value={formData.vesteRoupasCalcadosSozinho}
                                    onChange={(e) =>
                                        setFormData({...formData, vesteRoupasCalcadosSozinho: e.target.value})
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
                                <CFormLabel htmlFor="seAlimentaSozinho">Se alimenta sozinho(a)</CFormLabel>
                                <CFormSelect
                                    id="seAlimentaSozinho"
                                    value={formData.seAlimentaSozinho}
                                    onChange={(e) =>
                                        setFormData({...formData, seAlimentaSozinho: e.target.value})
                                    }
                                >
                                    <option value="">Selecionar</option>
                                    <option value="SIM">Sim</option>
                                    <option value="NAO">Não</option>
                                    <option value="NAO_OBSERVADO">Não Observado</option>
                                    <option value="PARCIALMENTE">Parcialmente</option>
                                </CFormSelect>
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

export default CuidadosPessoais;
