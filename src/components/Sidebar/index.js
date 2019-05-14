import React from 'react';
import { MdHome, MdSchedule } from 'react-icons/md';

import { Aside, Menu, MenuItem } from './styles';
import logo from '../../assets/logo.svg';

const Sidebar = () => (
  <Aside>
    <header>
      <img src={logo} alt="RocketPet" />
    </header>
    <Menu>
      <nav>
        <ul>
          <li>
            <MenuItem to="/">
              <MdHome />
              Home
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/schedule">
              <MdSchedule />
              Schedule
            </MenuItem>
          </li>
        </ul>
      </nav>
    </Menu>
  </Aside>
);

export default Sidebar;
