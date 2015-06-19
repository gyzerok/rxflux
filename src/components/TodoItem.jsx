/* @flow */

import React, { Component, Element } from 'react';

export default class TodoItem extends Component {
  constructor(props: Object) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this)
  }

  render(): Element {
    return (
      <li key={this.props.id}>
        {this.props.text}
        {' '}
        <a href="#" onClick={this.handleRemove}>delete</a>
      </li>
    );
  }

  handleRemove(e: any): void {
    e.preventDefault();
    this.props.onRemove(this.props.id);
  }
}
