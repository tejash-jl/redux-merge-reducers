const initialState = {
  messages: []
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign({}, state, {
        messages: state.messages.concat(action.payload.message)
      });
    default:
      return state;
  }
};
