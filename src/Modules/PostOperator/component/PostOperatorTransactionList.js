import React from "react";
import {connect} from "react-redux";
import * as PostOperatorService from "../services/PostOperatorService";

class PostOperatorTransactionList extends React.Component {

    TransactionsLoad() {
        const {dispatch, loading, transaction} = this.props;
        PostOperatorService.listTransactions()
            .then((transaction) => {
                dispatch({type: 'LIST_TRANSACTION', loading, transaction});
                console.log("TRX", transaction);
            })
            .catch((err) => {
                dispatch({type: 'LIST_TRANSACTION', loading, transaction: []});
            })
    }

    componentDidMount() {
        if (this.props.loading) {
            this.TransactionsLoad();
        }
    }
    //
    // componentDidMount() {
    //     this.fetchListTransactions().then(r=>r);
    // }
    //
    // fetchListTransactions = async () => {
    //     const resultData = await fetchDataListTransactions();
    //     console.log(resultData, "data")
    //     this.props.fetchData(resultData);
    // }

    render() {
        return (
            <div className="card o-hidden border-0 shadow-lg my-2"
                 style={{ marginRight:'20px', marginTop: '100px', marginBottom: '100px', minHeight: "900px"}}>
                <div className="margin-10px">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h3>List Transaction</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name of the Sender</th>
                                        <th>Recipient's Name</th>
                                        <th>Address Origin</th>
                                        <th>Address Destination</th>
                                        <th>Package Name</th>
                                        <th>Package Weight</th>
                                        <th>Total Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*{this.props.listTransactions.map((element, index) => {*/}
                                    {/*    return <tr key={index}>*/}
                                    {/*        <td> width="10px">{index+1}</td>*/}
                                    {/*        <td>{element.originName}</td>*/}
                                    {/*        <td>{element.destinationName}</td>*/}
                                    {/*        <td></td>*/}
                                    {/*    </tr>*/}
                                    {/*})}*/}
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

const mapStateToProps = (state) => {
    return {...state.transaction}
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         fetchData:(data) =>{
//             console.log(data, "isi")
//             dispatch({type: "LIST_TRANSACTION", payload: data})
//         }
//     }
// }



export default connect(mapStateToProps)(PostOperatorTransactionList);
