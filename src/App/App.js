import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Main from '../views/Main';
import Yes from '../views/Yes';
import No from '../views/No';

const App = () => {
	return (
		<Router>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/y'>
          <Yes />
        </Route>
        <Route path='/n'>
          <No />
        </Route>
      </Switch>
		</Router>
	)
}

export default App;
