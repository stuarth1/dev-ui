import React,{ Component } from "react";
import { connect } from "react-redux";

import { nodeTypeSelection } from "../../../actions/nodesActions";

var Router = require('react-router');
var Link = Router.Link;

class SelectNode extends Component{

    selectNode(){
        this.props.dispatch(nodeTypeSelection(true));
    }
    componentWillMount(){
        this.props.dispatch(nodeTypeSelection(false));
    }

    render(){
        if(this.props.showNodeSelection === false){
            return(
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="panel contract-panel add-node valign-wrapper">
                        <div id="panel_body" className="panel-body valign center-valign">
                            <button onClick={this.selectNode.bind(this)} class="myButton">+</button>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="panel contract-panel add-node valign-wrapper">
                        <div id="panel_body" className="panel-body valign col-xs-12">
                            <div className="p-10 col-xs-12">
                                <h3 className="display-inline col-xs-6">Ethereum</h3>
                                <Link to="/nodemanager/nodeselection" class="myButton">+</Link>
                            </div>
                            <div className="p-10 col-xs-12">
                                <h3 className="display-inline col-xs-6">Bitcoin</h3>
                                <Link to="/nodemanager/nodeselection" class="myButton">+</Link>
                            </div>
                            <div className="p-10">
                                <h3 className="display-inline col-xs-6">IPFS</h3>
                                <Link to="/nodemanager/nodeselection" class="myButton">+</Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

function showDetails(state){
    return{ 
        showNodeSelection: state.nodes.showNodeSelection
    }
}

export default connect(showDetails)(SelectNode)