import React, { Component } from 'react'
import Fieldset from '../Fieldset'
import Input from '../Input'
import Row from '../Row'

export default class PhysicalExamination extends Component {
  state = {
    weight: 0,
    size: 0,
  }

  handleWeightChange = event => {
    const weight = event.target.value
    this.setState({ weight })
  }

  handleSizeChange = event => {
    const size = event.target.value
    this.setState({ size })
  }

  calcIMC = () => {
    const weight = +this.state.weight
    const size = +this.state.size

    let imc =
      weight > 0 && size > 0 ? weight / Math.pow(size / 100, 2) : 0
    imc = imc > 0 ? imc.toFixed(2) : imc
    return imc
  }

  getRowStyles = () => ({
    display: 'flex',
  })

  getInputStyle = length => ({
    width: `${100 / length - 1}%`,
  })

  render() {
    const imc = this.calcIMC()

    return (
      <Fieldset title="Examen físico">
        <Row style={this.getRowStyles()}>
          <Input label="Estado de conciencia:" />
        </Row>
        <Row style={this.getRowStyles()}>
          <Input
            label="Grado de hidratación:"
            style={this.getInputStyle(2)}
          />
          <Input label="Febril:" style={this.getInputStyle(2)} />
        </Row>
        <Row style={this.getRowStyles()}>
          <Input label="Caracteristicas predominantes en el paciente:" />
        </Row>
        <Row style={this.getRowStyles()}>
          <Input label="T/A mmHg:" style={this.getInputStyle(4)} />
          <Input
            label="FC lpm:"
            style={this.getInputStyle(4)}
            type="number"
          />
          <Input
            label="FR: rpm"
            style={this.getInputStyle(4)}
            type="number"
          />
          <Input
            label="Temperatura °C:"
            style={this.getInputStyle(4)}
            type="number"
          />
        </Row>
        <Row style={this.getRowStyles()}>
          <Input
            label="Pulso lpm:"
            style={this.getInputStyle(4)}
            type="number"
          />
          <Input
            label="Peso:"
            type="number"
            onChange={this.handleWeightChange}
            style={this.getInputStyle(4)}
            value={this.state.weight}
          />
          <Input
            label="Talla:"
            type="number"
            onChange={this.handleSizeChange}
            style={this.getInputStyle(4)}
            value={this.state.size}
          />
          <Input
            label="IMC:"
            style={this.getInputStyle(4)}
            value={imc}
            onChange={() => {}}
          />
        </Row>
      </Fieldset>
    )
  }
}
