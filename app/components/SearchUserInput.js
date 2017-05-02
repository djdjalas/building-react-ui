import React, { Component } from 'react';

export default class SearchUserInput extends Component {

  onSearch(e) {
    this.props.handleSearch(e.target.value);
  }

  render() {
    return (
      <input
        type="email"
        onChange = { ::this.onSearch }
        className="form-control"
        placeholder="Search"
      />
    );
  }
}
