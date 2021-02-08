import styled from 'styled-components';

export const StyledSong = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: 0.3s ease all;
  &:hover {
    border: 1px solid #ffffff1c;
    box-sizing: border-box;
  }
`;

export const StyledSongMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(5)};
`;

export const StyledSongDescription = styled.p`
  margin-top: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.palette.primary.light};
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.165px;
`;

export const StyledSongTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  color: ${({ theme }) => theme.palette.common.white};
`;
