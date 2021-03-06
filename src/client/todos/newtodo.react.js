import * as actions from './actions';
import PureComponent from '../components/purecomponent.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

class NewTodo extends PureComponent {

  addTodoOnEnter(e) {
    if (e.key === 'Enter')
      actions.addTodo(this.props.todo);
  }

  render() {
    return (
      <input
        autoFocus
        className="new-todo"
        name="title"
        onChange={actions.onNewTodoFieldChange}
        onKeyDown={(e) => this.addTodoOnEnter(e)}
        placeholder={msg('todos.newTodoPlaceholder')}
        value={this.props.todo.title}
      />
    );
  }

}

NewTodo.propTypes = {
  todo: React.PropTypes.instanceOf(immutable.Record)
};

export default NewTodo;
