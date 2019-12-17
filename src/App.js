import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Layouts/Login/Login";

class App extends React.Component{
  render() {
    return(
        <Router>
            <Login/>
        </Router>
    )
  }
}

export default App;
