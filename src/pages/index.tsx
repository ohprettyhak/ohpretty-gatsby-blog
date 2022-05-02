import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { DefaultLayout } from '../layouts';
import IndexCover from '../components/index-cover';
import IndexLatestPosts from '../components/index-latest-posts';

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: 'index' });

  useEffect(() => {
    let cover = document.getElementById('cover').offsetHeight;
    let blank = document.getElementById('blank');
    blank.style.height = cover + "px";
  }, []);

  return (
    <DefaultLayout>
      <IndexCover />
      <section id="blank" />
      <IndexLatestPosts />
    </DefaultLayout>
  );
};

export default IndexPage;
