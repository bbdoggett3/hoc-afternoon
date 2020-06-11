import React, { Component } from 'react';
import './App.css';
import ExchangedCurrency from './Components/CurrencyConverter';

class App extends Component {
  render() {
    return (
      //that empty div is called a fragment
      <> 
      <h2>Higher Order Component (HOC) </h2>
        <ExchangedCurrency />
      </>
    );
  }
}

export default App;
