import styled from 'styled-components';

import { styledMap } from 'utils/styledMap';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};
const VARIANT_PROP_NAME = 'variant';

const backgroundColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [BUTTON_VARIANTS.PRIMARY]: theme.palette.primary.dark,
    [BUTTON_VARIANTS.SECONDARY]: theme.palette.secondary.dark,
  });

const textColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [BUTTON_VARIANTS.PRIMARY]: theme.palette.common.white,
    [BUTTON_VARIANTS.SECONDARY]: theme.palette.common.black,
  });

const borderColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [BUTTON_VARIANTS.PRIMARY]: theme.palette.common.white,
    [BUTTON_VARIANTS.SECONDARY]: theme.palette.common.black,
  });

const hoverBackgroundColor = ({ theme }) =>
  styledMap(VARIANT_PROP_NAME, {
    [BUTTON_VARIANTS.PRIMARY]: theme.palette.primary.main,
    [BUTTON_VARIANTS.SECONDARY]: theme.palette.secondary.main,
  });

export const StyledButton = styled.button`
  min-width: 100px;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  color: ${textColor};
  font-weight: bold;
  font-size: 14px;
  background-color: ${backgroundColor};
  border: none;
  border-color: ${borderColor};
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  outline: none;
  &:hover {
    background-color: ${hoverBackgroundColor};
    cursor: pointer;
  }
`;
