import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Slider from 'react-native-slider';

import { selectMood, selectFeelings } from 'modules/Mood/selectors';
import { setMood, addFeeling, removeFeeling } from 'modules/Mood/actions';
import Feeling from 'modules/Mood/components/Feeling';

import { Button, Grid } from 'components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    flex: 1
  },
  track: {
    height: 3
  }
});

const feelingsList = [{ id: 1, name: 'Happy' }, { id: 2, name: 'Relaxed' }];

class SelectMoodScreen extends Component {
  static navigationOptions = {
    title: 'Select Your Mood'
  };

  render() {
    const { mood, feelings, navigation, onSetMood } = this.props;

    return (
      <View style={styles.container}>
        <Grid.Column flex={1} margin={20} alignItems="center">
          <Text>{mood}</Text>
          <Grid.Row>
            <Slider
              value={mood}
              style={styles.slider}
              trackStyle={styles.track}
              minimumValue={0}
              maximumValue={10}
              step={1}
              // thumbTintColor={theme.onSurface}
              minimumTrackTintColor="grey"
              maximumTrackTintColor="blue"
              onValueChange={val => {
                onSetMood(val);
              }}
              // onSlidingComplete={val => {
              //   onSetMood(val);
              // }}
            />
          </Grid.Row>
          <FlatList
            keyExtractor={item => `${item.id}`}
            data={feelingsList}
            renderItem={({ item }) => <Feeling feeling={item} />}
          />
        </Grid.Column>
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
  onSetMood: PropTypes.func.isRequired,
  onAddFeeling: PropTypes.func.isRequired,
  onRemoveFeeling: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  mood: selectMood(state),
  feelings: selectFeelings(state)
});

const mapDispatchToProps = dispatch => ({
  onSetMood: mood => dispatch(setMood(mood)),
  onAddFeeling: (feeling, id) => dispatch(addFeeling(feeling, id)),
  onRemoveFeeling: id => dispatch(removeFeeling(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectMoodScreen);
