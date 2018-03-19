import * as React from 'react';
import AddTodo from '../components/AddTodo';
import MainSection from '../components/MainSection';
import Header from '../components/Header';
import Tool from '../components/Tool';
import ApplicationTheme from '../components/ApplicationTheme';
import classnames from 'classnames';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Main extends React.Component {

  state = {
    addTodo: false,
    todoId: undefined,
    renderTool: false,
    toolItem: 'home',
    themeItem: 'blue',
    view: 'list',
  }

  renderAddTodo = () => {
    this.setState({addTodo: !this.state.addTodo,});
  }

  handleThemeItem = text => {
    this.setState({themeItem: text,});
  }

  handleView = text =>{
    this.setState({view: text});
  }

  editTodoId = id =>{
    this.setState({todoId: id,});
  }

  renderTool = () => {
    this.setState({renderTool: !this.state.renderTool});
  }

  handleSelectedItem = text => {
    this.setState({toolItem: text});
  }

  render() {
    const { todos, actions } = this.props;
    let todoId = this.state.todoId;
    return (
      <Router>
        <React.Fragment>
        <Tool renderTool={this.state.renderTool} toolItem={this.state.toolItem} handleSelectedItem={this.handleSelectedItem} themeItem={this.state.themeItem}/>
        <Header renderAddTodo = {this.renderAddTodo} editTodoId = {this.editTodoId} renderTool = {this.renderTool} themeItem={this.state.themeItem} addTodo={this.state.addTodo}/>
        {this.state.toolItem === 'home' ?  <div className = 'todo-section'>
          {this.state.addTodo ?
          <AddTodo todo={todos.present[todoId-1]} addTodo={actions.addTodo} editTodo={actions.editTodo} renderAddTodo = {this.renderAddTodo} todoId = {this.state.todoId} themeItem={this.state.themeItem} />
          :
          <MainSection todos={todos.present} actions={actions} view={this.state.view} themeItem={this.state.themeItem} handleView={this.handleView} renderAddTodo = {this.renderAddTodo} editTodoId = {this.editTodoId}/>
          } 
          </div>: <ApplicationTheme themeItem={this.state.themeItem} handleThemeItem={this.handleThemeItem}/> }
         
        </React.Fragment>
      </Router>
    )
  }
}