import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import App from './components/App';

import Data from "./data/index";

console.log(Data);

render((
  <HashRouter>
    <App jobData={Data.JobData} methods={Data}/>
  </HashRouter>
), document.getElementById('app'));
