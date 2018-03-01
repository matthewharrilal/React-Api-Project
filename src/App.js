import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './my-component'
import Products from './products'
import Product from './product'
import inventory from './inventory'
import Category from "./category"



class App extends Component {
  render() {
    return (
      <div className="App">
        <Products className="products" inventory={inventory} />
      </div>
    );
  }
}

export default App;
