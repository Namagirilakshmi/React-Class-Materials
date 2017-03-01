import {combineReducers} from "redux";
import todosReducer from '../reducers/todos';

const rootReducer = combineReducers({
        todos:todosReducer
    });

export default rootReducer;