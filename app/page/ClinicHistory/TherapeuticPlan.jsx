import React    from 'react'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const DiagnosticImpression = () => {
  const row1 = [{
    label: 'A. FARMACOLÓGICO:', id: 0, type: 'textarea'
  }, {
    label: 'A. NO FARMACOLÓGICO:', id: 0, type: 'textarea'
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
