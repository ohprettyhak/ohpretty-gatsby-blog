import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { GetLatestPostsQuery } from '../../utils/graphql-types';

const LatestPosts = styled.section`
  position: relative;
  top: 0;
  padding: 56px 0;
  transition: all 0.2s ease;

  h2 {
    color: var(--text);
    font-size: 2rem;
  }
`;

const LatestPostsList = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const LatestPostsItem = styled.li`
  display: grid;
  width: 100%;
  grid-template-columns: 16% 84%;
  list-style: none;
  border-top: 1px solid var(--line);
  opacity: 1;
  transition: all 0.2s ease;

  :hover {
    opacity: 0.7;
  }

  :last-child {
    border-bottom: 1px solid var(--line);
  }

  @media only screen and (max-width: 1080px) {
    grid-template-columns: 18% 82%;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 22.5% 77.5%;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 24% 76%;
  }

  @media only screen and (max-width: 560px) {
    grid-template-columns: 100%;
  }
`;

const LatestPostsLink = styled(Link)`
  text-decoration: none;
`;

const LatestPostsImageContainer = styled.div`
  display: block;
  padding: 24px 12px 24px 0;

  @media only screen and (max-width: 560px) {
    display: none;
    padding: 0;
  }
`;

const LatestPostsImage = styled(GatsbyImage)`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  isolation: isolate;
`;

const LatestPostsContents = styled.div`
  display: flex;
  padding: 24px 0 24px 12px;
  align-items: center;

  ion-icon {
    height: 16px;
    margin-right: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  @media only screen and (max-width: 560px) {
    padding: 16px 0;
  }
`;

const LatestPostsContainer = styled.div`
  width: 100%;
`;

const LatestPostsCategories = styled.span`
  display: block;
  font-size: 0.75rem;
  color: #adb5bd;
`;

const LatestPostsCategoriesLink = styled(Link)`
  color: #adb5bd;
  text-decoration: none;
  transition: color 0.2s ease;

  :hover {
    color: #868e96;
  }
`;

const LatestPostsTitle = styled.h3`
  margin-top: 2px;
  overflow: hidden;
  color: var(--text);
  font-size: 1.2rem;
  letter-spacing: -1px;
  white-space: break-all;
`;

const LatestPostsSubTitle = styled.p`
  width: 100%;
  margin-top: 2px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  word-break: break-all;
  white-space: normal;
`;

const LatestPostsSub = styled.div`
  margin-top: 6px;
  font-size: 0.8rem;
`;

const LatestPostsReadTime = styled.span`
  margin-right: 10px;
  color: #adb5bd;
`;

const LatestPostsDate = styled.span`
  color: #adb5bd;
`;

const LatestPostsMoreLink = styled(LatestPostsLink)`
  display: inline-block;
  margin-top: 24px;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

const LatestPostsMore = styled.p`
  display: flex;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1.05rem;
  align-items: center;
`;

const LatestPostsQuery = graphql`
  query getLatestPosts {
    allMarkdownRemark(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/contents/" } }
    ) {
      edges {
        node {
          timeToRead
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            categories
            date(formatString: "YYYY년 MM월 DD일")
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

const IndexLatestPosts: React.FC = () => {
  const latestPosts = useStaticQuery<GetLatestPostsQuery>(LatestPostsQuery);

  return (
    <LatestPosts id="latest-posts">
      <h2 data-sal="slide-up" data-sal-delay="800" data-sal-duration="300" data-sal-easing="ease">
        Latest Posts
      </h2>
      <LatestPostsList>
        {latestPosts.allMarkdownRemark.edges.map(({ node }) => (
          <LatestPostsItem key={node.id}>
            <LatestPostsImageContainer>
              <LatestPostsLink to={`/post${node.fields.slug}`}>
                <LatestPostsImage image={getImage(node.frontmatter.cover as any)} alt={node.frontmatter.title} />
              </LatestPostsLink>
            </LatestPostsImageContainer>
            <LatestPostsContents>
              <LatestPostsContainer>
                <LatestPostsCategories>
                  <ion-icon name="bookmark-outline" />
                  {node.frontmatter.categories &&
                    node.frontmatter.categories.map((member: string, index: number) => (
                      <React.Fragment key={member}>
                        <LatestPostsCategoriesLink to={`/category/${member.toLowerCase()}`}>
                          {member}
                        </LatestPostsCategoriesLink>
                        {index !== node.frontmatter.categories.length - 1 && ', '}
                      </React.Fragment>
                    ))}
                  {!node.frontmatter.categories && (
                    <LatestPostsCategoriesLink to={`/category/uncategorized`}>Uncategorized</LatestPostsCategoriesLink>
                  )}
                </LatestPostsCategories>
                <LatestPostsLink to={`/post${node.fields.slug}`}>
                  <LatestPostsTitle>{node.frontmatter.title}</LatestPostsTitle>
                  <LatestPostsSubTitle>{node.frontmatter.subtitle}</LatestPostsSubTitle>
                  <LatestPostsSub>
                    <LatestPostsReadTime>
                      <ion-icon name="time-outline" />
                      {node.timeToRead} MIN READ
                    </LatestPostsReadTime>
                    <LatestPostsDate>
                      <ion-icon name="calendar-outline" />
                      {node.frontmatter.date}
                    </LatestPostsDate>
                  </LatestPostsSub>
                </LatestPostsLink>
              </LatestPostsContainer>
            </LatestPostsContents>
          </LatestPostsItem>
        ))}
      </LatestPostsList>
      <LatestPostsMoreLink to="/post" data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease">
        <LatestPostsMore>
          View More Posts&nbsp;
          <ion-icon name="chevron-forward-outline" />
        </LatestPostsMore>
      </LatestPostsMoreLink>
    </LatestPosts>
  );
};

export default IndexLatestPosts;
