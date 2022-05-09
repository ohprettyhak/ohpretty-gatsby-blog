import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useDispatch } from 'react-redux';
import { getImage } from 'gatsby-plugin-image';

import { DefaultLayout } from '../layouts';
import * as style from '../styles/templates/post-list';
import Category from '../components/category';
import Pagination from '../components/pagination';
import { GetPostListQuery } from '../utils/graphql-types';

type SitePageContext = {
  cur: number;
  max: number;
  totalPosts: number;
  categoryQuery: string;
  categories: Array<{ fieldValue?: string | null | undefined; totalCount: number }>;
};

type NodeArray = {
  node: {
    timeToRead?: number | null;
    id: string;
    fields?: {
      slug?: string | null;
    } | null;
    frontmatter?: {
      title?: string | null;
      subtitle?: string | null;
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
      <Category categories={categories} categoryQuery={categoryQuery} totalPosts={totalPosts} />
      <style.PostsList>
        {postsList.map(({ node }) => (
          <style.PostsItem key={node.id}>
            <style.PostsLink to={`/post${node.fields.slug}`}>
              <style.PostsImageWapper>
                <style.PostsImage image={getImage(node.frontmatter.cover)} alt={node.frontmatter.title} />
              </style.PostsImageWapper>
            </style.PostsLink>
            <style.PostsContent>
              <style.PostsCategories>
                <ion-icon name="bookmark-outline" />
                {node.frontmatter.categories &&
                  node.frontmatter.categories.map((member: string, index: number) => (
                    <React.Fragment key={member}>
                      <style.PostsCategoriesLink to={`/category/${member.toLowerCase()}`}>
                        {member}
                      </style.PostsCategoriesLink>
                      {index !== node.frontmatter.categories.length - 1 && ', '}
                    </React.Fragment>
                  ))}
                {!node.frontmatter.categories && (
                  <style.PostsCategoriesLink to={`/category/uncategorized`}>Uncategorized</style.PostsCategoriesLink>
                )}
              </style.PostsCategories>
              <style.PostsLink to={`/post${node.fields.slug}`}>
                <style.PostsTitle>{node.frontmatter.title}</style.PostsTitle>
                <style.PostsSubTitle>{node.frontmatter.subtitle}</style.PostsSubTitle>
              </style.PostsLink>
              <style.PostSub>
                <style.PostsReadTime>
                  <ion-icon name="time-outline" />
                  {node.timeToRead} MIN READ
                </style.PostsReadTime>
                <style.PostsDate>
                  <ion-icon name="calendar-outline" />
                  {node.frontmatter.date}
                </style.PostsDate>
              </style.PostSub>
            </style.PostsContent>
          </style.PostsItem>
        ))}
      </style.PostsList>
      <Pagination cur={cur} max={max} categoryQuery={categoryQuery} />
    </DefaultLayout>
  );
});

export default PostListTemplate;

export const PostListQuery = graphql`
  query getPostList($skip: Int!, $limit: Int!, $categoryQuery: String = "") {
    defaultPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
      filter: { frontmatter: { categories: { eq: $categoryQuery } }, fileAbsolutePath: { regex: "/contents/" } }
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

    uncategorizedPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { categories: { eq: null } }, fileAbsolutePath: { regex: "/contents/" } }
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
