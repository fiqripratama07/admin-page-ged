import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Layouts/Login/Login";
import Register from "./Layouts/Register/Register";

class App extends React.Component{
  render() {
    return(
        <Router>
            <Register/>
        </Router>
    )
  }
}

export default App;
