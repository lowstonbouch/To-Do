import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

import Destroy from 'react-icons/lib/md/delete';
import Edit from 'react-icons/lib/fa/edit'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false,
  }


  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  handleEdit = () =>{
    this.props.editTodoId(this.props.todo.id);
    this.props.renderAddTodo();
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    return (
      <div className = "item">
      <input className="toggle"
             type="checkbox"
             checked={todo.completed}
             onChange={() => completeTodo(todo.id)} />
      <label>
        {todo.text}
      </label>
      <button className="destroy"
              onClick={() => deleteTodo(todo.id)}>
              <Destroy />
      </button>
      <button className="edit"
              onClick={this.handleEdit}>
              <Edit />
      </button>
    </div>
    )
  }
}
