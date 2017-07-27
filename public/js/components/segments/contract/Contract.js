import React from 'react';

export default class Contract extends React.Component {
    selectContract(){
        this.props.onSelect(this.props.name);
    }

    render () {
        return (
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="panel contract-panel">
                    <div className="panel-heading">
                        <h3>{this.props.name}</h3>
                    </div>
                    <div id="panel_body" className="panel-body">
                        <div className="p-10"><b>Gas: </b>2200</div>
                        <div className="row valign-wrapper p-10">
                            <div className="col-xs-8 valign">
                                <b>Open in Canvas: </b>
                            </div>
                            <div className="col-xs-4">
                                <img src="/img/open-canvas.png" alt="Deploy Contract" className="contract-image" />
                            </div>
                        </div>
                        <div className="row valign-wrapper p-10">
                            <div className="col-xs-8 valign">
                                <b> Deploy to Network:</b>
                            </div>
                            <div className="col-xs-4">
                                <img src="/img/deploy.png" alt="Open Canvas" className="contract-image" onClick={this.selectContract.bind(this)} />
                            </div>
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
