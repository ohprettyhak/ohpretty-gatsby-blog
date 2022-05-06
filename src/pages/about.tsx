import React from 'react';
import { useDispatch } from 'react-redux';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import metaConfig from '../../gatsby-meta-config';
import { DefaultLayout } from '../layouts';

const Article = styled.article`
  width: 100%;
  max-width: 800px;
  margin: 36px auto 64px auto;
  color: var(--text);
  font-size: 0.95rem;

  h3 {
    margin: 36px 0 16px 0;
  }

  h5 {
    margin: 16px 0 4px 0;
    text-transform: uppercase;
  }

  a {
    color: var(--text);
    text-decoration: none;
    opacity: 1;
    border-bottom: 2px dotted var(--text-secondary);
    transition: 0.2s ease-in-out;
    background: linear-gradient(to bottom, transparent 75%, var(--category-border) 0) 0/0 100% no-repeat;

    :hover {
      background-size: 100% 100%;
    }
  }
`;

const Header = styled.div`
  width: 100%;
  max-width: 560px;
  margin: 0 auto 36px auto;
  pointer-events: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const Social = styled.div`
  margin: 4px 0 12px 0;
  display: block;

  a {
    display: inline-block;
    padding: 14px;
    margin-right: 4px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: transparent;
    transition: all 0.2s ease;

    :hover {
      border: 1px solid var(--selection);
      background-color: var(--cover);
      background-size: 0;
    }
  }

  ion-icon {
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 0;
    color: var(--text);
    vertical-align: middle;
  }
`;

const AboutPage = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: 'About' });

  return (
    <DefaultLayout>
      <Article>
        <Header>
          <StaticImage src="../assets/img-eastwood-design.png" alt="Welcome" placeholder="none" />
        </Header>
        <p>
          I am Hak Lee, software developer at xxx-company.
          <br />
          This website is my blog where I share my thoughts and life.
        </p>
        <section>
          <h3>About me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor massa in risus molestie porttitor.
            Nullam eleifend congue dui, sed ultrices ante consequat sit amet. Aenean non ultrices risus. Etiam ut orci
            vel justo dignissim scelerisque. Suspendisse potenti. Mauris ac metus sed augue viverra placerat at a orci.
            Nulla vitae dolor hendrerit, iaculis orci a, aliquam nunc. Etiam non mauris vitae neque hendrerit fringilla
            vestibulum eget ipsum. In in turpis et magna interdum aliquet sit amet nec odio. Nam luctus massa in elit
            faucibus, non ultrices tortor tincidunt. Mauris in imperdiet est, id elementum leo. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Praesent aliquet metus vitae dapibus rhoncus. Vivamus dictum malesuada
            varius. Quisque quis dui euismod nunc ullamcorper interdum.
          </p>
        </section>
        <section>
          <h3>Social</h3>
          <Social>
            {metaConfig.social.github && (
              <a href={`https://github.com/${metaConfig.social.github}`} target="_blank">
                <ion-icon name="logo-github" />
              </a>
            )}
            {metaConfig.social.facebook && (
              <a href={`https://facebook.com/${metaConfig.social.facebook}`} target="_blank">
                <ion-icon name="logo-facebook" />
              </a>
            )}
            {metaConfig.social.instagram && (
              <a href={`https://instagram.com/${metaConfig.social.instagram}`} target="_blank">
                <ion-icon name="logo-instagram" />
              </a>
            )}
            {metaConfig.social.linkedIn && (
              <a href={`https://www.linkedin.com/in/${metaConfig.social.linkedIn}`} target="_blank">
                <ion-icon name="logo-linkedIn" />
              </a>
            )}
            {metaConfig.social.dribbble && (
              <a href={`https://dribbble.com/${metaConfig.social.dribbble}`} target="_blank">
                <ion-icon name="logo-dribbble" />
              </a>
            )}
            {metaConfig.social.behance && (
              <a href={`https://behance.net/${metaConfig.social.behance}`} target="_blank">
                <ion-icon name="logo-behance" />
              </a>
            )}
          </Social>
          <p>
            I'm happy to send you a real response, so please email at{' '}
            <a href={`mailto:${metaConfig.social.email}`}>{metaConfig.social.email}</a> and say hi.
          </p>
        </section>
        <section>
          <h3>Built with</h3>
          <h5>Data Sources</h5>
          <p>
            &middot; Github (repository:{' '}
            <a href={`https://github.com/${metaConfig.repository}`} target="_blank">
              {metaConfig.repository}
            </a>
            )
          </p>
          <h5>Build</h5>
          <p>
            &middot;{' '}
            <a href="https://gatsbyjs.org" target="_blank">
              Gatsby
            </a>
          </p>
          <h5>Deploy</h5>
          <p>
            &middot;{' '}
            <a href="https://pages.github.com/" target="_blank">
              Github Pages
            </a>
          </p>
        </section>
      </Article>
    </DefaultLayout>
  );
};

export default AboutPage;
