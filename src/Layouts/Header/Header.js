import * as React from "react";
import Bars from '../../images/bars.png';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <img src={Bars}/>
                </button>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                             aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                           placeholder="Search for..." aria-label="Search"
                                           aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <h3>Welcome, Admin!!</h3>
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;
