import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { useDispatch } from 'react-redux';
import { DefaultLayout } from '../layouts';
import * as style from '../styles/pages/work';
import { GetWorksQuery } from 'utils/graphql-types';

const WorksQuery = graphql`
  query getWorks {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/works/" } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            at
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

const WorkPage: React.FC = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: 'Work' });

  const works = useStaticQuery<GetWorksQuery>(WorksQuery);

  return (
    <DefaultLayout>
      <style.Work>Selected websites and apps.</style.Work>
      <style.WorkList>
        {works.allMarkdownRemark.edges.map(({ node }) => (
          <style.WorkItem>
            <div>
              <style.WorkItemAt>{node.frontmatter.at}</style.WorkItemAt>
              <style.WorkItemTitle>{node.frontmatter.title}</style.WorkItemTitle>
              <style.WorkItemSubtitle>{node.frontmatter.subtitle}</style.WorkItemSubtitle>
              <style.ViewMore to={`/work${node.fields.slug}`}>View More →</style.ViewMore>
            </div>
            <div>
              <style.WorkCoverImage
                image={getImage(node.frontmatter.cover as any)}
                alt={`${node.frontmatter.title} Cover`}
              />
            </div>
          </style.WorkItem>
        ))}
      </style.WorkList>
    </DefaultLayout>
  );
};

export default WorkPage;
