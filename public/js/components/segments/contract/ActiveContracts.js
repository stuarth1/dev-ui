import React, { Component } from "react";
import { connect } from "react-redux";
import ContractDeployed from "./ContractDeployed";

class ActiveContracts extends Component{
    componentDidMount(){
        //this.props.dispatch(getNodes());
    }
    render(){
        var contractsDeployed = [];
        var i=0;
        for(var test in Contracts.instances){
            contractsDeployed.push(<ContractDeployed key={i} id={i} contract={Contracts.instances[test]} />);
            i++;
        }
        return(
            <div>
                <h1>Active Contracts</h1>
                <span><i>*If you node is not visible try selective Abstract in the Contracts Menu</i></span>
                <div className="row">
                    {contractsDeployed}
                </div>
            </div>
        );
    }
}

function contractList(state){
    return{ 
        contractList: state.contracts.contractList
    }
}

export default connect(contractList)(ActiveContracts)