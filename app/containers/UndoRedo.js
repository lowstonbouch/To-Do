import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Left from 'react-icons/lib/fa/caret-left';
import Right from 'react-icons/lib/fa/caret-right';

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo, themeItem }) => (
  <div className = 'undo'>
    <button className={classnames(
            'undo-redo',
            {'disabled': !canUndo,
            'active': canUndo},
            'hover-'+themeItem,
              'bg-' + themeItem
          )}
           onClick={onUndo} >
      <Left/>Undo
    </button>
    <button className={classnames(
            'undo-redo',
            {'disabled': !canRedo,
            'active': canRedo},
            'hover-'+themeItem,
              'bg-' + themeItem
          )} onClick={onRedo}>
      Redo<Right/>
    </button>
  </div>
)

const mapStateToProps = (state) => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo);