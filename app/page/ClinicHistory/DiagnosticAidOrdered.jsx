import React    from 'react'
import uuid     from 'uuid/v4'
import InputRow from 'components/InputRow'
import InputRows from 'components/InputRow/InputRows'
import Fieldset from 'components/Fieldset'

const AffectedSystemEvolution = () => {
  const rows = [
    [{
      id: uuid(),
      label: 'Ayudas diagnósticas ordenadas:',
      type: 'textarea'
    }], [{
      label: 'Procedimientos:',
      type: 'textarea',
      id: uuid(),
    }], [{
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
      <Fieldset title="Ayudas diagnósticas ordenadas:">
        <InputRows rows={rows} />
      </Fieldset>
    </div>
  )
}

export default AffectedSystemEvolution
