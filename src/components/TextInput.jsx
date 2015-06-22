/* @flow */

import React, { Component, Element } from 'react';

const ENTER_KEY_CODE = 13;

export default class TextInput extends Component {
  constructor(props: Object) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);

    this.state = {
      value: this.props.value || ''
    };
  }

  render(): Element {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleEnter}
        autoFocus="true"
      />
    );
  }

  handleChange(e: any): void {
    this.setState({ value: e.target.value });
  }

  handleEnter(e: any): void {
    if (!this.state.value.length) return;
    if (e.keyCode === ENTER_KEY_CODE) {
      this.props.handleSave(this.state.value);
      this.setState({ value: '' });
    }
  }
}
