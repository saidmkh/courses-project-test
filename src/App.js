import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../src/css/main.css';
import '../src/css/media.css';

import Main from './components/main_page/main';
import LoginPage from './components/login_page/login_page';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Main} />
          <Route path='/sign-in/' component={LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
