import styled from 'styled-components';

import { StyledSong } from 'components/Song/StyledSong';

export const StyledSongList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(8)};

  ${StyledSong}:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

export const StyledSongListLoading = styled.p`
  margin-top: ${({ theme }) => theme.spacing(4)};
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;
