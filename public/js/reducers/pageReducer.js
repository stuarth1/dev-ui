const initialState = {
    pageName: 'landing',
    nodePage: 'nodeselection',
    contractPage: 'contractselection',
    fetching: false,
    fetched: false,
    error: null,
}

const pageReducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_PAGE": {
            return Object.assign({}, state, { pageName: action.payload })
        }
        case "UPDATE_NODE_PAGE": {
            return Object.assign({}, state,{ nodePage: action.payload })
        }
        case "UPDATE_CONTRACT_PAGE": {
            return Object.assign({}, state,{ contractPage: action.payload })
        }
        default:
            return state;
    }
}

export default pageReducer;