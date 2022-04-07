import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { DefaultLayout } from '../layouts';

const AboutPage = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'CHANGETITLE', value: 'About' });

  return (
    <DefaultLayout>
      <p></p>
    </DefaultLayout>
  );
};

export default AboutPage;
