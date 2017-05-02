import React, { Component } from 'react';

export default class GenderSortDropdown extends Component {

  onFilter(e) {
    this.props.handleFilter(e.target.id);
  }

  render() {
    return (
      <div className="dropdown">

        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Show { this.props.filterBy }
        </button>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" id="all" onClick = { ::this.onFilter } >All</a>
          <a className="dropdown-item" id="female" onClick = { ::this.onFilter }>Female</a>
          <a className="dropdown-item" id="male" onClick = { ::this.onFilter }>Male</a>
        </div>

      </div>
    );
  }

}
