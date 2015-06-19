/* @flow */

import React, { Component } from 'react';

const ENTER_KEY_CODE = 13;

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);

    this.state = {
      value: this.props.value || ''
    };
  }

  render() {
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

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleEnter(e) {
    if (!this.state.value.length) return;
    if (e.keyCode === ENTER_KEY_CODE) {
      this.props.handleSave(this.state.value);
      this.setState({ value: '' });
    }
  }
}
