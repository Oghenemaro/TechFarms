import React from 'react';
import {connect} from 'react-redux';

const signup = ({ dispatch }) => {

    let userData;
    return (
        <div className="modal fade" id="accountSettingModal" tabindex="-1" role="dialog" aria-labelledby="accountSettingModal" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Account Info</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <form onSubmit={ e  => { e.preventDefault(); userData = {                             username: username.value,
                                firstname: firstname.value,
                                lastname: lastname.value,
                                address: address.value,
                                email: email.value,
                                cell: cell.value
                            };
                            dispatch(signupAction(userData));
                        }
                        }>
                            <div className="form-group">
                                <input type="text" placeholder=" EnterUsername" name="username" ref={node => username = node} className="form-control-sm" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-6">
                                    <input type="text" placeholder="Enter Firstname" name="firstname" ref={node => firstname = node} className="form-control-sm" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <input type="text" placeholder="Enter Lastname" name="lastname" ref={node => lastname = node} className="form-control-sm" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="textarea" col="20" row="20" placeholder="Enter Address" name="address" ref={node => address = node} className="form-control-sm" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Enter Email" name="email" ref={node => email = node} className="form-control-sm" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Enter Cell Number" name="cell" ref={node => cell = node} className="form-control-sm" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default connect()(signup);