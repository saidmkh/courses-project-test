import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {

    render () {
        return (
            <header className="header">
			<div className="account-header">
				<div className="container">
					<div className="account-header__block d-flex justify-content-end align-items-center">
						<div className="account-photo"></div>
						<a href="login-page.html" className="account-name">a@a.com⯆</a>
					</div>
				</div>
			</div>
		</header>
        )
    }
}

export default Header;