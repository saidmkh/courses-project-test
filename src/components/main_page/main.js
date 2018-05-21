import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../base/header';
import MainMenu from '../main_menu/main_menu';
import SideBar from '../side_bar/side_bar';
import UserNav from '../user_navigation/user_navigation';
import UserBlock from '../user_block/user_block';
import UserPage from '../user_page/user_page';
import LoginPage from '../login_page/login_page';


class Main extends Component {
    render () {
        return (
            <div className="wrapper">
                <Header />
                <div className="main">
                    <div className="container">
                        <MainMenu />
                        <div className="main-content d-flex">
                            <SideBar />
                            <div className="content-block">
                                <div className="content-container col-12">
                                    <div className="content-container__block">
                                        <UserNav />
                                        <Switch>
                                            <Route exact path='/' component={UserBlock} />
                                            <Route path='/user_page/' component={UserPage} />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;