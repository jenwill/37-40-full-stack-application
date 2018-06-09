import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';
import Modal from '../modal/modal';

const defaultState = {
  commonName: '',
  placement: '',
  notes: '',
  editing: false,
};

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.profile || defaultState;
    autoBind.call(this, ProfileForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      editing: false,
    });
    this.props.onComplete(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleShowModal() {
    this.setState({
      editing: true,
    });
  }
  handleHideModal() {
    this.setState({
      editing: false,
    });
  }
  render() {
    const buttonText = this.props.profile ? 'Update' : 'Add';

    return (
      <div className='profile-block'>
        <button onClick={this.handleShowModal}>Add a Profile</button>
        <Modal show={this.state.editing} handleClose={this.handleHideModal}>
          <form onSubmit={this.handleSubmit}
                className='profile-form'>
            <input
              type='text'
              name='commonName'
              placeholder='Profile Name'
              value={this.state.profileName}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='placement'
              placeholder='Placement'
              value={this.state.placement}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='notes'
              placeholder='Notes'
              value={this.state.info}
              onChange={this.handleChange}
            />
            <br/>
            <button type="submit">{buttonText} Profile</button>
          </form>
        </Modal>
      </div>
    );
  }
}
ProfileForm.propTypes = {
  profile: PropTypes.object,
  onComplete: PropTypes.func,
};

export default ProfileForm;
