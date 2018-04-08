import * as actions from '../actions/actions';

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.ADD_SECTION:
      return {
        ...state,
        count: state.count + 1
      }
  }
  return state;
}

export default reducer;
