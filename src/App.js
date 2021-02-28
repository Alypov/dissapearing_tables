import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import TableData from './pages/TableData';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/data" component={TableData} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
