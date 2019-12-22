import React from 'react';
import Sidenav from "../../Layouts/Sidenav/Sidenav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PostOperatorForm from "../PostOperator/component/PostOperatorTransactionForm";
import ListUser from "./components/ListUser";
import UsersForm from "./components/UsersForm";
import Header from "../../Layouts/Header/Header";
import PostOperatorTransactionList from "../PostOperator/component/PostOperatorTransactionList";

class AdminContainer extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div id="page-top">
                        <div style={{minHeight:'100px',marginLeft:'251px'}}>
                            <Header/>
                        </div>
                        <div id="wrapper">
                            <Sidenav/>
                            <div id="content-wrapper" className="d-flex flex-column" style={{marginTop:'-30px', backgroundColor:'white'}}>
                                <div id="content" style={{marginLeft: '270px', marginTop:'17px'}}>
                                    <div>
                                        <Switch>
                                            <Route path={"/add-transaction"}><PostOperatorForm/></Route>
                                            <Route path={"/list-transaction"}><PostOperatorTransactionList/></Route>
                                            <Route path={"/add-user"}><UsersForm/></Route>
                                            <Route path={"/list-user"}><ListUser/></Route>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default AdminContainer;
