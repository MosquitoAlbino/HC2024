import React, { Component } from 'react'
import moment from 'moment'
import Fieldset from '../Fieldset'
import Input from '../Input'
import Row from '../Row'

class ClinicHistory extends Component {
  state = (function() {
    const now = moment()
    return {
      date: now.format('DD/MM/YYYY'),
      time: now.format('hh:mm:ss a'),
    }
  })()

  getRowStyles = () => {
    return { display: 'flex' }
  }

  getInputStyle = length => ({
    width: `${100 / length - 1}%`,
  })

  render() {
    return (
      <Fieldset title="Historia clinica">
        <Row style={this.getRowStyles()}>
          <Input
            label="Historia clinica No:"
            style={this.getInputStyle(4)}
            type="number"
            value={this.props.patientID}
            onChange={this.props.onChangePatientID}
          />
          <Input
            label="Centro de atención:"
            style={this.getInputStyle(4)}
          />
          <Input
            label="Fecha de ingreso:"
            style={this.getInputStyle(4)}
            value={this.state.date}
            onChange={() => {}}
          />
          <Input
            label="Hora:"
            style={this.getInputStyle(4)}
            value={this.state.time}
            onChange={() => {}}
          />
        </Row>
      </Fieldset>
    )
  }
}

export default ClinicHistory
