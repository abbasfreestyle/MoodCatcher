import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { FlatList, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Slider from 'react-native-slider';

import { minRange, maxRange, moodPercentage } from 'utils/mood';

import { selectMood, selectFeelings } from 'modules/Mood/selectors';
import { setMood } from 'modules/Mood/actions';
import Feeling from 'modules/Mood/components/Feeling';

import { Title, Button, Grid, Face } from 'components';

import theme from 'theme';

import { feelingsList } from './feelings';

const styles = StyleSheet.create({
  slider: {
    flex: 1
  },
  track: {
    height: 5
  }
});

class SelectMoodScreen extends PureComponent {
  render() {
    const { mood, feelings, navigation, onSetMood } = this.props;
    return (
      <View flex={1}>
        <Title>Select your mood</Title>
        <FlatList
          ListHeaderComponent={
            <Grid.Column flex={1} margin={20} alignItems="center">
              <View marginTop={-75} marginBottom={-50}>
                <Face progress={moodPercentage(mood)} size={350} />
              </View>
              <Grid.Row>
                <Slider
                  value={mood}
                  style={styles.slider}
                  trackStyle={styles.track}
                  minimumValue={minRange}
                  maximumValue={maxRange}
                  step={1}
                  thumbTintColor={theme.secondary}
                  minimumTrackTintColor={theme.disabled}
                  maximumTrackTintColor={theme.primary}
                  onValueChange={val => {
                    onSetMood(val);
                  }}
                />
              </Grid.Row>
            </Grid.Column>
          }
          keyExtractor={item => `${item.id}`}
          numColumns={2}
          data={feelingsList}
          renderItem={({ item }) => (
            <View flex={1}>
              <Feeling feeling={item} />
            </View>
          )}
        />
        <Button.Regular
          disabled={!feelings.length}
          onPress={() => navigation.navigate('AddComment')}
          flex
          margin={10}
        >
          NEXT
        </Button.Regular>
      </View>
    );
  }
}

SelectMoodScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  mood: PropTypes.number.isRequired,
  feelings: PropTypes.array.isRequired,
  onSetMood: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  mood: selectMood(state),
  feelings: selectFeelings(state)
});

const mapDispatchToProps = dispatch => ({
  onSetMood: mood => dispatch(setMood(mood))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectMoodScreen);
