import * as React from "react";
import SignUp from '../../Modules/Register/Register';
import SignIn from '../../Modules/Login/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import CombineReducers from "../../Modules/CombineReducers";
import AdminContainer from "../../Modules/Admin/AdminContainer";
import {createStore} from "redux";

class Content extends React.Component {
    render() {
        return (
            <Provider store={createStore(CombineReducers)}>
                <Router>
                    <Switch>
                        <Route exact path={"/"}><SignIn/></Route>
                        <Route path={"/signUp"}><SignUp/></Route>
                        <AdminContainer/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Content;
