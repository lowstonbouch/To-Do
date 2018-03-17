import React, { Component } from 'react';
import classnames from 'classnames';

export default class Sort extends Component {

  state = {
    sortFilters: false,
  }

  handleRender = () => {
    this.setState({sortFilters: !this.state.sortFilters});
  }

  render() {
    const { sortList, handleSort } = this.props;
    return (
      <div className={classnames({ 
        'sort-buttom': true,
        'render-sort': this.state.renderFilters, })}
      className = "sort-button">
      {this.state.sortFilters ?
      <div className = "sort-todo-render">
        <div className="sort-item" onClick = {this.handleRender}>Sort by</div>
        <div className="sort-item" onClick = {() => handleSort('Sort from low to hight')}>Sort from low to hight</div>
        <div className="sort-item" onClick = {() => handleSort('Sort from high to low')}>Sort from high to low</div>
        <div className="sort-item" onClick = {() => handleSort('Sort by date new first')}>Sort by date new first </div>
        <div className="sort-item" onClick = {() => handleSort('Sort by date oldest first')}>Sort by date oldest first </div>
      </div>    
      :
      <div className="sort" onClick = {this.handleRender}>{sortList}</div>
      }       
      </div>
    )
  }
}
