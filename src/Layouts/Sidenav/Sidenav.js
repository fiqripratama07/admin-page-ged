import * as React from "react";
import {Link} from "react-router-dom";
import truck from "../../images/truck.png";
import dashboard from "../../images/book.png";
import trans from "../../images/trans.png";
import line from "../../images/line.png";
import Dropdown from "react-bootstrap/Dropdown";
import ListItemText from '@material-ui/core/ListItemText';
import "./Style.css";

class Sidenav extends React.Component {
    render() {
        return (
            <div>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                    id="accordionSidebar">
                    <Link to="/admin"
                          className="sidebar-brand d-flex align-items-center justify-content-center">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <img src={truck} style={{height: '60px', width: '60px'}}/>
                        </div>
                        <div className="sidebar-brand-text mx-3">GED</div>
                    </Link>
                    <div className="hr"/>
                    <br/>
                    <img src={line}/>
                    <div className="sidebar-divider my-0">
                        <li className="nav-item active">
                            <Link to="/admin" className="nav-link">
                                <img src={dashboard}
                                     style={{height: '40px', width: '40px', marginRight: '10px'}}/>
                                <span>Dashboard</span></Link>
                        </li>
                    </div>
                    <div className="sidebar-divider my-0">
                        <li className="nav-item active">
                            <Dropdown style={{backgroundColor: '#F69314', borderColor: '#F69314'}}>
                                <Dropdown.Toggle style={{backgroundColor: '#F69314'}}>
                                    <img src={trans}
                                         style={{height: '40px', width: '40px', marginRight: '10px'}}/>
                                    <span>Transaction</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item><Link to={"/add-transaction"}><ListItemText>Add
                                        Transaction</ListItemText></Link></Dropdown.Item>
                                    <Dropdown.Item><Link to={"/transactions"}>List Transaction</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Sidenav;
