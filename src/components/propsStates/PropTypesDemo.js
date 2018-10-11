import React from 'react';
import PropTypes from 'prop-types';

export default class PropTypesDemo extends React.Component {
    render() {
    const {ingredients, steps, title} = this.props
    return (
    <div >
    <h1>{title}</h1>
    <p>
    <span>{ingredients} Ingredients | </span>
    <span>{steps} Steps</span>
    </p>
    </div>
    )
    }
    }
  // if you change steps to string . observe warning in console window
  PropTypesDemo.propTypes = {
    ingredients: PropTypes.number,
    steps: PropTypes.number,

    title: (props, propName) =>
      (typeof props[propName] !== 'string') ?
         new Error("A title must be a string") :
      (props[propName].length > 20) ?
         new Error(`title is over 20 characters`) : null
}

PropTypesDemo.defaultProps = {
ingredients: 1,
steps: 1,
title: "[Learning Proptypes]"
}
