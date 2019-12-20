import React from "react";

class PostOperatorForm extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="card o-hidden border-0 shadow-lg my-2">
                                    <div className="card-body p-0">
                                        <div className="row justify-content-center">
                                            <div className="col-md-12 p-3">
                                                <h3 className="text-center" style={{marginTop:'50px'}}>Form Transaction</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="container">
                                        <form className="user">
                                            <div className="form-group">
                                                <label>Origin Name</label>
                                                <input type="text" className="form-control form-control-user"
                                                       placeholder="Enter Origin Name. . ."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Address Origin</label>
                                                <select className="form-control custom-select mr-sm-3"
                                                        id="type-menu" required>
                                                    <option>Select Origin</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Destination Name</label>
                                                <input type="text" className="form-control form-control-user"
                                                       placeholder="Enter Destination Name. . ."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Address Destination</label>
                                                <select className="custom-select mr-sm-3" id="type-menu">
                                                    <option selected>Choose Destination</option>
                                                    <option value="Tony Black">Tony Black</option>
                                                    <option value="Alan Turing">Alan Turing</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Input Package</label>
                                                <input type="text" className="form-control form-control-user"
                                                       placeholder="Enter Package Name. . ."
                                                />
                                                <br/>
                                                <input type="text" className="form-control form-control-user"
                                                       placeholder="Enter Package Weight. . ."
                                                />
                                            </div>
                                            <div className="form-group col">
                                                <button type="button"
                                                        className="btn btn-google btn-outline- btn-user btn-block">
                                                    Cancel
                                                </button>
                                                <button type="button"
                                                        style={{marginBottom:'30px'}}
                                                        className="btn btn-outline-success btn-user btn-block">
                                                    Save Order
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostOperatorForm;
