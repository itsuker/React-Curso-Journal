import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { purpleTheme } from './';

//childre no mas es componente que resive otros hijos los props
export const AppTheme = ({ children }) => {
  return (
    //eL THEMEpRovider proporciona el tema
    <ThemeProvider theme={ purpleTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />   {/*Esto es como normalize  */}
      
      { children }
    </ThemeProvider>
  )
}
