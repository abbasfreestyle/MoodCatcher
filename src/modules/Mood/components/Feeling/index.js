import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { selectFeeling } from 'modules/Mood/selectors';
import { addFeeling, removeFeeling } from 'modules/Mood/actions';

import { Button } from 'components';

export const Feeling = props => {
  const { feeling, selected, onRemoveFeeling, onAddFeeling } = props;

  return (
    <Button.Feeling
      flex
      margin={10}
      selected={selected}
      onPress={() => {
        selected ? onRemoveFeeling(feeling.id) : onAddFeeling(feeling);
      }}
    >
      {feeling.name}
    </Button.Feeling>
  );
};

Feeling.propTypes = {
  feeling: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  onAddFeeling: PropTypes.func.isRequired,
  onRemoveFeeling: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  selected: selectFeeling(state, props.feeling.id)
});

const mapDispatchToProps = dispatch => ({
  onAddFeeling: feeling => dispatch(addFeeling(feeling)),
  onRemoveFeeling: id => dispatch(removeFeeling(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feeling);
