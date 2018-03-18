import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../actions';
import undoable from 'redux-undo';
const initialState = [
  {
    text: 'Low',
    description: 'how to use Redux',
    completed: false,
    priority: 1,
    date: '1998.03.24 06:00',
    id: 1
  },
  {
    text: 'Hight',
    description: 'how to use Redux',
    completed: false,
    priority: 3,
    date: '1998.03.24 07:00',
    id: 2
  },
  {
    text: 'Medium',
    description: 'how to use Redux',
    completed: false,
    priority: 2,
    date: '1998.03.24 08:00',
    id: 3
  },
  {
    text: 'Medium',
    description: 'how to use Redux',
    completed: false,
    priority: 2,
    date: '1998.03.24 09:00',
    id: 4
  }
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