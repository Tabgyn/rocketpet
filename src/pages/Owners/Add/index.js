import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';

// import { Container } from './styles';

export default class OwnersAdd extends Component {
  handleSubmit = () => {
    const { history } = this.props;
    history.push('/owners');
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input name="name" />

        <button type="submit">Add</button>
      </Form>
    );
  }
}
