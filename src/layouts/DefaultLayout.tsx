import React from 'react';

import * as style from '../styles/layouts/default';
import Head from '../components/head';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

type SitePageContext = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<SitePageContext> = ({ children }) => {
  return (
    <React.Fragment>
      <Head />
      <Navigation />
      <style.Container>
        <style.Main className="intro-animation">{children}</style.Main>
      </style.Container>
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
