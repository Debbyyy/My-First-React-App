//eslint-disble-next-line
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewAccount from './components/createAccount';
import HomePage from './components/home';
import MyProfile from './components/profile';
import UserContextProvider from './context/usernameContext';

function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
        <Switch>
          <Route exact path='/' component={HomePage} />
            <Route path='/profile' component={MyProfile} />
          <Route path='/createAccount' component={NewAccount} />
        </Switch>
        </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
