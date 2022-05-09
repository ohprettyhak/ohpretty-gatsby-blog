import React from 'react';

import metaConfig from '../../../gatsby-meta-config';
import * as style from './style';

const Footer: React.FC = () => {
  return (
    <style.FooterContainer>
      <style.FooterWrap>
        <style.Copyright>
          <style.License>
            Icon by{' '}
            <a href="https://ionic.io/ionicons" target="_blank">
              ionicons
            </a>
          </style.License>
          <style.License style={{ marginTop: '4px' }}>
            Illustrations by{' '}
            <a href="https://icons8.com/illustrations" target="_blank">
              Ouch!
            </a>
          </style.License>
          <p style={{ marginTop: '12px' }}>
            {`© ${new Date().getFullYear()} ${metaConfig.auther.name} | Powered by `}{' '}
            <a href="https://github.com/ohprettyhak/ohpretty-gatsby-blog" target="_blank">
              ohpretty-gatsby-blog
            </a>
          </p>
        </style.Copyright>
        <style.ScrollToTop onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ion-icon name="chevron-up" />
        </style.ScrollToTop>
      </style.FooterWrap>
    </style.FooterContainer>
  );
};

export default Footer;
