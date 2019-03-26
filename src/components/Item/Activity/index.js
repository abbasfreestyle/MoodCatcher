import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

import moment from 'moment';

import { moodPercentage } from 'utils/mood';

import Grid from 'components/Grid';
import Chip from 'components/Chip';
import Face from 'components/Face';

import theme from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.secondary,
    minHeight: 50,
    shadowColor: theme.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 5
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: theme.surface
  },
  date: {
    color: theme.onSecondary
  },
  text: {
    color: theme.onSecondary,
    padding: 10
  }
});

const Activity = props => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Grid.Row flex={1}>
        <View padding={10} alignItems="center" width={75}>
          <View style={styles.circle}>
            <Face progress={moodPercentage(item.mood)} />
          </View>
        </View>
        <Grid.Column flex={1} justifyContent="center" padding={5}>
          <Grid.Row padding={5}>
            <Text style={styles.date}>
              {moment(item.date).format('MMMM DD - h:mm A')}
            </Text>
          </Grid.Row>
          <Grid.Row flexWrap="wrap" padding={5}>
            {item.feelings.items.map(feeling => (
              <Chip
                key={feeling.id}
                text={feeling.name}
                backgroundColor={theme.surface}
              />
            ))}
          </Grid.Row>
          <Text style={styles.text}>{item.comment}</Text>
        </Grid.Column>
      </Grid.Row>
    </View>
  );
};

Activity.propTypes = {
  item: PropTypes.object.isRequired
};

export default Activity;
