import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../pages/Home';
import Sidebar from '../components/Sidebar';
import MainContainer from '../components/MainContainer';
import MainHeader from '../components/MainHeader';
import MainContent from '../components/MainContent';
import GlobalStyle from '../styles/global';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  min-height: 100vh;
`;

const Routes = () => (
  <BrowserRouter>
    <Container>
      <GlobalStyle />
      <Sidebar />
      <MainContainer>
        <MainHeader>Dashboard</MainHeader>
        <MainContent>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </MainContent>
      </MainContainer>
    </Container>
  </BrowserRouter>
);

export default Routes;
