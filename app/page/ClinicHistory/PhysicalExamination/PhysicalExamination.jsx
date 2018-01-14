import React, {
  Component,
}                from 'react'
import InputRows from 'components/InputRow/InputRows'
import Fieldset  from 'components/Fieldset'
import getRows   from './rows'

export default class PhysicalExamination extends Component {
  state = {
    weigth: 0,
    size: 0,
  }

  handleWeightChange = (event) => {
    this.setState({ weigth: event.target.value })
  }

  handleSizeChange = (event) => {
    this.setState({ size: event.target.value })
  }

  calcIMC = () => {
    const { weigth, size } = this.state
    let imc
    if (weigth > 0 && size > 0) {
      let imc = weigth / (size * 2)
    } else {
      imc = 0
    }
    console.log('imc', imc)
    return imc
  }

  render() {
    const imc = this.calcIMC()
    const rows = getRows({
      handleWeightChange: this.handleWeightChange,
      handleSizeChange: this.handleSizeChange,
      imc,
    })

    return (
      <Fieldset title="Examen físico">
        <InputRows rows={rows} />
      </Fieldset>
    )
  }
}
