import React from "react";

class PostOperatorTransactionList extends React.Component {
    render() {
        return (
            <div className="margin-10px">
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Origin</th>
                                    <th>Address</th>
                                    <th>Destination</th>
                                    <th>Address</th>
                                    <th>Packages</th>
                                    <th>Status</th>
                                    <th>Create Time</th>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostOperatorTransactionList;
