import React from "react";
import {connect} from 'react-redux';


class UsersForm extends React.Component {
    render() {
        return (
            <div>
                <div className="card o-hidden border-0 shadow-lg my-2"
                     style={{marginRight: '20px', marginTop: '100px', marginBottom: '100px', minHeight: "900px"}}>
                    <div className="margin-10px">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <div className="card o-hidden border-0 shadow-lg my-2">
                                    <div className="card-body p-0">
                                        <div className="row justify-content-center">
                                            <div className="col-md-12 p-3">
                                                <h3 className="text-center" style={{marginTop: '50px'}}>Form Users</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="container">
                                        <form className="user">
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text" className="form-control form-control-user"
                                                       placeholder="Enter Username. . ."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="text" className="form-control form-control-user"
                                                       placeholder="Enter Password. . ."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="text" className="form-control form-control-user"
                                                       placeholder="Enter Email. . ."
                                                />
                                            </div>
                                            <div className="form-group col">
                                                <button type="button"
                                                        className="btn btn-google btn-outline- btn-user btn-block">
                                                    Cancel
                                                </button>
                                                <button type="button"
                                                        style={{marginBottom: '30px'}}
                                                        className="btn btn-outline-success btn-user btn-block">
                                                    Save User
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state.transaction}
}

export default connect(mapStateToProps)(UsersForm);
