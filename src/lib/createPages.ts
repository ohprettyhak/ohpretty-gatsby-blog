import { CreatePagesArgs } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

import { GetPostsDataQuery } from './graphql-types';

export async function createNodes({ node, getNode, actions }) {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `contents` });
    createNodeField({ node, name: `slug`, value: `/post${slug}` });
  }
}

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions;

  const { data, errors } = await graphql<GetPostsDataQuery>(`
    query getPostsData {
      posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              categories
            }
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }

      categories: allMarkdownRemark {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }

      uncategorized: allMarkdownRemark(filter: { frontmatter: { categories: { eq: null } } }) {
        totalCount
      }
    }
  `);

  if (errors) {
    throw errors;
  }

  const posts = data.posts.edges;
  if (posts.length > 0) {
    posts.forEach(({ node, next, previous }, index: number) => {
      const previousPostId = index === 0 ? null : previous.id;
      const nextPostId = index === posts.length - 1 ? null : next.id;
      createPage({
        path: node.fields.slug,
        context: {
          id: node.id,
          prev: previousPostId,
          next: nextPostId,
          categories: node.frontmatter.categories,
        },
        component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
      });
    });
  }

  let categories = data.categories.group;
  if (data.uncategorized.totalCount > 0)
    categories.push({ fieldValue: 'Uncategorized', totalCount: data.uncategorized.totalCount });

  const postsPerPage: number = 1;
  const postMaxPageSize: number = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: postMaxPageSize }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/post/` : `/post/${i + 1}/`,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        cur: i + 1,
        max: postMaxPageSize,
        totalPosts: posts.length,
        categoryQuery: null,
        categories: categories,
      },
      component: path.resolve(__dirname, '../templates/PostListTemplate.tsx'),
    });
  });
  createPage({
    path: `/post/1/`,
    context: {
      toPage: '/post/',
    },
    component: path.resolve(__dirname, '../lib/PageRedirect.tsx'),
  });

  categories.forEach((category) => {
    const categoryMaxPageSize: number = Math.ceil(category.totalCount / postsPerPage);
    const name: string = category.fieldValue.toLowerCase();

    Array.from({ length: categoryMaxPageSize }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/category/${name}/` : `/category/${name}/${i + 1}/`,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          cur: i + 1,
          max: categoryMaxPageSize,
          totalPosts: posts.length,
          categoryQuery: category.fieldValue,
          categories,
        },
        component: path.resolve(__dirname, '../templates/PostListTemplate.tsx'),
      });

      if (i === 0) {
        createPage({
          path: `/category/${name}/1/`,
          context: {
            toPage: `/category/${name}/`,
          },
          component: path.resolve(__dirname, '../lib/PageRedirect.tsx'),
        });
      }
    });
  });
}
