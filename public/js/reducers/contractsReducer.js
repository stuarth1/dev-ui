const initialState = {
    numberOfContracts: 0,
    contractList: [],
    contractSelected: {
        contractName: '',
        name: '',
        type: '',
        value: '',
        txhash: '',
        address: '',
    },
    showSlider: false,
    availableContracts: '',
    fetching: false,
    fetched: false,
    error: null,
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case "FETCH_CONTRACT": {
            return Object.assign({},state, { fetching: true })
        }
        case "FETCH_CONTRACT_REJECTED": {
            return Object.assign({},state, { fetching: false, error: action.payload })
        }
        case "FETCH_CONTRACT_FULFILLED": {
            return Object.assign({},state, { fetching: false, fetched: true, contract: action.payload})
        }
        case "SET_CONTRACT_HASH": {
            return Object.assign({},state, { contract: {state, hash: action.payload}})
        }
        case "SET_NUMBER_OF_CONTRACTS": {
            return Object.assign({},state, { numberOfContracts: state.numberOfContracts + 1})
        }
        case "UPDATE_CONTRACT_TABLE": {
            return Object.assign({},state, { 
                contractSelected: { 
                    contractName: action.payload.contractSelected.contractName,
                    name: action.payload.contractSelected.name, 
                    type: action.payload.contractSelected.type, 
                    txhash: action.payload.contractSelected.txhash, 
                    address: action.payload.contractSelected.address 
                }
            })
        }
        case "DEPLOY_CONTRACT": {
            return Object.assign({},state, { contractList: [...state.contractList, action.payload]})
        }
        case "DELETE_CONTRACT": {
            return Object.assign({},state, { contractList: [...state.contractList.slice(0, action.payload), ...state.contractList.slice(action.payload + 1)]})
        }
        case "UPDATE_CONTRACT": {
            return Object.assign({},state, { contractList: [...state.contractList.slice(0, action.payload.arrayId), action.payload.contract, ...state.contractList.slice(action.payload.arrayId + 1)] })
        }
        case "UPDATE_BREADCRUMB": {
            return Object.assign({},state, { breadcrumbStage: action.payload })
        }
        case "UPDATE_SLIDER":{
            return Object.assign({},state, { showSlider: action.payload })
        }
    }
    return state;
}