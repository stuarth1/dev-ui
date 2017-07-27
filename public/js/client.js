import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import '../css/App.css';

import Layout from "./components/Layout";
import NodePage from './components/segments/NodePage';
import ContractPage from './components/segments/ContractPage';
import Landing from './components/segments/Landing';
import NodeConfiguration from "./components/segments/node/NodeConfiguration";
import ContractSelection from "./components/segments/contract/ContractSelection";
import NodeSelection from "./components/segments/node/NodeSelection";
import ActiveNodes from "./components/segments/node/ActiveNodes";
import ActiveContracts from "./components/segments/contract/ActiveContracts";

import store from "./store";

const app = document.getElementById('app');


ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Layout}>
        <IndexRoute component={Landing} />
        <Route path="nodemanager" component={NodePage}>
          <IndexRoute component={ActiveNodes} />
          <Route path="nodeconfiguration" component={NodeConfiguration} />
          <Route path="nodeselection" component={NodeSelection} />
        </Route>
        <Route path="contract" component={ContractPage}>
          <IndexRoute component={ContractSelection} />
          <Route path="active" component={ActiveContracts} />
        </Route>
      </Route>
    </Router>
  </Provider>),
  app);