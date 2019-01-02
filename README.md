[![Build Status](https://travis-ci.org/tejashjl1020/redux-merge-reducers.svg?branch=master)](https://img.shields.io/npm/v/redux-merging-reducers.svg)
![](https://img.shields.io/npm/v/redux-merging-reducers.svg)
![](https://img.shields.io/david/tejashjl1020/redux-merge-reducers.svg)

# redux-merge-reducers

A utility to merge multiple reducers into one.

## Why?

In the development of a large redux based web application, the reducers written for a particular state will grow simultaneously big. I noticed the importance of splitting the reducer, so each split can be more readable and reusable.


This is not a alias for **combineReducer**

`combineReducers` function merge reducers in a key-pair manner. Each reducer are independent to each other and do not share the state.

Whereas `mergeReducers` function copies properties from all reducers to a single reducer. Each reducer can access the state of other reducers.

## Installation

```
npm install --save redux-merging-reducers
```

## Examples
#### 1. Main Reducer
```es6
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

```

#### 2. Extra Reducer.

```es6
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
```
#### 3. Merging Both Reducers

```es6
export const reducer = mergeReducers(MainReducer, ExtraReducer);
```
#### 4. Resulting redux state

```es6
{
  messages: [],
  todos: []
}
```

## API

redux-merging-reducers exports one function.

### `mergeReducers(reducer1, reducer2, reducer...n)`

+ `reducer1`/`reducer2`/`reducerN` *(function)* **[required]** : a generic reducer function

## License

MIT

## Author

Tejash JL
