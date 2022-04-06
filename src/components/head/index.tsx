import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';

import metaConfig from '../../../gatsby-meta-config';
import useScript from '../../hooks/useScript';
import { RootState } from '../../redux/createStore';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': { name: string };
    }
  }
}

const Head: React.FC = React.memo(() => {
  const { pathname } = useLocation();

  const ionModule = useScript(`https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js`, { type: 'module' });
  const ionNoModule = useScript(`https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js`, { noModule: true });
  useEffect(() => {}, [ionModule, ionNoModule]);

  const title: string = useSelector((state: RootState) => state.title);
  
  return (
    <Helmet htmlAttributes={{ lang: metaConfig.lang }}>
      <title>
        {pathname.replace(/\//g, '') === metaConfig.sitePathPrefix.replace(/\//g, '')
          ? metaConfig.title
          : title + ' – ' + metaConfig.title}
      </title>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
      />
      <style>@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap');</style>
    </Helmet>
  );
});

export default Head;
