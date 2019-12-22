import React from "react";

class ListUser extends React.Component {
    render() {
        return (
            <div className="card o-hidden border-0 shadow-lg my-2"
                 style={{marginRight: '20px', marginTop: '500px', marginBottom: '100px', minHeight: "900px"}}>
                <div className="margin-10px">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h3>List Users</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Email</th>
                                        <th>Detail</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default ListUser;
