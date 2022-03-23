import React from 'react';
import styled from 'styled-components';

import { Head, Navigation } from '../common';

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
  background-color: var(--primary);
  transition: background-color 0.2s ease;
`;

type SitePageContext = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<SitePageContext> = ({ children }) => {
  return (
    <React.Fragment>
      <Head />
      <Navigation />
      <Container>
        <Main>{children}</Main>
      </Container>
    </React.Fragment>
  );
};

export default DefaultLayout;
