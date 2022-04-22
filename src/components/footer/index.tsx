import React from 'react';
import styled from 'styled-components';

import metaConfig from '../../../gatsby-meta-config';

const FooterContainer = styled.div`
  padding: 48px 0;
  background-color: var(--cover);
  border-top: 1px solid var(--line);
  transition: all 0.2s ease;
`;

const FooterWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 6%;
  justify-content: space-between;
`;

const Copyright = styled.div`
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.025rem;

  a {
    color: var(--text);
    text-decoration: none;
    border-bottom: 2px dotted var(--text-secondary);
    transition: 0.2s ease-in-out;
    background: linear-gradient(to bottom, transparent 75%, var(--category-border) 0) 0/0 100% no-repeat;

    :hover {
      background-size: 100% 100%;
    }
  }
`;

const License = styled.p`
  font-size: 0.85rem;
`;

const ScrollToTop = styled.span`
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <Copyright>
          <License>
            Icon by{' '}
            <a href="https://ionic.io/ionicons" target="_blank">
              ionicons
            </a>
          </License>
          <License style={{ marginTop: '4px' }}>
            Illustrations by{' '}
            <a href="https://icons8.com/illustrations" target="_blank">
              Ouch!
            </a>
          </License>
          <p style={{ marginTop: '12px' }}>
            {`© ${new Date().getFullYear()} ${metaConfig.auther.name} | Powered By `}{' '}
            <a href="https://github.com/ohprettyhak/ohpretty-gatsby-blog" target="_blank">
              ohpretty-gatsby-blog
            </a>
          </p>
        </Copyright>
        <ScrollToTop onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ion-icon name="chevron-up" />
        </ScrollToTop>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
