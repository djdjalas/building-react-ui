import React, { Component } from 'react';
import UserCard from 'components/UserCard';
import AddUserCard from 'components/AddUserCard';
import _ from 'lodash';
import GenderSortDropdown from 'components/GenderSortDropdown';
import SearchUserInput from 'components/SearchUserInput';
import { getUsers } from 'api/RandomUsers';
import UserCardList from 'components/UserCardList';

export default class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users : [],
      isAddSectionVisible: false,
      filterBy: 'All',
      query: '',
      defaultNumberOfRandomUsers: 6,
      eventName: 'React JS',
      selectedGender: '',
      selectedCountry: ''
    };
  }

  componentDidMount() {
    getUsers(this.state.defaultNumberOfRandomUsers, users => {
      this.setState({ users });
    });
  }

  removeUser(user) {
    const users = _.without(this.state.users, user);
    this.setState({ users });
  }

  addNewUser(user) {
    const users = this.state.users;
    users.push(user);
    this.setState({ users });
  }

  toggleAddSection() {
    this.setState({
      isAddSectionVisible: !this.state.isAddSectionVisible
    });
  }

  changeSelectedGender(selectedGender) {
    this.setState({ selectedGender })
  }

  changeSelectedCountry(selectedCountry) {
    this.setState({ selectedCountry })
  }

  filterUsers(filterBy) {
    this.setState({ filterBy });
  }

  search(query) {
    this.setState({ query });
  }

  searchByQuery(users, query) {
    const newUsers = [];
    users.forEach(user => {
      if(
        (user.name.toLowerCase().includes(query)) ||
        (user.region.toLowerCase().includes(query)) ||
        (user.email.toLowerCase().includes(query)) ||
        (user.age == query)
      ) {
        newUsers.push(user);
      }
    });
    return newUsers;
  }

  render() {

    const currentUsers = this.state.users;
    const query = this.state.query.toLowerCase();

    let users = this.searchByQuery(currentUsers, query);

    if(this.state.filterBy.toLowerCase() !== 'all' ) {
      users = _.filter(users, user => user.gender === this.state.filterBy.toLowerCase());
    }

    return (
      <div>

        <div className='row mb-3'>
          <div className = 'col-lg-12'>
            <AddUserCard
              handleAddUser = { ::this.addNewUser }
              handleToggleAddSection = { ::this.toggleAddSection }
              isAddSectionVisible = { this.state.isAddSectionVisible }
              handeChangeSelectedGender = { ::this.changeSelectedGender }
              handeChangeSelectedCountry = { ::this.changeSelectedCountry }
              selectedGender = { this.state.selectedGender }
              selectedCountry = { this.state.selectedCountry }
            />
          </div>
        </div>

        <div className='row mb-3'>
          <div className = 'col-lg-6'>
            <form className="form-inline">
              <div className='mr-3'>
                <GenderSortDropdown
                  handleFilter = { ::this.filterUsers }
                  filterBy = { this.state.filterBy }
                />
              </div>
              <SearchUserInput
                handleSearch = { ::this.search }
              />
            </form>
          </div>
          <div className = 'col-lg-6'>
            <h3 className = 'float-right' >
             { users.length <= 0 ? <i className="em em-disappointed"/> : null }
             { users.length } people attending { this.state.eventName } event
             </h3>
          </div>
        </div>

        <div className='row'>
          <div className = 'col-lg-12'>
            <div className = 'card-columns'>
              <UserCardList
                theUsers = { users }
                handleRemoveUser = { ::this.removeUser }
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
