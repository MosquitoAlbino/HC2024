import React, {
  Component,
}                from 'react'
import Fieldset  from 'components/Fieldset'
import Input     from 'components/Input'
import Row       from 'components/Row'

export default class Record extends Component {
  getRowStyles = () => {
    return { display: 'flex' }
  }

  getInputStyle = length => ({
    width: `${(100 / length) - 1}%`,
  })

  render() {
    return (
      <Fieldset title="Antecedentes personales:">
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Gravida:" style={this.getInputStyle(5)} type="number" />
          <Input label="Parto:" style={this.getInputStyle(5)} type="number" />
          <Input label="Aborto:" style={this.getInputStyle(5)} type="number" />
          <Input label="Cesarea:" style={this.getInputStyle(5)} type="number" />
          <Input label="Hijos vivos:" style={this.getInputStyle(5)} type="number" />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Menarquia:" style={this.getInputStyle(4)} type="date" />
          <Input label="FUM:" style={this.getInputStyle(4)} type="date" />
          <Input label="VM:" style={this.getInputStyle(4)} type="number" />
          <Input label="VO:" style={this.getInputStyle(4)} type="number" />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Médicos:" type="textarea" rows="2" />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Qirurgicos:" />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Alérgicos:" />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Traumáticos:" />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Familiares:" />
        </Row>
        <Row className="input-row" style={this.getRowStyles()}>
          <Input label="Otros:" />
        </Row>
      </Fieldset>
    )
  }
}
