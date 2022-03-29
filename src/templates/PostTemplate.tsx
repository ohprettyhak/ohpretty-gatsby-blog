import React, { useState, useEffect } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { useDispatch } from 'react-redux';
import { useLocation } from '@reach/router';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import metaConfig from '../../gatsby-meta-config';
import { PostLayout } from '../components/layouts';
import { GetPostDetailQuery } from '../lib/graphql-types';

const PostHeader = styled.section`
  margin-top: 48px;

  ion-icon {
    height: 16px;
    margin-right: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
`;

const PostSub = styled.div`
  margin-top: 6px;
  color: #adb5bd;
  font-size: 0.85rem;
`;

const PostSubDetail = styled.span`
  margin-right: 10px;
`;

const PostCover = styled.section`
  margin-top: 48px;
`;

const PostCoverImage = styled(GatsbyImage)`
  border-radius: 8px;
  overflow: hidden;
  isolation: isolate;
`;

const PostContent = styled.section`
  margin-top: 48px;
`;

const RecommendPost = styled.div`
  display: block;
  width: 100%;
  padding: 48px 0;
`;

const RecommendPostList = styled.div`
  display: grid;
  margin: 0 -12px;
  grid-template-columns: 50% 50%;
  grid-row-gap: 24px;

  @media only screen and (max-width: 425px) {
    grid-template-columns: 100%;
  }
`;

const RecommendPostLink = styled(Link)`
  display: block;
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

const RecommendPrevious = styled.div`
  margin: 0 12px;
  padding: 10px 12px;
  border-radius: 8px;
  background-color: var(--recommend-post);
  transition: background-color 0.2s ease;
`;

const RecommendNext = styled(RecommendPrevious)`
  text-align: right;
`;

const RecommendStepText = styled.span`
  display: block;
  margin: 0;
  color: var(--text-secondary);
  font-weight: 300;
  font-size: 0.85rem;
`;

const RecommendPostContainer = styled.div`
  display: inline-flex;
  align-items: center;

  ion-icon {
    width: 16px;
    height: 16px;
    color: var(--text);
    vertical-align: middle;
  }
`;

const RecommendPostTitle = styled.span`
  display: block;
  margin-top: 4px;
  color: var(--text);
  font-weight: 800;
  font-size: 1rem;
  word-break: break-word;
  white-space: normal;
`;

const PostTemplate: React.FC<PageProps<GetPostDetailQuery, null>> = React.memo(({ data }) => {
  const { node, previous, next } = data;

  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: node.frontmatter.title });

  const { pathname } = useLocation();
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    const path = metaConfig.siteBaseUrl.replace(/(^\w+:|^)\/\//, '') + pathname.replace(/\//g, '');

    fetch(`https://api.countapi.xyz/get/${path}`).then(async (result) => {
      const data = await result.json();
      setViewCount(data.value);
    });
  }, [pathname]);

  return (
    <PostLayout>
      <article>
        <PostHeader>
          <h1>{node.frontmatter.title}</h1>
          <PostSub>
            <PostSubDetail>
              <ion-icon name="time-outline" />
              {node.timeToRead} MIN READ
            </PostSubDetail>
            <PostSubDetail>
              <ion-icon name="calendar-outline" />
              {node.frontmatter.date}
            </PostSubDetail>
            {viewCount && (
              <PostSubDetail>
                <ion-icon name="eye-outline" />
                {viewCount}
              </PostSubDetail>
            )}
          </PostSub>
        </PostHeader>
        {node.frontmatter.cover && (
          <PostCover>
            <PostCoverImage image={getImage(node.frontmatter.cover as any)} alt={`${node.frontmatter.title} Cover`} />
          </PostCover>
        )}
        <PostContent dangerouslySetInnerHTML={{ __html: node.html }} />
      </article>
      <RecommendPost>
        <RecommendPostList>
          {previous !== null ? (
            <RecommendPrevious>
              <RecommendPostLink to={previous.fields.slug}>
                <RecommendPostContainer>
                  <ion-icon name="arrow-back-outline" />
                  <div style={{ marginLeft: '16px' }}>
                    <RecommendStepText>Previous</RecommendStepText>
                    <RecommendPostTitle>{previous.frontmatter.title}</RecommendPostTitle>
                  </div>
                </RecommendPostContainer>
              </RecommendPostLink>
            </RecommendPrevious>
          ) : (
            <div></div>
          )}
          {next !== null ? (
            <RecommendNext>
              <RecommendPostLink to={next.fields.slug}>
                <RecommendPostContainer>
                  <div style={{ marginRight: '16px' }}>
                    <RecommendStepText>Next</RecommendStepText>
                    <RecommendPostTitle>{next.frontmatter.title}</RecommendPostTitle>
                  </div>
                  <ion-icon name="arrow-forward-outline" />
                </RecommendPostContainer>
              </RecommendPostLink>
            </RecommendNext>
          ) : (
            <div></div>
          )}
        </RecommendPostList>
      </RecommendPost>
    </PostLayout>
  );
});

export default PostTemplate;

export const postDetailQuery = graphql`
  query getPostDetail($id: String!, $prev: String, $next: String) {
    node: markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        cover {
          childImageSharp {
            gatsbyImageData(quality: 50, formats: AUTO, placeholder: BLURRED)
          }
        }
      }
    }

    previous: markdownRemark(id: { eq: $prev }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }

    next: markdownRemark(id: { eq: $next }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
