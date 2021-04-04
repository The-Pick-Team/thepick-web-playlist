import styled from 'styled-components';

export const StyledNewPlaylist = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  oberflow-y: auto !important;
  margin-top: 32px;
  width: 100vw;

  @media (min-width: 660px) {
    width: 660px;
  }
`;

export const StyledSongListContainer = styled.div`
  display: flex;
  padding: 0 20px;
  flex: 1;
  align-self: stretch;
`;
