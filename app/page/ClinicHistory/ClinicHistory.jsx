import React    from 'react'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const ClinicHistory = () => {
  const row1 = [{
    label: 'HISTORIA CLINICA NO:', id: 0
  }, {
    label: 'CAP/UPA', id: 1
  }]
  const row2 = [{
    label: 'FECHA DE INGRESO', id: 1,
  }, {
    label: 'HORA', id: 2,
  }]
  const row3 = [{
    label: 'DATOS DE IDENTIFICACIÓN', id: 1,
  }]

  return (
    <div>
      <Fieldset title="Historia clinica">
        <InputRow items={row1} />
        <InputRow items={row2} />
        <InputRow items={row3} />
      </Fieldset>
    </div>
  )
}

export default ClinicHistory
