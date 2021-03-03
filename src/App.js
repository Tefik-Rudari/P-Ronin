import React from 'react';
// import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Stats from './components/pages/Stats';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import SignUp from './components/pages/Signup';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/stats' component={Stats} />
          <Route path='/whatwedo' component={WhatWeDo} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
