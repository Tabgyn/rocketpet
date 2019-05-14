import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import GlobalStyle from '../styles/global';

import Home from '../pages/Home';
import Owners from '../pages/Owners';
import Pets from '../pages/Pets';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 0%;

  background: #babdbe;
  color: #fff;
  position: relative;
`;

const MainContent = styled.div`
  padding: 30px;
`;

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Dashboard',
    main: () => <Home />,
  },
  {
    path: '/owners',
    title: 'Owners',
    main: () => <Owners />,
  },
  {
    path: '/pets',
    title: 'Pets',
    main: () => <Pets />,
  },
];

const Routes = () => (
  <BrowserRouter>
    <Container>
      <GlobalStyle />
      <Sidebar />
      <MainContainer>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={() => <Header title={route.title} />}
          />
        ))}
        {/* <MainHeader>
          <h1>

          </h1>
        </MainHeader> */}
        <MainContent>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} component={route.main} />
            ))}
          </Switch>
        </MainContent>
      </MainContainer>
    </Container>
  </BrowserRouter>
);

export default Routes;
