import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import img from '../assets/images/react_logo_512x512.png';


export default class Tool extends Component {
  render() {
    return (
      <div className={classnames({ 
        'tool-section': true,
        'render-tool': this.props.renderTool, })}>
        <img
        className={classnames({ 
          'image': true,
          'none': !this.props.renderTool,})}
        src={img}
        alt="React Logo"
      />
        <span className={classnames({ 
          'tool-item': true,
          'none': !this.props.renderTool,})}>Home</span>
        <span className={classnames({ 
          'tool-item': true,
          'none': !this.props.renderTool,})}>Settings</span>
        </div>
    )
  }
}