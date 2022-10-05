import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, setAdd, add}) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text='Add' add={add} setAdd={setAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
