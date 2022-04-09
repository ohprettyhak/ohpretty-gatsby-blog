import React from 'react';

import { useDispatch } from 'react-redux';
import { DefaultLayout } from '../layouts';
import IndexCover from '../components/index-cover';
import IndexLatestPosts from '../components/index-latest-posts';

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: 'index' });

  return (
    <DefaultLayout>
      <IndexCover />
      <IndexLatestPosts />
    </DefaultLayout>
  );
};

export default IndexPage;
