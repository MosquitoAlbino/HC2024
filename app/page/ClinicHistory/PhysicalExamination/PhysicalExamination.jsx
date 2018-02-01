import React, {
  Component,
}                from 'react'
import Fieldset  from 'components/Fieldset'
import Input     from 'components/Input'
import Row       from 'components/Row'

export default class PhysicalExamination extends Component {
  state = {
    weight: 0,
    size: 0,
  }

  handleWeightChange = (event) => {
    const weight = event.target.value
    this.setState({ weight })
  }

  handleSizeChange = (event) => {
    const size = event.target.value
    this.setState({ size })
  }

  calcIMC = () => {
    const weight = +this.state.weight
    const size = +this.state.size

    let imc = (weight > 0 && size > 0) ? (
      weight / Math.pow(size / 100, 2)
    ) : 0
    imc = imc > 0 ? imc.toFixed(2) : imc
    return imc
  }

  getRowStyles = () => ({
    display: 'flex',
  })

  getInputStyle = (length) => ({
    width: `${(100 / length) - 1}%`,
  })

  render() {
    const imc = this.calcIMC()

    return (
      <Fieldset title="Examen físico">
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Estado de conciencia:" />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input
            label="Grado de hidratación:"
            style={this.getInputStyle(2)}
          />
          <Input
            label="Febril:"
            style={this.getInputStyle(2)}
          />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Caracteristicas predominantes en el paciente:" />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input
            label="T. ARTERIAL MMHG:"
            style={this.getInputStyle(4)}
          />
          <Input
            label="FC:"
            style={this.getInputStyle(4)}
          />
          <Input
            label="FR:"
            style={this.getInputStyle(4)}
          />
          <Input
            label="Temperatura:"
            style={this.getInputStyle(4)}
          />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input
            label="Pulso:"
            style={this.getInputStyle(4)}
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
          />
        </Row>
      </Fieldset>
    )
  }
}
