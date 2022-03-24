import React, { useEffect } from 'react';
import { navigate, PageProps } from 'gatsby';

type SitePageContext = {
  toPage: string;
};

const PageRedirectTemplate: React.FC<PageProps<null, SitePageContext>> = React.memo(({ pageContext }) => {
  useEffect(() => {
    navigate(`${pageContext.toPage}`);
  }, []);
  return null;
});

export default PageRedirectTemplate;
