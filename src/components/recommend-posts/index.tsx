import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Recommend = styled.div`
  display: block;
  width: 100%;
  padding: 48px 0;
`;

const RecommendPostsList = styled.div`
  display: grid;
  margin: 0 -12px;
  grid-template-columns: 50% 50%;
  grid-row-gap: 24px;

  @media only screen and (max-width: 425px) {
    grid-template-columns: 100%;
  }
`;

const RecommendPostsLink = styled(Link)`
  display: block;
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

const RecommendPrevious = styled.div`
  margin: 0 12px;
  padding: 10px 12px;
  border-radius: 8px;
  background-color: var(--recommend-posts);
  transition: background-color 0.2s ease;
`;

const RecommendNext = styled(RecommendPrevious)`
  text-align: right;
`;

const RecommendStepText = styled.span`
  display: block;
  margin: 0;
  color: var(--text-secondary);
  font-weight: 300;
  font-size: 0.85rem;
`;

const RecommendPostsContainer = styled.div`
  display: inline-flex;
  align-items: center;

  ion-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text);
    vertical-align: middle;
  }
`;

const RecommendPostsTitle = styled.span`
  display: block;
  margin-top: 4px;
  color: var(--text);
  font-weight: 800;
  font-size: 1rem;
  word-break: break-word;
  white-space: normal;
`;

type PostDataProps = {
  next: { fields?: { slug?: string | null } | null; frontmatter?: { title?: string | null } | null } | null;
  previous: { fields?: { slug?: string | null } | null; frontmatter?: { title?: string | null } | null } | null;
};

const RecommendPosts: React.FC<PostDataProps> = ({ next, previous }) => {
  return (
    <Recommend>
      <RecommendPostsList>
        {previous !== null ? (
          <RecommendPrevious>
            <RecommendPostsLink to={previous.fields.slug}>
              <RecommendPostsContainer>
                <ion-icon name="arrow-back-outline" />
                <div style={{ marginLeft: '16px' }}>
                  <RecommendStepText>Previous</RecommendStepText>
                  <RecommendPostsTitle>{previous.frontmatter.title}</RecommendPostsTitle>
                </div>
              </RecommendPostsContainer>
            </RecommendPostsLink>
          </RecommendPrevious>
        ) : (
          <div></div>
        )}
        {next !== null ? (
          <RecommendNext>
            <RecommendPostsLink to={next.fields.slug}>
              <RecommendPostsContainer>
                <div style={{ marginRight: '16px' }}>
                  <RecommendStepText>Next</RecommendStepText>
                  <RecommendPostsTitle>{next.frontmatter.title}</RecommendPostsTitle>
                </div>
                <ion-icon name="arrow-forward-outline" />
              </RecommendPostsContainer>
            </RecommendPostsLink>
          </RecommendNext>
        ) : (
          <div></div>
        )}
      </RecommendPostsList>
    </Recommend>
  );
};

export default RecommendPosts;
