import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';

import ViewerQuery from './ViewerQuery';
import AppContainer from '../components/App/AppContainer';
import UserContainer from '../components/User/UserContainer';

export default (
  <Route path='/' component={AppContainer} queries={ViewerQuery}>
    <IndexRoute component={UserContainer} queries={ViewerQuery} />
    <Redirect from='*' to='/' />
  </Route>
);

