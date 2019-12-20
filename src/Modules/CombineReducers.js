import {combineReducers} from 'redux';
import PostOperatorReducer from "./PostOperator/reducer/PostOperatorReducer";


export default combineReducers({
    transaction: PostOperatorReducer
})
