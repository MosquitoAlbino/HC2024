import React, {
  Component,
}                from 'react'
import Fieldset  from 'components/Fieldset'
import Input     from 'components/Input'
import Row       from 'components/Row'
import moment    from 'moment'

export default class IdentificationData extends Component {
  state = {
    birthday: '',
    age: '',
  }

  handleBirthdayChange = (birthday) => {
    this.setState({ birthday })
  }

  getRowStyles = () => {
    return { display: 'flex' }
  }

  getInputStyle = length => ({
    width: `${(100 / length) - 1}%`,
  })

  calcAge = (birthday) => {
    if (!birthday) return
    const age = moment().diff(birthday, 'years', false)
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
            label="F. nac:"
            type="date"
            style={this.getInputStyle(7)}
            onChange={this.handleBirthdayChange}
          />
          <Input
            label="Edad:"
            value={this.calcAge(this.state.birthday)}
            style={this.getInputStyle(7)}
          />
          <Input label="Sexo:" style={this.getInputStyle(7)} />
          <Input label="Tipo ID:" style={this.getInputStyle(7)} />
          <Input
            label="No."
            style={this.getInputStyle(7)}
            type="number"
            value={this.props.patientID}
            onChange={this.props.onChangePatientID}
          />
          <Input label="E. civil:" style={this.getInputStyle(7)} />
          <Input label="Ocupación:" style={this.getInputStyle(7)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Teléfono:" style={this.getInputStyle(2)} type="number" />
          <Input label="Aseguradora:" style={this.getInputStyle(2)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Dirección:" style={this.getInputStyle(1)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Carnet No:" style={this.getInputStyle(2)} type="number" />
          <Input label="Regimen:" style={this.getInputStyle(2)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Nombre del acompañante:" style={this.getInputStyle(2)} />
          <Input label="Parentesco:" style={this.getInputStyle(2)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Dirección:" style={this.getInputStyle(4)} />
          <Input label="Teléfono:" style={this.getInputStyle(4)} type="number" />
          <Input label="Raza:" style={this.getInputStyle(4)} />
          <Input label="Nivel educativo:" style={this.getInputStyle(4)} />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input
            label="Motivo de consulta:"
            type="textarea"
            style={this.getInputStyle(1)}
            rows="2"
          />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Enfermedad actual:" type="textarea" style={this.getInputStyle(1)} />
        </Row>
      </Fieldset>
    )
  }
}
