import React from 'react';
// import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import SignUp from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
<<<<<<< HEAD
          <Route path='/projects' component={Projects} />
=======
          <Route path='/products' component={Product} />
>>>>>>> 7c38ab1bcd9c83ac6413402be0d6efd0628678e4
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
