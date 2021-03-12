import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';

import {
  INPUT_VARIANTS,
  StyledLabel,
  StyledSubmitButton,
  StyledTextInput,
  StyledTextInputWrapper,
} from './StyledTextInput';

export function TextInput({
  variant,
  label,
  onChange,
  onSubmit,
  showSubmitButton,
  defaultValue,
  placeholder,
}) {
  const [value, setValue] = useState(null);
  const [defaultValueChanged, setDefaultValueChanged] = useState(false);

  useEffect(() => {
    if (!defaultValueChanged && defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValueChanged, defaultValue, setValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (!defaultValueChanged) {
      setDefaultValueChanged(true);
    }
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <StyledTextInputWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledTextInput
        variant={variant}
        type="textarea"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {showSubmitButton && (
        <StyledSubmitButton
          type="submit"
          onClick={handleSubmit}
          value="Generate"
        />
      )}
    </StyledTextInputWrapper>
  );
}

TextInput.propTypes = {
  variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  label: PropTypes.string,
  showSubmitButton: PropTypes.bool,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  onSubmit: false,
  label: false,
  showSubmitButton: false,
  defaultValue: '',
  placeholder: '',
};

export { INPUT_VARIANTS };
