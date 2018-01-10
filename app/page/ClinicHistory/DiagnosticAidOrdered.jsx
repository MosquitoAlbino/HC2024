import React    from 'react'
import uuid     from 'uuid/v4'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const AffectedSystemEvolution = () => {
  const row1 = [{
    id: uuid(),
    label: 'AYUDAS DIAGNÓSTICAS ORDENADAS:',
    type: 'textarea'
  }]
  const row2 = [{
    label: 'PROCEDIMIENTOS:',
    type: 'textarea',
    id: uuid(),
  }]
  const row3 = [{
    label: 'NOMBRE DEL MEDICO:',
    id: uuid(),
  }, {
    label: 'REGISTRO',
    id: uuid(),
  }]
  const row4 = [{
    label: 'FIRMA DE SELLO:',
    id: uuid(),
  }]

  return (
    <div>
      <Fieldset title="Ayudas diagnósticas ordenadas:">
        <InputRow items={row1} />
        <InputRow items={row2} />
        <InputRow items={row3} />
        <InputRow items={row4} />
      </Fieldset>
    </div>
  )
}

export default AffectedSystemEvolution
