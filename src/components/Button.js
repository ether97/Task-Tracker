import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, setAdd, add}) => {
  const color = {
    backgroundColor: add? 'red' : 'green',
  }
  return (
    <button style={color} className='btn' onClick={() => setAdd(!add)}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}



Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button
