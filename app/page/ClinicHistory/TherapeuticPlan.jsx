import React    from 'react'
import uuid     from 'uuid/v4'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const DiagnosticImpression = () => {
  const row1 = [{
    label: 'A. FARMACOLÓGICO:', id: uuid(), type: 'textarea'
  }, {
    label: 'A. NO FARMACOLÓGICO:', id: uuid(), type: 'textarea'
  }]

  return (
    <div>
      <Fieldset title="Plan terapéutico:">
        <InputRow items={row1} />
      </Fieldset>
    </div>
  )
}

export default DiagnosticImpression
