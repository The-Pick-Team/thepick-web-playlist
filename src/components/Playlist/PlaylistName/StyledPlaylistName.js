import { StyledButton } from 'components/Button/StyledButton';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: calc(100% - 40px);
  max-width: 660px;
`;

export const StyledPlaylistName = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: -0.165px;
`;

export const StyledCopyImage = styled.img`
  width: 22px;
  height: 28px;
  margin: 0 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledPlaylistNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledPlaylistDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 50px;
  margin-top: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.palette.primary.light};
`;

export const StyledPlaylistLoading = styled.p`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
`;

export const StyledCheck = styled.span`
  font-weight: light;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: white;
  align-items: center;
`;
export const StyledCopyContainer = styled.span`
  align-items: center;
  flex-direction: row;
  display: flex;
`;

export const StyledHomeHeader = styled.div`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};

  ${StyledButton}:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(3)};
  }
`;
