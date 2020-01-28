import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogInPage from '../pages/LogInPage';
import ChatPage from '../pages/ChatPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ChatPage} />
      <Route exact path="/login" component={LogInPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
