function createLightPalette() {
  return {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#515154',
      main: '#35363a',
      dark: '#202124',
    },
    secondary: {
      light: '#fafafa',
      main: '#eee',
      dark: '#e0e0e0',
    },
  };
}

function createSpacing(multiplier) {
  const INITIAL_UNIT = 4;
  return `${INITIAL_UNIT * multiplier}px`;
}

export function getTheme() {
  const THEME = {
    spacing: (multiplier) => createSpacing(multiplier),
    palette: createLightPalette(),
  };
  return THEME;
}
