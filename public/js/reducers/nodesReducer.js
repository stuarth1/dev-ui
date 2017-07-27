const initialState = {
    numberOfNodes: 0,
    nodesList: '',
    nodeDetails:{
        nodeName: ''
    },
    nodeConfiguration: {
        nodeType: '',
        displayNode: false,
    },
    showNodeSelection: false,
    nodeCofig: '',
    nodes: '',
    clients: '',
    nodeSelected: '',
    fetching: false,
    fetched: false,
    error: null,
}

function nodeReducer(state = initialState, action){
    switch(action.type){
        case "FETCH_NODE": {
            return Object.assign({}, state, {fetching: true})
        }
        case "UPDATE_NODE": {
            return Object.assign({}, state, {nodeSelected: action.payload})
        }
        case "SELECT_NODE": {
            return Object.assign({}, state, {nodeDetails: { nodeName: action.payload.nodeDetails.nodeName,} })
        }
        case "DEPLOY_NODE": {
            return Object.assign({}, state, {numberOfNodes: state.numberOfNodes + 1, nodesList: [...state.nodesList, action.payload] })
        }
        case "UPDATE_CLIENTS": {
            return Object.assign({},state, {clients: action.payload })
        }
        case "NODE_DEPLOYED" : {
            return Object.assign({}, state, {nodes: action.payload });
        }
        case "FETCH_NODES" :{
            return Object.assign({}, state, {nodesList: action.payload.result})
        }
        case "TEST_FIELD" :{
            return Object.assign({}, state, {nodeSelected: action.payload})
        }
        case "NODE_SELECTION":{
            return Object.assign({},state, { showNodeSelection: action.payload })
        }
        case "NODE_CONFIGURATION":{
            return Object.assign({},state, { nodeCofig: action.payload })
        }
        default:
            return state 
    }
}
export default nodeReducer
