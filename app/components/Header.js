import React, { Component } from 'react';
import classnames from 'classnames';
import UndoRedo from '../containers/UndoRedo';


import Tool from 'react-icons/lib/fa/align-justify';
import Left from 'react-icons/lib/fa/caret-left';
import Right from 'react-icons/lib/fa/caret-right';
import Plus from 'react-icons/lib/fa/plus';
import Back from 'react-icons/lib/ti/arrow-back';



export default class Header extends Component {

    newTodo = () => {
        this.props.renderAddTodo();
        this.props.editTodoId(undefined);
    }

    render() {
        const { themeItem, addTodo, renderTool } = this.props;
        return (
            <header>
                <div className={classnames(
                    'tool-render-button',
                    'hover-' + themeItem,)} onClick={this.props.handleRenderTool}>
                    {renderTool ? <React.Fragment><Left /><Tool /> </React.Fragment>: <React.Fragment>  <Tool /><Right /> </React.Fragment> }
                   
                </div>
                <UndoRedo themeItem={themeItem} />
                <button className={classnames(
                    'add-todo-button',
                    'hover-' + themeItem,
                    'bg-' + themeItem)}
                    onClick={() => this.newTodo()}>
                    {this.props.addTodo ? <React.Fragment>
                        <Back className="add-todo-icon" />
                        <React.Fragment>Back</React.Fragment>
                    </React.Fragment> :
                        <React.Fragment>
                            <Plus className="add-todo-icon" />
                            <React.Fragment>Add todo</React.Fragment>
                        </React.Fragment>}
                </button>
            </header>
        )
    }
}