import React from 'react';

import { Container, Avatar } from './styles';

const UserInfo = () => (
  <Container>
    <Avatar
      src="https://station.rocketseat.com.br/api/users/picture/profile-9431100a-5d21-4168-b2a8-5c4f01531314.jpg"
      alt="Avatar"
    />
    <div>
      <span>Tiago Azevedo Borges</span>
    </div>
  </Container>
);

export default UserInfo;
