import * as React from "react";
import {Link} from "react-router-dom";
import truck from "../../../images/truck.png";
import dashboard from "../../../images/book.png";
import back from "../../../images/back.png";

class Sidenav extends React.Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <Link to="/admin" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <img src={truck}/>
                    </div>
                    <div className="sidebar-brand-text mx-3">GED</div>
                </Link>
                <div className="hr"/>
                <br/>
                <div className="sidebar-divider my-0">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            <img src={dashboard} style={{height: '20px', width: '20px', marginRight: '10px'}}/>
                            <span>Dashboard</span></Link>
                    </li>
                </div>
                <hr className="sidebar-divider d-none d-md-block"/>
                <div className="text-center d-none d-md-inline">
                    <Link to={"/signIn"}><img src={back} style={{height: '40px', width: '40px', marginRight: '10px'}}/></Link>
                </div>
            </ul>
        )
    }
}

export default Sidenav;
