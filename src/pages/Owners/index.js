import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as OwnerActions } from '../../store/ducks/owners';

import {
  ActionContainer, List, ListItem, Button,
} from './styles';

class Owners extends Component {
  static propTypes = {
    owners: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.oneOfType([null, PropTypes.string]),
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          avatar: PropTypes.string,
          pets: PropTypes.array,
        }),
      ),
    }).isRequired,
  };

  state = {};

  render() {
    const { owners } = this.props;

    return (
      <div>
        <ActionContainer>
          <Button to="/owners/add">+</Button>
        </ActionContainer>
        {!owners.data.length && <p>We do not have any owners, how sad ... :(</p>}
        <List>
          {owners.data.map(owner => (
            <ListItem key={owner.id}>
              <img src={owner.avatar} alt="avatar" />
              <strong>{owner.name}</strong>
              <span>My pets: {owner.pets}</span>
              <Button to={`/owners/${owner.id}`}>View</Button>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  owners: state.owners,
});

const mapDispatchToProps = dispatch => bindActionCreators(OwnerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Owners);
