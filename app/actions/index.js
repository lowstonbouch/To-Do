export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodo = (text, priority, description, date) => ({ type: ADD_TODO, text, priority, description, date })
export const deleteTodo = id => ({ type: DELETE_TODO, id })
export const editTodo = (id, text, priority, description) => ({ type: EDIT_TODO, id, text, priority, description })
export const completeTodo = id => ({ type: COMPLETE_TODO, id })
export const completeAll = () => ({ type: COMPLETE_ALL })
export const clearCompleted = () => ({ type: CLEAR_COMPLETED })



