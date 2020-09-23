import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalHistory } from './history';
import { connect } from 'react-redux'
import './App.css';
import Register from './components/register/register';
import Home from "./views/home/home"
import Index from './views/index';

function App() {
  return (
    
      <BrowserRouter >
        <GlobalHistory />
        <Switch >
          <Route path="/" exact component={Index} />
          <Route path="/home" exact component={Home} />
        </Switch >
    
      </BrowserRouter>
    
  );
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(App)
