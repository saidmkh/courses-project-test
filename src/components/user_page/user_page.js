import React, {Component} from 'react';

export default class UserPage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="content-user-container">
                <div className="content-user--item d-flex">
                    <div className="col-12">
                        <div className="user-username">
                            Username: <span className="user-username--span">Ivan</span>
                        </div>
                        <div className="user-position">
                            Position: teacher
                        </div>
                        <div className="user-enroll">
                            Enroled in: 
                        </div>
                    </div>
                </div>
                <div className="content-user--item  d-flex">
                    <div className="col-12">
                        <p className="user-settings">Settings:</p>
                        <div className="user-allow-change">
                            <span className="user-allow-change--title">Allow change of user departments</span>
                            <input type="checkbox" className="user-settings--checkbox" id="user-settings--checkbox" />
                            <label for="user-settings--checkbox"></label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}