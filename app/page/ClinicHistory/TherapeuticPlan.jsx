import React    from 'react'
import uuid     from 'uuid/v4'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const DiagnosticImpression = () => {
  const row1 = [{
    label: 'A. Farmacológico:', id: uuid(), type: 'textarea'
  }]
  const row2 = [{
    label: 'B. No farmacológico:', id: uuid(), type: 'textarea'
  }]
  const row3 = [{
    id: uuid(),
    label: 'Ayudas diagnósticas ordenadas:',
    type: 'textarea'
  }]
  const row4 = [{
    label: 'Procedimientos:',
    type: 'textarea',
    id: uuid(),
  }]

  return (
    <div>
      <Fieldset title="Plan terapéutico:">
        <InputRow items={row1} />
        <InputRow items={row2} />
        <InputRow items={row3} />
        <InputRow items={row4} />
      </Fieldset>
    </div>
  )
}

export default DiagnosticImpression
