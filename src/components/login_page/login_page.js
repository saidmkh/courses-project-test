import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class LoginPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="login-container col-xl-4 col-lg-5 col-md-8 col-12 m-auto">
                    <div className="login-logo"></div>
                    <div className="login-block">
                        <div className="login-block--logo"></div>
                        <div className="col-8 m-auto">
                            <form className="login-form">
                                <div className="form-group">
                                    <label for="InputEmail">Username or Email</label>
                                    <input type="email" className="login-input" id="InputEmail" />
                                </div>
                                <div className="form-group">
                                    <label for="InputPassword">Password</label>
                                    <input type="password" className="login-input" id="InputPassword" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn login-submit__btn col-9">Sign in</button>
                                </div>
                            </form>
                            <div className="account-action d-flex justify-content-between">
                                <a href="#" className="account-action--links">Forgot password</a>
                                <a href="#" className="account-action--links">Create account</a>
                            </div>
                        </div>
                    </div>
                    <div className="login-bottom--logo"></div>
                </div>
            </div>
        )
    }
}