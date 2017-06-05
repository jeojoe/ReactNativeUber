import { types } from './actions';

export const initialState = {
  dummyState: 0,
};

const reducers = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.DUMMY_ADD:
      return {
        dummyState: state.dummyState + 1,
      };
    default:
      return state;
  }
};

export default reducers;
