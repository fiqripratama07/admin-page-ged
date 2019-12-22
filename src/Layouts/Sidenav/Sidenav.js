import * as React from "react";
import {Link} from "react-router-dom";


class Sidenav extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
                     id="sidenav-main">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <h1 className="text-center">GED</h1>
                        <ul className="nav align-items-center d-md-none">
                            <li className="nav-item dropdown">
                                <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">
                                    <i className="ni ni-bell-55"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                            <div className="navbar-collapse-header d-md-none">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="./index.html">
                                            <img src="images/brand/blue.png"/>
                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button type="button" className="navbar-toggler" data-toggle="collapse"
                                                data-target="#sidenav-collapse-main" aria-controls="sidenav-main"
                                                aria-expanded="false" aria-label="Toggle sidenav">
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <form className="mt-4 mb-3 d-md-none">
                                <div className="input-group input-group-rounded input-group-merge">
                                    <input type="search"
                                           className="form-control form-control-rounded form-control-prepended"
                                           placeholder="Search" aria-label="Search"/>
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <span className="fa fa-search"></span>
                                            </div>
                                        </div>
                                </div>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item  active ">
                                    <Link className="nav-link  active " to="/">
                                        <i className="ni ni-tv-2 text-primary"></i> Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/add-transaction">
                                        <i className="ni ni-ruler-pencil text-orange"></i> Form Transactions
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/list-users">
                                        <i className="ni ni-bullet-list-67 text-yellow"></i> Data Table Transactions
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Sidenav;
