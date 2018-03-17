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
  }

  editPriority = text =>{
    this.setState({priority: text,});
  }

  handleDescription = event =>{
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
      this.props.editTodo(this.props.todoId, this.state.text, this.state.priority, this.state.description)
    }
    this.props.renderAddTodo();
  }

  componentWillMount(){
    console.log(this.props);
    if(this.props.todoId){
      this.setState({
        text: this.props.todo.text,
        description: this.props.todo.description,
        priority: this.props.todo.priority
      })
    }
  }

  render() {
    console.log(this.props);

    let name;
    let buttonSave;
    if(this.props.todoId){
      name = (
      <input 
        className = "new-todo"
        type="text"
        value={this.state.text}
        onChange={this.handleName}/>)
      buttonSave = (  <button onClick = {() => this.editTodo()} className="add-todo-button"> Save Todo </button>  )
    }
    else{
      name = (
        <input 
        className = "new-todo"
        type="text"
        autoFocus="true"
        placeholder="What needs to be done?" 
        value={this.state.text}
        onChange={this.handleName}/>)
        buttonSave = (   <button onClick = {() => this.saveTodo()} className="add-todo-button"> Save Todo </button>   )
    }
    return (
      <div className="add-todo">
      {name}
        <div className = "button-nav">
        <span 
          className={classnames({
            'button-priority': true,
            'low-priority': true,
            'selected-priority': 1 === this.state.priority,
          })} 
          onClick = {() => this.editPriority(1)}>
        </span>
        <span
          className={classnames({
            'button-priority': true,
            'medium-priority': true,
            'selected-priority': 2 === this.state.priority,
          })} 
          onClick = {() => this.editPriority(2)}>
        </span>
        <span
          className={classnames({
            'button-priority': true,
            'hight-priority': true,
            'selected-priority': 3 === this.state.priority,
          })} 
          onClick = {() => this.editPriority(3)}>
        </span>
        </div>
        <textarea className='todo-description' value={this.state.description} onChange={this.handleDescription} />
        {buttonSave} 
      </div>
    )
  }
}
