import React, { Component } from "react";

var Router = require('react-router');
var Link = Router.Link;

class NodePage extends Component{
    render(){
        return(
            <div className="image-background">
                <div className="row">
                    <div className="bottom-0">
                        <ul className="contract-list">
                            <li className="contract-header"><b>Nodes Menu</b></li>
                            <li className="menu-item"><Link to="/nodemanager/nodeselection">Configuration</Link></li>
                            <li className="menu-item"><Link to="/nodemanager">Active</Link></li>
                            <li className="menu-item">All</li>
                        </ul>
                    </div>
                    <div className="col-sm-10 col-sm-offset-2">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default NodePage;