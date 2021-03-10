import styled from 'styled-components';

import { styledMap } from 'utils/styledMap';

export const INPUT_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};
const VARIANT_PROP_NAME = 'variant';

const backgroundColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: theme.palette.primary.dark,
    [INPUT_VARIANTS.SECONDARY]: theme.palette.secondary.dark,
  });

const textColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: theme.palette.common.white,
    [INPUT_VARIANTS.SECONDARY]: theme.palette.common.white,
  });

const borderColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: theme.palette.common.white,
    [INPUT_VARIANTS.SECONDARY]: theme.palette.common.black,
  });

const hoverBackgroundColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: theme.palette.primary.main,
    [INPUT_VARIANTS.SECONDARY]: theme.palette.secondary.main,
  });

export const StyledTextInput = styled.input`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  color: ${textColor};
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.16px;
  padding: 17px 20px;
  background-color: ${backgroundColor} !important;
  box-sizing: border-box;
  border-color: ${borderColor};
  border-style: solid;
  font-weight: 400;
  border-width: 1px;
  border-radius: 6px;
  margin-bottom: 20px;
  outline: none;
  &:hover {
    background-color: ${hoverBackgroundColor};
    cursor: pointer;
  }
`;

export const StyledTextInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-top: 30px;
  max-width: 660px;
  width: calc(100% - 40px);
`;

export const StyledLabel = styled.label`
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin: 12px 0;
`;

export const StyledSubmitButton = styled.input`
  display: flex;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.16px;
  padding: 17px 20px;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  margin-bottom: 20px;
  margin-left: 10px;
  cursor: pointer;
`;
