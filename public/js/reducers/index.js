import { combineReducers } from "redux";

//Importing the reducer to be able to allow them to create a new store state
import contracts from "./contractsReducer";
import nodes, * as fromNodes from "./nodesReducer";
import page, * as fromPage from "./pageReducer";

export default combineReducers({
    contracts,
    nodes,
    page,
});
