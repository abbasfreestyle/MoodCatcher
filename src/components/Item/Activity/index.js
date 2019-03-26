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
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.disabled,
    minHeight: 50
  }
});

const Activity = props => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Grid.Row flex>
        <View padding={5} alignItems="center" width={50}>
          <Face progress={moodPercentage(item.mood)} />
        </View>
        <Grid.Column flex justifyContent="center" padding={5}>
          <Grid.Row justifyContent="flex-end" padding={5}>
            <Text>{moment(item.date).format('MMM DD - HH:mm A')}</Text>
          </Grid.Row>
          <Grid.Row flexWrap="wrap">
            {item.feelings.items.map(feeling => (
              <Chip
                key={feeling.id}
                text={feeling.name}
                backgroundColor={theme.surface}
              />
            ))}
          </Grid.Row>
          <Text>{item.comment}</Text>
        </Grid.Column>
      </Grid.Row>
    </View>
  );
};

Activity.propTypes = {
  item: PropTypes.object.isRequired
};

export default Activity;
