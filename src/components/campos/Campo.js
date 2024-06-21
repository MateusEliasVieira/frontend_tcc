import { CFormInput, CFormLabel, CFormSelect, CFormTextarea } from "@coreui/react";
import React from "react";

const Campo = (props) => {
  const renderField = () => {
    switch (props.tipo) {
      case 'select':
        return (
          <CFormSelect
            id={props.id}
            value={props.valor}
            onChange={props.setar}
          >
            {props.options.map((option, index) => (
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
