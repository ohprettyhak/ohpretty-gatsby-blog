import React, { useState, useEffect } from 'react';
import { graphql, PageProps } from 'gatsby';
import { useDispatch } from 'react-redux';
import { useLocation } from '@reach/router';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import metaConfig from '../../gatsby-meta-config';
import { PostLayout } from '../layouts';
import { toFit } from '../utils/event-manager';
import RecommendPosts from '../components/recommend-posts';
import TableOfContents from '../components/table-of-contents';
import Utterances from '../components/utterances';
import { GetPostDetailQuery } from '../utils/graphql-types';

const PostContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Article = styled.article`
  flex-grow: 0;
  max-width: 75%;
  flex-basis: 75%;

  @media only screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

const PostHeader = styled.section`
  margin-top: 48px;

  ion-icon {
    height: 16px;
    margin-right: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
`;

const PostTitle = styled.h1`
  display: flex;
  padding: 4px 0;
  align-items: center;
  color: var(--text);
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1.2;
  word-break: break-word;
  white-space: normal;
`;

const PostSubtitle = styled.p`
  margin: 0.5rem 0 1rem 0;
  color: var(--text-secondary);
  font-size: 1.15rem;
  word-break: break-word;
  white-space: normal;
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

const PostTemplate: React.FC<PageProps<GetPostDetailQuery, null>> = React.memo(({ data }) => {
  const { node, previous, next } = data;

  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: node.frontmatter.title });

  const [currentHeaderUrl, setCurrentHeaderUrl] = useState<string | undefined>(undefined);

  const { pathname } = useLocation();

  const handleScroll = () => {
    let aboveHeaderUrl: string;
    const currentOffsetY = window.pageYOffset;
    const headerElements: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.anchor-header');

    for (const element of headerElements) {
      const { top } = element.getBoundingClientRect();
      const elementTop = top + currentOffsetY;
      const isLast = element === headerElements[headerElements.length - 1];

      if (currentOffsetY < elementTop - 86) {
        aboveHeaderUrl && setCurrentHeaderUrl(aboveHeaderUrl.split(location.origin)[1].replace(pathname, ''));
        !aboveHeaderUrl && setCurrentHeaderUrl(undefined);
        break;
      } else {
        isLast && setCurrentHeaderUrl(element.href.split(location.origin)[1].replace(pathname, ''));
        !isLast && (aboveHeaderUrl = element.href);
      }
    }
  };

  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    const path = metaConfig.siteBaseUrl.replace(/(^\w+:|^)\/\//, '') + pathname.replace(/\//g, '');

    fetch(`https://api.countapi.xyz/get/${path}`).then(async (result) => {
      const data = await result.json();
      setViewCount(data.value);
    });

    document.addEventListener('scroll', toFit(handleScroll, {}), { passive: true });
  }, [pathname]);

  return (
    <PostLayout>
      <PostContainer>
        <Article>
          <PostHeader>
            <PostTitle>{node.frontmatter.title}</PostTitle>
            <PostSubtitle>{node.frontmatter.subtitle}</PostSubtitle>
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
          <section className="post-content" dangerouslySetInnerHTML={{ __html: node.html }} />
          <Utterances />
          <RecommendPosts next={next} previous={previous} />
        </Article>
        <TableOfContents items={node.tableOfContents} currentHeaderUrl={currentHeaderUrl} />
      </PostContainer>
    </PostLayout>
  );
});

export default PostTemplate;

export const postDetailQuery = graphql`
  query getPostDetail($id: String!, $prev: String, $next: String) {
    node: markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
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
