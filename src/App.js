import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './my-component'
import Products from './products'
import Product from './product'
import inventory from './inventory'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">Welcome to React</h1>
//        </header>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
        <MyComponent title="Product Inventory"/>
        <Products inventory={inventory}/ >
      </div>
    );
  }
}

export default App;
