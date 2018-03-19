import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import img from '../assets/images/react_logo_512x512.png';


export default class Tool extends Component {

  

  render() {
    const {themeItem} = this.props;
    return (
      <div 
      className={ classnames( 
        'tool-section',
        'bg-' + themeItem,
        {'render-tool': this.props.renderTool, })}>
        <img
        className={classnames({ 
          'image': true,
          'none': !this.props.renderTool,})}
        src={img}
        alt="React Logo"
      />
        <span className={classnames( 
          'tool-item',
          'hover-'+themeItem,
          { [`bg-${themeItem}`]:'home' !== this.props.toolItem },
          { [`selected-${themeItem}`]:'home' === this.props.toolItem },
          {'none': !this.props.renderTool,
          'selected':'home' === this.props.toolItem})}
          onClick = {() => this.props.handleSelectedItem('home')}>Home</span>
        <span className={classnames( 
          'tool-item',
          'hover-'+themeItem,
          { [`bg-${themeItem}`]:'settings' !== this.props.toolItem },
          { [`selected-${themeItem}`]:'settings' === this.props.toolItem },
          {'none': !this.props.renderTool,
          'selected':'settings' === this.props.toolItem})}
          onClick = {() => this.props.handleSelectedItem('settings')}>Settings</span>
        </div>
    )
  }
}