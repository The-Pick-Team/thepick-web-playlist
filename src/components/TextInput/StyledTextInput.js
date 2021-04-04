import styled from 'styled-components';

import { styledMap } from 'utils/styledMap';

export const INPUT_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TITLE: 'title',
};
const VARIANT_PROP_NAME = 'variant';

const backgroundColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: theme.palette.primary.dark,
    [INPUT_VARIANTS.SECONDARY]: theme.palette.secondary.dark,
    [INPUT_VARIANTS.TITLE]: theme.palette.primary.dark,
  });

const textColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: theme.palette.common.white,
    [INPUT_VARIANTS.SECONDARY]: theme.palette.common.white,
    [INPUT_VARIANTS.TITLE]: theme.palette.common.white,
  });

const borderColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: theme.palette.common.white,
    [INPUT_VARIANTS.SECONDARY]: theme.palette.common.black,
    [INPUT_VARIANTS.TITLE]: theme.palette.primary.dark,
  });

const hoverBackgroundColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: theme.palette.primary.main,
    [INPUT_VARIANTS.SECONDARY]: theme.palette.secondary.main,
    [INPUT_VARIANTS.TITLE]: theme.palette.secondary.dark,
  });

const fontSize = () =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: 18,
    [INPUT_VARIANTS.SECONDARY]: 18,
    [INPUT_VARIANTS.TITLE]: 36,
  });

const lineHeight = () =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: 27,
    [INPUT_VARIANTS.SECONDARY]: 27,
    [INPUT_VARIANTS.TITLE]: 42,
  });

const fontWeight = () =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: '400',
    [INPUT_VARIANTS.SECONDARY]: '400',
    [INPUT_VARIANTS.TITLE]: 'bold',
  });

const padding = () =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: '17px 20px',
    [INPUT_VARIANTS.SECONDARY]: '17px 20px',
    [INPUT_VARIANTS.TITLE]: '0 0',
  });

const margin = () =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: '0 0 20px 0',
    [INPUT_VARIANTS.SECONDARY]: '0 0 20px 0',
    [INPUT_VARIANTS.TITLE]: '0 0',
  });

export const StyledTextInput = styled.input`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: ${margin};
  padding: ${padding};
  color: ${textColor};
  min-width: 0;
  font-weight: ${fontWeight};
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
  letter-spacing: 0.16px;

  background-color: ${backgroundColor} !important;
  box-sizing: border-box;
  border-color: ${borderColor};
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  outline: none;
  &:hover {
    background-color: ${hoverBackgroundColor};
    cursor: pointer;
  }
`;

const wrapperPadding = () =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: '0 20px',
    [INPUT_VARIANTS.SECONDARY]: '0 20px',
    [INPUT_VARIANTS.TITLE]: '0 0',
  });

const wrapperMargin = () =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: '30px 0 0 0',
    [INPUT_VARIANTS.SECONDARY]: '30px 0 0 0',
    [INPUT_VARIANTS.TITLE]: '0 0',
  });

const submitColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [INPUT_VARIANTS.PRIMARY]: theme.palette.common.black,
    [INPUT_VARIANTS.SECONDARY]: theme.palette.common.black,
    [INPUT_VARIANTS.TITLE]: theme.palette.common.black,
  });

export const StyledTextInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% - 40px);
  padding: ${wrapperPadding};
  margin: ${wrapperMargin};
  max-width: 660px;
`;

export const StyledLabel = styled.label`
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin: 12px 0;
`;

export const StyledSubmitButton = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.16px;
  padding: 22px 20px;
  margin: ${margin};
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
  background: rgba(255, 255, 255, 0.9);
  color: black;
`;
