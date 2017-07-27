import React from 'react';
import Contract from "./Contract.js";
import ContractDeployment from "./ContractDeployment";
import { connect } from "react-redux";

import { selectContract, updateNumberOfContracts, deployContract, updateSlider } from "../../../actions/contractsActions";

class ContractSelection extends React.Component {

    deployContract(){
        this.props.dispatch(updateSlider(true));
        this.props.dispatch(updateNumberOfContracts());
        this.props.dispatch(deployContract(this.props.contractSelected, this.props.numberOfContracts));
    }

    selectContract(val){
        this.props.dispatch(updateSlider(false));
        console.log(val);
        var contractDetails = {contractName: val, name: '', type: '', value: '', txhash:'', address:''};
        var abi = Contracts.interfaces[val];
        console.log(abi);
        for (var i = 0 ; i < abi.length; i++) {
            if (abi[i].type === "constructor") {
                for (var j = 0 ; j < abi[i].inputs.length; j++) {
                    contractDetails.name = abi[i].inputs[j].name;
                    contractDetails.type = abi[i].inputs[j].type;
                    contractDetails.displayTable = true;
                }
            }
        }

        //Saving the selected contract to the store for when we use deploy
        this.props.dispatch(selectContract(contractDetails));
    }

    updateContract(val){
        this.props.dispatch(updateSlider(false));
        var contractDetails = {contractName: val.contractName, name: val.name, type: val.type, value: '', txhash: val.txhash, address: val.address};
        this.props.dispatch(selectContract(contractDetails));
    }

    render(){
        var contracts=[];
        for (var obj in Contracts.interfaces){
            var contract = Contracts.interfaces[obj];
            contracts.push(<Contract key={obj} onSelect={this.selectContract.bind(this)} name={obj}  />)
        }
        var selection='';
        if(this.props.contractSelected.contractName !== ''){
            selection = <ContractDeployment contract={this.props.contractSelected} onDeploy={this.deployContract.bind(this)} updateContract={this.updateContract.bind(this)} slider={this.props.showSlider} />
        }
        return(
            <div>
                <h1 className="p-b-m">Abstract Contracts</h1>
                <div className="row">
                    {contracts}
                </div>
                <div className="row">
                    {selection}
                </div>
            </div>
        );
    }
}

function contract(state){
    return{
        contractSelected: state.contracts.contractSelected,
        numberOfContracts: state.contracts.numberOfContracts,
        showSlider: state.contracts.showSlider,
    }
}
export default connect(contract)(ContractSelection)