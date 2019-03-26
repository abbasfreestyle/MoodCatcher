import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';

import { selectComment } from 'modules/Mood/selectors';
import { updateComment } from 'modules/Mood/actions';

import { Title, Button } from 'components';

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  textArea: {
    flex: 1,
    padding: 20
  }
});

export const AddCommentScreen = props => {
  const { comment, onUpdateComment, navigation } = props;

  return (
    <View flex={1}>
      <Title>Add a note</Title>
      <KeyboardAvoidingView
        style={styles.textArea}
        keyboardVerticalOffset={50}
        behavior={isIOS ? 'padding' : null}
      >
        <TextInput
          multiline
          placeholder="Help remind yourself why you feel this way... (optional)"
          value={comment}
          onChangeText={text => {
            onUpdateComment(text);
          }}
        />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView
        keyboardVerticalOffset={90}
        behavior={isIOS ? 'position' : null}
      >
        <Button.Regular
          flex
          margin={10}
          onPress={() => {
            navigation.navigate('Thanks');
          }}
        >
          Submit Mood
        </Button.Regular>
      </KeyboardAvoidingView>
    </View>
  );
};

AddCommentScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  comment: PropTypes.string.isRequired,
  onUpdateComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comment: selectComment(state)
});

const mapDispatchToProps = dispatch => ({
  onUpdateComment: comment => dispatch(updateComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCommentScreen);
