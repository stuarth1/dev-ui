export function deployContract(val, num){
    return{
        type: "DEPLOY_CONTRACT",
        payload: {id: num, name: val.contractName, progress: "sent", hash: "", address: ""},
    }
}
export function updateNumberOfContracts(){
    return{
        type: "SET_NUMBER_OF_CONTRACTS",
    }
}
export function selectContract(val){
    return{
        type: "UPDATE_CONTRACT_TABLE",
        payload: { 
            contractSelected: { 
                contractName: val.contractName,
                name: val.name,
                type: val.type,
                value: null,
                txhash: val.txhash,
                address: val.address,
            },
        }
    }
}
export function deleteContract(val){
    return{
        type: "DELETE_CONTRACT",
        payload: val,
    }
}
export function updateContract(val, contract){
    return{
        type: "UPDATE_CONTRACT",
        payload: {
            arrayId: val,
            contract: contract,
        }
    }
}
export function updateSlider(val){
    return{
        type: "UPDATE_SLIDER",
        payload: val,
    }
}