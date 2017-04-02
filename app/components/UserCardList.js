import React , { Component } from 'react';
import UserCard from 'components/UserCard';

export default class UserCardList extends Component {

  constructor(props) {
    super(props);
  }

  onRemoveUser(user) {
    this.props.handleRemoveUser(user);
  }

  render() {
    const cards = this.props.theUsers.map((user, id) =>
      <UserCard
        key = { id }
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
