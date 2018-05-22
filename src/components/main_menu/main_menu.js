import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu d-flex">
                <Link to='/' className="logo"></Link>
                <div className="main-menu--item col-xl-2 col-lg-2 col-md-2 col-4"><span>My Panel</span></div>
                <div className="main-menu--item col-xl-3 col-lg-3 col-md-3 col-4"><span>+ Add Course</span></div>
            </div>
        )
    }
}