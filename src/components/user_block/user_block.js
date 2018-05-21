import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import UserItem from '../user_item/user_item';

import '../../css/main.css';

class UserBlock extends Component {
    render() {
        return (
            <div className="content-user-container">
               <UserItem />
               <UserItem />
               <UserItem />
            </div>
        )
    }
}

export default UserBlock;