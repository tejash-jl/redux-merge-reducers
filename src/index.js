const mergeReducer = (...reducers) => (
  (state, action) => (
    reducers.reduce((accumulatedState, reducer) => (
      Object.assign(accumulatedState, reducer(state, action))
    ), state || {})
  )
);


export default mergeReducer;
