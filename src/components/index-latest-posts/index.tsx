import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import * as style from './style';
import { GetLatestPostsQuery } from '../../utils/graphql-types';

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
    <style.LatestPosts id="latest-posts">
      <h2 data-sal="slide-up" data-sal-delay="800" data-sal-duration="300" data-sal-easing="ease">
        Latest Posts
      </h2>
      <style.LatestPostsList>
        {latestPosts.allMarkdownRemark.edges.map(({ node }) => (
          <style.LatestPostsItem key={node.id}>
            <style.LatestPostsImageContainer>
              <style.LatestPostsLink to={`/post${node.fields.slug}`}>
                <style.LatestPostsImage image={getImage(node.frontmatter.cover as any)} alt={node.frontmatter.title} />
              </style.LatestPostsLink>
            </style.LatestPostsImageContainer>
            <style.LatestPostsContents>
              <style.LatestPostsContainer>
                <style.LatestPostsCategories>
                  <ion-icon name="bookmark-outline" />
                  {node.frontmatter.categories &&
                    node.frontmatter.categories.map((member: string, index: number) => (
                      <React.Fragment key={member}>
                        <style.LatestPostsCategoriesLink to={`/category/${member.toLowerCase()}`}>
                          {member}
                        </style.LatestPostsCategoriesLink>
                        {index !== node.frontmatter.categories.length - 1 && ', '}
                      </React.Fragment>
                    ))}
                  {!node.frontmatter.categories && (
                    <style.LatestPostsCategoriesLink to={`/category/uncategorized`}>
                      Uncategorized
                    </style.LatestPostsCategoriesLink>
                  )}
                </style.LatestPostsCategories>
                <style.LatestPostsLink to={`/post${node.fields.slug}`}>
                  <style.LatestPostsTitle>{node.frontmatter.title}</style.LatestPostsTitle>
                  <style.LatestPostsSubTitle>{node.frontmatter.subtitle}</style.LatestPostsSubTitle>
                  <style.LatestPostsSub>
                    <style.LatestPostsReadTime>
                      <ion-icon name="time-outline" />
                      {node.timeToRead} MIN READ
                    </style.LatestPostsReadTime>
                    <style.LatestPostsDate>
                      <ion-icon name="calendar-outline" />
                      {node.frontmatter.date}
                    </style.LatestPostsDate>
                  </style.LatestPostsSub>
                </style.LatestPostsLink>
              </style.LatestPostsContainer>
            </style.LatestPostsContents>
          </style.LatestPostsItem>
        ))}
      </style.LatestPostsList>
      <style.LatestPostsMoreLink to="/post" data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease">
        <style.LatestPostsMore>
          View More Posts&nbsp;
          <ion-icon name="chevron-forward-outline" />
        </style.LatestPostsMore>
      </style.LatestPostsMoreLink>
    </style.LatestPosts>
  );
};

export default IndexLatestPosts;
