import React from "react";
import {connect} from 'react-redux';
import * as AdminServices from '../service/AdminService';

class UsersForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        AdminServices.save(this.props.order)
            .then(resp => {
                alert("Save Success");
            })
            .catch(err => alert("Save Error"))
    }

    handleChangeUsername = (event) => {
        const value = event.target.value;
        this.props.dispatch({type: 'HANDLE_USERNAME', userName: {...this.props.addUser, userName: value}})
    }

    handleChangePassword = (event) => {
        const value = event.target.value;
        this.props.dispatch({type: 'HANDLE_PASSWORD', password: {...this.props.addUser, password: value}})
    }

    render() {
        console.log("STATE AFTER", this.props.addUser);
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
                                                       name="userName"
                                                       onChange={this.handleChangeUsername}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="text" className="form-control form-control-user"
                                                       placeholder="Enter Password. . ."
                                                       name="password"
                                                       onChange={this.handleChangePassword}

                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="text" className="form-control form-control-user"
                                                       placeholder="Enter Email. . ."
                                                       name="email"

                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Roles</label>
                                                <select className="custom-select mr-sm-3" id="type-menu">
                                                    <option selected>Choose Roles</option>
                                                    <option>admin</option>
                                                    <option>post operator</option>
                                                    <option>courier</option>
                                                </select>
                                            </div>
                                            <div className="form-group col">
                                                <button type="button"
                                                        className="btn btn-google btn-outline- btn-user btn-block">
                                                    Cancel
                                                </button>
                                                <button type="submit"
                                                        style={{marginBottom: '30px'}}
                                                        className="btn btn-outline-success btn-user btn-block"
                                                        onSubmit={this.handleSubmit}
                                                >
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
    return {...state.admin}
}

export default connect(mapStateToProps)(UsersForm);
