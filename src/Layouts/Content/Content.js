import * as React from "react";
import SignUp from '../Register/Register';
import SignIn from '../Login/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class Content extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={"/signIn"}><SignIn/></Route>
                    <Route path={"/signUp"}><SignUp/></Route>
                </Switch>
            </Router>
        )
    }
}

export default Content;
