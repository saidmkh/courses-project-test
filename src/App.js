import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../src/css/main.css';
import '../src/css/media.css';

import Main from './components/main_page/main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
