import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import actionCreators from '../redux/actions';

const mapStateToProps = state => ({
  dummyState: state.dummyState,
});

class Home extends Component {
  render() {
    const { dispatch, dummyState } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ${dummyState} Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button
          title="Add"
          onPress={() => dispatch(actionCreators.addDummy())}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps)(Home);
