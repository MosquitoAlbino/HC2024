import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import range from 'lodash/range'

function MonthYear({ month, onMonthSelect, onYearSelect }) {
  const currentYear = moment().year()
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <select
          value={month.month()}
          onChange={e => onMonthSelect(month, e.target.value)}
        >
          {moment.months().map((label, value) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </div>
      <div>
        <select
          value={month.year()}
          onChange={e => onYearSelect(month, e.target.value)}
        >
          {range(1900, currentYear + 11).map(year => {
            return (
              <option value={year} key={year}>
                {year}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

MonthYear.propTypes = {
  month: PropTypes.shape({
    month: PropTypes.func.isRequired,
    year: PropTypes.func.isRequired,
  }).isRequired,
  onMonthSelect: PropTypes.func.isRequired,
  onYearSelect: PropTypes.func.isRequired,
}

export default MonthYear
