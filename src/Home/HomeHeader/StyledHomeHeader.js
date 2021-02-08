import styled from 'styled-components';

import { StyledButton } from 'components/Button/StyledButton';

export const StyledHomeHeader = styled.div`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  padding: 0 20px;
  margin-top: 30px;
  margin-bottom: 55px;
  max-width: 660px;
  width: calc(100% - 40px);
`;

export const StyledLogo = styled.img`
  width: 156px;
  height: 50px;
`;
