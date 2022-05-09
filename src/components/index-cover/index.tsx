import React from 'react';

import metaConfig from '../../../gatsby-meta-config';
import * as style from './style';

const IndexCover: React.FC = () => {
  return (
    <style.Cover id="cover">
      <style.CoverContents>
        <style.CoverContentTitle
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="300"
          data-sal-easing="ease"
        >
          {metaConfig.slogan}
        </style.CoverContentTitle>
        <style.CoverContentSub data-sal="slide-up" data-sal-delay="300" data-sal-duration="300" data-sal-easing="ease">
          {metaConfig.sloganDescription}
        </style.CoverContentSub>
        <style.CoverContentsUser
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-duration="300"
          data-sal-easing="ease"
        >
          <style.CoverContentLink href={`https://github.com/${metaConfig.social.github}`} target="_blank">
            {`@${metaConfig.social.github}`}
          </style.CoverContentLink>
        </style.CoverContentsUser>
      </style.CoverContents>
    </style.Cover>
  );
};

export default IndexCover;
