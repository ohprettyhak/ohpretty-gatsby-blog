import React, { useState, useEffect } from 'react';
import { graphql, PageProps } from 'gatsby';
import { useDispatch } from 'react-redux';
import { useLocation } from '@reach/router';
import { getImage } from 'gatsby-plugin-image';

import metaConfig from '../../gatsby-meta-config';
import { PostLayout } from '../layouts';
import * as style from '../styles/templates/post';
import { toFit } from '../utils/event-manager';
import RecommendPosts from '../components/recommend-posts';
import TableOfContents from '../components/table-of-contents';
import Utterances from '../components/utterances';
import { GetPostDetailQuery } from '../utils/graphql-types';

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
      <style.PostContainer>
        <style.Article>
          <style.PostHeader>
            <style.PostTitle>{node.frontmatter.title}</style.PostTitle>
            <style.PostSubtitle>{node.frontmatter.subtitle}</style.PostSubtitle>
            <style.PostSub>
              <style.PostSubDetail>
                <ion-icon name="time-outline" />
                {node.timeToRead} MIN READ
              </style.PostSubDetail>
              <style.PostSubDetail>
                <ion-icon name="calendar-outline" />
                {node.frontmatter.date}
              </style.PostSubDetail>
              {viewCount && (
                <style.PostSubDetail>
                  <ion-icon name="eye-outline" />
                  {viewCount}
                </style.PostSubDetail>
              )}
            </style.PostSub>
          </style.PostHeader>
          {node.frontmatter.cover && (
            <style.PostCover>
              <style.PostCoverImage
                image={getImage(node.frontmatter.cover as any)}
                alt={`${node.frontmatter.title} Cover`}
              />
            </style.PostCover>
          )}
          <section className="post-content" dangerouslySetInnerHTML={{ __html: node.html }} />
          <Utterances />
          <RecommendPosts next={next} previous={previous} />
        </style.Article>
        <TableOfContents items={node.tableOfContents} currentHeaderUrl={currentHeaderUrl} />
      </style.PostContainer>
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
