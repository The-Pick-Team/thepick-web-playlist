import React from 'react';

import { StyledFooter, StyledLink } from './StyledAppFooter';

export function AppFooter() {
  return (
    <StyledFooter>
      <StyledLink href="https://t.me/thepickbot" target="_blank">
        Telegram Bot
      </StyledLink>
    </StyledFooter>
  );
}
