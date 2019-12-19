import React from 'react';
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";

class AdminContainer extends React.Component {
    render() {
        return (
            <div>
                <div id="page-top">
                    <div id="wrapper">
                        <Sidenav/>
                        <div id="content-wrapper" className="d-flex flex-column">
                            <div id="content">
                                <Header/>
                                <div className="container-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminContainer;
