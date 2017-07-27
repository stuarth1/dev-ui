import React from "react";

var Router = require('react-router');
var Link = Router.Link;

export default class ContractPage extends React.Component{
    render(){
        return(
            <div className="image-background">
                <div className="row">
                    <div className="bottom-0">
                        <ul className="contract-list">
                            <li className="contract-header"><b>Contracts Menu</b></li>
                            <li className="menu-item"><Link to ="/contract">Abstract</Link></li>
                            <li className="menu-item"><Link to="/contract/active">Active</Link></li>
                            <li className="menu-item"><Link to="/contract">All</Link></li>
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