import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import Footer from './Footer';
import Sort from './Sort';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { 
    filter: SHOW_ALL,
    sortList: 'Sort by', }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ filter });
  }

  handleSort = sortName => {
    this.setState({ sortList: sortName });
  }

  bubbleSort = filteredTodos => {
    for (let i = 0; i < filteredTodos.length - 1; i++) {
      let m_min = filteredTodos[i].priority;
        for (let j = i + 1; j < filteredTodos.length; j++) {
          if (filteredTodos[j].priority < m_min) {
            let mm = filteredTodos[i];
            m_min = filteredTodos[j].priority;
            filteredTodos[i] = filteredTodos[j];
            filteredTodos[j] = mm;
          }
        }
    }
    return filteredTodos;
  }

  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted}
                onShow={this.handleShow} />
      )
    }
  }

  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;

    let filteredTodos = todos.filter(TODO_FILTERS[filter])
    if(this.state.sortList === 'Sort from low to hight'){
      filteredTodos = this.bubbleSort(filteredTodos);
    }
    if(this.state.sortList === 'Sort from high to low'){
      filteredTodos = this.bubbleSort(filteredTodos);
      filteredTodos = filteredTodos.reverse();
    }
    console.log(filteredTodos);
    
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <React.Fragment>
        <Sort sortList = {this.state.sortList} handleSort = {this.handleSort}/>
        <div className="todo-list">
          {filteredTodos.map(todo => 
            <TodoItem key={todo.id} todo={todo} {...actions} renderAddTodo = {this.props.renderAddTodo} editTodoId = {this.props.editTodoId}/> 
          )}
        </div>
        {this.renderFooter(completedCount)}
      </React.Fragment>
    )
  }
}
