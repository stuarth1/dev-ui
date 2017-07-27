import React from 'react';
export default class ContractDeployment extends React.Component{
    deploy(){
        this.props.onDeploy();   
        var contract = this.props.contract;
        var properties = this.props;
        //here i need to get the contractlist.length and save that number -1 then i need to update the contractList[i] with the humber i got
        Contracts.deploy(this.props.contract.contractName, function(val){
            contract.txhash = val.hash;
            contract.address = val.address;
            properties.updateContract(contract);
        });
    }    
    render(){
        var test = (this.props.slider === true ? <div class="progress" id="progressslider"><div class="progressSlider"></div></div>: "")
        return(
            <div className="width-50 p-lg-vr">
                <div className="panel contract-panel">
                    {test}
                    <div className="panel-heading">
                        <h3 className="display-inline mt-10">{this.props.contract.contractName}</h3>
                        <h5 className="display-inline pull-right">Gas Cost: 30000</h5>
                    </div>
                    <div id="panel_body" className="panel-body">
                        <div>
                            <h4 className="display-inline rpc-provider">RPC Provider: </h4>
                            <select defaultValue="Select" id="contract_selection" className="form-control rpc-dropdown">
                                <option value="Select" disabled>Select one --</option>
                                <option value="geth">Geth</option>
                                <option value="parity">Parity</option>
                            </select>
                        </div>
                        <div>
                            <h4 className="display-inline">TxHash: </h4>
                            <span id="txhash" className="pl-10">{this.props.contract.hash}</span>
                        </div>
                        <div>
                            <h4 className="display-inline">Address: </h4>
                            <span id="address" className="pl-10">{this.props.contract.address}</span>
                        </div>
                        <button onClick={this.deploy.bind(this)} className="pull-right btn btn-primary">Deploy</button>
                    </div>
                </div>
            </div>
        );
    }
}
