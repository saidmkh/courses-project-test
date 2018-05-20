import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../base/header';
import IndexPage from '../main_page/index_page';


class Main extends Component {
    render () {
        return (
            <div className="wrapper">
                <Route component={Header} />
                <Switch>
                    <Route exact path='/' component={IndexPage} />
                </Switch>
            </div>
        )
    }
  }

export default Main;