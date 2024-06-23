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
            value={props.valor}
            onChange={props.setar}
            disabled={props.disabled}
          />
        );
      case 'file':
        return (
          <CFormInput
            id={props.id}
            type="file"
            onChange={props.setar}
          />
        );
      default:
        return (
          <CFormInput
            id={props.id}
            type={props.tipo}
            value={props.valor}
            onChange={props.setar}
          />
        );
    }
  };

  return (
    <div className="mb-3">
      <CFormLabel htmlFor={props.id}>{props.legenda}</CFormLabel>
      {renderField()}
    </div>
  );
};

export default Campo;
