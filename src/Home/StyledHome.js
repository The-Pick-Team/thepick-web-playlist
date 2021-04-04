import styled from 'styled-components';

import { StyledPlaylist } from 'components/Playlist/StyledPlaylist';

export const StyledHome = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  oberflow-y: auto !important;
  ${StyledPlaylist} {
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
  width: 100vw;
  @media (min-width: 600px) {
    width: 660px;
  }
`;
