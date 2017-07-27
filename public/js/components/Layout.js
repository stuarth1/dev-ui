import React, { Component } from "react";
import { connect } from "react-redux";

import { updatePage } from "../actions/pageActions";
import Landing from './segments/Landing';
import ContractPage from './segments/ContractPage';
import NodePage from './segments/NodePage';
import Navigation from './segments/Navigation.js';

var Router = require('react-router');
var Link = Router.Link;

class Layout extends Component {
    render() {              
        return(
            <div className="container-fluid rubix-landing">
                <Navigation />
                {this.props.children}
            </div>
        )
    }
}

function page(state){
    return{
        pageDisplayed: state.page.pageName
    };
}

export default connect(page)(Layout);