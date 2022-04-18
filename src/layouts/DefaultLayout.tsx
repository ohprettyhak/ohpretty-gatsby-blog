import React from 'react';
import styled from 'styled-components';

import Head from '../components/head';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 6%;
`;

const Container = styled.div`
  min-height: 100%;
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
        <Main className="intro-animation">{children}</Main>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
