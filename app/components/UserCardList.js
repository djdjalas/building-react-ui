import React , { Component } from 'react';
import UserCard from 'components/UserCard';

export default class UserCardList extends Component {

  onRemoveUser(user) {
    this.props.handleRemoveUser(user);
  }

  render() {
    const cards = this.props.theUsers.map((user, index) =>
      <UserCard
        key = { index }
        user = { user }
        currentUser = { user }
        onRemoveUser = { ::this.onRemoveUser }
      />
    );
    return (
      <div>
        { cards }
      </div>
    );
  }

}
