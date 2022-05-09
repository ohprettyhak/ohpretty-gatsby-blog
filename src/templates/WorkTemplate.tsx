import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useDispatch } from 'react-redux';

import { PostLayout } from '../layouts';
import * as style from '../styles/templates/work';
import Utterances from '../components/utterances';
import { GetWorkDetailQuery } from '../utils/graphql-types';

const WorkTemplate: React.FC<PageProps<GetWorkDetailQuery, any>> = React.memo(({ data }) => {
  const { markdownRemark } = data;

  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: markdownRemark.frontmatter.title });

  return (
    <PostLayout>
      <style.Article>
        <style.WorkHeader>
          <style.WorkTitle>{markdownRemark.frontmatter.title}</style.WorkTitle>
          <style.WorkSubtitle>{markdownRemark.frontmatter.subtitle}</style.WorkSubtitle>
          <style.WorkDescription>
            {markdownRemark.frontmatter.at} — {markdownRemark.frontmatter.timeline}
          </style.WorkDescription>
        </style.WorkHeader>
        <style.WorkInfo>
          <style.WorkInfoTitle>
            <ion-icon name="thumbs-up-outline" />
            &nbsp;Role
          </style.WorkInfoTitle>
          <style.WorkInfoDescription>{markdownRemark.frontmatter.role}</style.WorkInfoDescription>
          <style.WorkInfoTitle>
            <ion-icon name="calendar-outline" />
            &nbsp;Timeline
          </style.WorkInfoTitle>
          <style.WorkInfoDescription>{markdownRemark.frontmatter.timeline}</style.WorkInfoDescription>
          <style.WorkInfoTitle>
            <ion-icon name="albums-outline" />
            &nbsp;Platform
          </style.WorkInfoTitle>
          <style.WorkInfoDescription>{markdownRemark.frontmatter.platform}</style.WorkInfoDescription>
          <style.WorkInfoTitle>
            <ion-icon name="rocket-outline" />
            &nbsp;Type
          </style.WorkInfoTitle>
          <style.WorkInfoDescription>{markdownRemark.frontmatter.type}</style.WorkInfoDescription>
        </style.WorkInfo>
        <section className="post-content" dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <Utterances />
      </style.Article>
    </PostLayout>
  );
});

export default WorkTemplate;

export const workDetailQuery = graphql`
  query getWorkDetail($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subtitle
        at
        role
        timeline
        platform
        type
        cover {
          childImageSharp {
            gatsbyImageData(quality: 50, formats: AUTO, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
