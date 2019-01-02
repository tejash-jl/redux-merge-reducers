import mergeReducer from "../src";
import { MainReducer } from "./mainReducer";
import * as assert from 'assert';
import { ExtraReducer } from "./extraReducer";

describe('merge reducers', () => {
  it('with single reducer', () => {
    const reducer = mergeReducer(MainReducer);
    const newState = reducer(undefined, {type: "ADD_MESSAGE", payload: {message: "hi"}});
    assert.deepStrictEqual(newState, {messages: ['hi']});
  });

  it('with two reducer', () => {
    const reducer = mergeReducer(MainReducer, ExtraReducer);
    const newState = reducer(undefined, {type: "ADD_TODO", payload: {todo: "merge both the reducers"}});
    assert.deepStrictEqual(newState, {messages: [], todos: ['merge both the reducers']});
  });

  it('should return initial state of all reducers', () => {
    const reducer = mergeReducer(MainReducer, ExtraReducer);
    const newState = reducer(undefined, {type: "@@INIT"});
    assert.deepStrictEqual(newState, {messages: [], todos: []});
  });

  it('should dispatch actions of both reducers', () => {
    const reducer = mergeReducer(MainReducer, ExtraReducer);
    let newState = reducer(undefined, {type: "ADD_MESSAGE", payload: {message: "first action"}});
    newState = reducer(newState, {type: "ADD_TODO", payload: {todo: "second action"}});
    assert.deepStrictEqual(newState, {messages: ['first action'], todos: ['second action']});
  });

});
