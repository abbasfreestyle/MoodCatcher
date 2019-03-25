import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import API, { graphqlOperation } from '@aws-amplify/api';

import { resetEverything } from 'modules/Mood/actions';

import { listMoods } from 'schemes/Query';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class DashboardScreen extends Component {
  static navigationOptions = {
    title: 'Dashboard'
  };

  state = {
    error: false,
    list: []
  };

  async componentDidMount() {
    // graphQL mutation to add here
    // default state to loading
    try {
      const result = await API.graphql(graphqlOperation(listMoods));
      console.log('result', result);
      if (!result.data) {
        this.setState({ error: true });
      }

      this.setState({ list: result.data.listMoods.items });
    } catch (e) {
      console.log('e', e);
      this.setState({ error: true });
    }
  }

  renderLoading() {
    return <Text>Loading</Text>;
  }

  renderSuccess() {
    const { list } = this.state;
    return list.map(item => <Text>{item.id}</Text>);
  }

  renderError() {
    return (
      <View style={styles.container}>
        <Text>Oops! Sorry, something went wrong.</Text>
      </View>
    );
  }

  render() {
    const { error, list } = this.state;
    if (!list.length) return this.renderLoading();

    if (error) return this.renderError();

    // add sign out button

    // add circle

    // add list

    // add chart
    return this.renderSuccess();
  }
}

DashboardScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  onResetEverything: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onResetEverything: () => dispatch(resetEverything())
});

export default connect(
  null,
  mapDispatchToProps
)(DashboardScreen);
