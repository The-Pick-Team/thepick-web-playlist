import styled from 'styled-components';

export const StyledPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`;

export const StyledPlaylistName = styled.p`
  font-weight: bold;
  font-size: 40px;
  background: ${({ theme }) => theme.palette.primary.dark};
`;

export const StyledPlaylistDescription = styled.p`
  margin-top: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.palette.primary.light};
`;

export const StyledPlaylistLoading = styled.p`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
`;
