import React    from 'react'
import uuid     from 'uuid/v4'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const ClinicHistory = () => {
  const row1 = [{
    label: 'HISTORIA CLINICA NO:', id: uuid()
  }, {
    label: 'CAP/UPA', id: uuid()
  }]
  const row2 = [{
    label: 'FECHA DE INGRESO', id: uuid(),
  }, {
    label: 'HORA', id: uuid(),
  }]
  const row3 = [{
    label: 'DATOS DE IDENTIFICACIÓN', id: uuid(),
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
