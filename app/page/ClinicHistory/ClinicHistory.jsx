import React    from 'react'
import uuid     from 'uuid/v4'
import InputRows from 'components/InputRow/InputRows'
import Fieldset from 'components/Fieldset'

const ClinicHistory = () => {
  const rows = [
    [{
    label: 'Historia clinica #:', id: uuid()
    }, {
      label: 'Centro de atención', id: uuid()
    }],
    [{
      label: 'Fecha de ingreso', id: uuid(),
    }, {
      label: 'Hora', id: uuid(),
    }]
  ]

  return (
    <div>
      <Fieldset title="Historia clinica">
        <InputRows rows={rows} />
      </Fieldset>
    </div>
  )
}

export default ClinicHistory
