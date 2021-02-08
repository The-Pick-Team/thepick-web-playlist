import styled from 'styled-components';

import { StyledPlaylist } from 'components/Playlist/StyledPlaylist';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  oberflow-y: auto !important;
  flex-wrap: wrap;
  justify-content: center;
  ${StyledPlaylist} {
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;
