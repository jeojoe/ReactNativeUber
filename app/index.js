import React, { Component } from 'react';
import { Provider } from 'react-redux';
import initStore from './redux/store';
import Home from './screens/Home';

class RootNavigator extends Component {
  render() {
    return <Home />;
  }
}
const store = initStore();

export default () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);
