import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { PostLayout } from '../layouts';
import Utterances from '../components/utterances';
import { GetWorkDetailQuery } from '../utils/graphql-types';

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 72px;
`;

const WorkHeader = styled.section`
  padding: 72px 0 56px 0;
`;

const WorkTitle = styled.h1`
  color: var(--text);
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
`;

const WorkSubtitle = styled.h2`
  margin-top: 8px;
  color: var(--text-secondary);
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
`;

const WorkDescription = styled.p`
  margin-top: 16px;
  color: var(--text-secondary);
  font-size: 0.95rem;
  text-align: center;
`;

const WorkInfo = styled.section`
  padding: 0 24px 20px 24px;
  margin-bottom: 64px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background-color: var(--category-background);
`;

const WorkInfoTitle = styled.p`
  display: flex;
  color: var(--text);
  margin-top: 16px;
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;

  ion-icon {
    width: 1rem;
    height: 1rem;
    margin: 0;
    padding: 0;
    color: var(--text);
  }
`;

const WorkInfoDescription = styled.p`
  margin-top: 2px;
  color: var(--text-secondary);
  font-size: 1rem;
`;

const WorkTemplate: React.FC<PageProps<GetWorkDetailQuery, any>> = React.memo(({ data }) => {
  const { markdownRemark } = data;

  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: markdownRemark.frontmatter.title });

  return (
    <PostLayout>
      <Article>
        <WorkHeader>
          <WorkTitle>{markdownRemark.frontmatter.title}</WorkTitle>
          <WorkSubtitle>{markdownRemark.frontmatter.subtitle}</WorkSubtitle>
          <WorkDescription>
            {markdownRemark.frontmatter.at} — {markdownRemark.frontmatter.timeline}
          </WorkDescription>
        </WorkHeader>
        <WorkInfo>
          <WorkInfoTitle>
            <ion-icon name="thumbs-up-outline" />
            &nbsp;Role
          </WorkInfoTitle>
          <WorkInfoDescription>{markdownRemark.frontmatter.role}</WorkInfoDescription>
          <WorkInfoTitle>
            <ion-icon name="calendar-outline" />
            &nbsp;Timeline
          </WorkInfoTitle>
          <WorkInfoDescription>{markdownRemark.frontmatter.timeline}</WorkInfoDescription>
          <WorkInfoTitle>
            <ion-icon name="albums-outline" />
            &nbsp;Platform
          </WorkInfoTitle>
          <WorkInfoDescription>{markdownRemark.frontmatter.platform}</WorkInfoDescription>
          <WorkInfoTitle>
            <ion-icon name="rocket-outline" />
            &nbsp;Type
          </WorkInfoTitle>
          <WorkInfoDescription>{markdownRemark.frontmatter.type}</WorkInfoDescription>
        </WorkInfo>
        <section className="post-content" dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <Utterances />
      </Article>
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
