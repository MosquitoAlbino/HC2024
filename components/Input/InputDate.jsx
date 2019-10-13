import 'react-dates/initialize'
import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'
import inputDateGlobalStyles from './inputDateGlobalStyles'
import MonthYear from './MonthYear'

function InputDate({ onChange, wrapperClassName }) {
  const [startDate, setStartDate] = useState(moment())
  const [focused, setFocused] = useState(false)
  const handleChange = useCallback(
    date => {
      setStartDate(date)
      if (onChange) onChange(date)
    },
    [onChange],
  )
  const [mobile, setMobile] = useState(false)
  const renderMonthElement = useCallback(
    ({ month, onMonthSelect, onYearSelect }) => (
      <MonthYear
        month={month}
        onMonthSelect={onMonthSelect}
        onYearSelect={onYearSelect}
      />
    ),
    [],
  )

  useEffect(() => {
    const isMobile = document.body.offsetWidth <= 736
    setMobile(isMobile)
  }, [setMobile])

  return (
    <div className={wrapperClassName}>
      <SingleDatePicker
        date={startDate}
        onDateChange={handleChange}
        focused={focused}
        onFocusChange={({ focused: value }) => setFocused(value)}
        numberOfMonths={2}
        orientation={mobile ? 'vertical' : 'horizontal'}
        withFullScreenPortal={!!mobile}
        id="birthday"
        isOutsideRange={() => {}}
        renderMonthElement={renderMonthElement}
      />

      <style jsx global>
        {inputDateGlobalStyles}
      </style>
    </div>
  )
}

InputDate.propTypes = {
  onChange: PropTypes.func,
  wrapperClassName: PropTypes.string,
}

InputDate.defaultProps = {
  onChange: () => {},
  wrapperClassName: '',
}

export default InputDate
