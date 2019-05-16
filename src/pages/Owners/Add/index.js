import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { Container, Button } from './styles';

class OwnersAdd extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
  };

  handleSubmit = () => {
    const { history } = this.props;
    history.push('/owners');
  };

  handleFile = () => {};

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <section>
            <label htmlFor="avatar">Select an avatar</label>
            <Input
              name="avatar"
              id="avatar"
              type="file"
              onChange={e => this.handleFile(e.target.files[0])}
            />
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

export default withRouter(OwnersAdd);
