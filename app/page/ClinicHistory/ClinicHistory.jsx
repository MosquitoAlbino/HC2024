import React, {
  Component,
}                from 'react'
import Fieldset  from 'components/Fieldset'
import Input     from 'components/Input'
import Row       from 'components/Row'

class ClinicHistory extends Component {
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
          <Input label="Fecha de ingreso:" style={this.getInputStyle(2)} />
          <Input label="Hora:" style={this.getInputStyle(2)} />
        </Row>
      </Fieldset>
    )
  }
}

export default ClinicHistory
