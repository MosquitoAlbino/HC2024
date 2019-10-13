import React, { Component } from 'react'
import Fieldset from '../Fieldset'
import Input from '../Input'
import Row from '../Row'
import moment from 'moment'

const sexOptions = [{ value: 'masculino' }, { value: 'femenino' }]
const typeIds = [
  { value: 'CC' },
  { value: 'TI' },
  { value: 'Pasaporte' },
  { value: 'Registro civil' },
  { value: 'Cédula de extranjería' },
  { value: 'Indocumentado' },
]

export default class IdentificationData extends Component {
  state = {
    birthday: '',
    age: '',
  }

  handleBirthdayChange = birthday => {
    this.setState({ birthday })
  }

  getRowStyles = () => {
    return { display: 'flex' }
  }

  getInputStyle = length => ({
    width: `${100 / length - 1}%`,
  })

  calcAge = birthday => {
    if (!birthday) return

    function singularize(string, num) {
      return num == 1 ? string.slice(0, -1) : string
    }

    function getFormattedDateDiff(birthday, today) {
      let b = moment(birthday)
      let a = moment(today)
      let intervals = ['years', 'months', 'days']
      let output = []
      let formattedDate = ''

      intervals.forEach(function(interval) {
        var diff = a.diff(b, interval)
        b.add(diff, interval)
        output.push(diff + ' ' + singularize(interval, diff))
      })
      formattedDate = output.join(', ')
      formattedDate = formattedDate.replace('years', 'a')
      formattedDate = formattedDate.replace('months', 'm')
      formattedDate = formattedDate.replace('weeks', 's')
      formattedDate = formattedDate.replace('days', 'd')

      console.log('formattedDate', formattedDate)
      return formattedDate
    }

    function getBirthday(year, month, day) {
      var birthday
      var tempBirthday = moment([year, month - 1, day])

      if (tempBirthday.isValid()) {
        if (tempBirthday.diff(new Date(), 'days') < 0) {
          birthday = tempBirthday
        }
      }

      return birthday
    }

    function compute(year, month, day) {
      var today = moment(new Date())
      var birthday = getBirthday(year, month, day)

      if (!birthday) return

      return getFormattedDateDiff(birthday, today)
    }

    const year = birthday.year()
    const month = birthday.month() + 1
    const day = birthday.date()
    const formattedDate = compute(year, month, day)

    return formattedDate
  }

  render() {
    return (
      <Fieldset title="Datos de identificación">
        <Row style={this.getRowStyles()}>
          <Input label="Nombres:" style={this.getInputStyle(2)} />
          <Input label="Apellidos:" style={this.getInputStyle(2)} />
        </Row>
        <Row style={this.getRowStyles()}>
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
          <Input
            label="Sexo:"
            type="select"
            style={this.getInputStyle(7)}
            options={sexOptions}
          />
          <Input
            label="Tipo ID:"
            type="select"
            style={this.getInputStyle(7)}
            options={typeIds}
          />
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
        <Row style={this.getRowStyles()}>
          <Input
            label="Teléfono:"
            style={this.getInputStyle(2)}
            type="number"
          />
          <Input label="Aseguradora:" style={this.getInputStyle(2)} />
        </Row>
        <Row style={this.getRowStyles()}>
          <Input label="Dirección:" style={this.getInputStyle(1)} />
        </Row>
        <Row style={this.getRowStyles()}>
          <Input
            label="Carnet No:"
            style={this.getInputStyle(2)}
            type="number"
          />
          <Input label="Regimen:" style={this.getInputStyle(2)} />
        </Row>
        <Row style={this.getRowStyles()}>
          <Input
            label="Nombre del acompañante:"
            style={this.getInputStyle(2)}
          />
          <Input label="Parentesco:" style={this.getInputStyle(2)} />
        </Row>
        <Row style={this.getRowStyles()}>
          <Input label="Dirección:" style={this.getInputStyle(4)} />
          <Input
            label="Teléfono:"
            style={this.getInputStyle(4)}
            type="number"
          />
          <Input label="Raza:" style={this.getInputStyle(4)} />
          <Input
            label="Nivel educativo:"
            style={this.getInputStyle(4)}
          />
        </Row>
        <Row style={this.getRowStyles()}>
          <Input
            label="Motivo de consulta:"
            type="textarea"
            style={this.getInputStyle(1)}
            rows="2"
          />
        </Row>
        <Row style={this.getRowStyles()}>
          <Input
            label="Enfermedad actual:"
            type="textarea"
            style={this.getInputStyle(1)}
          />
        </Row>
      </Fieldset>
    )
  }
}
