import React, { Component } from 'react';
import { connect } from "react-redux";

import { getClients, updateNode } from "../../../actions/nodesActions";

var Router = require('react-router');
var Link = Router.Link;

class NodeSelection extends Component{

    componentWillMount() {
        this.props.dispatch(getClients());
    }
    updateNode(event){
        this.props.dispatch(updateNode(event.target.dataset.name));
    }

    render(){
        var clients = [];
        console.log(this.props.clients);
        for(var flags in this.props.clients.result){
            clients.push(<li key={flags}><h3 className="p-10">{flags}</h3><div className="p-20">DETAILS GO HERE<Link to="/nodemanager/nodeconfiguration"><button className="btn btn-primary pull-right" data-name={flags} onClick={this.updateNode.bind(this)}>Select</button></Link></div></li>);
        }
        return(
            <div>
                <h1 className="p-b-m">Node Selection</h1>
                <ul className="list-margin">
                    {clients}
                </ul>
            </div>
        );
    }
}

function node(state){
    return {
        clients: state.nodes.clients,
    };
}

export default connect(node)(NodeSelection);