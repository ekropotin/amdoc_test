import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Cards from 'containers/Cards';
import Homepage from 'components/homepage/Homepage';

import './PageLayout.scss';

const ButtonToHome = withRouter(({ history }) => (
  <Button bsStyle='primary' onClick={() => { history.push('/'); }}>/Home</Button>
));

const ButtonToCards = withRouter(({ history }) => (
  <Button bsStyle='primary' onClick={() => { history.push('/usercards'); }}>/cards</Button>
));

export default () => (
  <div className='container'>
    <div className='page-layout__viewport'>

      <ButtonToHome />
      <ButtonToCards />

      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/usercards' component={Cards} />
      </Switch>
    </div>
  </div>
);
