import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import API, { graphqlOperation } from '@aws-amplify/api';
import LottieView from 'lottie-react-native';
import moment from 'moment';

import { addMood, addFeeling } from 'schemes/Mutation';
import { resetEverything } from 'modules/Mood/actions';
import { selectPostData } from 'modules/Mood/selectors';

import success from 'assets/animations/success.json';

import { Title, Button, Loading, ErrorAnimation } from 'components';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export class ThanksScreen extends Component {
  state = {
    loading: true,
    error: false
  };

  async componentDidMount() {
    const {
      post: { mood, comment, feelings },
      screenProps
    } = this.props;
    const { username } = screenProps.authData;
    const date = moment().valueOf();

    // Please see Readme.md in this folder
    try {
      const result = await API.graphql(
        graphqlOperation(addMood, { mood, comment, date, username })
      );
      if (!result.data) {
        this.setState({ loading: false, error: true });
      }
      await feelings.forEach(async feeling => {
        await API.graphql(
          graphqlOperation(addFeeling, {
            name: feeling.name,
            feelingMoodId: result.data.createMood.id
          })
        );
      });

      this.setState({ loading: false });
    } catch {
      this.setState({ loading: false, error: true });
    }
  }

  renderLoading = () => (
    <View flex={1} justifyContent="center" alignItems="center">
      <Loading size={200} />
    </View>
  );

  renderSuccess() {
    const { onResetEverything, navigation } = this.props;
    onResetEverything();
    return (
      <View style={styles.container}>
        <Title>Success</Title>
        <View padding={20}>
          <Text>Another mood added in the bank. Nice one!</Text>
        </View>
        <View flex={1} justifyContent="center" alignItems="center">
          <LottieView autoPlay source={success} />
        </View>
        <View flex={1} alignItems="center">
          <Button.Regular
            onPress={() => navigation.navigate('Home')}
            margin={10}
          >
            Finish
          </Button.Regular>
        </View>
      </View>
    );
  }

  renderError() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Title>Oops!</Title>
        <View padding={20}>
          <Text>Something went wrong.</Text>
        </View>
        <View flex={1} justifyContent="center" alignItems="center">
          <ErrorAnimation />
        </View>
        <View flex={1} alignItems="center">
          <Button.Regular
            onPress={() => navigation.navigate('SelectMood')}
            margin={10}
          >
            Back to the beginning
          </Button.Regular>
        </View>
      </View>
    );
  }

  render() {
    const { loading, error } = this.state;

    if (loading) return this.renderLoading();

    if (error) return this.renderError();

    return this.renderSuccess();
  }
}

ThanksScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  onResetEverything: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: selectPostData(state)
});

const mapDispatchToProps = dispatch => ({
  onResetEverything: () => dispatch(resetEverything())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThanksScreen);
