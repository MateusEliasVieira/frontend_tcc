import React from 'react';
import {
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
} from '@coreui/react';

const Campo = (props) => {
  const renderField = () => {
    // Verificação para garantir que `props.valor` não seja uma RegExp
    if (props.valor instanceof RegExp) {
      console.error(`Invalid prop valor: ${props.valor} is a RegExp object`);
      return null;
    }

    switch (props.tipo) {
      case 'select':
        return (
          <CFormSelect
            id={props.id}
            value={props.valor}
            onChange={props.setar}
            disabled={props.disabled}
          >
            <option value="">Selecionar</option>
            {props.opcoes.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </CFormSelect>
        );
      case 'textarea':
        return (
          <CFormTextarea
            id={props.id}
            value={props.valor === "NAO_INFORMADO" ? "" : props.valor}
            onChange={props.setar}
            disabled={props.disabled}
            placeholder={props.descricao}
          />
        );
      case 'file':
        return (
          <CFormInput
            id={props.id}
            type="file"
            onChange={props.setar}
            disabled={props.disabled}
          />
        );
      default:
        return (
          <CFormInput
            id={props.id}
            type={props.tipo}
            value={props.valor === "NAO_INFORMADO" ? "" : props.valor}
            onChange={props.setar}
            disabled={props.disabled}
            placeholder={props.descricao}
          />
        );
    }
  };

  return (
    <div className="mb-3">
      <CFormLabel htmlFor={props.id} style={{display:"block",textAlign:"left"}}>{props.legenda}</CFormLabel>
      {renderField()}
    </div>
  );
};

export default Campo;
