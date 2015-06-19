/* @flow */

import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this)
  }

  render() {
    return (
      <li key={this.props.id}>
        {this.props.text}
        {' '}
        <a href="#" onClick={this.handleRemove}>delete</a>
      </li>
    );
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.onRemove(this.props.id);
  }
}
