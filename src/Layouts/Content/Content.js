import * as React from "react";
import SignUp from '../../Modules/Register/Register';
import SignIn from '../../Modules/Login/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AdminContainer from "../../Modules/Admin/AdminContainer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import LoginReducer from "../../Modules/Login/reducer/LoginReducer";

class Content extends React.Component {
    render() {
        return (
            <Provider store={createStore(LoginReducer)}>
                <Router>
                    <Switch>
                        <Route exact path={"/signIn"}><SignIn/></Route>
                        <Route path={"/signUp"}><SignUp/></Route>
                        <Route path={"/admin"}><AdminContainer/></Route>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Content;
