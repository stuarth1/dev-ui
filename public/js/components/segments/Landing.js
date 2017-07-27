import React from 'react';
var Router = require('react-router');
var Link = Router.Link;

export default class Display extends React.Component {
  render() {
    return (
      <div>
        <div className="row valign-wrapper">
          <div className="col-sm-6">
            <ul className="valign landing-list">
              <li>
                <Link to="nodemanager">
                  <img src={'./img/node-manager.png'} className="list-image" />
                  <div className="display-inline valign-middle">
                    <span className="white-font font-40">Node Manager</span>
                    <p>Create and control ethereum nodes, anywhere.</p>
                  </div>
                </Link>
              </li>
              <li className="offset">
                <Link to="contract">
                  <img src={'./img/web3.png'} className="list-image" />
                  <div className="display-inline valign-middle">
                    <span className="white-font font-40">Web3 Manager</span>
                    <p>Connect, configure, and query RPC providers</p>
                  </div>
                </Link>
              </li>
              <li className="offset">
                <Link to="contract">
                  <img src={'./img/contracts.png'} className="list-image" />
                  <div className="display-inline valign-middle">
                    <span className="white-font font-40">Contracts Library</span>
                    <p>Browse and deploy exisiting contracts.</p>
                  </div>
                </Link>
              </li>
              <li>
                <img src={'./img/accounts.png'} className="list-image" />
                <div className="display-inline valign-middle">
                  <span className="white-font font-40">Contract Canvas</span>
                  <p>A place to write you contracts in the Console</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <img src={'./img/mo-graph.png'} className="landing-image" alt="Rubix Logo"/>
          </div>
        </div>
      </div>
    );
  }
}
