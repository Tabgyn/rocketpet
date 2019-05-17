import React, { Component } from 'react';

import { List, ListItem, Button } from './styles';

export default class Main extends Component {
  state = {
    pets: [
      {
        id: 1,
        name: 'Thor',
        owner: 'Larry',
        picture:
          'http://www.visiblelogic.com/wp-content/uploads/2015/05/Kippy-office-dog-200px.jpg',
      },
      {
        id: 2,
        name: 'Hulk',
        owner: 'Jack',
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PTuyCfh0TKjulLTsGTj5gDNkHx7zVDI54evaAviO8DMwNrpU',
      },
      {
        id: 3,
        name: 'Scarlet',
        owner: 'Jack',
        picture: 'https://www.dogalize.com/wp-content/uploads/2017/06/cat-300572_640-200x200.jpg',
      },
      {
        id: 4,
        name: 'Widow',
        owner: 'Paul',
        picture:
          'http://static1.squarespace.com/static/580bf0f32e69cff5c8089d38/580d54692e69cf2049f029ef/5817bd439de4bbcf73148647/1477950788142/teddy-pink-dog2-200px.jpg',
      },
      {
        id: 5,
        name: 'Panther',
        owner: 'Stan',
        picture: 'https://vancouverweekly.com/wp-content/uploads/2012/10/cat-200x200.jpg',
      },
    ],
  };

  render() {
    const { pets } = this.state;
    return (
      <div>
        {!pets.length && <p>We do not have any pets, how sad ... :(</p>}
        <List>
          {pets.map(pet => (
            <ListItem key={pet.id}>
              <img src={pet.picture} alt="pecture" />
              <strong>{pet.name}</strong>
              <span>{pet.owner}</span>
              <Button href={`/pets/${pet.id}`}>View</Button>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
