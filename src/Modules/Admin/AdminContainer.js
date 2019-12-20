import React from 'react';
import Sidenav from "../../Layouts/Sidenav/Sidenav";
import Header from "../../Layouts/Header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PostOperatorForm from "../PostOperator/component/PostOperatorTransactionForm";

class AdminContainer extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div id="page-top">
                        <div id="wrapper">
                            <Sidenav/>
                            <div id="content-wrapper" className="d-flex flex-column">
                                <div id="content">
                                    <Header/>
                                    <div className="container-fluid">
                                        <Switch>
                                            <Route path={"/post-form"}><PostOperatorForm/></Route>
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
