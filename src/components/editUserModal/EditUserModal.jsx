import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, FormGroup, FormControl, Col } from 'react-bootstrap';

import './EditUserModal.scss';

export class EditUserModal extends Component {
  constructor (props) {
    super(props);
    this.state = props.data;
  }

  onSave = () => {
    this.props.updateCard(this.state.id, this.state);
  };

  onDataChange = (e) => {
    const newValue = e.currentTarget.value;
    const field = e.currentTarget.dataset.fieldname;
    let newState = {};
    if (field === 'city') {
      this.setState(prevState => {
        const address = { ...prevState.address };
        address.city = newValue;
        return { address };
      });
    } else if (field === 'company') {
      this.setState(prevState => {
        const company = { ...prevState.company };
        company.name = newValue;
        return { company };
      });
    } else {
      newState[field] = newValue;
      this.setState(prevState => newState);
    }
  };

  render () {
    return (
      <div className='c-edituser-modal static-modal'>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>{this.state.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form horizontal>

              <FormGroup controlId='groupEmail'>
                <Col sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type='email' autoComplete='email' data-fieldname='email' onChange={this.onDataChange} value={this.state.email} />
                </Col>
              </FormGroup>

              <FormGroup controlId='groupCity'>
                <Col sm={2}>
                  City
                </Col>
                <Col sm={10}>
                  <FormControl type='text' data-fieldname='city' autoComplete='address-level2' onChange={this.onDataChange} value={this.state.address.city} />
                </Col>
              </FormGroup>

              <FormGroup controlId='groupPhone'>
                <Col sm={2}>
                  Phone
                </Col>
                <Col sm={10}>
                  <FormControl type='text' data-fieldname='phone' autoComplete='tel-national' onChange={this.onDataChange} value={this.state.phone} />
                </Col>
              </FormGroup>

              <FormGroup controlId='groupWebsite'>
                <Col sm={2}>
                  Website
                </Col>
                <Col sm={10}>
                  <FormControl type='text' data-fieldname='website' onChange={this.onDataChange} value={this.state.website} />
                </Col>
              </FormGroup>

              <FormGroup controlId='groupCompany'>
                <Col sm={2}>
                  Company
                </Col>
                <Col sm={10}>
                  <FormControl type='text' data-fieldname='company' autoComplete='organization' onChange={this.onDataChange} value={this.state.company.name} />
                </Col>
              </FormGroup>

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.cancelEdit}>Cancel</Button>
            <Button onClick={this.onSave} bsStyle='primary'>Save</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

EditUserModal.propTypes = {
  data: PropTypes.object.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  updateCard: PropTypes.func.isRequired
};

export default EditUserModal;
