import React from 'react';
import InputMask from 'react-input-mask';

const PhoneInput = ({ value, onChange, label, placeholder, disabled }) => {
  return (
    <div className={`input-text ${disabled && 'opacity-10'}`}>
      { label ? <label className="body body-7 font-color-bld opacity-10">{ label }</label> :<></> }
      <InputMask
        className="pt-2 pb-2"
        mask="+7 (999) 999-99-99"
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={val => onChange(val.target.value)}
      />
    </div>
  );
};

export default PhoneInput;
