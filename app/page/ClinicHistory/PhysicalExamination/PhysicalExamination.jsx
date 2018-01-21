import React, {
  Component,
}                from 'react'
import InputRows from 'components/InputRow/InputRows'
import Fieldset  from 'components/Fieldset'
import getRows   from './rows'

export default class PhysicalExamination extends Component {
  state = {
    values: {
      weight: 0,
      size: 0,
    },
  }

  handleWeightChange = (event) => {
    const weight = +event.target.value
    this.updateValue({ key: 'weight', value: weight })
  }

  handleSizeChange = (event) => {
    const size = +event.target.value
    this.updateValue({ key: 'size', value: size })
  }

  updateValue = ({ key, value } = {}, cb = () => {}) => {
    this.setState({ values: {
      ...this.state.values,
      [key]: value,
    }}, cb)
  }

  calcIMC = () => {
    const { weight, size } = this.state.values
    let imc = (weight > 0 && size > 0) ? (
      weight / Math.pow(size / 100, 2)
    ) : 0
    imc = imc > 0 ? imc.toFixed(2) : imc
    return imc
  }

  render() {
    const imc = this.calcIMC()
    const rows = getRows({
      handleWeightChange: this.handleWeightChange,
      handleSizeChange: this.handleSizeChange,
      values: { ...this.state.values, imc },
    })

    return (
      <Fieldset title="Examen físico">
        <InputRows rows={rows} />
      </Fieldset>
    )
  }
}
