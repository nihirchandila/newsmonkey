import './App.css';

import React, { Component } from 'react'
import Navbar from "./components/Navbar"; 
import NewsCont from "./components/NewsCont";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsCont/>
      </div>
    )
  }
}

