import { CreatePagesArgs } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

//import { GetPostsDataQuery } from './graphql-types';

export async function createNodes({ node, getNode, actions }) {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `contents` });
    createNodeField({ node, name: `slug`, value: `/posts${slug}` });
  }
}

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions;

  const { data, errors } = await graphql<any, any>(`
    query getPostsData {
      posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          node {
            id
            fields {
              slug
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
          previous: previousPostId,
          next: nextPostId,
        },
        component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
      });
    });
  }

  const postsPerPage = 6;
  const postMaxPageSize = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: postMaxPageSize }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/post/` : `/post/${i + 1}/`,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        max: postMaxPageSize,
        current: i + 1,
      },
      component: path.resolve(__dirname, '../templates/PostListTemplate.tsx'),
    });
  });
}
