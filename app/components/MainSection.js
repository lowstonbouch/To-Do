import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import Footer from './Footer';
import Sort from './Sort';
import classnames from 'classnames';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

import ViewList from 'react-icons/lib/md/view-list';
import ViewModule from 'react-icons/lib/md/view-module';

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

  bubbleSort = (filteredTodos, item) => {
    for (let i = 0; i < filteredTodos.length - 1; i++) {
      if(item === 'date'){
        let m_min = filteredTodos[i].date;
        for (let j = i + 1; j < filteredTodos.length; j++) {
          if (filteredTodos[j].date < m_min) {
            let mm = filteredTodos[i];
            m_min = filteredTodos[j].date;
            filteredTodos[i] = filteredTodos[j];
            filteredTodos[j] = mm;
          }
        }
      }else {
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
        
    }
    return filteredTodos;
  }

  renderFooter(completedCount) {
    const { todos, themeItem } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted}
                onShow={this.handleShow}
                themeItem={themeItem} />
      )
    }
  }

  render() {
    const { todos, actions, view, handleView, themeItem } = this.props;
    const { filter } = this.state;

    let filteredTodos = todos.filter(TODO_FILTERS[filter])
    if(this.state.sortList === 'Sort from low to hight'){
      filteredTodos = this.bubbleSort(filteredTodos,'priority');
    }
    if(this.state.sortList === 'Sort from high to low'){
      filteredTodos = this.bubbleSort(filteredTodos,'priority');
      filteredTodos = filteredTodos.reverse();
    }
    if(this.state.sortList === 'Sort by date new first'){
      filteredTodos = this.bubbleSort(filteredTodos,'date');
      filteredTodos = filteredTodos.reverse();
    }
    if(this.state.sortList === 'Sort by date oldest first'){
      filteredTodos = this.bubbleSort(filteredTodos,'date');
    }
    
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    const activeCount = todos.length - completedCount;

    return (
      <React.Fragment>
        <Sort sortList = {this.state.sortList} handleSort = {this.handleSort} themeItem={themeItem}/>
        <div className="view-nav">
          <ViewList className={classnames({
              'view-item': true,
              'selected': 'list' === view,
            })}
            onClick ={() => handleView('list')}/>
          <ViewModule className={classnames({
              'view-item': true,
              'selected': 'module' === view,
            })}
            onClick ={() => handleView('module')}/>
        </div>
        <p className="todo-length">To Do <span>({activeCount})</span></p>
        <div
        className={classnames({
          'todo-list': true,
          'view-list': 'list' === view,
          'view-module': 'module' === view,
        })}>
          {filteredTodos.map(todo => 
            <TodoItem key={todo.id} todo={todo} {...actions} view={view} renderAddTodo = {this.props.renderAddTodo} editTodoId = {this.props.editTodoId}/> 
          )}
        </div>
        {this.renderFooter(completedCount)}
      </React.Fragment>
    )
  }
}
