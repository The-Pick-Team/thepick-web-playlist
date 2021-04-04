import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Ls = {};

Ls.NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  padding: 20px 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export function StyledLink(props) {
  const { to, children } = props;
  return <Ls.NavLink to={to}>{children}</Ls.NavLink>;
}
StyledLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

StyledLink.defaultProps = {
  to: '',
  children: '',
};

export const StyledLogo = styled.span`
  display: flex;
  align-items: center;
  color: white;
  padding: 20px 10px;
  text-decoration: none;
  cursor: default;
  user-select: none;
`;

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
