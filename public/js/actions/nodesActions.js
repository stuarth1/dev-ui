export function selectNode(name){
    return{
        type: "SELECT_NODE",
        payload: {
            nodeDetails: {
                nodeName: name,
            },
        }
    }
}

export function deployNode(val){
    return dispatch => {
    return fetch(`http://localhost:8000/ethereum/nodes/add`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body:JSON.stringify(val) 
    })
    .then(response => response.json())
    .then(json => dispatch(getNodes()))
  }
}

function nodeDeployed (json){
    return {
        type: "NODE_DEPLOYED",
        payload: json,
    }
}


export function getClients(){
  return dispatch => {
    return fetch(`http://localhost:8000/ethereum/clients`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)))
  }
}

function receiveData (json) {
	return {
		type: "UPDATE_CLIENTS",
		payload: json
	}
}

export function getNodes(){
  return dispatch => {
    return fetch(`http://localhost:8000/ethereum/nodes/list`)
      .then(response => response.json())
      .then(json => dispatch(receiveNodes(json)))
  }
}

function receiveNodes(json){
    return {
        type: "FETCH_NODES",
        payload: json,
    }
}

export function startNode(val){
    return dispatch => {
        return fetch('http://localhost:8000/ethereum/nodes/'+val+'/start', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => dispatch(getNodes()))
    }
}
export function stopNode(val){
    return dispatch => {
        return fetch('http://localhost:8000/ethereum/nodes/'+val+'/stop', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => dispatch(getNodes()))
    }
}
export function updateNode(val){
    return{
        type: "UPDATE_NODE",
        payload: val,
    }
}

export function nodeTypeSelection(val){
    return{
        type: "NODE_SELECTION",
        payload: val,
    }
}
export function getConfiguration(val){
  return dispatch => {
    return fetch(`http://localhost:8000/ethereum/configurations`)
      .then(response => response.json())
      .then(json => dispatch(updateConfig(json)))
    }
}
function updateConfig(json) {
	return {
		type: "NODE_CONFIGURATION",
		payload: json
	}
}