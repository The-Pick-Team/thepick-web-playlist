import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { StyledButton } from 'components/Button/StyledButton';

const Ls = {};

Ls.NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
`;

export function StyledLink(props) {
  const { to, name, children } = props;
  return <Ls.NavLink to={to}>{children}</Ls.NavLink>;
}

export const StyledAppHeader = styled.div`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  padding: 0 20px;
  margin-top: 30px;
  margin-bottom: 55px;
  max-width: 660px;
  width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.img`
  width: 156px;
  height: 50px;
`;
