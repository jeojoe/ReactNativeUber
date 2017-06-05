import React, { Component } from 'react';
import { Provider } from 'react-redux';
import initStore from './redux/store';

// Navigators
import { MainNavigator } from './navigators';

class RootNavigator extends Component {
  render() {
    return <MainNavigator />;
  }
}

const store = initStore();

export default () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);
