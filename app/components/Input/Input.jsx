import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, type, style }) => {
  style = {
    ...style.container,
  }
  const inputElm = type === 'input' ? (
    <input className="input-text__input" type="text" />
  ) : (
    <textarea className="input-text__input" cols="5" rows="10" />
  )
  return (
    <div style={style} className="input-text">
      <label className="input-text__label">{label}</label>
      {inputElm}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['input', 'textarea']),
  style: PropTypes.shape({
    container: PropTypes.shape({}),
  })
}

Input.defaultProps = {
  label: '',
  type: 'input',
  style: {},
}

export default Input
