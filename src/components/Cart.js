import React, { Component } from 'react';
import { AppConsumer } from '../context/AppContext';

export default class Cart extends Component {
  render() {
    return (
      <AppConsumer>
        {({ theme }) => (
          <h1>{ theme }</h1>
        )}
      </AppConsumer>
    )
  }
}

