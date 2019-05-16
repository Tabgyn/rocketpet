import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

// import { Container } from './styles';

class OwnersAdd extends Component {
  handleSubmit = (data) => {
    const { history } = this.props;
    console.log(data);
    history.push('/owners');
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input name="avatar" type="file" />
        <Input name="name" />

        <button type="submit">Add</button>
      </Form>
    );
  }
}

export default withRouter(OwnersAdd);
