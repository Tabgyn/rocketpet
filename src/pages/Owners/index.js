import React, { Component } from 'react';

import {
  ActionContainer, List, ListItem, Button,
} from './styles';

export default class Owners extends Component {
  state = {
    owners: [
      {
        id: 1,
        avatar:
          'https://thenypost.files.wordpress.com/2013/08/larry_lieber-300x300.jpg?quality=90&strip=all',
        name: 'Larry',
        pets: 1,
      },
      {
        id: 2,
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jack-Kirby_art-of-jack-kirby_wyman-skaar.jpg/200px-Jack-Kirby_art-of-jack-kirby_wyman-skaar.jpg',
        name: 'Jack',
        pets: 2,
      },
      {
        id: 3,
        avatar:
          'https://vignette.wikia.nocookie.net/marveldatabase/images/2/2f/Paul_Jenkins_002.jpg/revision/latest?cb=20170712171126',
        name: 'Paul',
        pets: 1,
      },
      {
        id: 4,
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Stan_Lee_December_2016.jpg/200px-Stan_Lee_December_2016.jpg',
        name: 'Stan',
        pets: 1,
      },
    ],
  };

  render() {
    const { owners } = this.state;
    return (
      <div>
        <ActionContainer>
          <Button to="/owners/add">+</Button>
        </ActionContainer>
        {!owners.length && <p>We do not have any owners, how sad ... :(</p>}
        <List>
          {owners.map(owner => (
            <ListItem key={owner.id}>
              <img src={owner.avatar} alt="avatar" />
              <strong>{owner.name}</strong>
              <span>My pets: {owner.pets}</span>
              <Button to={`/owners/:${owner.id}`}>View</Button>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
