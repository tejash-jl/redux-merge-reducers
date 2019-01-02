const initialState = {
  todos: []
};

export const ExtraReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: state.todos.concat(action.payload.todo)
      });
    default:
      return state;
  }
};
