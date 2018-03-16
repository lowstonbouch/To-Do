import React, { Component } from 'react';
import classnames from 'classnames';
import UndoRedo from '../containers/UndoRedo';

export default class Header extends Component {

  newTodo = () => {
    this.props.renderAddTodo();
    this.props.editTodoId(undefined);

  }  

  render() {
    return (
        <header>
            <button>
                Tool
            </button>
            <UndoRedo />
            <button 
            onClick = {() => this.newTodo()}>
                Add todo
            </button>
        </header>
    )
  }
}