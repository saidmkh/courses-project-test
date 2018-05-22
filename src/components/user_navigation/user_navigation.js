import React, {Component} from 'react';

import Popup from '../add_user_modal/add_user_modal';

export default class UserNav extends Component {
    constructor() {
    super();
        this.state = {
            showPopup: false
        };
    }
    
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div className="content-user__navigation">
                <div className='content-item__block'>
                    <div className="content-user-navigation--item nav-active">
                        Users
                    </div>
                </div>
                <div className='content-item__block'>
                    <div className="content-user-navigation--item">
                        Connected
                    </div>
                </div>
                <div className="nav-btn-block col-xl-2 col-lg-2 col-md-3 col-5 ml-auto">
                    <button onClick={this.togglePopup.bind(this)} className="nav-btn">Add new user</button>
                </div>
            </div>
        )
    }
}