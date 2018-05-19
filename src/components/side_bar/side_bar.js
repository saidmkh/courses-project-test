import React, {Component} from 'react';

export default class SideBar extends Component {
    render() {
        return (
            <div className="main-content__side-bar">
                <div className="main-content__side-bar--item">
                    <span>Courses</span>
                </div>
                <div className="main-content__side-bar--item"><span>Workspace</span></div>
                <div className="main-content__side-bar--item"><span>Users</span></div>
                <div className="main-content__side-bar--item"><span>Departments</span></div>
                <div className="main-content__side-bar--item"><span>My uploads</span></div>
                <div className="main-content__side-bar--item"><span>Mobile upload</span></div>
                <div className="main-content__side-bar--item"><span>Activity</span></div>
                <div className="main-content__side-bar--item"><span>Settings</span></div>
            </div>
        )
    }
}