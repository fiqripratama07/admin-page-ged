import React from "react";
import {connect} from "react-redux";
import {listPeople} from "../services/PostOperatorService";
import {fetchDataListPeople} from "../services/PostOperatorService";

class PostOperatorTransactionList extends React.Component {

    componentDidMount() {
        this.fetchListPeople().then(r=>r);
    }

    fetchListPeople = async () => {
        const resultData = await fetchDataListPeople();
        console.log(resultData,"data")
        this.props.fetchData(resultData);
    }

    render() {
        console.log(this.props)
        return (
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                </tr>
                </thead>
                <tbody>
                {this.props.transaction.people.map((element, index) => {
                    return <tr key={index}>
                        <td width="10px">{index + 1}</td>
                        <td>{element.title}</td>
                    </tr>
                })}
            </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => {
    return {...state}
};

const mapDispatchToProps = (dispatch) => {
    return{
      fetchData : (data) => {
          console.log(data, "isi")
          dispatch({type: "LIST_PEOPLE", payload:data})
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostOperatorTransactionList);
