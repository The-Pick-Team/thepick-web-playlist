import styled from 'styled-components';

export const StyledSong = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSongMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(5)};
`;

export const StyledSongDescription = styled.p`
  margin-top: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.palette.primary.light};
`;
