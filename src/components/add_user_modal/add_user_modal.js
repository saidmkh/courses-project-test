import React, {Component} from 'react';

export default class Popup extends Component {
    render() {
      return (
        <div className="popup">
            <div className="popup-block d-flex align-content-center align-middle flex-column col-xl-4 col-lg-5 col-md-6 col-sm-7 col-xs-7 col-10">
                <div onClick={this.props.closePopup} className="close p-2"></div>
                <p className="popup-header text-center">Add user</p>
                <form className="col-9 mx-auto p-4">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Department</label>
                        <input type="text" className="form-control" placeholder="Department" />
                    </div>
                    <div className="form-group">
                        <label for="select-select-role">Select role</label>
                        <select className="form-control" id="select-role">
                            <option>Teacher</option>
                            <option>Manager</option>
                            <option>Admin</option>
                        </select>
                    </div>
                    <div className="popup-btn-block d-flex justify-content-around">
                        <button onClick={this.props.closePopup} type="button" className="add-prop-btn btn-lg">Cancel</button>
                        <button type="submit" className="add-prop-btn btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
      );
    }
  }