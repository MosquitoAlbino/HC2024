import React, {
  Component,
}                from 'react'
import Fieldset  from 'components/Fieldset'
import Input     from 'components/Input'
import Row       from 'components/Row'

export default class IdentificationData extends Component {
  state = {
    birthday: '',
    age: '',
  }

  handleBirthdayChange = (event) => {
    this.setState({ birthday: event.target.value })
  }

  getRowStyles = () => {
    return { display: 'flex' }
  }

  getInputStyle = length => ({
    width: `${(100 / length) - 1}%`,
  })

  calcAge = (birthday) => {
    if (!birthday) return

    const milisecondsToYears = (miliseconds) => (
      (miliseconds / 1000 / 60 / 60 / 24 / 365.25).toFixed(0)
    )
    const birthdayDate = new Date(birthday)
    const now = new Date(Date.now())
    const age = milisecondsToYears(now.getTime() - birthdayDate.getTime())
    return age
  }

  render() {
    return (
      <Fieldset title="Datos de identificación">
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Nombres:" style={this.getInputStyle(2)} />
          <Input label="Apellidos:" style={this.getInputStyle(2)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input
            label="Fecha de nacimiento:"
            type="date"
            style={this.getInputStyle(3)}
            onChange={this.handleBirthdayChange}
          />
          <Input
            label="Edad:"
            value={this.calcAge(this.state.birthday)}
            style={this.getInputStyle(3)}
          />
          <Input label="Sexo:" style={this.getInputStyle(3)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Tipo de identificación:" style={this.getInputStyle(3)} />
          <Input label="No." style={this.getInputStyle(3)} />
          <Input label="Estado civil:" style={this.getInputStyle(3)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Ocupación:" style={this.getInputStyle(2)} />
          <Input label="Dirección:" style={this.getInputStyle(2)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Teléfono:" style={this.getInputStyle(2)} />
          <Input label="Aseguradora:" style={this.getInputStyle(2)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Carnet No:" style={this.getInputStyle(2)} />
          <Input label="Regimen:" style={this.getInputStyle(2)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Nombre del acompañante:" style={this.getInputStyle(2)} />
          <Input label="Parentesco:" style={this.getInputStyle(2)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Dirección:" style={this.getInputStyle(4)} />
          <Input label="Teléfono:" style={this.getInputStyle(4)} />
          <Input label="Raza:" style={this.getInputStyle(4)} />
          <Input label="Nivel educativo:" style={this.getInputStyle(4)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Motivo de consulta:" type="textarea" style={this.getInputStyle(1)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Enfermedad actual:" type="textarea" style={this.getInputStyle(1)} />
        </Row>
      </Fieldset>
    )
  }
}
