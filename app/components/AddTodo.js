import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  state = {
    text: '',
    priority: 1,
    description: '',
    completed: false,
  }

  editPriority = text => {
    this.setState({ priority: text, });
  }

  handleDescription = event => {
    this.setState({ description: event.target.value })
  }

  handleName = event => {
    this.setState({ text: event.target.value })
  }

  saveTodo = () => {
    if (this.state.text.length !== 0) {
      let date = new Date();
      let stringDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

      this.props.addTodo(this.state.text, this.state.priority, this.state.description, stringDate)
    }
    this.props.renderAddTodo();
  }

  editTodo = () => {
    if (this.state.text.length !== 0) {
      console.log(this.props);
      this.props.editTodo(this.props.todoId, this.state.text, this.state.priority, this.state.description, this.state.completed);
    }
    this.props.renderAddTodo();
  }

  handleCompleted = () => {
    this.setState({completed: !this.state.completed})
  }

  componentWillMount() {   
    if (this.props.todoId) {
      const {todo} = this.props
      this.setState({
        text: todo.text,
        description: todo.description,
        priority: todo.priority,
        completed: todo.completed
      })
    }
  }

  render() {
    const { todo, completeTodo} = this.props

    let name;
    let buttonSave;
    if (this.props.todoId) {
      name = (
        <input
          className="new-todo"
          type="text"
          value={this.state.text}
          onChange={this.handleName} />)
      buttonSave = (<button onClick={() => this.editTodo()} className="add-todo-button"> Save Todo </button>)
    }
    else {
      name = (
        <input
          className="new-todo"
          type="text"
          autoFocus="true"
          placeholder="What needs to be done?"
          value={this.state.text}
          onChange={this.handleName} />)
      buttonSave = (<button onClick={() => this.saveTodo()} className="add-todo-button"> Save Todo </button>)
    }
    return (
      <div className="add-todo">
        {name}
        <div className="button-nav">
          <span
            className={classnames({
              'button-priority': true,
              'low-priority': true,
              'selected-priority': 1 === this.state.priority,
            })}
            onClick={() => this.editPriority(1)}>
          </span>
          <span
            className={classnames({
              'button-priority': true,
              'medium-priority': true,
              'selected-priority': 2 === this.state.priority,
            })}
            onClick={() => this.editPriority(2)}>
          </span>
          <span
            className={classnames({
              'button-priority': true,
              'hight-priority': true,
              'selected-priority': 3 === this.state.priority,
            })}
            onClick={() => this.editPriority(3)}>
          </span>
        </div>
        {this.props.todoId ? <div className="complete-todo">
            <div className="pretty p-default p-round">
              <input type="checkbox"
                checked={this.state.completed}
                onChange={this.handleCompleted} />
              <div className="state p-success-o">
                <label> Completed</label>
              </div>
            </div>
          </div> :
            false}
        <textarea className='todo-description' placeholder="Description" value={this.state.description} onChange={this.handleDescription} />
        {buttonSave}
      </div>
    )
  }
}
