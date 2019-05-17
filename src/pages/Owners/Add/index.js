import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as OwnersActions } from '../../../store/ducks/owners';

import { Container, Button } from './styles';

class OwnersAdd extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    addOwnerRequest: PropTypes.func.isRequired,
  };

  state = {
    files: [],
  };

  handleSubmit = (data) => {
    const { history, addOwnerRequest } = this.props;
    const { files } = this.state;
    const avatar = files[0];

    const owner = {
      name: data.name,
      avatar,
    };

    addOwnerRequest(owner);

    history.push('/owners');
  };

  handleFile = (e) => {
    this.setState({ files: e.target.files });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <section>
            <label htmlFor="avatar">Select an avatar</label>
            <Input name="avatar" id="avatar" type="file" onChange={this.handleFile} />
          </section>

          <section>
            <label htmlFor="name">Name</label>
            <Input name="name" id="name" />
          </section>

          <Button type="submit">Save</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(OwnersActions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(OwnersAdd),
);
