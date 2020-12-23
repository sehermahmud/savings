import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './page/Home/home';

import Savings from './page/Home/savings';
import EditSavings from './page/updateSavings/updateSavings';
import SavingDetails from './page/Details/savingDetails';

import SeherSavings from './page/Home/seherSavings';
import EditSeherSavings from './page/updateSavings/updateSeherSavings';
import SeherDetailsSavings from './page/Details/seherSavingsDetails';

import SafinSavings from './page/Home/safinSavings';
import EditSafinSavings from './page/updateSavings/updateSafinSavings';
import SafinDetailsSavings from './page/Details/safinSavingsDetails';

function App() {
  return (
    <Router>
      <Header />
      <br />
      <br />
      <br />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/savings" component={Savings} />
        <Route path="/edit/:id" component={EditSavings} />
        <Route path="/details/:id" component={SavingDetails} />

        <Route path="/sehersavings" component={SeherSavings} />
        <Route path="/editseher/:id" component={EditSeherSavings} />
        <Route path="/seherDetials/:id" component={SeherDetailsSavings} />

        <Route path="/safinsavings" component={SafinSavings} />
        <Route path="/editsafin/:id" component={EditSafinSavings} />
        <Route path="/safinDetials/:id" component={SafinDetailsSavings} />
      </Switch>
    </Router>
  );
}

export default App;
