import styled from 'styled-components';

import { StyledButton } from 'components/Button/StyledButton';

export const StyledPlaylistTabs = styled.div`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  padding: 0 0;
  ${StyledButton}:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(3)};
  }
`;

export const StyledPlaylistTabsTitle = styled.h2`
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.165px;
  margin: 12px 0;
`;

export const StyledImage = styled.img`
  height: 24px;
  width: 27px;
  margin-left: 8px;
`;
