import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { GetSelectedWorksQuery } from 'utils/graphql-types';

const SelectedWorks = styled.section`
  padding: 0 0 56px 0;
  transition: all 0.2s ease;

  h2 {
    color: var(--text);
    font-size: 2rem;
  }
`;

const SelectedWorksList = styled.div`
  display: grid;
  width: 100%;
  margin-top: 24px;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SelectedWorksItem = styled(Link)`
  padding: 28px;
  text-decoration: none;
  border: 1px solid var(--line);
  border-radius: 16px;
  background-color: var(--category-background);
  opacity: 1;
  transition: all 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

const SelectedWorksItemInfo = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const SelectedWorksItemTitle = styled.p`
  margin-top: 12px;
  color: var(--text);
  font-size: 1.2rem;
  font-weight: bold;
`;

const SelectedWorksItemSubtitle = styled.p`
  margin-top: 8px;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
`;

const SelectedWorksItemImage = styled(GatsbyImage)`
  width: 100%;
  margin-top: 12px;
  overflow: hidden;
  isolation: isolate;
  pointer-events: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const SelectedWorksMoreLink = styled(Link)`
  display: inline-block;
  margin-top: 24px;
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

const SelectedWorksMore = styled.p`
  display: flex;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1.05rem;
  align-items: center;
`;

const SelectedWorksQuery = graphql`
  query getSelectedWorks {
    allMarkdownRemark(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/works/" } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            at
            timeline
            cover {
              childImageSharp {
                gatsbyImageData(formats: AUTO, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;

const IndexSelectedWorks: React.FC = () => {
  const selectedWorks = useStaticQuery<GetSelectedWorksQuery>(SelectedWorksQuery);

  return (
    <SelectedWorks>
      <h2 data-sal="slide-up" data-sal-delay="1100" data-sal-duration="300" data-sal-easing="ease">
        Selected Works
      </h2>
      <SelectedWorksList>
        {selectedWorks.allMarkdownRemark.edges.map(({ node }) => (
          <SelectedWorksItem to={`/work${node.fields.slug}`}>
            <SelectedWorksItemInfo>
              {node.frontmatter.at} — {node.frontmatter.timeline}
            </SelectedWorksItemInfo>
            <SelectedWorksItemTitle>{node.frontmatter.title}</SelectedWorksItemTitle>
            <SelectedWorksItemSubtitle>{node.frontmatter.subtitle}</SelectedWorksItemSubtitle>
            <SelectedWorksItemImage
              image={getImage(node.frontmatter.cover as any)}
              alt={`${node.frontmatter.title} Cover`}
            />
          </SelectedWorksItem>
        ))}
      </SelectedWorksList>
      <SelectedWorksMoreLink to="/work" data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease">
        <SelectedWorksMore>
          View More Works&nbsp;
          <ion-icon name="chevron-forward-outline" />
        </SelectedWorksMore>
      </SelectedWorksMoreLink>
    </SelectedWorks>
  );
};

export default IndexSelectedWorks;
