import React     from 'react'
import uuid      from 'uuid/v4'
import InputRow  from 'components/InputRow'
import InputRows from 'components/InputRow/InputRows'
import Fieldset  from 'components/Fieldset'
import Input     from 'components/Input'

const AffectedSystemEvolution = () => {
  const rows = [
    [{
      label: 'Nombre del medico:',
      id: uuid(),
    }, {
      label: 'Registro',
      id: uuid(),
    }], [{
      label: 'Firma de sello:',
      id: uuid(),
    }]
  ]

  return (
    <div>
      <Fieldset title="Información adicional:">
        <InputRows rows={rows} />
      </Fieldset>
    </div>
  )
}

export default AffectedSystemEvolution
