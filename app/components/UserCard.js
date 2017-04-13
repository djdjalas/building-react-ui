import React, { Component } from 'react';
import ISO from 'api/ISO';

export default class UserCard extends Component {

    onRemoveUser() {
      this.props.onRemoveUser(this.props.currentUser);
    }

    render() {
      const { photo, email, name, gender, region, age } = this.props.user;
      const flagClassName = `flag-icon flag-icon-${ISO(region)}`;
      const genderSign = gender == 'female' ? 'fa fa-venus' : 'fa fa-mars';
      const card =
        <div className="card text-center">
          <img className="card-img-top img-fluid rounded-circle hvr-grow" src= { photo } alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{ name } { age } <i className = { genderSign }></i> </h4>
            <p>
              <a href={`mailto:${email}?Subject=Hello%20${name}`} target="_top">
                <i className = "fa fa-envelope"/> - { email }
              </a>
            </p>
            <p className="card-text"><small className="text-muted"> { region }  <span className = {flagClassName}> </span> </small> </p>
            <i className = 'fa fa-remove fa-2x float-right hvr-grow' onClick = { ::this.onRemoveUser }> </i>
          </div>
        </div>;
      return card;
    }
}
