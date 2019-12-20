import React from "react";

class ListUser extends React.Component {
    render() {
        return (
            <div>
                <div className="card shadow mb-4">
                </div>
                <div className="form-group mx-sm-4 mb-4">
                    <button type="button" className="btn btn-primary btn-icon-split" data-toggle="modal"
                            data-target="#tableModal">
                <span className="icon text-white-50">
                <i className="fas fa-plus"/>
                </span>
                        <span className="text">ADD TABLE</span>
                    </button>
                </div>
                <div className="card-body">
                    <h1>List All Table</h1>
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Number Table</th>
                                <th>Capacity</th>
                                <th>Status</th>
                                <th>Detail</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}

export default ListUser;
