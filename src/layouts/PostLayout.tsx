import React from 'react';
import styled from 'styled-components';

import Head from '../components/head';
import Navigation from '../components/navigation';
import { HighlightStyle } from '../styles';

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

const PostLayout: React.FC<SitePageContext> = React.memo(({ children }) => {
  return (
    <React.Fragment>
      <Head />
      <Navigation />
      <HighlightStyle />
      <Container>
        <Main>{children}</Main>
      </Container>
    </React.Fragment>
  );
});

export default PostLayout;
