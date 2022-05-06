import { CreatePagesArgs } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

import metaConfig from '../../gatsby-meta-config';
//import { GetPostsDataQuery } from './graphql-types';

export async function createNodes({ node, getNode, actions }) {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({ node, name: `slug`, value: slug });
  }
}

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions;

  const { data, errors } = await graphql<any, any>(`
    query getPostsData {
      post: allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/contents/" } }
      ) {
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

      categories: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contents/" } }) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }

      uncategorized: allMarkdownRemark(
        filter: { frontmatter: { categories: { eq: null } }, fileAbsolutePath: { regex: "/contents/" } }
      ) {
        totalCount
      }

      work: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/works/" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    throw errors;
  }

  const { post, categories, uncategorized, work } = data;

  const postPage = path.resolve(__dirname, '../templates/PostTemplate.tsx');
  const workPage = path.resolve(__dirname, '../templates/WorkTemplate.tsx');
  const postListPage = path.resolve(__dirname, '../templates/PostListTemplate.tsx');
  const pageRedirect = path.resolve(__dirname, '../utils/page-redirect.tsx');

  if (post.edges.length > 0) {
    post.edges.forEach(({ node, next, previous }, index: number) => {
      const previousPostId = index === 0 ? null : previous.id;
      const nextPostId = index === post.edges.length - 1 ? null : next.id;
      createPage({
        path: `/post${node.fields.slug}`,
        context: {
          id: node.id,
          prev: previousPostId,
          next: nextPostId,
          categories: node.frontmatter.categories,
        },
        component: postPage,
      });
    });
  }

  if (uncategorized.totalCount > 0)
    categories.group.push({ fieldValue: 'Uncategorized', totalCount: uncategorized.totalCount });

  const postsPerPage: number = metaConfig.postPerPage;
  const postMaxPageSize: number = Math.ceil(post.edges.length / postsPerPage);
  Array.from({ length: postMaxPageSize }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/post/` : `/post/${i + 1}/`,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        cur: i + 1,
        max: postMaxPageSize,
        totalPosts: post.edges.length,
        categoryQuery: null,
        categories: categories.group,
      },
      component: postListPage,
    });
  });
  createPage({
    path: `/post/1/`,
    context: {
      toPage: '/post/',
    },
    component: pageRedirect,
  });

  categories.group.forEach((category) => {
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
          totalPosts: post.edges.length,
          categoryQuery: category.fieldValue,
          categories: categories.group,
        },
        component: postListPage,
      });

      if (i === 0) {
        createPage({
          path: `/category/${name}/1/`,
          context: {
            toPage: `/category/${name}/`,
          },
          component: pageRedirect,
        });
      }
    });
  });

  work.edges.forEach(({ node }) => {
    createPage({
      path: `/work${node.fields.slug}`,
      context: {
        id: node.id,
      },
      component: workPage,
    });
  });
}
