import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  INPUT_VARIANTS,
  TextInput as TitleInput,
} from 'components/TextInput/TextInput';
/* Image */
import copy from 'assets/img/copy.svg';

import {
  StyledCheck,
  StyledCopyContainer,
  StyledCopyImage,
  StyledPlaylistDescription,
  StyledPlaylistName,
  StyledPlaylistNameContainer,
  StyledWrapper,
} from './StyledPlaylistName';

export function PlaylistName({
  name,
  defaultName,
  totalSongs,
  editableName,
  playlistUrl,
  handleNameChange,
}) {
  const [copying, setCopying] = useState(false);

  const onCopy = () => {
    setCopying(true);
    setTimeout(() => {
      setCopying(false);
    }, 2000);
  };

  useEffect(() => {
    // console.log('defaultName', defaultName);
  });

  return (
    <React.Fragment>
      <StyledWrapper>
        <StyledPlaylistNameContainer>
          {!editableName && <StyledPlaylistName>{name}</StyledPlaylistName>}
          {editableName && handleNameChange && (
            <TitleInput
              defaultValue={defaultName}
              placeholder="Enter new playlist name"
              variant={INPUT_VARIANTS.TITLE}
              onChange={handleNameChange}
            />
          )}

          <CopyToClipboard
            text={playlistUrl || window.location.href}
            onCopy={onCopy}
          >
            <StyledCopyContainer>
              <StyledCopyImage src={copy} />
              {copying && <StyledCheck>copied</StyledCheck>}
            </StyledCopyContainer>
          </CopyToClipboard>
        </StyledPlaylistNameContainer>
        {totalSongs && (
          <StyledPlaylistDescription>
            {totalSongs} songs
          </StyledPlaylistDescription>
        )}
      </StyledWrapper>
    </React.Fragment>
  );
}

PlaylistName.propTypes = {
  name: PropTypes.string,
  totalSongs: PropTypes.string,
  playlistUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  editableName: PropTypes.bool,
  handleNameChange: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  defaultName: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

PlaylistName.defaultProps = {
  name: '',
  totalSongs: '',
  playlistUrl: false,
  editableName: false,
  handleNameChange: false,
  defaultName: '',
};
