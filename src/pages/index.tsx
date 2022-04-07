import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import metaConfig from '../../gatsby-meta-config';
import { DefaultLayout } from '../layouts';

const Cover = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 100px 0;
  background-color: var(--cover);
  border-bottom: 1px solid var(--line);
  transition: all 0.2s ease;
`;

const CoverContents = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 6%;

  span {
    display: inline-block;
    white-space: nowrap;
  }
`;

const CoverContentTitle = styled.h2`
  color: var(--text);
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.2;

  @media only screen and (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 1.8rem;
  }
`;

const CoverContentSub = styled.p`
  padding-top: 16px;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;

  @media only screen and (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

const CoverContentsUser = styled.p`
  margin-top: 24px;
  padding: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const CoverContentLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

const LatestPosts = styled.section`
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
  overflow: hidden;
  color: var(--text);
  font-size: 1.2rem;
  letter-spacing: -1px;
  white-space: nowrap;
`;

const LatestPostsExcerpt = styled.p`
  display: -webkit-box;
  color: var(--text-secondary);
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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

const LatestPostsQuery = graphql`
  query getRecentPosts {
    allMarkdownRemark(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          timeToRead
          id
          fields {
            slug
          }
          frontmatter {
            title
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

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: 'index' });

  const latestPosts = useStaticQuery<any>(LatestPostsQuery);
  console.log(latestPosts);

  return (
    <DefaultLayout>
      <Cover>
        <CoverContents>
          <CoverContentTitle data-sal="slide-up" data-sal-delay="100" data-sal-duration="300" data-sal-easing="ease">
            {metaConfig.slogan}
          </CoverContentTitle>
          <CoverContentSub data-sal="slide-up" data-sal-delay="300" data-sal-duration="300" data-sal-easing="ease">
            {metaConfig.sloganDescription}
          </CoverContentSub>
          <CoverContentsUser data-sal="slide-up" data-sal-delay="600" data-sal-duration="300" data-sal-easing="ease">
            <CoverContentLink href={`https://github.com/${metaConfig.social.github}`} target="_blank">
              {`@${metaConfig.social.github}`}
            </CoverContentLink>
          </CoverContentsUser>
        </CoverContents>
      </Cover>
      <LatestPosts>
        <h2>Latest Posts</h2>
        <LatestPostsList>
          {latestPosts.allMarkdownRemark.edges.map(({ node }) => (
            <LatestPostsItem key={node.id}>
              <LatestPostsImageContainer>
                <LatestPostsLink to={node.fields.slug}>
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
                      <LatestPostsCategoriesLink to={`/category/uncategorized`}>
                        Uncategorized
                      </LatestPostsCategoriesLink>
                    )}
                  </LatestPostsCategories>
                  <LatestPostsLink to={node.fields.slug}>
                    <LatestPostsTitle>{node.frontmatter.title}</LatestPostsTitle>
                    <LatestPostsExcerpt>{node.excerpt}</LatestPostsExcerpt>
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
      </LatestPosts>
    </DefaultLayout>
  );
};

export default IndexPage;
