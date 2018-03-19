import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../actions';
import undoable from 'redux-undo';
const initialState = [
  {
    text: 'Wait for the result',
    description: '',
    completed: false,
    priority: 2,
    date: '2018.03.20 01:00',
    id: 1
  },
  {
    text: 'Submit task',
    description: 'Submit to DevIncubator',
    completed: true,
    priority: 1,
    date: '2018.03.19 23:00',
    id: 2
  },
  {
    text: 'Make a web application',
    description: 'Use: React/Redux sass Webpack',
    completed: true,
    priority: 3,
    date: '2018.03.15 20:00',
    id: 3
  },

]

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
          priority: action.priority,
          description: action.description,
          date: action.date,
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo,
             text: action.text,
             priority: action.priority,
             description: action.description,
             completed: action.completed } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}

const undoableTodos = undoable(todos)

export default undoableTodos