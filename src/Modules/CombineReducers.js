import {combineReducers} from 'redux';
import PostOperatorReducer from "./PostOperator/reducer/PostOperatorReducer";
import AdminReducer from "./Admin/reducer/AdminReducer";


export default combineReducers({
    transaction: PostOperatorReducer,
    admin: AdminReducer
})
