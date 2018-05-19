import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../base/header';
import IndexPage from '../main_page/index_page';

class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <IndexPage />
                <Switch>
                </Switch>
            </div>
        )
    }
}

export default Main;