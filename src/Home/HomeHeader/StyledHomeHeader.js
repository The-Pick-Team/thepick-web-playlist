import styled from 'styled-components';

import { StyledButton } from 'components/Button/StyledButton';

export const StyledHomeHeader = styled.div`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};

  ${StyledButton}:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(3)};
  }
`;
