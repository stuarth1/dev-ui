import React, { Component } from 'react';
import { connect } from "react-redux";
//import TransactionCrawler from "ethereum-transaction-crawler";

import { deployNode, getConfiguration }  from "../../../actions/nodesActions";

var Router = require('react-router');
var Link = Router.Link;

class NodeConfiguration extends React.Component {    

    onNext(event){
        $(".node-config").removeClass("active");
        $("#item" + event.target.dataset.next).addClass("active");
    }
    handleDeploy(){
        var data = {};
        $(".input-class").each(function(index){
            data[$(this).attr("name")] = $(this).val();
        });
        var test = {client: this.props.nodeSelected, flags: data};
        this.props.dispatch(deployNode(test));
    }

    render() {
        console.log(this.props.nodeCofig);
        var name = this.props.nodeSelected;
        var links=[];
        var pages=[];
        var j=1;
        var k=1;
        var Clients = this.props.clients.result;
        var length = Object.keys(Clients[name].flags).length;
        for(var flag in Clients[name].flags){
            var next = j+1;
            if(Object.keys(Clients[name].flags[flag]).length > 0){
                if(j==1){
                    links.push(<li role="presentation" id={"item"+j} className="active node-config" key={"tab"+j}><a href={"#"+name+j} data-toggle="tab">{j}. {flag}</a></li>);
                    var properties = [];
                    for(var props in Clients[name].flags[flag]){                    
                        properties.push(<div className="col-xs-4 p-10" key={"prop"+props}><div className="col-xs-4"><label>{props}: </label></div><div className="col-xs-6"><input name={props} type="text" placeholder={Clients[name].flags[flag][props].default} className="form-control display-inline input-class"/></div></div>);
                    }
                    pages.push(<div className="tab-pane active" id={name+j} key={"pane"+j}><div className="row">{properties}</div><div className="col-xs-11"><a className="btn btn-primary pull-right" data-toggle="tab" data-next={next} onClick={this.onNext.bind(this)} href={"#geth"+next}>Next</a></div></div>);
                }
                else{
                    links.push(<li role="presentation" id={"item"+j} className="node-config" key={"tab"+j}><a href={"#"+name+j} data-toggle="tab">{j}. {flag}</a></li>);
                    var properties = [];
                    for(var props in Clients[name].flags[flag]){                    
                        properties.push(<div className="col-xs-4 p-20" key={"prop"+props}><div className="col-xs-4"><label>{props}: </label></div><div className="col-xs-6"><input name={props} type={(props === "password" ? "password": "text")} placeholder={Clients[name].flags[flag][props].default} className="form-control display-inline input-class"/></div></div>);
                    }
                    if(j==length){
                        pages.push(<div className="tab-pane" id={name+j} key={"pane"+j}><div className="row">{properties}</div><div className="col-xs-11"><Link to="/nodemanager"><button onClick={this.handleDeploy.bind(this)} class="btn btn-primary">Deploy</button></Link></div></div>);
                    }
                    else{
                        pages.push(<div className="tab-pane" id={name+j} key={"pane"+j}><div className="row">{properties}</div><div className="col-xs-11"><a className="btn btn-primary pull-right" data-toggle="tab" data-next={next} onClick={this.onNext.bind(this)} href={"#geth"+next}>Next</a></div></div>);
                    }
                }
            }
            j++;
        }
        return (
            <div>
                <ul className="node-list center-block">
                    {links}
                </ul>  
                <div className="tab-content clearfix">       
                    {pages}
                </div>
            </div>
        );
    }
}

function node(state){
    return{
        clients: state.nodes.clients,
        nodeSelected: state.nodes.nodeSelected,
        nodeCofig: state.nodes.nodeCofig,
    }
}

export default connect(node)(NodeConfiguration);
