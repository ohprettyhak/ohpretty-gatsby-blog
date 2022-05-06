import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { DefaultLayout } from '../layouts';
import { GetWorksQuery } from 'utils/graphql-types';

const Work = styled.h2`
  margin: 56px 0 42px 0;
  color: var(--text);
  font-size: 1.4rem;
`;

const WorkList = styled.div`
  display: grid;
  gap: 1.4rem;
`;

const WorkItem = styled.div`
  display: grid;
  padding: 28px;
  gap: 1.6rem;
  grid-template-columns: 1.5fr 2.5fr;
  border: 1px solid var(--line);
  border-radius: 16px;
  background-color: var(--category-background);

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WorkItemAt = styled.p`
  color: var(--text-secondary);
`;

const WorkItemTitle = styled.p`
  margin-top: 12px;
  color: var(--text);
  font-size: 1.8rem;
  font-weight: bold;
`;

const WorkItemSubtitle = styled.p`
  margin-top: 12px;
  color: var(--text-secondary);
  font-size: 1.1rem;
  font-weight: 500;
`;

const WorkCoverImage = styled(GatsbyImage)`
  width: 100%;
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

const ViewMore = styled(Link)`
  display: inline-block;
  padding: 12px 20px;
  margin-top: 24px;
  color: var(--text);
  text-decoration: none;
  border: 1px solid var(--line);
  border-radius: 24px;
  opacity: 1;
  transition: 0.2s ease-in-out;

  :hover {
    opacity: 0.7;
  }
`;

const WorksQuery = graphql`
  query getWorks {
    allMarkdownRemark(
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

const WorkPage: React.FC = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: 'Work' });

  const works = useStaticQuery<GetWorksQuery>(WorksQuery);

  return (
    <DefaultLayout>
      <Work>Selected websites and apps.</Work>
      <WorkList>
        {works.allMarkdownRemark.edges.map(({ node }) => (
          <WorkItem>
            <div>
              <WorkItemAt>{node.frontmatter.at}</WorkItemAt>
              <WorkItemTitle>{node.frontmatter.title}</WorkItemTitle>
              <WorkItemSubtitle>{node.frontmatter.subtitle}</WorkItemSubtitle>
              <ViewMore to={`/work${node.fields.slug}`}>View More →</ViewMore>
            </div>
            <div>
              <WorkCoverImage image={getImage(node.frontmatter.cover as any)} alt={`${node.frontmatter.title} Cover`} />
            </div>
          </WorkItem>
        ))}
      </WorkList>
    </DefaultLayout>
  );
};

export default WorkPage;
