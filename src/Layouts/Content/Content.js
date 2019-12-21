import * as React from "react";
import SignUp from '../../Modules/Register/Register';
import SignIn from '../../Modules/Login/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import CombineReducers from "../../Modules/CombineReducers";
import AdminContainer from "../../Modules/Admin/AdminContainer";
import LandingPage from '../LandingPage/LandingPage';
import {createStore} from "redux";
import PostOperatorTransactionList from "../../Modules/PostOperator/component/PostOperatorTransactionList";

class Content extends React.Component {
    render() {
        return (
            <Provider store={createStore(CombineReducers)}>
                <Router>
                    <Switch>
                        <Route exact path={"/"}><LandingPage/></Route>
                        <Route path={"/login"}><SignIn/></Route>
                        <Route path={"/signUp"}><SignUp/></Route>
                        <Route path={"/admin"}><AdminContainer/></Route>
                        <Route path={"/post-transactions"}><PostOperatorTransactionList/></Route>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Content;
