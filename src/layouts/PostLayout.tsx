import React from 'react';

import * as style from '../styles/layouts/post';
import Head from '../components/head';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import { HighlightStyle } from '../styles/global';
import 'katex/dist/katex.min.css';

type SitePageContext = {
  children: React.ReactNode;
};

const PostLayout: React.FC<SitePageContext> = React.memo(({ children }) => {
  return (
    <React.Fragment>
      <Head />
      <Navigation />
      <HighlightStyle />
      <style.Container>
        <style.Main className="intro-animation">{children}</style.Main>
      </style.Container>
      <Footer />
    </React.Fragment>
  );
});

export default PostLayout;
