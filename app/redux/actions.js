// Actions Types
export const types = {
  DUMMY_ADD: 'DUMMY_ADD',
};

// Actions
const actionCreators = {
  addDummy: () => ({
    type: types.DUMMY_ADD,
    payload: null,
  }),
};

export default actionCreators;
