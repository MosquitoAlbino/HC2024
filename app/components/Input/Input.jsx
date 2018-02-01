import React, {
  Component,
}                from 'react'
import PropTypes from 'prop-types'

const inputText = props => (
  <input
    className="input-text__input"
    type="text"
    {...props}
  />
)

const input = {
  textarea: (props) => (
    <textarea
      className="input-text__input"
      cols="5"
      rows="10"
      {...props}
    />
  ),
  text: inputText,
  input: inputText,
  number: props => (
    <input
      className="input-text__input"
      type="number"
      {...props}
    />
  ),
  date: props => (
    <input type="date" className="input-text__input" {...props} />
  )
}

export default class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['input', 'textarea', 'number', 'date']),
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
    const { label, type = 'text', style, ...rest } = this.props
    const inputElm = input[type]({...rest })

    return (
      <div style={style} className="input-text">
        <label className="input-text__label">{label}</label>
        {inputElm}
      </div>
    )
  }
}
