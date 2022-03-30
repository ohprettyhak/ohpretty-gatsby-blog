import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { useDispatch } from 'react-redux';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { DefaultLayout } from '../components/layouts';
import { GetPostListQuery } from '../lib/graphql-types';
import { PageCategory, PagePagination } from '../components/includes';

const PostsList = styled.section`
  display: grid;
  margin: 0 -12px;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-row-gap: 24px;
  margin-top: 36px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: 100%;
  }
`;

const PostsItem = styled.div`
  width: 100%;
  padding: 0 12px;
  user-select: none;

  ion-icon {
    height: 16px;
    margin-right: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
`;

const PostsImageWapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media only screen and (max-width: 1080px) {
    height: calc(20vw - 25px);
  }

  @media only screen and (max-width: 800px) {
    height: calc(30vw - 25px);
  }

  @media only screen and (max-width: 560px) {
    height: calc(50vw);
  }
`;

const PostsImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  isolation: isolate;
  transition: transform 0.3s ease-out;
  -webkit-transition: transform 0.3s ease-out;
  -moz-transition: transform 0.3s ease-out;
  -o-transition: transform 0.3s ease-out;

  :hover {
    transform: scale(0.97);
    -ms-transform: scale(0.97);
    -webkit-transform: scale(0.97);
    -o-transform: scale(0.97);
    -moz-transform: scale(0.97);
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.075);
  }
`;

const PostsLink = styled(Link)`
  text-decoration: none;
`;

const PostsContent = styled.div`
  margin: 6px 0 0 0;
`;

const PostsCategories = styled.span`
  font-size: 0.75rem;
  color: #adb5bd;
`;

const PostsCategoriesLink = styled(Link)`
  color: #adb5bd;
  text-decoration: none;
  transition: color 0.2s ease;

  :hover {
    color: #868e96;
  }
`;

const PostsTitle = styled.h3`
  width: 100%;
  margin-top: 2px;
  overflow: hidden;
  color: var(--text);
  font-size: 1.15rem;
  letter-spacing: -1px;
  word-break: break-all;
  white-space: normal;
`;

const PostsExcerpt = styled.p`
  display: -webkit-box;
  margin-top: 4px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PostSub = styled.div`
  margin-top: 6px;
  font-size: 0.8rem;
`;

const PostsReadTime = styled.span`
  margin-right: 10px;
  color: #adb5bd;
`;

const PostsDate = styled.span`
  color: #adb5bd;
`;

type SitePageContext = {
  cur: number;
  max: number;
  totalPosts: number;
  categoryQuery: string;
  categories: Array<{ fieldValue?: string | null | undefined; totalCount: number }>;
};

type NodeArray = {
  node: {
    excerpt?: string | null;
    timeToRead?: number | null;
    id: string;
    fields?: {
      slug?: string | null;
    } | null;
    frontmatter?: {
      title?: string | null;
      categories?: Array<string | null> | null;
      date?: any | null;
      cover?: any | null;
    } | null;
  };
};

const PostListTemplate: React.FC<PageProps<GetPostListQuery, SitePageContext>> = React.memo(({ data, pageContext }) => {
  const { cur, max, totalPosts, categoryQuery, categories } = pageContext;

  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: categoryQuery ? categoryQuery : 'Post' });

  let postsList: Array<NodeArray>;
  if (categoryQuery) {
    if (categoryQuery === 'Uncategorized') postsList = data.uncategorizedPosts.edges;
    else postsList = data.categoryPosts.edges;
  } else postsList = data.defaultPosts.edges;

  return (
    <DefaultLayout>
      <PageCategory categories={categories} categoryQuery={categoryQuery} totalPosts={totalPosts} />
      <PostsList>
        {postsList.map(({ node }) => (
          <PostsItem key={node.id} data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease">
            <PostsLink to={node.fields.slug}>
              <PostsImageWapper>
                <PostsImage image={getImage(node.frontmatter.cover)} alt={node.frontmatter.title} />
              </PostsImageWapper>
            </PostsLink>
            <PostsContent>
              <PostsCategories>
                <ion-icon name="bookmark-outline" />
                {node.frontmatter.categories &&
                  node.frontmatter.categories.map((member: string, index: number) => (
                    <React.Fragment key={member}>
                      <PostsCategoriesLink to={`/category/${member.toLowerCase()}`}>{member}</PostsCategoriesLink>
                      {index !== node.frontmatter.categories.length - 1 && ', '}
                    </React.Fragment>
                  ))}
                {!node.frontmatter.categories && (
                  <PostsCategoriesLink to={`/category/uncategorized`}>Uncategorized</PostsCategoriesLink>
                )}
              </PostsCategories>
              <PostsLink to={node.fields.slug}>
                <PostsTitle>{node.frontmatter.title}</PostsTitle>
                <PostsExcerpt>{node.excerpt}</PostsExcerpt>
              </PostsLink>
              <PostSub>
                <PostsReadTime>
                  <ion-icon name="time-outline" />
                  {node.timeToRead} MIN READ
                </PostsReadTime>
                <PostsDate>
                  <ion-icon name="calendar-outline" />
                  {node.frontmatter.date}
                </PostsDate>
              </PostSub>
            </PostsContent>
          </PostsItem>
        ))}
      </PostsList>
      <PagePagination cur={cur} max={max} categoryQuery={categoryQuery} />
    </DefaultLayout>
  );
});

export default PostListTemplate;

export const postListQuery = graphql`
  query getPostList($skip: Int!, $limit: Int!, $categoryQuery: String = "") {
    defaultPosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 100)
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
                gatsbyImageData(quality: 50, formats: AUTO, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }

    categoryPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { categories: { eq: $categoryQuery } } }
    ) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 100)
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

    uncategorizedPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { categories: { eq: null } } }
    ) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 100)
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
