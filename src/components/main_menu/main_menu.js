import React, {Component} from 'react';

export default class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu d-flex">
                <div className="logo"></div>
                <div className="main-menu--item col-2"><span>My Panel</span></div>
                <div className="main-menu--item col-3"><span>+ Add Course</span></div>
            </div>
        )
    }
}