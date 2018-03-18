import React, { Component } from 'react';
import classnames from 'classnames';
import UndoRedo from '../containers/UndoRedo';


import Tool from 'react-icons/lib/fa/align-justify';
import Left from 'react-icons/lib/fa/caret-left';
import Right from 'react-icons/lib/fa/caret-right';
import Plus from 'react-icons/lib/fa/plus';


export default class Header extends Component {

  newTodo = () => {
    this.props.renderAddTodo();
    this.props.editTodoId(undefined);
  }  

  render() {
    return (
        <header>
            <div className="tool-render-button" onClick = {this.props.renderTool}>
                <Tool/><Right/>
            </div>
            <UndoRedo />
            <button className="add-todo-button"
            onClick = {() => this.newTodo()}>
                <Plus className="add-todo-icon" />Add todo
            </button>
        </header>
    )
  }
}