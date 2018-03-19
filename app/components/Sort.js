import React, { Component } from 'react';
import classnames from 'classnames';

import DropDown from 'react-icons/lib/md/arrow-drop-down';

export default class Sort extends Component {

  state = {
    sortFilters: false,
  }

  handleRender = () => {
    this.setState({sortFilters: !this.state.sortFilters});
  }

  handleClick = (string) =>{
    this.handleRender();
    this.props.handleSort(string)
  }

  render() {
    const { sortList, handleSort, themeItem} = this.props;
    return (
      <div className={classnames({ 
        'sort-buttom': true,
        'render-sort': this.state.renderFilters, })}
      className = "sort-button">
      {this.state.sortFilters ?
      <div className={classnames( 
        'sort-todo-render', themeItem )} onClick = {this.handleRender}>
        <div className={classnames( 'sort-item', 'hover-'+themeItem )} onClick = {this.handleRender}>Sort by <DropDown className="sort-arrow" /></div>
        <div className={classnames( 'sort-item', 'hover-'+themeItem )} onClick = {() => handleSort('Sort from low to hight')}>Sort from low to hight</div>
        <div className={classnames( 'sort-item', 'hover-'+themeItem )} onClick = {() => handleSort('Sort from high to low')}>Sort from high to low</div>
        <div className={classnames( 'sort-item', 'hover-'+themeItem )} onClick = {() => handleSort('Sort by date new first')}>Sort by date new first </div>
        <div className={classnames( 'sort-item', 'hover-'+themeItem )} onClick = {() => handleSort('Sort by date oldest first')}>Sort by date oldest first </div>
      </div>    
      :
      <div className={classnames( 
        'sort', themeItem )} onClick = {this.handleRender}>{sortList} <DropDown className="sort-arrow" /></div>
      }       
      </div>
    )
  }
}
