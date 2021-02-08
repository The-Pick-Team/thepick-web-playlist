import styled from 'styled-components';

import { styledMap } from 'utils/styledMap';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  PRIMARY_ACTIVE: 'primary_active',
  SECONDARY: 'secondary',
};
const VARIANT_PROP_NAME = 'variant';

const backgroundColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [BUTTON_VARIANTS.PRIMARY]: theme.palette.primary.dark,
    [BUTTON_VARIANTS.PRIMARY_ACTIVE]: theme.palette.common.white,
    [BUTTON_VARIANTS.SECONDARY]: theme.palette.secondary.dark,
  });

const textColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [BUTTON_VARIANTS.PRIMARY]: theme.palette.common.white,
    [BUTTON_VARIANTS.PRIMARY_ACTIVE]: theme.palette.common.black,
    [BUTTON_VARIANTS.SECONDARY]: theme.palette.common.black,
  });

const borderColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [BUTTON_VARIANTS.PRIMARY]: theme.palette.common.grey,
    [BUTTON_VARIANTS.PRIMARY_ACTIVE]: theme.palette.common.dark,
    [BUTTON_VARIANTS.SECONDARY]: theme.palette.common.black,
  });

const hoverBackgroundColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [BUTTON_VARIANTS.PRIMARY]: theme.palette.primary.main,
    [BUTTON_VARIANTS.PRIMARY_ACTIVE]: theme.palette.common.white,
    [BUTTON_VARIANTS.SECONDARY]: theme.palette.secondary.main,
  });

export const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  color: ${textColor};
  font-weight: bold;
  align-items: center;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.16px;
  margin-right: 14px;
  padding: 17px 20px;
  background-color: ${backgroundColor};
  box-sizing: border-box;
  border-color: ${borderColor};
  border-style: solid;
  font-weight: 400;
  border-width: 1px;
  border-radius: 12px;
  margin-bottom: 20px;
  outline: none;
  &:hover {
    background-color: ${hoverBackgroundColor};
    cursor: pointer;
  }
  @media (max-width: 660px) {
    margin: 4px 8px;
    padding: 12px 10px;
    font-size: 10px;
    line-height: 11px;
    width: calc(50% - 32px);
  }
`;
