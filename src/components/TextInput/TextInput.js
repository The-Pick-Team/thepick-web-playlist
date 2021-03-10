import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

import {
  INPUT_VARIANTS,
  StyledLabel,
  StyledSubmitButton,
  StyledTextInput,
  StyledTextInputWrapper,
} from './StyledTextInput';

export function TextInput({ variant, label, onChange, onSubmit }) {
  const [value, setValue] = useState(null);
  const handleChange = (e) => {
    console.log('newValue', e.target.value);
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <StyledTextInputWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledTextInput
        variant={variant}
        type="text"
        placeholder="https://music.youtube.com/watch?v=1lyu1KKwC74&feature=share"
        value={value}
        onChange={handleChange}
      />
      {onSubmit && (
        <StyledSubmitButton
          type="submit"
          onSubmit={onSubmit}
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
};

TextInput.defaultProps = {
  onSubmit: false,
  label: false,
};

export { INPUT_VARIANTS };
