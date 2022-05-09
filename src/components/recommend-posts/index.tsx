import React from 'react';

import * as style from './style';

type PostDataProps = {
  next: { fields?: { slug?: string | null } | null; frontmatter?: { title?: string | null } | null } | null;
  previous: { fields?: { slug?: string | null } | null; frontmatter?: { title?: string | null } | null } | null;
};

const RecommendPosts: React.FC<PostDataProps> = ({ next, previous }) => {
  return (
    <style.Recommend>
      <style.RecommendPostsList>
        {previous !== null ? (
          <style.RecommendPrevious>
            <style.RecommendPostsLink to={`/post${previous.fields.slug}`}>
              <style.RecommendPostsContainer>
                <ion-icon name="arrow-back-outline" />
                <div style={{ marginLeft: '16px' }}>
                  <style.RecommendStepText>Previous</style.RecommendStepText>
                  <style.RecommendPostsTitle>{previous.frontmatter.title}</style.RecommendPostsTitle>
                </div>
              </style.RecommendPostsContainer>
            </style.RecommendPostsLink>
          </style.RecommendPrevious>
        ) : (
          <div></div>
        )}
        {next !== null ? (
          <style.RecommendNext>
            <style.RecommendPostsLink to={`/post${next.fields.slug}`}>
              <style.RecommendPostsContainer>
                <div style={{ marginRight: '16px' }}>
                  <style.RecommendStepText>Next</style.RecommendStepText>
                  <style.RecommendPostsTitle>{next.frontmatter.title}</style.RecommendPostsTitle>
                </div>
                <ion-icon name="arrow-forward-outline" />
              </style.RecommendPostsContainer>
            </style.RecommendPostsLink>
          </style.RecommendNext>
        ) : (
          <div></div>
        )}
      </style.RecommendPostsList>
    </style.Recommend>
  );
};

export default RecommendPosts;
