import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import MainMenu from '../main_menu/main_menu.js';
import SideBar from '../side_bar/side_bar.js';
import UserNav from '../user_navigation/user_navigation.js';

import '../../css/main.css';

class IndexPage extends Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <MainMenu />
                    <div className="main-content d-flex">
                        <SideBar />
                        <div className="content-block">
                            <div className="content-container col-12">
                                <div className="content-container__block">
                                    <UserNav />
                                    <div className="content-user-container">
                                        <div className="content-user--item d-flex">
                                            <div className="col-6 d-flex">
                                                <div className="user--item__avatar d-flex justify-content-center align-center">
                                                    <div className="user--item__photo"></div>
                                                </div>
                                                <div className="user--item__info d-flex flex-column justify-content-center col">
                                                    <div className="user-name"><a href="user-page.html" className="user-item--name">Ivan</a></div>
                                                    <span className="user-item--email">Email: aa@agf.com</span>
                                                    <span className="user-item--department">Department: ABC PROD</span>
                                                    <span className="user-item--role">Role: teacher</span>
                                                    <span className="user-item--lastlogged">Last logged-in: Aug 26, 2016 3:51 PM</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                
                                            </div>
                                        </div>
                                        <div className="content-user--item d-flex">
                                            <div className="col-6 d-flex">
                                                <div className="user--item__avatar d-flex justify-content-center align-center">
                                                    <div className="user--item__photo"></div>
                                                </div>
                                                <div className="user--item__info d-flex flex-column justify-content-center col">
                                                    <div className="user-name"><a href="user-page.html" className="user-item--name">Ivan</a></div>
                                                    <span className="user-item--email">Email: aa@agf.com</span>
                                                    <span className="user-item--department">Department: ABC PROD</span>
                                                    <span className="user-item--role">Role: teacher</span>
                                                    <span className="user-item--lastlogged">Last logged-in: Aug 26, 2016 3:51 PM</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                
                                            </div>
                                        </div>
                                        <div className="content-user--item d-flex">
                                            <div className="col-6 d-flex">
                                                <div className="user--item__avatar d-flex justify-content-center align-center">
                                                    <div className="user--item__photo"></div>
                                                </div>
                                                <div className="user--item__info d-flex flex-column justify-content-center col">
                                                    <div className="user-name"><a href="user-page.html" className="user-item--name">Ivan</a></div>
                                                    <span className="user-item--email">Email: aa@agf.com</span>
                                                    <span className="user-item--department">Department: ABC PROD</span>
                                                    <span className="user-item--role">Role: teacher</span>
                                                    <span className="user-item--lastlogged">Last logged-in: Aug 26, 2016 3:51 PM</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                
                                            </div>
                                        </div>
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

export default IndexPage;