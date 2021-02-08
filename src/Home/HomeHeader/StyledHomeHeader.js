import styled from 'styled-components';

import { StyledButton } from 'components/Button/StyledButton';

export const StyledHomeHeader = styled.div`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  width: 100%;
  padding: 0 20px !important;
  margin-top: 30px;
  margin-bottom: 55px;
  max-width: 660px;
`;

export const StyledLogo = styled.img`
  width: 156px;
  height: 50px;
`;
