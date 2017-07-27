import React, { Component } from "react";
import Node from "./Node.js";
import SelectNode from "./SelectNode.js";
import { connect } from "react-redux";
import { getNodes, startNode, stopNode } from "../../../actions/nodesActions";


class ActiveNodes extends Component{
    componentDidMount(){
        this.props.dispatch(getNodes());
    }
    nodeStart(val){
        this.props.dispatch(startNode(val))
    }
    nodeStop(val){
        this.props.dispatch(stopNode(val))
    }
    render(){
        var nodesDeployed = [];
        console.log(this.props.nodesList.length);
        nodesDeployed.push(<SelectNode key={this.props.nodesList.length + 1}/>)
        for(var i=0; i<this.props.nodesList.length; i++){
            nodesDeployed.push(<Node key={i} id={i} node={this.props.nodesList[i]} stop={this.nodeStop.bind(this)} start={this.nodeStart.bind(this)} />);
        }
        return(
            <div>
                <h1>Active Nodes</h1>
                <span><i>*If you node is not visible try selective Active in the Nodes Menu</i></span>
                <div className="row">
                    {nodesDeployed}
                </div>
            </div>
        );
    }
}

function nodeList(state){
    return{ 
        nodesList: state.nodes.nodesList
    }
}

export default connect(nodeList)(ActiveNodes)