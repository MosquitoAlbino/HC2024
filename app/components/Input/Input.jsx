import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['input', 'textarea']),
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

    const inputElm = type === 'input' ? (
      <input
        className="input-text__input"
        type="text"
        {...rest}
      />
    ) : (
      <textarea
        className="input-text__input"
        cols="5"
        rows="10"
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
