import React from 'react'
import PropTypes from 'prop-types'
import InputRow from './InputRow'
import uuid     from 'uuid/v4'

const InputRows = ({ rows }) => {
  const rowElms = rows.map(row => {
    return <InputRow items={row} key={uuid()} />
  })
  return rowElms
}

InputRows.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        textarea: PropTypes.oneOf(['input', 'textarea']),
      }).isRequired
    ).isRequired
  ).isRequired
}

export default InputRows
