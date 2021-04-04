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
  refreshOnSubmit,
  disabledSubmit,
}) {
  const [value, setValue] = useState();
  const [defaultValueChanged, setDefaultValueChanged] = useState(false);

  useEffect(() => {
    if (!defaultValueChanged && defaultValue.length > 0) {
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
    if (!disabledSubmit) {
      if (refreshOnSubmit) {
        setValue('');
      }
      onSubmit();
    }
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
        <StyledSubmitButton type="submit" onClick={handleSubmit} disabledSubmit>
          Generate
        </StyledSubmitButton>
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
  refreshOnSubmit: PropTypes.bool,
  disabledSubmit: PropTypes.bool,
};

TextInput.defaultProps = {
  onSubmit: false,
  label: false,
  showSubmitButton: false,
  defaultValue: '',
  placeholder: '',
  refreshOnSubmit: false,
  disabledSubmit: false,
};

export { INPUT_VARIANTS };
