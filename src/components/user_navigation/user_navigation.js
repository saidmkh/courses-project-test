import React, {Component} from 'react';

export default class UserNav extends Component {
    render() {
        return (
            <div className="content-user__navigation">
                <div className="content-user-navigation--item nav-active">
                    Users
                </div>
                <div className="content-user-navigation--item">
                    Connected
                </div>
                <div className="nav-btn-block col-2 ml-auto">
                    <button className="nav-btn col-12">Add new user</button>
                </div>
            </div>
        )
    }
}