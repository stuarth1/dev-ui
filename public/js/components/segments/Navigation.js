import React, { Component } from "react";
import { connect } from "react-redux";

var Router = require('react-router');
var Link = Router.Link;

class Navigation extends Component{
    render(){
        return(
        <nav class="navbar">
            <div class="container-fluid">
                <div class="navbar-header">                    
                    <Link to="/">
                        <img src="./img/rubixw.svg" className="rubix-logo" />
                    </Link>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><i class="fa fa-cog mr-5" aria-hidden="true"></i>Settings</a></li>
                        <li><a href="#"><i class="fa fa-plug mr-5" aria-hidden="true"></i>Nodes Available {this.props.numberOfNodes}</a></li>
                        <li><a href="#"><i class="fa fa-tachometer mr-5" aria-hidden="true"></i>Web3</a></li>                        
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}


function nodesAvailable(state){
    return{ 
        numberOfNodes: state.nodes.numberOfNodes
    }
}

export default connect(nodesAvailable)(Navigation)