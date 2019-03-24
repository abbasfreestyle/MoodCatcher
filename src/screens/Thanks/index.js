import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { resetEverything } from 'modules/Mood/actions';

import { Button } from 'components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class ThanksScreen extends Component {
  static navigationOptions = {
    title: 'Dashboard'
  };

  componentDidMount() {
    // graphQL query to add here
    // default state to loading
  }

  renderLoading() {}

  renderSuccess() {
    const { onResetEverything } = this.props;
    onResetEverything();
  }

  renderError() {}

  render() {
    const { navigation } = this.props;

    // Add loading state

    // if success, clear mood

    // if error, keep mood and add a button to back to beginning
    return (
      <View style={styles.container}>
        <Text>Success!</Text>
        <Button.Regular
          onPress={() => navigation.navigate('SelectMood')}
          flex
          margin={10}
        >
          Go back to the beginning
        </Button.Regular>
      </View>
    );
  }
}

ThanksScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  onResetEverything: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onResetEverything: () => dispatch(resetEverything())
});

export default connect(
  null,
  mapDispatchToProps
)(ThanksScreen);
