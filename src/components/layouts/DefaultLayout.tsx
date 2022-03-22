import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Head, Navigation } from '../common';
import useTheme from '../../lib/hooks/useTheme';
import { darkTheme, lightTheme } from '../../styles/theme';

const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 6%;
`;

const Container = styled.div`
  height: 100%;
  padding-top: 56px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.2s ease;
`;

type SitePageContext = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<SitePageContext> = React.memo(({ children }) => {
  const [themeMode, toggleTheme] = useTheme();
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Head />
        <Navigation />
        <Container>
          <Main>
            {children}
            <button onClick={toggleTheme}>adsf</button>
          </Main>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
});

export default DefaultLayout;
