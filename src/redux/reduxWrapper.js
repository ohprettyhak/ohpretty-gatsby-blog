import React from 'react';
import { Provider } from 'react-redux';

import createStore from './createStore';

const store = createStore();
const wrapper = ({ element }) => <Provider store={store}>{element}</Provider>;

export default wrapper;
