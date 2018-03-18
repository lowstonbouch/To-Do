import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

import Destroy from 'react-icons/lib/md/delete';
import Time from 'react-icons/lib/md/access-time';
import Edit from 'react-icons/lib/fa/edit';
import Completed from 'react-icons/lib/md/check-circle';


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
      <div className={classnames({
        'item': true,
        'completed': todo.completed,
      })}>
       <span className={classnames({
            'low-priority': 1 === todo.priority,
            'medium-priority': 2 === todo.priority,
            'hight-priority': 3 === todo.priority,
            'selected-priority': true,
          })}></span>
      <div className="toggle">
        <div className="pretty p-default p-round">
          <input type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)} />
            <div className="state p-success-o">
              <label></label>
            </div>
        </div>
      </div>
      {todo.completed ? <span className="todo-completed-info"><Completed /> completed</span>:false}
      <span className="name-todo">{todo.text}</span>
      <span className="description-todo">{todo.description}</span>
      <Time className="todo-date-logo" />
      <span className="todo-date">{todo.date}</span>
      <span className="destroy"
              onClick={() => deleteTodo(todo.id)}>
              <Destroy />
      </span>
      <span className="edit"
              onClick={this.handleEdit}>
              <Edit />
      </span>
    </div>
    )
  }
}
