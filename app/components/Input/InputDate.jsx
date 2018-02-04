import React      from 'react'
import DatePicker from 'react-datepicker'
import moment     from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

export default class InputDate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
    if (this.props.onChange) this.props.onChange(date)
  }

  render() {
    const {
      onChange,
      wrapperClassName,
      ...restProps
    } = this.props
    return (
      <div className={wrapperClassName}>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          {...restProps}
        />
      </div>
    )
  }
}
