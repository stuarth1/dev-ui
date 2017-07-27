import React from "react";

export default class Node extends React.Component{
    start(){
        this.props.start(this.props.id);
    }
    stop(){
        this.props.stop(this.props.id);
    }

    render(){
        var node = this.props.node;
        return(
            <div className="col-md-3 col-sm-4 col-xs-12">
                <div className="panel contract-panel">
                    <div className="panel-heading">
                        <h3>{node.client}</h3>
                    </div>
                    <div id="panel_body" className="panel-body">
                        <div className="p-10"><b>Status: </b>{node.status}</div>
                        <div className="row">
                            <div className="col-xs-6">
                                <h4 className="text-center">Start</h4>
                                <div className="text-center font-25 green-button clickable" onClick={this.start.bind(this)}>&#x25b6;</div>
                            </div>
                            <div className="col-xs-6">
                                <h4 className="text-center">Stop</h4>
                                <div className="text-center font-20 red-button clickable" onClick={this.stop.bind(this)}>&#9612;&#9612;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}