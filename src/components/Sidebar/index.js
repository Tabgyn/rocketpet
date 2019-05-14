import React from 'react';
import { MdHome, MdPerson, MdPets } from 'react-icons/md';

import { Aside, Menu, MenuItem } from './styles';
import logo from '../../assets/logo_2.svg';

const Sidebar = () => (
  <Aside>
    <header>
      <img src={logo} alt="RocketPet" />
    </header>
    <Menu>
      <nav>
        <ul>
          <li>
            <MenuItem to="/" exact>
              <MdHome />
              Home
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/owners">
              <MdPerson />
              Owners
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/pets">
              <MdPets />
              Pets
            </MenuItem>
          </li>
        </ul>
      </nav>
    </Menu>
  </Aside>
);

export default Sidebar;
