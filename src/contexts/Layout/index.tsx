import { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@globalStyles';
import { defaultTheme } from '@globalStyles/theme';

import type { iLayoutContext } from './iLayoutContext';

export const LayoutContext = createContext<iLayoutContext>(
  {} as iLayoutContext,
);

interface LayoutProviderProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [hamburguer, setHamburguer] = useState(false);
  const [whatsapp, setWhatsapp] = useState(false);
  const contextValue = useMemo(
    () => ({
      setHamburguer,
      hamburguer,
      whatsapp,
      setWhatsapp,
    }),
    [hamburguer, whatsapp],
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles.ColorsCSS />
      <GlobalStyles.FontsCSS />
      <GlobalStyles.RootCSS overflow={hamburguer} />

      <LayoutContext.Provider value={contextValue}>
        {children}
      </LayoutContext.Provider>
    </ThemeProvider>
  );
};
