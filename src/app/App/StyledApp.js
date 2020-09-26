import styled from 'styled-components';

export const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme }) => theme.palette.primary.dark};
`;
