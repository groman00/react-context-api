import React, { Component } from 'react';
import { AppProvider } from './context/AppContext';
import Cart from './components/Cart';
import Button from './components/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <div className="App">
          <header className="App-header">
            <Cart/>
            <Button/>
          </header>
        </div>
      </AppProvider>
    );
  }
}

export default App;
