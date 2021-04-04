import styled from 'styled-components';

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  padding: 20px 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledFooter = styled.div`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  padding: 0 20px;
  margin-top: 60px;
  margin-bottom: 55px;
  max-width: 660px;
  width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  justify-self: flex-end;
`;
