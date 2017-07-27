import React, { Component } from 'react';

export default class ContractDeployed extends Component {
    render () {
        console.log(this.props.contract);
        return (
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="panel contract-panel">
                    <div className="panel-heading">
                        <h3 className="display-inline">{this.props.contract.name}</h3>
                        <h5 className="display-inline pull-right">Gas Cost: 30000</h5>
                    </div>
                    <div id="panel_body" className="panel-body">                        
                        <div>
                            <h4 className="display-inline">TxHash: </h4>
                            <span id="txhash" className="pl-10">{this.props.contract.transactionHash}</span>
                        </div>
                        <div>
                            <h4 className="display-inline">Address: </h4>
                            <span id="address" className="pl-10">{this.props.contract.address}</span>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <span>$ 0.20</span>
                    </div>
                </div>
            </div>
        );
    }
}