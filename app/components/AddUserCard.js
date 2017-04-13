import React , { Component } from 'react';
import { getRandomPicture } from 'api/RandomUsers';
import Select from 'react-select';
import CountryCodes from 'CountryCodes';

export default class AddUserCard extends Component {

  onHandleAddUser(user) {
    this.props.handleAddUser(user);
  }

  onSubmit(e) {
    e.preventDefault();

    const gender = this.props.selectedGender.trim();
    const name = this.refs.name.value.trim();
    const email = this.refs.email.value.trim();
    const age = this.refs.age.value.trim();
    const region = this.props.selectedCountry.trim();
    const photo = getRandomPicture(gender);

    if(name && email && age && region && gender) {
      const user = { name, email, age, region, photo, gender };
      this.onHandleAddUser(user);
      this.resetFields();
    }else {
      alert("Please input all fields correctly")
    }

  }

  resetFields(e) {
    if(e) {
      e.preventDefault();
    }
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.age.value = '';
  }

  onToggleAddSection() {
    this.props.handleToggleAddSection();
  }

  onHandeChangeSelectedGender(val) {
    const gender = val ? val.value : '';
    this.props.handeChangeSelectedGender(gender);
  }

  onHandeChangeSelectedCountry(val) {
    const country = val ? val.value : '';
    this.props.handeChangeSelectedCountry(country);
  }

  getGenderSelectOptions() {
    return [
      { value: 'male', label: 'Male', clearableValue: false },
      { value: 'female', label: 'Female' , clearableValue: false}
    ];
  }

  getCountrySelectOptions() {
    const options = [];
    for( const country in CountryCodes ) {
      options.push({
        value: country,
        label: country
      })
    }
    return options;
  }

  render() {
    const isAddSectionVisible = this.props.isAddSectionVisible;
    const addSectionStyle = { display: isAddSectionVisible ? 'block' : 'none' };
    const plusOrMinusSign = isAddSectionVisible ? 'fa fa-minus fa-2x' : 'fa fa-plus fa-2x';
    const addOrRemoveText = isAddSectionVisible ? 'Hide' : 'Add User';

    return (

      <div>

        <i className = { plusOrMinusSign } onClick = { this.onToggleAddSection.bind(this) }></i> { addOrRemoveText }

        <div style = { addSectionStyle } className="col-lg-12 addUserSection">
          <form onSubmit = { ::this.onSubmit } >

            <div className="form-group row">
              <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
              <div className="col-sm-10">
                <Select
                  name="form-field-name"
                  value= { this.props.selectedGender }
                  options={ this.getGenderSelectOptions() }
                  onChange={::this.onHandeChangeSelectedGender}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="name" placeholder="Name" autoComplete = "off" ref = "name"/>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="phone" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="email" placeholder="Email" autoComplete = "off" ref = "email"/>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
              <div className="col-sm-10">
                <input type="number" className="form-control" id="age" placeholder="Age" autoComplete = "off" ref = "age"/>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="region" className="col-sm-2 col-form-label">Region</label>
              <div className="col-sm-10">
              <Select
                name="form-field-name"
                value= { this.props.selectedCountry }
                options={ this.getCountrySelectOptions() }
                onChange={ ::this.onHandeChangeSelectedCountry }
              />
              </div>
            </div>

            <input className="btn btn-secondary mr-3" type="submit" value="Submit"/>
            <button className="btn btn-secondary" onClick={ ::this.resetFields }>Clear Fields</button>
          </form>
        </div>
      </div>
    );
  }
}
