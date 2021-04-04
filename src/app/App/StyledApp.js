import styled from 'styled-components';

export const StyledApp = styled.div`
  padding-bottom: 100px;
  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme }) => theme.palette.primary.dark};
  display: flex;
  flex-direction: column;
`;
