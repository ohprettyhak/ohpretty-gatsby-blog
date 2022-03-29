import React from 'react';
import styled from 'styled-components';

import { Head, Navigation } from '../common';
import { HighlightStyle } from '../../styles';

const Main = styled.main`
  width: 100%;
  max-width: 900px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 6%;

  .before {
    display: flex;
    top: auto;
    left: auto;
    padding-right: 8px;
    margin: 0;
    transform: translateX(-150%);

    svg {
      fill: var(--text);
    }

    @media only screen and (max-width: 768px) {
      transform: translateX(-100%);
      padding-right: 4px;
    }
  }

  h1 {
    display: flex;
    align-items: center;
    color: var(--text);
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 1.2;
    padding-bottom: 8px;
    word-break: break-word;
    white-space: normal;
  }

  h2 {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    color: var(--text);
    font-size: 2rem;
    word-break: break-word;
    white-space: normal;
  }

  h3 {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    color: var(--text);
    font-size: 1.5rem;
    word-break: break-word;
    white-space: normal;
  }

  h4 {
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    color: var(--text);
    font-size: 1.05rem;
    word-break: break-word;
    white-space: normal;
  }

  h5 {
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    color: var(--text);
    font-size: 1rem;
    word-break: break-word;
    white-space: normal;
  }

  p {
    line-height: 1.5;
    margin-bottom: 8px;
    color: var(--text);
    word-break: break-all;
    white-space: normal;
  }

  code {
    padding: 4px;
    font-size: 0.9rem;
    font-family: var(--code-font-family);
    font-weight: 400;
    border-radius: 4px;
    background-color: #eeeeee;
  }

  ul {
    padding-left: 1.5rem;
  }

  li {
    font-size: 0.95rem;
    color: black;
    font-weight: 300;
    padding: 4px 0;
  }
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
