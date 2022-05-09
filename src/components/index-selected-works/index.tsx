import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import * as style from './style';
import { GetSelectedWorksQuery } from 'utils/graphql-types';

const SelectedWorksQuery = graphql`
  query getSelectedWorks {
    allMarkdownRemark(
      limit: 3
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
            timeline
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

const IndexSelectedWorks: React.FC = () => {
  const selectedWorks = useStaticQuery<GetSelectedWorksQuery>(SelectedWorksQuery);

  return (
    <style.SelectedWorks>
      <h2 data-sal="slide-up" data-sal-delay="1100" data-sal-duration="300" data-sal-easing="ease">
        Selected Works
      </h2>
      <style.SelectedWorksList>
        {selectedWorks.allMarkdownRemark.edges.map(({ node }) => (
          <style.SelectedWorksItem to={`/work${node.fields.slug}`}>
            <style.SelectedWorksItemInfo>
              {node.frontmatter.at} — {node.frontmatter.timeline}
            </style.SelectedWorksItemInfo>
            <style.SelectedWorksItemTitle>{node.frontmatter.title}</style.SelectedWorksItemTitle>
            <style.SelectedWorksItemSubtitle>{node.frontmatter.subtitle}</style.SelectedWorksItemSubtitle>
            <style.SelectedWorksItemImage
              image={getImage(node.frontmatter.cover as any)}
              alt={`${node.frontmatter.title} Cover`}
            />
          </style.SelectedWorksItem>
        ))}
      </style.SelectedWorksList>
      <style.SelectedWorksMoreLink to="/work" data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease">
        <style.SelectedWorksMore>
          View More Works&nbsp;
          <ion-icon name="chevron-forward-outline" />
        </style.SelectedWorksMore>
      </style.SelectedWorksMoreLink>
    </style.SelectedWorks>
  );
};

export default IndexSelectedWorks;
