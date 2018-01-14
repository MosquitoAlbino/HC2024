import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['input', 'textarea', 'number']),
    style: PropTypes.shape({
      container: PropTypes.shape({}),
    })
  }
  
  static defaultProps = {
    label: '',
    type: 'input',
    style: {},
  }

  state = {
    value: '',
    firstTime: true,
  }

  render() {
    const { label, type, style, ...rest } = this.props

    const inputElm = type === 'textarea' ? (
      <textarea
        className="input-text__input"
        cols="5"
        rows="10"
        {...rest}
      />
    ) : (
      <input
        className="input-text__input"
        type={type || 'text'}
        {...rest}
      />
    )

    return (
      <div style={style} className="input-text">
        <label className="input-text__label">{label}</label>
        {inputElm}
      </div>
    )
  }
}
