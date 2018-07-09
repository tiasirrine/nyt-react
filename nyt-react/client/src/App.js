import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Banner />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route component={Search} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
