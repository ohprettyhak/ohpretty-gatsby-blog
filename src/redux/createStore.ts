import { createStore as reduxCreateStore } from 'redux';
import GatsbyConfig from '../../gatsby-config';

const reducer = (state: any, action: { type: string; value: string }) => {
  if (action.type === `CHANGETITLE`) {
    return Object.assign({}, state, {
      title: action.value,
    });
  }
  return state;
};

const initialState = { title: GatsbyConfig.siteMetadata.title };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
export type RootState = ReturnType<typeof reducer>;
