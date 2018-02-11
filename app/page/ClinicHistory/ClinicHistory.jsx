import React, {
  Component,
}                from 'react'
import Fieldset  from 'components/Fieldset'
import Input     from 'components/Input'
import Row       from 'components/Row'
import moment    from 'moment'

class ClinicHistory extends Component {
  state = (function() {
    const now = moment()
    return {
      date: now.format('DD/MM/YYYY'),
      time: now.format('hh:mm:ss a'),
    }
  }())

  getRowStyles = () => {
    return { display: 'flex' }
  }

  getInputStyle = length => ({
    width: `${(100 / length) - 1}%`,
  })

  render() {
    return (
      <Fieldset title="Historia clinica">
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Historia clinica No:" style={this.getInputStyle(2)} />
          <Input label="Centro de atención:" style={this.getInputStyle(2)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input
            label="Fecha de ingreso:"
            style={this.getInputStyle(2)}
            value={this.state.date}
          />
          <Input
            label="Hora:"
            style={this.getInputStyle(2)}
            value={this.state.time}
          />
        </Row>
      </Fieldset>
    )
  }
}

export default ClinicHistory
