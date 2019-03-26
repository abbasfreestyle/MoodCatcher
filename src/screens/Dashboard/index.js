import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList, View, Text, StyleSheet } from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import API, { graphqlOperation } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';

import { listMoods } from 'schemes/Query';
import { moodPercentage } from 'utils/mood';

import { Item, Title, Face, Grid, Loading, Button } from 'components';

import theme from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export class DashboardScreen extends Component {
  state = {
    loading: true,
    error: false,
    averageMood: 0,
    entries: 0,
    list: []
  };

  async componentDidMount() {
    const { screenProps } = this.props;
    try {
      const { username } = screenProps.authData;

      // Please see Readme.md in this folder
      const result = await API.graphql(
        graphqlOperation(listMoods, { username })
      );
      const { items } = result.data.listMoods;
      const entries = items.length;
      const moodTotal = items.reduce(
        (total, current) => current.mood + total,
        0
      );
      const averageMood = Math.round(moodPercentage(moodTotal / entries) * 100);
      this.setState({
        loading: false,
        list: items,
        error: !result.data,
        entries,
        averageMood
      });
    } catch {
      this.setState({ loading: false, error: true });
    }
  }

  renderLoading = () => (
    <View flex={1} justifyContent="center" alignItems="center">
      <Loading size={200} />
    </View>
  );

  renderEmpty = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <Text>No moods recorded :(</Text>
      </View>
    );
  };

  renderError = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <Text>Oops! Sorry, something went wrong.</Text>
      </View>
    );
  };

  renderHeader() {
    const { screenProps } = this.props;
    return (
      <Grid.Row justifyContent="space-between" alignItems="center">
        <Title>Dashboard</Title>
        <View marginRight={10}>
          <Button.Regular
            onPress={() => {
              Auth.signOut().then(() => {
                screenProps.onStateChange('signedOut', null);
              });
            }}
          >
            Sign Out
          </Button.Regular>
        </View>
      </Grid.Row>
    );
  }

  render() {
    const { error, loading, list, averageMood, entries } = this.state;

    if (loading) return this.renderLoading();

    if (error) return this.renderError();

    if (!list.length) return this.renderEmpty();

    return (
      <FlatList
        ListHeaderComponent={
          <View>
            {this.renderHeader()}
            <Grid.Row justifyContent="space-evenly" alignItems="center">
              <AnimatedCircularProgress
                size={100}
                width={10}
                fill={averageMood}
                tintColor={theme.primary}
                rotation={-135}
                lineCap="round"
                arcSweepAngle={270}
                backgroundColor={theme.disabled}
              >
                {fill => <Face size={125} progress={fill / 100} />}
              </AnimatedCircularProgress>
              <Grid.Column>
                <View>
                  <Title>Score {averageMood}%</Title>
                </View>
                <Title>mood(s) {entries}</Title>
              </Grid.Column>
            </Grid.Row>
          </View>
        }
        keyExtractor={item => item.id}
        data={list}
        renderItem={({ item }) => <Item.Activity item={item} />}
      />
    );
  }
}

DashboardScreen.propTypes = {
  screenProps: PropTypes.object.isRequired
};

export default DashboardScreen;
