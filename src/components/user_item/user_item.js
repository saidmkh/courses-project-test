import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class UserItem extends Component {
    render() {
        return (
            <div className="content-user--item d-flex">
                <div className="col-6 d-flex">
                    <div className="user--item__avatar d-flex justify-content-center align-center">
                        <div className="user--item__photo"></div>
                    </div>
                    <div className="user--item__info d-flex flex-column justify-content-center col">
                        <div className="user-name"><Link to="/user_page/" className="user-item--name">Ivan</Link></div>
                        <span className="user-item--email">Email: aa@agf.com</span>
                        <span className="user-item--department">Department: ABC PROD</span>
                        <span className="user-item--role">Role: teacher</span>
                        <span className="user-item--lastlogged">Last logged-in: Aug 26, 2016 3:51 PM</span>
                    </div>
                </div>
                <div className="col-6">
                    
                </div>
            </div>
        )
    }
}