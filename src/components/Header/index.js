import React from 'react';
import PropTypes from 'prop-types';

import UserInfo from '../UserInfo';
import { Container } from './styles';

const Header = ({ title }) => (
  <Container>
    <h1>{title}</h1>
    <div>
      <div>
        <UserInfo />
      </div>
    </div>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
