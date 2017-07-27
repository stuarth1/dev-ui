export function updatePage(val){
    return {
        type: "UPDATE_PAGE",
        payload: val,
    }
}
export function updateNodePage(val){
    return {
        type: "UPDATE_NODE_PAGE",
        payload: val,
    }
}