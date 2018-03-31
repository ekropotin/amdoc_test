import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Cards from 'containers/Cards';
import Homepage from 'components/homepage/Homepage';

import './PageLayout.scss';

export default () => (
  <div className='container'>
    <div className='page-layout__viewport'>

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/#'>Home</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href='#/usercards'>
            Users
          </NavItem>

        </Nav>
      </Navbar>

      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/usercards' component={Cards} />
      </Switch>
    </div>
  </div>
);
