import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import InputDate from './InputDate'
import InputFile from './InputFile'

const inputText = props => (
  <>
    <input className="input-text__input" type="text" {...props} />
    <style jsx>{`
      .input-text__input {
        width: 100%;
        border: none;
        border-bottom: 1px solid #333;
        font-size: 0.9rem;
      }

      .input-text__input:focus {
        outline: none;
      }
    `}</style>
  </>
)

const input = {
  textarea: props => (
    <>
      <textarea
        className="input-text__input"
        cols="5"
        rows="10"
        {...props}
      />
      <style jsx>{`
        .input-text__input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #333;
          font-size: 0.9rem;
        }

        .input-text__input:focus {
          outline: none;
        }
      `}</style>
    </>
  ),
  text: inputText,
  input: inputText,
  number: props => (
    <>
      <input className="input-text__input" type="number" {...props} />
      <style jsx>{`
        .input-text__input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #333;
          font-size: 0.9rem;
        }

        .input-text__input:focus {
          outline: none;
        }
      `}</style>
    </>
  ),
  date: props => (
    <>
      <InputDate
        maxDate={moment()}
        className="input-text__input"
        wrapperClassName="input-date-wrapper"
        {...props}
      />
      <style jsx>{`
        .input-text__input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #333;
          font-size: 0.9rem;
        }

        .input-text__input:focus {
          outline: none;
        }
      `}</style>
    </>
  ),
  file: props => (
    <>
      <InputFile className="" {...props} />
      <style jsx>{``}</style>
    </>
  ),
  select: props => (
    <>
      <select>
        {props.options.map(option => (
          <option value={option.value}>{option.value}</option>
        ))}
      </select>
    </>
  ),
}

export default class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(input)),
    style: PropTypes.shape({
      container: PropTypes.shape({}),
    }),
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
    const inputElm = input[type]({ ...rest })

    return (
      <div style={style} className="input-text">
        <label className="input-text__label">{label}</label>
        {inputElm}

        <style jsx>{`
          .input-text {
            width: 100%;
            margin-top: 0.5rem;
          }

          .input-text__label {
            margin-top: 0;
            letter-spacing: 1px;
            font-size: 0.6rem;
            color: #333;
            display: block;
          }
        `}</style>
      </div>
    )
  }
}
