import React, { Component } from 'react';

const Context = React.createContext({});

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      toggleTheme: this.toggleTheme.bind(this)
    };;
  }
  toggleTheme() {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light'
    }));
  }
  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    );
  }
}

export const AppConsumer = Context.Consumer;
