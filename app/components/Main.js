import * as React from 'react';
import AddTodo from '../components/AddTodo';
import MainSection from '../components/MainSection';
import Header from '../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Main extends React.Component {

  state = {
    addTodo: false,
    todoId: undefined,
  }

  renderAddTodo = () => {
    this.setState({addTodo: !this.state.addTodo,});
  }

  editTodoId = id =>{
    this.setState({todoId: id,});
  }

  render() {
    const { todos, actions } = this.props;
    let todoId = this.state.todoId;
    return (
      <Router>
        <React.Fragment>
        <Header renderAddTodo = {this.renderAddTodo} editTodoId = {this.editTodoId}/>
        <div className = 'todo-section'>
        {this.state.addTodo ?
        <AddTodo todo={todos.present[todoId-1]} addTodo={actions.addTodo} editTodo={actions.editTodo} renderAddTodo = {this.renderAddTodo} todoId = {this.state.todoId} />
        :
        <MainSection todos={todos.present} actions={actions} renderAddTodo = {this.renderAddTodo} editTodoId = {this.editTodoId}/>
        } 
        </div>
        </React.Fragment>
      </Router>
    )
  }
}