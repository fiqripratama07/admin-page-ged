import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import axios from 'axios';

class Login extends React.Component {

    handleChangeEmail = (event) => {
        console.log("EMAIL", event.target.value);
        const email = event.target.value;
        this.props.dispatch({type: 'LOGIN_SUCCESS', login: {...this.props.login, login: email}})
    }

    handleChangePassword = (event) => {
        console.log("PASSWORD", event.target.value);
        const password = event.target.value;
        this.props.dispatch({type: 'LOGIN_SUCCESS', login: {...this.props.login, login: password}})
    }

    onSubmit = (event) => {
        event.preventDefault();
        axios.post('http://10.10.16.180/', {
            email: this.props.email,
            password: this.props.password
        }).then(res => localStorage.setItem('cool-jwt', res.data));
    }

    render() {
        return (
            <body style={{minHeight:'900px'}} className="bg-gradient-primary">
            <div className="container">

                <div className="row justify-content-center" style={{backgroundImage: `url('https://source.unsplash.com/pSyfecRCBQA/1920x780')`}}>

                    <div className="col-xl-10 col-lg-12 col-md-9" style={{marginTop:'200px'}}>
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onSubmit={event => this.onSubmit(event)}>
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                           id="exampleInputEmail" onChange={this.handleChangeEmail}
                                                           value={this.props.email}
                                                           aria-describedby="emailHelp"
                                                           placeholder="Enter Email Address..."/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                           id="exampleInputPassword"
                                                           onChange={this.handleChangePassword}
                                                           value={this.props.password}
                                                           placeholder="Password"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck"/>
                                                    </div>
                                                </div>
                                                {/*<button type={"submit"}>submit</button>*/}
                                                <Link to={"/admin"}
                                                      className="btn btn-primary btn-user btn-block">Login</Link>
                                                <div className="text-center">
                                                    <Link className="small" to={"/signUp"}>Create an Account!</Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        )
    }
}

function mapStateToProps(state) {
    return {...state.login}
}

export default connect(mapStateToProps)(Login)
