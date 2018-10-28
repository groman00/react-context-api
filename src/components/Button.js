import React, { Component } from 'react';
import { AppConsumer } from '../context/AppContext';

export default class Cart extends Component {
  render() {
    return (
      <AppConsumer>
        {({ toggleTheme }) => (
          <button
            onClick={toggleTheme}>
            Toggle Theme
          </button>
        )}
      </AppConsumer>
    )
  }
}

