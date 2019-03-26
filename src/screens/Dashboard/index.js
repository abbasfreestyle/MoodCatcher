import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList, View, Text, StyleSheet } from 'react-native';

import API, { graphqlOperation } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { listMoods } from 'schemes/Query';

import { Item, Title, Face, Grid, Loading, Button } from 'components';

import theme from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class DashboardScreen extends Component {
  state = {
    loading: true,
    error: false,
    averageMood: 0,
    entries: 0,
    list: []
  };

  async componentDidMount() {
    try {
      const result = await API.graphql(graphqlOperation(listMoods));
      const { items } = result.data.listMoods;
      const entries = items.length;
      const moodTotal = items.reduce(
        (total, current) => current.mood + total,
        0
      );
      const averageMood = Math.round((moodTotal / (entries * 7)) * 100);
      this.setState({
        loading: false,
        list: items.reverse(),
        error: !result.data,
        entries,
        averageMood
      });
    } catch (e) {
      this.setState({ loading: false, error: true });
    }
  }

  renderLoading = () => <Loading />;

  renderEmpty = () => {
    return (
      <View style={styles.container}>
        <Text>No moods recorded :(</Text>
      </View>
    );
  };

  renderError = () => {
    return (
      <View style={styles.container}>
        <Text>Oops! Sorry, something went wrong.</Text>
      </View>
    );
  };

  render() {
    const { error, loading, list, averageMood, entries } = this.state;

    const { screenProps } = this.props;

    if (loading) return this.renderLoading();

    if (error) return this.renderError();

    if (!list.length) return this.renderEmpty();

    return (
      <FlatList
        ListHeaderComponent={
          <View>
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
                  <Text>Your average mood is</Text>
                  <Text>{averageMood}%</Text>
                </View>
                <Text>{entries} mood recorded</Text>
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
