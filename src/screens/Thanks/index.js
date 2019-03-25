import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import API, { graphqlOperation } from '@aws-amplify/api';

import { resetEverything } from 'modules/Mood/actions';
import { selectPostData } from 'modules/Mood/selectors';

import { addMood, addFeeling } from 'schemes/Mutation';

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

  state = {
    loading: true,
    error: false
  };

  async componentDidMount() {
    // graphQL query to add here
    const {
      post: { mood, comment, feelings }
    } = this.props;
    const date = moment().format();
    try {
      const result = await API.graphql(
        graphqlOperation(addMood, { mood, comment, date })
      );
      console.log('result', result);
      if (!result.data) {
        this.setState({ loading: false, error: true });
      }
      console.log('result.data.createMood.id', result.data.createMood.id);
      feelings.forEach(async feeling => {
        console.log('feeling', {
          name: feeling.name,
          feelingMoodId: result.data.createMood.id
        });
        await API.graphql(
          graphqlOperation(addFeeling, {
            name: feeling.name,
            feelingMoodId: result.data.createMood.id
          })
        );
      });

      this.setState({ loading: false });
    } catch (e) {
      console.log('e', e);
      this.setState({ loading: false, error: true });
    }
  }

  renderLoading() {
    return <Text>Loading</Text>;
  }

  renderSuccess() {
    const { onResetEverything, navigation } = this.props;
    onResetEverything();
    return (
      <View style={styles.container}>
        <Text>Success!</Text>
        <Button.Regular
          onPress={() => navigation.navigate('Home')}
          flex
          margin={10}
        >
          Home
        </Button.Regular>
      </View>
    );
  }

  renderError() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Oops! Something went wrong.</Text>
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

  render() {
    const { loading, error } = this.state;

    if (loading) return this.renderLoading();

    if (error) return this.renderError();

    return this.renderSuccess();
  }
}

ThanksScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
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
