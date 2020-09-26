import styled from 'styled-components';

import { StyledPlaylist } from 'components/Playlist/StyledPlaylist';

export const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  ${StyledPlaylist} {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }
`;
