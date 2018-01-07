import React     from 'react'
import PropTypes from 'prop-types'
import Input     from 'components/Input'

const InputRow = ({ items }) => {
  const style = {
    display: 'flex',
  }
  const itemWidth = 100 / items.length
  const itemElms = items.map(item => (
    <div
      className="input-row__item"
      key={item.id}
      style={{ width: `${itemWidth}%` }}
    >
      <Input
        label={item.label}
        type={item.type}
      />
    </div>
  ))

  return (
    <div style={style} className="input-row">
      {itemElms}
    </div>
  )
}

InputRow.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      textarea: PropTypes.oneOf(['input', 'textarea']),
    })
  ).isRequired,
}

export default InputRow
