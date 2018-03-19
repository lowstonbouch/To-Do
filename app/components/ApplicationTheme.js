import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class ApplicationTheme extends Component {

  render() {
      const {themeItem, handleThemeItem} = this.props;
    return (
     <section className="section-settings">
        <div className="theme-item">
        <div className="them-item-color bg-blue"></div>
            <div className="pretty p-default p-curve">
                <input type="radio" name="color" checked={'blue' === themeItem} onChange={() => handleThemeItem('blue')} />
                    <div className="state p-success-o">
                        <label>blue</label>
                    </div>
            </div>
        </div>
        <div className="theme-item">
            <div className="them-item-color bg-purpur"></div>
            <div className="pretty p-default p-curve">
                <input type="radio" name="color" checked={'purpur' === themeItem} onChange={() => handleThemeItem('purpur')}/>
                    <div className="state p-success-o">
                        <label>purpur</label>
                    </div>
            </div>
        </div>
        <div className="theme-item">
        <div className="them-item-color bg-orange"></div>
            <div className="pretty p-default p-curve">
                <input type="radio" name="color" checked={'orange' === themeItem} onChange={() => handleThemeItem('orange')} />
                    <div className="state p-success-o">
                        <label>orange</label>
                    </div>
            </div>
        </div>
    </section>
    )
  }
}